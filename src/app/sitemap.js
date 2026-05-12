import { profile } from "@/data/portfolio";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || profile.siteUrl;

export default function sitemap() {
  const routes = [
    { path: "", priority: 1 },
    { path: "/proyectos", priority: 0.8 },
    { path: "/certificaciones", priority: 0.7 }
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route.priority
  }));
}
