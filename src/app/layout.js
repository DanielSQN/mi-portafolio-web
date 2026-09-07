import "./globals.css";
import { Press_Start_2P, Space_Mono } from "next/font/google";
import { profile } from "@/data/portfolio";

// Space Mono es el cuerpo: monoespaciada pero con altura de x suficiente
// para párrafos largos, a diferencia de las pixel-fonts.
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
  display: "swap"
});

// Press Start 2P solo para titulares y etiquetas del HUD. Cubre acentos
// del español (Á É Í Ó Ú Ñ ¿ ¡) y las flechas ↑ ↓, pero NO ▪ ni ▸:
// esos se dibujan con SVG o pseudo-elementos, nunca como glifo.
const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || profile.siteUrl;

export const viewport = {
  themeColor: "#070a1e"
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
    "Automatización",
    "Inteligencia artificial",
    "Bogotá"
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
    <html lang="es" className={`${spaceMono.variable} ${pressStart.variable}`}>
      <body>{children}</body>
    </html>
  );
}
