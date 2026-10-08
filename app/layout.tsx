import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "TestPolítico | ¿Con qué partido coinciden tus ideas?",
    template: "%s | TestPolítico",
  },
  description:
    "Descubre con qué partidos políticos coinciden más tus ideas mediante un test de 25 preguntas y una comparación matemática de tus respuestas.",
  keywords: [
    "test político",
    "test político España",
    "test partidos políticos",
    "test electoral",
    "comparador político",
    "afinidad política",
    "elecciones España",
  ],
  verification: {
    google: "B4MZYZlnmGUcioyP3hF0JS0AyS7Vbsr-Dp-AdjmKHvk",
  },
  openGraph: {
    title: "TestPolítico | ¿Con qué partido coinciden tus ideas?",
    description:
      "Responde 25 preguntas y descubre qué partidos presentan posiciones más próximas a tus respuestas.",
    type: "website",
    locale: "es_ES",
    siteName: "TestPolítico",
    images: [
      {
        url: "/og-image.png",
        width: 1536,
        height: 864,
        alt: "TestPolítico - ¿Con qué partido coinciden tus ideas?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TestPolítico | ¿Con qué partido coinciden tus ideas?",
    description:
      "Responde 25 preguntas y descubre qué partidos presentan posiciones más próximas a tus respuestas.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
        <GoogleAnalytics gaId="G-16073607035" />
      </body>
    </html>
  );
}