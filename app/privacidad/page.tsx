import Link from "next/link";

export default function PrivacidadPage() {
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
          Política de Privacidad
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
              TestPolítico es un proyecto web independiente que permite a los
              usuarios responder un cuestionario sobre diferentes cuestiones
              políticas y comparar matemáticamente sus respuestas con
              posiciones políticas representadas en el test.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              2. Datos introducidos en el test
            </h2>
            <p className="mt-3">
              El test no solicita al usuario su nombre, dirección de correo
              electrónico, número de teléfono ni otros datos identificativos
              para obtener el resultado.
            </p>
            <p className="mt-3">
              Las respuestas seleccionadas en el cuestionario se utilizan para
              realizar el cálculo matemático del resultado mostrado al usuario.
              El funcionamiento del test está diseñado para realizar este
              cálculo en el navegador del usuario y no requiere crear una
              cuenta.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              3. Opiniones políticas
            </h2>
            <p className="mt-3">
              Algunas respuestas del cuestionario pueden revelar información
              relacionada con las preferencias u opiniones políticas del
              usuario. Las opiniones políticas constituyen una categoría
              especial de datos personales bajo la normativa de protección de
              datos.
            </p>
            <p className="mt-3">
              Por este motivo, TestPolítico aplica un principio de
              minimización: el cuestionario no solicita datos identificativos
              para realizar el test y no se pretende crear perfiles políticos
              individuales ni conservar las respuestas del usuario como una
              base de datos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              4. Datos técnicos y alojamiento
            </h2>
            <p className="mt-3">
              El acceso a cualquier sitio web puede implicar el tratamiento de
              determinados datos técnicos necesarios para prestar y proteger
              el servicio, como información relacionada con la conexión,
              seguridad, funcionamiento y disponibilidad de la infraestructura.
            </p>
            <p className="mt-3">
              TestPolítico está alojado mediante servicios de infraestructura
              web de terceros. Estos proveedores pueden tratar determinados
              datos técnicos conforme a sus propias políticas y condiciones.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              5. Cookies y tecnologías similares
            </h2>
            <p className="mt-3">
              La versión actual del sitio se ha diseñado para funcionar sin
              solicitar al usuario datos personales mediante formularios de
              registro.
            </p>
            <p className="mt-3">
              Si en el futuro se incorporan herramientas de analítica,
              publicidad, cookies u otras tecnologías que impliquen nuevos
              tratamientos de datos, esta política se actualizará y, cuando
              sea necesario, se solicitarán los consentimientos
              correspondientes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              6. Finalidad
            </h2>
            <p className="mt-3">
              La finalidad principal del sitio es ofrecer un test informativo
              de comparación de posiciones políticas y mostrar el resultado
              correspondiente a las respuestas introducidas por el usuario.
            </p>
            <p className="mt-3">
              El resultado del test no constituye una recomendación de voto ni
              pretende determinar qué opción política debe elegir una persona.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              7. Derechos de los usuarios
            </h2>
            <p className="mt-3">
              Cuando resulte aplicable la normativa de protección de datos, las
              personas pueden ejercer los derechos reconocidos por la normativa
              vigente, incluyendo los derechos de acceso, rectificación,
              supresión, limitación u oposición al tratamiento y otros que
              correspondan según las circunstancias.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              8. Actualización de esta política
            </h2>
            <p className="mt-3">
              Esta Política de Privacidad puede actualizarse cuando cambie el
              funcionamiento del sitio, se incorporen nuevos servicios o
              resulte necesario para adaptarla a cambios legales o
              regulatorios.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              9. Contacto
            </h2>
            <p className="mt-3">
              Actualmente no se ofrece un canal público de contacto por correo
              electrónico en esta página. Antes de incorporar sistemas de
              registro, publicidad personalizada u otros servicios que
              requieran tratamientos adicionales de datos personales, se
              revisará y actualizará esta información.
            </p>
          </section>

          <section className="border-t border-zinc-800 pt-8">
            <p className="text-sm text-zinc-500">
              Esta página tiene carácter informativo y no constituye
              asesoramiento jurídico.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}