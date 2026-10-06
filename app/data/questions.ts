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
    text: "Las personas con mayores ingresos deberían pagar una proporción mayor de sus ingresos en impuestos.",
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
    text: "El Estado debería aumentar el gasto en servicios públicos aunque esto implique mantener o aumentar la presión fiscal.",
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
    text: "El salario mínimo debería seguir aumentando aunque pueda aumentar los costes para algunas empresas.",
    scores: {
      PSOE: 2,
      PP: 1,
      VOX: -1,
      Sumar: 2,
      Podemos: 2,
    },
  },
  {
    id: 4,
    text: "Debería reducirse la jornada laboral sin reducir proporcionalmente el salario.",
    scores: {
      PSOE: 1,
      PP: -1,
      VOX: -1,
      Sumar: 2,
      Podemos: 2,
    },
  },
  {
    id: 5,
    text: "Las empresas deberían tener más facilidad para adaptar sus plantillas y condiciones laborales a sus necesidades.",
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
    text: "El Estado debería poder limitar los precios de los alquileres en zonas donde la vivienda sea especialmente cara.",
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
    text: "El Estado debería aumentar considerablemente el parque público de viviendas destinadas al alquiler.",
    scores: {
      PSOE: 2,
      PP: 1,
      VOX: 0,
      Sumar: 2,
      Podemos: 2,
    },
  },
  {
    id: 8,
    text: "Debería facilitarse la construcción de nuevas viviendas, aunque eso implique reducir algunas restricciones urbanísticas.",
    scores: {
      PSOE: 1,
      PP: 2,
      VOX: 2,
      Sumar: -1,
      Podemos: -1,
    },
  },
  {
    id: 9,
    text: "El Estado debería aumentar la inversión en la sanidad pública aunque implique dedicar más recursos públicos.",
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
    text: "Debería facilitarse una mayor colaboración entre la sanidad pública y empresas privadas para reducir las listas de espera.",
    scores: {
      PSOE: 1,
      PP: 2,
      VOX: 1,
      Sumar: -1,
      Podemos: -1,
    },
  },
  {
    id: 11,
    text: "El Estado debería aumentar la financiación de la educación pública aunque esto implique aumentar el gasto público.",
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
    text: "Las tasas universitarias deberían reducirse para facilitar el acceso a la universidad.",
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
    text: "España debería acelerar la reducción de emisiones aunque algunas medidas puedan aumentar los costes para determinados sectores económicos.",
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
    text: "España debería priorizar las energías renovables frente a otras fuentes de energía.",
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
    text: "España debería mantener la energía nuclear como parte de su sistema energético durante las próximas décadas.",
    scores: {
      PSOE: 1,
      PP: 2,
      VOX: 2,
      Sumar: -1,
      Podemos: -1,
    },
  },
  {
    id: 16,
    text: "Las normas medioambientales para agricultores y ganaderos deberían relajarse cuando supongan costes importantes para sus explotaciones.",
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
    text: "España debería facilitar la inmigración legal para cubrir puestos de trabajo que no puedan cubrirse con trabajadores residentes.",
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
    text: "España debería aumentar los recursos destinados al control y vigilancia de sus fronteras.",
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
    text: "España debería endurecer las medidas contra la inmigración irregular.",
    scores: {
      PSOE: 1,
      PP: 2,
      VOX: 2,
      Sumar: 0,
      Podemos: -1,
    },
  },
  {
    id: 20,
    text: "El Estado debería aumentar los recursos destinados a policía y seguridad aunque esto implique aumentar el gasto público.",
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
    text: "El Estado debería mantener políticas específicas destinadas a reducir las desigualdades entre hombres y mujeres.",
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
    text: "El Estado debería mantener y ampliar las políticas destinadas a proteger los derechos de las personas LGTBI.",
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
    text: "El acceso al aborto debería estar garantizado legalmente en España como una decisión de la mujer dentro de los plazos establecidos por la ley.",
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
    text: "Las comunidades autónomas deberían tener más capacidad para decidir sobre sus propias políticas y recursos.",
    scores: {
      PSOE: 1,
      PP: -1,
      VOX: -2,
      Sumar: 1,
      Podemos: 1,
    },
  },
  {
    id: 25,
    text: "España debería aumentar el gasto destinado a defensa y seguridad, incluso aunque eso reduzca recursos disponibles para otras áreas.",
    scores: {
      PSOE: 1,
      PP: 2,
      VOX: 2,
      Sumar: 0,
      Podemos: -1,
    },
  },
];