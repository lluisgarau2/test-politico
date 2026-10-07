import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test Político España | Compara tus ideas con partidos políticos",
  description:
    "Haz un test político de 25 preguntas y compara matemáticamente tus respuestas con las posiciones utilizadas para PSOE, PP, VOX, Sumar y Podemos.",
};

export default function TestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}