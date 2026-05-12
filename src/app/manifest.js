import { profile } from "@/data/portfolio";

export default function manifest() {
  return {
    name: "Daniel Quintero | Software Engineer",
    short_name: "Daniel Q.",
    description: profile.summary,
    start_url: "/",
    display: "standalone",
    background_color: "#030304",
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
