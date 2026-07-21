import { ImageResponse } from "next/og";

// Site-wide default OpenGraph/Twitter image. File-based OG images are applied to
// every route automatically and are NOT clobbered by a page setting `openGraph`
// without an `images` field — so this gives the whole site a branded share card.
// Article pages (blog/news) override this with their own post image.
export const alt = "E-Loan Canada — Fast Personal Loans with Transparent Rates";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#171717",
          color: "#fafafa",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 34,
            fontWeight: 700,
            letterSpacing: "-0.01em",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 44,
              height: 8,
              backgroundColor: "#ebe64a",
              marginRight: 20,
            }}
          />
          E-Loan
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 66,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 960,
            }}
          >
            Fast personal loans in Canada with transparent rates
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 30, color: "#a3a3a3" }}>
            Up to $50,000 · Funds in as little as 24 hours
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 26, fontWeight: 600, color: "#ebe64a" }}>
          e-loan.ca
        </div>
      </div>
    ),
    size,
  );
}
