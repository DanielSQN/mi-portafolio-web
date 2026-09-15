import { profile } from "@/data/portfolio";

export default function manifest() {
  return {
    name: "Santiago Quintero — Software Engineer",
    short_name: "Santiago Q.",
    description: profile.summary,
    start_url: "/",
    display: "standalone",
    background_color: "#070a1e",
    theme_color: "#ff2d2d",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
