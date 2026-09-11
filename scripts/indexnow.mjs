// Notifies IndexNow (Bing and the other participating search engines) about blog
// and news URLs, so new and updated posts get crawled quickly.
//
// Automatic — .github/workflows/indexnow.yml runs this after Vercel reports a
// successful production deployment. It submits every blog/news post that was
// added, changed, renamed or deleted since the previous successful production
// deployment, plus the listing page of each section that changed.
//
// Manual:
//   node scripts/indexnow.mjs --from <commit> --to <commit>   posts changed between two commits
//   node scripts/indexnow.mjs --url <url> [--url <url> ...]   specific URLs
//   node scripts/indexnow.mjs --all                           every URL in the live sitemap (one-off)
//   add --dry-run to print what would be sent without sending anything
//
// Identical on every site: the domain comes from BASE_URL in lib/seo.ts and the
// key from public/indexnow-key.txt (served at /indexnow-key.txt).

import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const ENDPOINT = "https://api.indexnow.org/indexnow";
const KEY_FILE = "public/indexnow-key.txt";
const SECTIONS = ["blog", "news"]; // content/<section>/<slug>.mdx → /<section>/<slug>
const MAX_URLS_PER_REQUEST = 10000;

const RESPONSE_MEANINGS = {
  400: "bad request (invalid format)",
  403: "forbidden (key not valid or key file not found)",
  422: "unprocessable (URLs don't belong to the host or don't match the key)",
  429: "too many requests",
};

function parseArgs(argv) {
  const args = { urls: [], all: false, dryRun: false, from: null, to: null };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--all") args.all = true;
    else if (arg === "--dry-run") args.dryRun = true;
    else if (arg === "--url") args.urls.push(argv[++i]);
    else if (arg === "--from") args.from = argv[++i];
    else if (arg === "--to") args.to = argv[++i];
    else throw new Error(`Unknown argument: ${arg}`);
  }

  return args;
}

function readSite() {
  const seo = readFileSync("lib/seo.ts", "utf8");
  const match = seo.match(/export const BASE_URL = "(https:\/\/[^"]+)"/);
  if (!match) throw new Error('BASE_URL not found in lib/seo.ts (expected: export const BASE_URL = "https://…")');

  const baseUrl = match[1].replace(/\/$/, "");
  const key = readFileSync(KEY_FILE, "utf8").trim();
  if (!/^[A-Za-z0-9-]{8,128}$/.test(key)) {
    throw new Error(`${KEY_FILE} must contain an 8–128 character key (letters, digits and dashes only)`);
  }

  return { baseUrl, host: new URL(baseUrl).host, key, keyLocation: `${baseUrl}/indexnow-key.txt` };
}

function git(...args) {
  return execFileSync("git", args, { encoding: "utf8" }).trim();
}

function isDraftAt(commit, file) {
  try {
    const frontmatter = git("show", `${commit}:${file}`).match(/^---\r?\n([\s\S]*?)\r?\n---/);
    return Boolean(frontmatter && /^draft:\s*true\s*$/m.test(frontmatter[1]));
  } catch {
    return false;
  }
}

/** Blog/news URLs whose .mdx file was added, changed, renamed or deleted between two commits. */
function changedUrls(site, from, to) {
  const diff = git(
    "diff",
    "--name-status",
    "--find-renames",
    from,
    to,
    "--",
    ...SECTIONS.map((section) => `content/${section}`),
  );
  const urls = new Set();

  for (const line of diff.split("\n").filter(Boolean)) {
    const [status, ...files] = line.split("\t");

    // A rename lists the old and the new file: the old URL is gone, the new one appeared.
    for (const file of files) {
      const match = file.match(/^content\/([^/]+)\/([^/]+)\.mdx$/);
      if (!match || !SECTIONS.includes(match[1])) continue;
      const [, section, slug] = match;

      // A brand-new draft has no page yet, so there is nothing to announce.
      if (status === "A" && isDraftAt(to, file)) continue;

      urls.add(`${site.baseUrl}/${section}/${slug}`);
      urls.add(`${site.baseUrl}/${section}`);
    }
  }

  return [...urls];
}

