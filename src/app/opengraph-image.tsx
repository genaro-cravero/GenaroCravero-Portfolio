import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";
import { siteUrl } from "@/lib/site";

export const alt = `${profile.name} — ${profile.role}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#080807",
          color: "#f2f0eb",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "64px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            color: "#85817a",
            display: "flex",
            fontSize: "18px",
            gap: "16px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              background: "#e2603a",
              borderRadius: "999px",
              height: "10px",
              width: "10px",
            }}
          />
          {profile.role}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "92px",
              letterSpacing: "-0.055em",
              lineHeight: 1,
            }}
          >
            {profile.name}
          </div>
          <div style={{ color: "#aaa69e", fontSize: "28px" }}>
            Unity · C# · Interactive software
          </div>
        </div>

        <div
          style={{
            color: "#85817a",
            display: "flex",
            fontSize: "18px",
            justifyContent: "space-between",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          <span>{siteUrl.replace(/^https?:\/\//, "")}</span>
          <span>Portfolio</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
