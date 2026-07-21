import { ImageResponse } from "next/og";

// Site-wide default OpenGraph/Twitter card. File-based OG images apply to every
// route automatically and are used unless a page sets its own openGraph.images.
// Blog/news articles override this with their own generated per-article card.
export const alt = "E-Loan — Fast Personal Loans in Canada";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0f1a",
          padding: "72px 80px",
          color: "#faf7f0",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 10, background: "#22a06b" }} />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 46, height: 46, borderRadius: 12, background: "#22a06b" }} />
          <span style={{ fontSize: 36, fontWeight: 800, letterSpacing: -1 }}>E-Loan</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span style={{ fontSize: 22, fontWeight: 700, letterSpacing: 5, color: "#5fd0a3" }}>
            PERSONAL LOANS · CANADA
          </span>
          <span style={{ fontSize: 60, fontWeight: 800, lineHeight: 1.08, maxWidth: 1000, letterSpacing: -1.5 }}>
            Fast personal loans with transparent rates.
          </span>
        </div>

        <span style={{ fontSize: 24, color: "rgba(250,247,240,0.55)" }}>e-loan.ca</span>
      </div>
    ),
    { ...size },
  );
}
