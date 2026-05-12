import "./globals.css";
import { profile } from "@/data/portfolio";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || profile.siteUrl;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Daniel Quintero | Software Engineer",
    template: "%s | Daniel Quintero"
  },
  description:
    "Portafolio de Daniel Quintero, Software Engineer especializado en integraciones empresariales, automatizacion e inteligencia artificial.",
  applicationName: "Daniel Quintero Portfolio",
  authors: [{ name: "Daniel Quintero", url: siteUrl }],
  creator: "Daniel Quintero",
  publisher: "Daniel Quintero",
  keywords: [
    "Daniel Quintero",
    "Software Engineer",
    "Oracle OIC",
    "Next.js",
    "React",
    "Integraciones empresariales",
    "Automatizacion",
    "Inteligencia artificial",
    "Bogota"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Daniel Quintero | Software Engineer",
    description:
      "Ingenieria que conecta negocio, automatizacion y experiencias digitales.",
    url: "/",
    siteName: "Daniel Quintero Portfolio",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Daniel Quintero Software Engineer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Quintero | Software Engineer",
    description:
      "Ingenieria que conecta negocio, automatizacion y experiencias digitales.",
    images: ["/opengraph-image"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  },
  manifest: "/manifest.webmanifest"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
