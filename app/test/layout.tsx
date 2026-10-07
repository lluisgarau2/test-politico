import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test Político España | ¿Con qué partido coinciden tus ideas?",
  description:
    "Responde 25 preguntas y descubre con qué partidos políticos coinciden más tus ideas mediante una comparación matemática de tus respuestas.",
};

export default function TestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}