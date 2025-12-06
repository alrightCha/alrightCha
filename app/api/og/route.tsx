import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || "Blog Post";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#000",
            padding: "80px 120px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <h1
              style={{
                fontSize: "72px",
                fontWeight: "bold",
                color: "#fff",
                lineHeight: 1.2,
                fontFamily: "monospace",
                margin: 0,
                wordWrap: "break-word",
              }}
            >
              {title}
            </h1>
            <div
              style={{
                display: "flex",
                marginTop: "40px",
                fontSize: "28px",
                color: "#888",
                fontFamily: "monospace",
              }}
            >
              neoseiki.dev
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.error(e);
    return new Response("Failed to generate image", { status: 500 });
  }
}
