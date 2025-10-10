import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

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
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #111827, #1f2937, #312e81)",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 64,
            color: "#ffffff",
            lineHeight: 1.2,
            fontWeight: 800,
            letterSpacing: -1,
          }}
        >
          Think Smarter Group
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 28,
            color: "#d1d5db",
            maxWidth: 900,
          }}
        >
          Innovation & Technology Solutions
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}