async function sitemapUrls(site) {
  const locs = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`${url} returned HTTP ${response.status}`);
    return [...(await response.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  };

  const index = await locs(`${site.baseUrl}/sitemap.xml`);
  const nested = index.filter((url) => url.endsWith(".xml"));
  if (nested.length === 0) return index;

  return (await Promise.all(nested.map(locs))).flat();
}

/** In GitHub Actions: the commit range between the previous successful deployment and this one. */
async function deploymentRange() {
  const { GITHUB_REPOSITORY: repo, GITHUB_TOKEN: token, GITHUB_EVENT_PATH: eventPath } = process.env;
  const current = JSON.parse(readFileSync(eventPath, "utf8")).deployment;
  if (!current) return null;

  const headers = { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json" };
  const api = async (path) => {
    const response = await fetch(`https://api.github.com/repos/${repo}${path}`, { headers });
    if (!response.ok) throw new Error(`GitHub API ${path} returned HTTP ${response.status}`);
    return response.json();
  };

  const deployments = await api(
    `/deployments?environment=${encodeURIComponent(current.environment)}&per_page=30`,
  );

  for (const deployment of deployments) {
    if (deployment.id === current.id) continue;
    if (new Date(deployment.created_at) > new Date(current.created_at)) continue;

    const statuses = await api(`/deployments/${deployment.id}/statuses?per_page=20`);
    if (statuses.some((status) => status.state === "success")) {
      return { from: deployment.sha, to: current.sha };
    }
  }

  return { from: null, to: current.sha };
}

async function warnIfKeyFileUnreachable(site) {
  try {
    const response = await fetch(site.keyLocation);
    const body = response.ok ? (await response.text()).trim() : "";
    if (body !== site.key) {
      console.warn(
        `Warning: ${site.keyLocation} did not return the key (HTTP ${response.status}). ` +
          "Search engines must be able to read it, or the submission is rejected.",
      );
    }
  } catch (error) {
    console.warn(`Warning: could not check ${site.keyLocation}: ${error.message}`);
  }
}

async function submit(site, urls, dryRun) {
  const urlList = [...new Set(urls)].filter((url) => new URL(url).host === site.host);

  if (urlList.length === 0) {
    console.log("No blog or news URLs changed — nothing to submit.");
    return;
  }

  console.log(`${dryRun ? "[dry run] Would submit" : "Submitting"} ${urlList.length} URL(s) for ${site.host}:`);
  for (const url of urlList) console.log(`  ${url}`);
  if (dryRun) return;

  await warnIfKeyFileUnreachable(site);

  for (let i = 0; i < urlList.length; i += MAX_URLS_PER_REQUEST) {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: site.host,
        key: site.key,
        keyLocation: site.keyLocation,
        urlList: urlList.slice(i, i + MAX_URLS_PER_REQUEST),
      }),
    });

    if (response.status !== 200 && response.status !== 202) {
      const detail = RESPONSE_MEANINGS[response.status] ?? "unexpected response";
      throw new Error(`IndexNow returned HTTP ${response.status}: ${detail}. ${await response.text()}`.trim());
    }
    console.log(`IndexNow accepted the submission (HTTP ${response.status}).`);
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const site = readSite();
  let urls = args.urls;

  if (args.all) {
    urls = await sitemapUrls(site);
  } else if (args.from || args.to) {
    urls = changedUrls(site, args.from ?? "HEAD~1", args.to ?? "HEAD");
  } else if (urls.length === 0 && process.env.GITHUB_EVENT_PATH) {
    const range = await deploymentRange();
    if (!range) {
      console.log("Not a deployment event — pass --all, --url or --from/--to.");
      return;
    }
    if (!range.from) {
      console.log("No earlier successful deployment to compare against — nothing to submit.");
      return;
    }
    console.log(`Changes between deployments ${range.from.slice(0, 7)}..${range.to.slice(0, 7)}`);
    urls = changedUrls(site, range.from, range.to);
  } else if (urls.length === 0) {
    throw new Error("Pass --all, --url <url> or --from <commit> --to <commit> (add --dry-run to preview).");
  }

  await submit(site, urls, args.dryRun);
}

main().catch((error) => {
  console.error(`IndexNow: ${error.message}`);
  process.exit(1);
});
