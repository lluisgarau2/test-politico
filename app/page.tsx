"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Fondo decorativo */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-indigo-600/10 blur-3xl" />
      </div>

      {/* Navegación */}
      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10">
            <span className="text-lg font-bold">25</span>
          </div>

          <span className="text-lg font-semibold tracking-tight">
            TestPolítico
          </span>
        </div>

        <span className="hidden text-sm text-slate-400 sm:block">
          Análisis político · España
        </span>
      </nav>

      {/* Hero */}
      <section className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-6 pb-20 pt-14 lg:grid-cols-2 lg:pt-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Compara tus ideas con las principales posiciones políticas
          </div>

          <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            ¿Con qué partido
            <span className="block bg-gradient-to-r from-blue-300 via-cyan-300 to-white bg-clip-text text-transparent">
              coinciden tus ideas?
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400 sm:text-xl">
            Responde 25 preguntas sobre los temas que importan y descubre con
            qué posiciones políticas coinciden más tus respuestas.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/test"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-slate-950 shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Hacer el test
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>

            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Cómo funciona
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
            <span>25 preguntas</span>
            <span>•</span>
            <span>5 partidos</span>
            <span>•</span>
            <span>Resultado matemático</span>
          </div>
        </div>

        {/* Tarjeta visual */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-0 rounded-3xl bg-blue-500/10 blur-3xl" />

          <div className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Ejemplo de resultado</p>
                <p className="mt-1 font-semibold text-white">
                  Coincidencia política
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-400">
                25 / 25
              </div>
            </div>

            <div className="space-y-5">
              {[
                ["PSOE", "82%"],
                ["Sumar", "76%"],
                ["Podemos", "71%"],
                ["PP", "43%"],
                ["VOX", "28%"],
              ].map(([party, percentage], index) => (
                <div key={party}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-300">
                      <span className="mr-2 text-xs text-slate-600">
                        0{index + 1}
                      </span>
                      {party}
                    </span>

                    <span className="font-semibold text-white">
                      {percentage}
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-300"
                      style={{ width: percentage }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 border-t border-white/10 pt-5">
              <p className="text-xs leading-5 text-slate-500">
                Ejemplo ilustrativo. El resultado real depende de tus
                respuestas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section
        id="como-funciona"
        className="relative z-10 border-t border-white/10 bg-black/10"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Cómo funciona
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Tus respuestas. Los datos. Un resultado.
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              El objetivo es comparar tus opiniones con posiciones políticas
              documentadas de forma sencilla y transparente.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Responde",
                text: "Contesta 25 preguntas sobre economía, vivienda, inmigración, derechos, energía, sanidad y otros temas.",
              },
              {
                number: "02",
                title: "Comparamos",
                text: "Tus respuestas se comparan matemáticamente con las posiciones utilizadas en nuestro modelo.",
              },
              {
                number: "03",
                title: "Descubre",
                text: "Obtienes un porcentaje de coincidencia con cada uno de los partidos incluidos.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:bg-white/[0.06]"
              >
                <span className="text-sm font-semibold text-blue-400">
                  {item.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>

                <p className="mt-3 leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neutralidad */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-blue-400/10 bg-blue-400/[0.04] p-8 sm:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Transparencia
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              No te decimos a quién votar.
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              El resultado muestra únicamente el grado de coincidencia entre
              tus respuestas y las posiciones políticas utilizadas por el
              test. No constituye una recomendación de voto.
            </p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative z-10 px-6 pb-20 pt-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            ¿Preparado para descubrir tu resultado?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Son 25 preguntas. No necesitas registrarte.
          </p>

          <Link
            href="/test"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-slate-950 transition hover:bg-slate-100"
          >
            Empezar el test
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>TestPolítico</span>
          <span>Herramienta orientativa de comparación política</span>
        </div>
      </footer>
    </main>
  );
}