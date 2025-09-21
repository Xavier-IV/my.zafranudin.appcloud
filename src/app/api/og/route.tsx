import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "AppCloud Research";
  const description =
    searchParams.get("description") ||
    "Samsung pre-installed surveillance software research";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          padding: "60px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#3b82f6",
              fontSize: "24px",
              fontWeight: "600",
              marginBottom: "30px",
            }}
          >
            AppCloud Research
          </div>
          <div
            style={{
              color: "#e5e5e5",
              fontSize: "48px",
              fontWeight: "700",
              marginBottom: "20px",
              lineHeight: "1.1",
            }}
          >
            {title}
          </div>
          <div
            style={{ color: "#a3a3a3", fontSize: "24px", lineHeight: "1.4" }}
          >
            {description}
          </div>
        </div>

        <div style={{ color: "#e5e5e5", fontSize: "18px" }}>
          my.zafranudin.appcloud
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
