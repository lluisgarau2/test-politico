export type Party = "PSOE" | "PP" | "VOX" | "Sumar" | "Podemos";

export type Question = {
  id: number;
  text: string;
  scores: Record<Party, number>;
};

export const parties: Party[] = [
  "PSOE",
  "PP",
  "VOX",
  "Sumar",
  "Podemos",
];

export const questions: Question[] = [
  {
    id: 1,
    text: "Las personas con mayores ingresos deberían pagar más impuestos para reducir la desigualdad económica.",
    scores: {
      PSOE: 2,
      PP: -1,
      VOX: -2,
      Sumar: 2,
      Podemos: 2,
    },
  },

  {
    id: 2,
    text: "El Estado debería aumentar el gasto en servicios públicos como la sanidad y la educación, aunque eso suponga dedicar más dinero del presupuesto.",
    scores: {
      PSOE: 2,
      PP: 0,
      VOX: -1,
      Sumar: 2,
      Podemos: 2,
    },
  },

  {
    id: 3,
    text: "El Gobierno debería seguir aumentando el salario mínimo, aunque esto pueda incrementar los costes de las empresas.",
    scores: {
      PSOE: 2,
      PP: 1,
      VOX: 0,
      Sumar: 2,
      Podemos: 2,
    },
  },

  {
    id: 4,
    text: "La jornada laboral debería reducirse sin que los trabajadores sufran una reducción de su salario.",
    scores: {
      PSOE: 2,
      PP: -1,
      VOX: -1,
      Sumar: 2,
      Podemos: 2,
    },
  },

  {
    id: 5,
    text: "Las empresas deberían tener más libertad para organizar el trabajo y adaptar las condiciones laborales a sus necesidades.",
    scores: {
      PSOE: -1,
      PP: 2,
      VOX: 2,
      Sumar: -2,
      Podemos: -2,
    },
  },

  {
    id: 6,
    text: "El Gobierno debería poder limitar los precios de los alquileres en las zonas donde sean especialmente elevados.",
    scores: {
      PSOE: 2,
      PP: -1,
      VOX: -2,
      Sumar: 2,
      Podemos: 2,
    },
  },

  {
    id: 7,
    text: "El Estado debería aumentar la cantidad de vivienda pública destinada al alquiler a precios asequibles.",
    scores: {
      PSOE: 2,
      PP: 1,
      VOX: 1,
      Sumar: 2,
      Podemos: 2,
    },
  },

  {
    id: 8,
    text: "El Gobierno debería reducir los trámites y facilitar la construcción de nuevas viviendas para aumentar la oferta.",
    scores: {
      PSOE: 0,
      PP: 2,
      VOX: 2,
      Sumar: -1,
      Podemos: -1,
    },
  },

  {
    id: 9,
    text: "El Estado debería aumentar la inversión en la sanidad pública, aunque eso suponga dedicar más dinero del presupuesto.",
    scores: {
      PSOE: 2,
      PP: 1,
      VOX: 1,
      Sumar: 2,
      Podemos: 2,
    },
  },

  {
    id: 10,
    text: "La sanidad pública debería recurrir a empresas privadas para prestar determinados servicios sanitarios.",
    scores: {
      PSOE: -1,
      PP: 2,
      VOX: 1,
      Sumar: -2,
      Podemos: -2,
    },
  },

  {
    id: 11,
    text: "El Estado debería aumentar la financiación de la educación pública para mejorar sus recursos y servicios.",
    scores: {
      PSOE: 2,
      PP: 1,
      VOX: 0,
      Sumar: 2,
      Podemos: 2,
    },
  },

  {
    id: 12,
    text: "Las tasas universitarias deberían reducirse para facilitar que más personas puedan acceder a la universidad.",
    scores: {
      PSOE: 2,
      PP: 1,
      VOX: 0,
      Sumar: 2,
      Podemos: 2,
    },
  },

  {
    id: 13,
    text: "España debería tomar más medidas para reducir la contaminación y luchar contra el cambio climático.",
    scores: {
      PSOE: 2,
      PP: 1,
      VOX: -2,
      Sumar: 2,
      Podemos: 2,
    },
  },

  {
    id: 14,
    text: "España debería dar prioridad a las energías renovables, como la solar y la eólica, para depender menos del petróleo y el gas.",
    scores: {
      PSOE: 2,
      PP: 1,
      VOX: -1,
      Sumar: 2,
      Podemos: 2,
    },
  },

  {
    id: 15,
    text: "España debería mantener abiertas las centrales nucleares que actualmente están funcionando.",
    scores: {
      PSOE: -2,
      PP: 2,
      VOX: 2,
      Sumar: -2,
      Podemos: -2,
    },
  },

  {
    id: 16,
    text: "Los agricultores deberían tener menos trámites y obligaciones administrativas para facilitar su actividad.",
    scores: {
      PSOE: -1,
      PP: 1,
      VOX: 2,
      Sumar: -1,
      Podemos: -1,
    },
  },

  {
    id: 17,
    text: "España debería facilitar la llegada legal de trabajadores extranjeros cuando exista necesidad de mano de obra.",
    scores: {
      PSOE: 2,
      PP: 1,
      VOX: -1,
      Sumar: 2,
      Podemos: 2,
    },
  },

  {
    id: 18,
    text: "España debería aumentar los recursos destinados a reforzar el control de sus fronteras.",
    scores: {
      PSOE: 1,
      PP: 2,
      VOX: 2,
      Sumar: 0,
      Podemos: -1,
    },
  },

  {
    id: 19,
    text: "El Gobierno debería aplicar medidas más estrictas contra la inmigración irregular y facilitar las expulsiones cuando la ley lo permita.",
    scores: {
      PSOE: 0,
      PP: 2,
      VOX: 2,
      Sumar: -1,
      Podemos: -2,
    },
  },

  {
    id: 20,
    text: "El Estado debería aumentar los recursos destinados a la Policía y la Guardia Civil para combatir la delincuencia.",
    scores: {
      PSOE: 1,
      PP: 2,
      VOX: 2,
      Sumar: 1,
      Podemos: 1,
    },
  },

  {
    id: 21,
    text: "El Gobierno debería mantener y ampliar las políticas destinadas a garantizar la igualdad entre hombres y mujeres.",
    scores: {
      PSOE: 2,
      PP: 1,
      VOX: -2,
      Sumar: 2,
      Podemos: 2,
    },
  },

  {
    id: 22,
    text: "El Gobierno debería mantener y ampliar las medidas destinadas a proteger los derechos de las personas LGTBI.",
    scores: {
      PSOE: 2,
      PP: 1,
      VOX: -2,
      Sumar: 2,
      Podemos: 2,
    },
  },

  {
    id: 23,
    text: "El aborto debería seguir siendo legal en España dentro de los plazos y condiciones establecidos por la ley.",
    scores: {
      PSOE: 2,
      PP: 1,
      VOX: -2,
      Sumar: 2,
      Podemos: 2,
    },
  },

  {
    id: 24,
    text: "Las comunidades autónomas deberían tener más competencias para tomar decisiones sobre asuntos que afectan directamente a su territorio.",
    scores: {
      PSOE: 1,
      PP: -1,
      VOX: -2,
      Sumar: 1,
      Podemos: 2,
    },
  },

  {
    id: 25,
    text: "España debería aumentar el gasto en defensa para mejorar las capacidades de las Fuerzas Armadas.",
    scores: {
      PSOE: 1,
      PP: 2,
      VOX: 2,
      Sumar: -1,
      Podemos: -2,
    },
  },
];