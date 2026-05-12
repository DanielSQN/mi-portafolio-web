import "./globals.css";

export const metadata = {
  title: "Daniel Quintero | Software Engineer",
  description:
    "Portafolio de Daniel Quintero, Software Engineer especializado en integraciones empresariales, automatizacion e inteligencia artificial.",
  openGraph: {
    title: "Daniel Quintero | Software Engineer",
    description:
      "Ingenieria que conecta negocio, automatizacion y experiencias digitales.",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
