import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
          {/* Navbar */}
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold tracking-tight">
              Test<span className="text-cyan-400">Político</span>
            </Link>

            <Link
              href="/metodologia"
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
            >
              Metodología
            </Link>
          </nav>

          {/* Hero content */}
          <div className="grid items-center gap-16 py-20 lg:grid-cols-2 lg:py-28">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-cyan-300">
                25 preguntas · Resultado matemático
              </div>

              <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                ¿Con qué partido{" "}
                <span className="text-cyan-400">coinciden</span> tus ideas?
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Responde 25 preguntas sobre economía, vivienda, sanidad,
                educación, inmigración, derechos sociales y otros temas.
                Descubre qué partidos presentan posiciones más próximas a las
                tuyas.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/test"
                  className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-7 py-4 text-base font-bold text-slate-950 shadow-lg shadow-cyan-400/10 transition hover:bg-cyan-300"
                >
                  Hacer el test
                  <span className="ml-2">→</span>
                </Link>

                <Link
                  href="/metodologia"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-7 py-4 text-base font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
                >
                  Ver metodología
                </Link>
              </div>

              <p className="mt-5 text-sm text-slate-500">
                Gratis · Sin registro · Sin necesidad de introducir datos
                personales
              </p>
            </div>

            {/* Example result card */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-6 rounded-[2rem] bg-cyan-400/10 blur-3xl" />

              <div className="relative rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">
                      Ejemplo de resultado
                    </p>
                    <h2 className="mt-1 text-xl font-bold">
                      Tu mayor coincidencia
                    </h2>
                  </div>

                  <div className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                    DEMO
                  </div>
                </div>

                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-2xl font-bold">Partido A</p>
                      <p className="mt-1 text-sm text-slate-400">
                        Ejemplo ilustrativo
                      </p>
                    </div>

                    <p className="text-4xl font-bold text-cyan-400">78%</p>
                  </div>

                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full w-[78%] rounded-full bg-cyan-400" />
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  <ResultBar name="Partido B" percentage={69} />
                  <ResultBar name="Partido C" percentage={61} />
                  <ResultBar name="Partido D" percentage={54} />
                  <ResultBar name="Partido E" percentage={47} />
                </div>

                <p className="mt-6 text-center text-xs text-slate-500">
                  Los porcentajes mostrados son únicamente ilustrativos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Cómo funciona
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Sencillo, rápido y transparente.
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-400">
              No necesitas crear una cuenta ni estudiar programas electorales
              antes de empezar.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Step
              number="01"
              title="Responde"
              text="Contesta 25 preguntas sobre diferentes temas políticos utilizando una escala sencilla."
            />

            <Step
              number="02"
              title="Calculamos"
              text="Tus respuestas se comparan matemáticamente con las posiciones utilizadas para cada partido."
            />

            <Step
              number="03"
              title="Compara"
              text="Obtén un porcentaje de coincidencia con cada partido y descubre dónde encajan más tus respuestas."
            />
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                Transparencia
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                El resultado no decide por ti.
              </h2>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-7">
              <p className="leading-8 text-slate-300">
                TestPolítico no recomienda votar a ningún partido. El resultado
                muestra únicamente el grado de coincidencia entre tus respuestas
                y las posiciones utilizadas en el test.
              </p>

              <p className="mt-4 leading-8 text-slate-300">
                Las posiciones se basan en propuestas, programas y documentos
                públicos de los partidos y deben revisarse cuando sus posiciones
                cambien.
              </p>

              <Link
                href="/metodologia"
                className="mt-6 inline-flex items-center font-semibold text-cyan-400 transition hover:text-cyan-300"
              >
                Conoce nuestra metodología y criterios
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-slate-800">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            ¿Preparado?
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Descubre dónde encajan tus ideas.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            25 preguntas. Unos minutos. Una comparación matemática de tus
            respuestas con diferentes posiciones políticas.
          </p>

          <Link
            href="/test"
            className="mt-9 inline-flex items-center rounded-xl bg-cyan-400 px-8 py-4 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Empezar el test
            <span className="ml-2">→</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <div>
            <p className="font-semibold">
              Test<span className="text-cyan-400">Político</span>
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Herramienta informativa de comparación política.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm">
            <Link
              href="/metodologia"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              Metodología
            </Link>

            <Link
              href="/test"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              Hacer el test
            </Link>

            <Link
              href="/privacidad"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              Privacidad
            </Link>

            <Link
              href="/aviso-legal"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              Aviso legal
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ResultBar({
  name,
  percentage,
}: {
  name: string;
  percentage: number;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium text-slate-300">{name}</span>
        <span className="text-slate-500">{percentage}%</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-slate-600"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

function Step({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7">
      <div className="text-sm font-bold text-cyan-400">{number}</div>

      <h3 className="mt-5 text-xl font-bold">{title}</h3>

      <p className="mt-3 leading-7 text-slate-400">{text}</p>
    </div>
  );
}