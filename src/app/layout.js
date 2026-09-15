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

const TITULO = "Santiago Quintero — Software Engineer en Bogotá";
const DESCRIPCION =
  "Santiago Quintero, ingeniero de sistemas y Software Engineer en Bogotá. " +
  "Siete años construyendo integraciones empresariales con Oracle Integration " +
  "Cloud, interfaces con Next.js y React, y automatización con IA para el " +
  "sector financiero.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: TITULO,
    template: "%s | Santiago Quintero"
  },
  description: DESCRIPCION,
  applicationName: "Portafolio de Santiago Quintero",
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  keywords: [
    "Santiago Quintero",
    "Daniel Santiago Quintero",
    "Santiago Quintero desarrollador",
    "Software Engineer Bogotá",
    "desarrollador full stack Colombia",
    "Oracle Integration Cloud",
    "integraciones empresariales",
    "Next.js",
    "React",
    "automatización",
    "portafolio desarrollador"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: TITULO,
    description: DESCRIPCION,
    url: "/",
    siteName: "Santiago Quintero",
    locale: "es_CO",
    type: "profile",
    firstName: "Santiago",
    lastName: "Quintero",
    username: "DanielSQN",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Santiago Quintero — Software Engineer en Bogotá"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: TITULO,
    description: DESCRIPCION,
    images: ["/opengraph-image"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
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

// Datos estructurados: es lo que permite a Google entender que la página
// describe a una persona concreta y enlazarla con sus perfiles.
const personaJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: [profile.legalName, profile.preferredName],
  url: siteUrl,
  image: `${siteUrl}/profile/daniel-quintero.png`,
  jobTitle: "Software Engineer",
  description: DESCRIPCION,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bogotá",
    addressCountry: "CO"
  },
  nationality: { "@type": "Country", name: "Colombia" },
  knowsLanguage: ["es", "en"],
  sameAs: [`https://${profile.github}`, `https://${profile.linkedin}`],
  knowsAbout: [
    "Oracle Integration Cloud",
    "Integraciones empresariales",
    "Next.js",
    "React",
    "Node.js",
    "Python",
    "Automatización de procesos",
    "APIs REST y SOAP"
  ]
};

const sitioJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Santiago Quintero",
  url: siteUrl,
  inLanguage: "es-CO",
  author: { "@type": "Person", name: profile.name }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-CO" className={`${spaceMono.variable} ${pressStart.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personaJsonLd, sitioJsonLd])
          }}
        />
        {children}
      </body>
    </html>
  );
}
