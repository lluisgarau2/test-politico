import Link from "next/link";

export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-zinc-100">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-sm text-zinc-400 hover:text-white"
        >
          ← Volver a TestPolítico
        </Link>

        <h1 className="mt-8 text-4xl font-bold tracking-tight">
          Aviso Legal
        </h1>

        <p className="mt-4 text-sm text-zinc-500">
          Última actualización: octubre de 2026
        </p>

        <div className="mt-10 space-y-8 text-zinc-300 leading-7">
          <section>
            <h2 className="text-xl font-semibold text-white">
              1. Información general
            </h2>
            <p className="mt-3">
              TestPolítico es un proyecto web independiente cuyo objetivo es
              ofrecer un cuestionario informativo que permite comparar las
              respuestas de los usuarios con determinadas posiciones políticas
              representadas en el test.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              2. Responsable del sitio
            </h2>
            <p className="mt-3">
              El sitio es gestionado actualmente como un proyecto personal.
            </p>
            <p className="mt-3">
              La información identificativa y los datos de contacto del
              responsable deberán completarse antes de que el sitio se explote
              comercialmente o se incorporen servicios que requieran facilitar
              dicha información públicamente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              3. Finalidad del sitio
            </h2>
            <p className="mt-3">
              TestPolítico proporciona un cuestionario de carácter informativo
              para comparar las respuestas del usuario con posiciones políticas
              representadas mediante una metodología matemática.
            </p>
            <p className="mt-3">
              El resultado no constituye una recomendación de voto, una
              orientación electoral personalizada ni una indicación sobre qué
              opción política debería elegir el usuario.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              4. Propiedad intelectual
            </h2>
            <p className="mt-3">
              Los elementos originales del sitio, incluyendo su diseño, código,
              textos y estructura, pertenecen a sus respectivos titulares o se
              utilizan de acuerdo con las condiciones aplicables.
            </p>
            <p className="mt-3">
              Las referencias a partidos políticos, organizaciones, personas o
              instituciones se realizan únicamente con finalidad informativa y
              no implican afiliación, patrocinio, respaldo ni representación.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              5. Contenido político
            </h2>
            <p className="mt-3">
              Las posiciones utilizadas en el test pretenden representar de
              forma simplificada determinadas posiciones públicas de las
              organizaciones políticas incluidas.
            </p>
            <p className="mt-3">
              Las posiciones políticas pueden cambiar con el tiempo. Por ello,
              los resultados deben interpretarse como una comparación basada en
              las posiciones y criterios utilizados por el test en el momento
              de su elaboración o actualización.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              6. Disponibilidad del servicio
            </h2>
            <p className="mt-3">
              Se procura mantener el sitio disponible y funcionando
              correctamente, pero no se garantiza la disponibilidad
              ininterrumpida ni la ausencia absoluta de errores.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              7. Enlaces externos
            </h2>
            <p className="mt-3">
              El sitio puede incorporar enlaces a páginas web de terceros.
              TestPolítico no controla necesariamente el contenido,
              funcionamiento o políticas de privacidad de dichos sitios.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              8. Actualización
            </h2>
            <p className="mt-3">
              Este Aviso Legal puede modificarse cuando cambie el funcionamiento
              del sitio, se incorporen nuevas funcionalidades o resulte
              necesario para adaptarlo a cambios legales o regulatorios.
            </p>
          </section>

          <section className="border-t border-zinc-800 pt-8">
            <p className="text-sm text-zinc-500">
              Este documento tiene carácter informativo y no constituye
              asesoramiento jurídico.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}