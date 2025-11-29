import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "ThemeCraft - Create and export custom themes for VSCode, Cursor, Zed, Neovim, and Helix";
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
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 背景装饰 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)`,
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          zIndex: 1,
        }}
      >
        {/* Logo区域 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "50px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "120px",
              height: "120px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "24px",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              position: "relative",
            }}
          >
            <svg
              width="80"
              height="80"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* 主图标 - 代码括号 + 调色板 */}
              <path
                d="M20 25L10 35L20 45"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.8"
              />
              <path
                d="M80 25L90 35L80 45"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.8"
              />
              <circle cx="50" cy="35" r="15" fill="white" opacity="0.9" />
              <path
                d="M50 20L50 25M50 45L50 50M35 35L40 35M60 35L65 35M45 25L50 20M55 25L50 20M45 45L50 50M55 45L50 50"
                stroke="#667eea"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* 标题 */}
        <h1
          style={{
            fontSize: "96px",
            fontWeight: "800",
            color: "white",
            marginBottom: "30px",
            textAlign: "center",
            lineHeight: 1.1,
            textShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          ThemeCraft
        </h1>

        {/* 副标题 */}
        <p
          style={{
            fontSize: "36px",
            color: "rgba(255, 255, 255, 0.9)",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.3,
            marginBottom: "50px",
          }}
        >
          Create stunning code editor themes with our visual editor
        </p>

        {/* 功能特点 */}
        <div
          style={{
            display: "flex",
            gap: "30px",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              padding: "20px 30px",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              borderRadius: "16px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "linear-gradient(45deg, #ff6b6b, #feca57)",
              }}
            />
            <span
              style={{ color: "white", fontSize: "24px", fontWeight: "600" }}
            >
              Visual Editor
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              padding: "20px 30px",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              borderRadius: "16px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "linear-gradient(45deg, #48cae4, #0096c7)",
              }}
            />
            <span
              style={{ color: "white", fontSize: "24px", fontWeight: "600" }}
            >
              Live Preview
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              padding: "20px 30px",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              borderRadius: "16px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "linear-gradient(45deg, #f093fb, #f5576c)",
              }}
            />
            <span
              style={{ color: "white", fontSize: "24px", fontWeight: "600" }}
            >
              Multi Export
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
