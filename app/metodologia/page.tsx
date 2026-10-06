import Link from "next/link";

export default function MetodologiaPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/"
          className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
        >
          ← Volver al inicio
        </Link>

        <div className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Transparencia
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Metodología del test
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            TestPolítico busca mostrar qué partidos presentan posiciones más
            próximas a las respuestas de cada persona sobre diferentes asuntos
            políticos. El resultado es una medida de coincidencia, no una
            recomendación de voto.
          </p>
        </div>

        <div className="mt-14 space-y-10">
          <section>
            <h2 className="text-2xl font-semibold">¿Cómo se calcula el resultado?</h2>

            <p className="mt-4 leading-7 text-slate-300">
              Cada pregunta tiene asociada una posición de referencia para cada
              partido incluido en el test. La persona que realiza el test
              responde utilizando una escala de cinco opciones, desde estar
              totalmente de acuerdo hasta estar totalmente en desacuerdo.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              La respuesta se compara matemáticamente con la posición asignada
              a cada partido. Después se calcula la coincidencia media de todas
              las preguntas para obtener un porcentaje final.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">¿Qué significa el porcentaje?</h2>

            <p className="mt-4 leading-7 text-slate-300">
              Un porcentaje alto significa que tus respuestas son, en conjunto,
              más próximas a las posiciones utilizadas para ese partido en las
              preguntas del test.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              Por ejemplo, un 75% no significa que estés de acuerdo con el 75%
              del programa de un partido. Significa que existe una coincidencia
              matemática del 75% con las posiciones representadas en las
              cuestiones incluidas en este test.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">¿Quién decide las posiciones?</h2>

            <p className="mt-4 leading-7 text-slate-300">
              Las posiciones utilizadas en el test se elaboran a partir de
              propuestas, programas electorales, documentos oficiales y
              declaraciones públicas de los partidos.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              El objetivo es representar de forma sencilla una posición
              política documentada sobre cada cuestión. No se pretende
              reproducir todos los matices de un programa electoral.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">¿El resultado recomienda votar a un partido?</h2>

            <p className="mt-4 leading-7 text-slate-300">
              No. El test no recomienda votar a ningún partido ni pretende
              decirte qué opción política deberías elegir.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              El resultado debe entenderse como una herramienta informativa
              para comparar tus respuestas con determinadas posiciones
              políticas. La decisión sobre el voto corresponde exclusivamente a
              cada persona.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">¿Por qué solo hay 25 preguntas?</h2>

            <p className="mt-4 leading-7 text-slate-300">
              El test está diseñado para ofrecer una experiencia rápida y
              sencilla. Las 25 preguntas cubren diferentes áreas, entre ellas
              economía, vivienda, sanidad, educación, medio ambiente,
              inmigración, seguridad, derechos sociales, organización
              territorial y defensa.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              Un test de 25 preguntas no puede representar todas las posiciones
              políticas de una persona ni todo el contenido de un programa
              electoral. Por eso el resultado debe interpretarse como una
              aproximación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Privacidad</h2>

            <p className="mt-4 leading-7 text-slate-300">
              El funcionamiento básico del test no necesita que introduzcas tu
              nombre, correo electrónico, teléfono ni otros datos personales.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              Las respuestas se utilizan para calcular el resultado del test.
              El objetivo del proyecto es evitar recopilar información política
              personal que no sea necesaria para ofrecer el servicio.
            </p>
          </section>

          <section className="rounded-2xl border border-cyan-400/20 bg-slate-900/70 p-6">
            <h2 className="text-xl font-semibold">Una herramienta informativa</h2>

            <p className="mt-3 leading-7 text-slate-300">
              Las posiciones políticas pueden cambiar con el tiempo. Por ello,
              la información utilizada para elaborar el test debe revisarse y
              actualizarse cuando los partidos modifiquen sus propuestas.
            </p>

            <p className="mt-3 leading-7 text-slate-300">
              Si detectas una posición incorrecta o desactualizada, puedes
              comunicarlo para que pueda ser revisada.
            </p>
          </section>
        </div>

        <div className="mt-14 border-t border-slate-800 pt-8">
          <Link
            href="/test"
            className="inline-flex rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Hacer el test
          </Link>
        </div>
      </div>
    </main>
  );
}