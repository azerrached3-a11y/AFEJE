import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AFEJE — Association Française d'Encadrement des Jeunes Entrepreneurs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#000",
          color: "#fff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              letterSpacing: "0.15em",
              color: "#00FFFF",
            }}
          >
            AFEJE
          </div>
          <div
            style={{
              fontSize: 22,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textAlign: "center",
              maxWidth: "700px",
            }}
          >
            Association Française d&apos;Encadrement des Jeunes Entrepreneurs
          </div>
          <div
            style={{
              width: 80,
              height: 2,
              background: "rgba(0,255,255,0.4)",
              marginTop: 8,
            }}
          />
          <div
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.35)",
              marginTop: 8,
            }}
          >
            Chaville (92) · Île-de-France · Programme gratuit dès 15 ans
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
