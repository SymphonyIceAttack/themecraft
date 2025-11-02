import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "VSCode Theme Editor - Create and export custom VSCode themes online";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0a0a0a",
        backgroundImage:
          "radial-gradient(circle at 25px 25px, #1a1a1a 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1a1a1a 2%, transparent 0%)",
        backgroundSize: "100px 100px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#3b82f6" />
            <path d="M2 17L12 22L22 17V12L12 17L2 12V17Z" fill="#60a5fa" />
          </svg>
        </div>

        <h1
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            color: "#ffffff",
            marginBottom: "20px",
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          VSCode Theme Editor
        </h1>

        <p
          style={{
            fontSize: "32px",
            color: "#a1a1aa",
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: 1.4,
          }}
        >
          Create and export custom VSCode themes online with live preview
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 24px",
              backgroundColor: "#18181b",
              borderRadius: "8px",
              border: "1px solid #27272a",
            }}
          >
            <div
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                backgroundColor: "#3b82f6",
              }}
            />
            <span style={{ color: "#e4e4e7", fontSize: "20px" }}>
              Visual Editor
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 24px",
              backgroundColor: "#18181b",
              borderRadius: "8px",
              border: "1px solid #27272a",
            }}
          >
            <div
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                backgroundColor: "#10b981",
              }}
            />
            <span style={{ color: "#e4e4e7", fontSize: "20px" }}>
              Live Preview
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 24px",
              backgroundColor: "#18181b",
              borderRadius: "8px",
              border: "1px solid #27272a",
            }}
          >
            <div
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                backgroundColor: "#f59e0b",
              }}
            />
            <span style={{ color: "#e4e4e7", fontSize: "20px" }}>
              JSON Export
            </span>
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
