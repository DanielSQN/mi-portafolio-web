import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import { profile } from "@/data/portfolio";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || profile.siteUrl;

export const viewport = {
  themeColor: "#030304"
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Daniel Quintero | Software Engineer",
    template: "%s | Daniel Quintero"
  },
  description:
    "Software Engineer especializado en desarrollo full stack, automatizacion y soluciones digitales de alto impacto.",
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
      "Construyo soluciones que generan impacto.",
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
      "Construyo soluciones que generan impacto.",
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
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
