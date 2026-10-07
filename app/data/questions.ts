export type Party = "PSOE" | "PP" | "VOX" | "Sumar" | "Podemos";

export type Question = {
  id: number;
  text: string;
  topic: string;
  explanation: string;
  sources: Partial<Record<Party, string>>;
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
    topic: "Fiscalidad y desigualdad",
    explanation:
      "Esta pregunta compara el grado de apoyo a una fiscalidad más progresiva y orientada a reducir las desigualdades económicas.",
    sources: {
      PSOE: "Programa electoral PSOE 2023",
      PP: "Programa electoral PP 2023",
      VOX: "Programa electoral VOX 2023",
      Sumar: "Programa electoral Sumar 2023",
      Podemos: "Documentación programática de Podemos",
    },
    scores: { PSOE: 2, PP: -1, VOX: -2, Sumar: 2, Podemos: 2 },
  },
  {
    id: 2,
    text: "El Estado debería aumentar el gasto en servicios públicos como la sanidad y la educación, aunque eso suponga dedicar más dinero del presupuesto.",
    topic: "Servicios públicos",
    explanation:
      "Esta cuestión compara la prioridad concedida a reforzar la financiación y el alcance de los servicios públicos.",
    sources: {
      PSOE: "Programa electoral PSOE 2023",
      PP: "Programa electoral PP 2023",
      VOX: "Programa electoral VOX 2023",
      Sumar: "Programa electoral Sumar 2023",
      Podemos: "Documentación programática de Podemos",
    },
    scores: { PSOE: 2, PP: 0, VOX: -1, Sumar: 2, Podemos: 2 },
  },
  {
    id: 3,
    text: "El Gobierno debería seguir aumentando el salario mínimo, aunque esto pueda incrementar los costes de las empresas.",
    topic: "Salarios y trabajo",
    explanation:
      "Esta pregunta compara las posiciones sobre el aumento del salario mínimo y el equilibrio entre salarios y costes empresariales.",
    sources: {
      PSOE: "Programa electoral PSOE 2023",
      PP: "Programa electoral PP 2023",
      VOX: "Programa electoral VOX 2023",
      Sumar: "Programa electoral Sumar 2023",
      Podemos: "Documentación programática de Podemos",
    },
    scores: { PSOE: 2, PP: 1, VOX: 0, Sumar: 2, Podemos: 2 },
  },
  {
    id: 4,
    text: "La jornada laboral debería reducirse sin que los trabajadores sufran una reducción de su salario.",
    topic: "Jornada laboral",
    explanation:
      "Esta cuestión compara las posiciones sobre reducción de jornada y mejora del tiempo de trabajo manteniendo la remuneración.",
    sources: {
      PSOE: "Programa electoral PSOE 2023",
      PP: "Programa electoral PP 2023",
      VOX: "Programa electoral VOX 2023",
      Sumar: "Programa electoral Sumar 2023",
      Podemos: "Documentación programática de Podemos",
    },
    scores: { PSOE: 2, PP: -1, VOX: -1, Sumar: 2, Podemos: 2 },
  },
  {
    id: 5,
    text: "Las empresas deberían tener más libertad para organizar el trabajo y adaptar las condiciones laborales a sus necesidades.",
    topic: "Flexibilidad laboral",
    explanation:
      "Esta pregunta compara el peso concedido a la flexibilidad empresarial frente a una mayor regulación de las condiciones laborales.",
    sources: {
      PSOE: "Programa electoral PSOE 2023",
      PP: "Programa electoral PP 2023",
      VOX: "Programa electoral VOX 2023",
      Sumar: "Programa electoral Sumar 2023",
      Podemos: "Documentación programática de Podemos",
    },
    scores: { PSOE: -1, PP: 2, VOX: 2, Sumar: -2, Podemos: -2 },
  },
  {
    id: 6,
    text: "El Gobierno debería poder limitar los precios de los alquileres en las zonas donde sean especialmente elevados.",
    topic: "Vivienda y alquiler",
    explanation:
      "Esta cuestión compara el apoyo a intervenir sobre los precios del alquiler frente a una mayor libertad del mercado de vivienda.",
    sources: {
      PSOE: "Programa electoral PSOE 2023",
      PP: "Programa electoral PP 2023",
      VOX: "Programa electoral VOX 2023",
      Sumar: "Programa electoral Sumar 2023",
      Podemos: "Documentación programática de Podemos",
    },
    scores: { PSOE: 2, PP: -1, VOX: -2, Sumar: 2, Podemos: 2 },
  },
  {
    id: 7,
    text: "El Estado debería aumentar la cantidad de vivienda pública destinada al alquiler a precios asequibles.",
    topic: "Vivienda pública",
    explanation:
      "Esta pregunta compara la prioridad concedida a ampliar el parque público de vivienda y facilitar alquileres asequibles.",
    sources: {
      PSOE: "Programa electoral PSOE 2023",
      PP: "Programa electoral PP 2023",
      VOX: "Programa electoral VOX 2023",
      Sumar: "Programa electoral Sumar 2023",
      Podemos: "Documentación programática de Podemos",
    },
    scores: { PSOE: 2, PP: 1, VOX: 1, Sumar: 2, Podemos: 2 },
  },
  {
    id: 8,
    text: "El Gobierno debería reducir los trámites y facilitar la construcción de nuevas viviendas para aumentar la oferta.",
    topic: "Oferta de vivienda",
    explanation:
      "Esta cuestión compara una estrategia centrada en aumentar la oferta y simplificar trámites con otras formas de intervención pública sobre la vivienda.",
    sources: {
      PSOE: "Programa electoral PSOE 2023",
      PP: "Programa electoral PP 2023",
      VOX: "Programa electoral VOX 2023",
      Sumar: "Programa electoral Sumar 2023",
      Podemos: "Documentación programática de Podemos",
    },
    scores: { PSOE: 0, PP: 2, VOX: 2, Sumar: -1, Podemos: -1 },
  },
  {
    id: 9,
    text: "El Estado debería aumentar la inversión en la sanidad pública, aunque eso suponga dedicar más dinero del presupuesto.",
    topic: "Sanidad pública",
    explanation:
      "Esta pregunta compara la prioridad concedida a aumentar los recursos destinados al sistema sanitario público.",
    sources: {
      PSOE: "Programa electoral PSOE 2023",
      PP: "Programa electoral PP 2023",
      VOX: "Programa electoral VOX 2023",
      Sumar: "Programa electoral Sumar 2023",
      Podemos: "Documentación programática de Podemos",
    },
    scores: { PSOE: 2, PP: 1, VOX: 1, Sumar: 2, Podemos: 2 },
  },
  {
    id: 10,
    text: "La sanidad pública debería recurrir a empresas privadas para prestar determinados servicios sanitarios.",
    topic: "Gestión sanitaria",
    explanation:
      "Esta cuestión compara el papel que se concede a la colaboración o prestación privada dentro del sistema sanitario.",
    sources: {
      PSOE: "Programa electoral PSOE 2023",
      PP: "Programa electoral PP 2023",
      VOX: "Programa electoral VOX 2023",
      Sumar: "Programa electoral Sumar 2023",
      Podemos: "Documentación programática de Podemos",
    },
    scores: { PSOE: -1, PP: 2, VOX: 1, Sumar: -2, Podemos: -2 },
  },
  {
    id: 11,
    text: "El Estado debería aumentar la financiación de la educación pública para mejorar sus recursos y servicios.",
    topic: "Educación pública",
    explanation:
      "Esta pregunta compara la prioridad concedida al refuerzo de la financiación y los recursos de la educación pública.",
    sources: {
      PSOE: "Programa electoral PSOE 2023",
      PP: "Programa electoral PP 2023",
      VOX: "Programa electoral VOX 2023",
      Sumar: "Programa electoral Sumar 2023",
      Podemos: "Documentación programática de Podemos",
    },
    scores: { PSOE: 2, PP: 1, VOX: 0, Sumar: 2, Podemos: 2 },
  },
  {
    id: 12,
    text: "Las tasas universitarias deberían reducirse para facilitar que más personas puedan acceder a la universidad.",
    topic: "Universidad",
    explanation:
      "Esta cuestión compara las posiciones sobre reducir las barreras económicas de acceso a la educación universitaria.",
    sources: {
      PSOE: "Programa electoral PSOE 2023",
      PP: "Programa electoral PP 2023",
      VOX: "Programa electoral VOX 2023",
      Sumar: "Programa electoral Sumar 2023",
      Podemos: "Documentación programática de Podemos",
    },
    scores: { PSOE: 2, PP: 1, VOX: 0, Sumar: 2, Podemos: 2 },
  },
  {
    id: 13,
    text: "España debería tomar más medidas para reducir la contaminación y luchar contra el cambio climático.",
    topic: "Cambio climático",
    explanation:
      "Esta pregunta compara la prioridad concedida a las políticas de reducción de emisiones y lucha contra el cambio climático.",
    sources: {
      PSOE: "Programa electoral PSOE 2023",
      PP: "Programa electoral PP 2023",
      VOX: "Programa electoral VOX 2023",
      Sumar: "Programa electoral Sumar 2023",
      Podemos: "Documentación programática de Podemos",
    },
    scores: { PSOE: 2, PP: 1, VOX: -2, Sumar: 2, Podemos: 2 },
  },
  {
    id: 14,
    text: "España debería dar prioridad a las energías renovables, como la solar y la eólica, para depender menos del petróleo y el gas.",
    topic: "Energía",
    explanation:
      "Esta cuestión compara la prioridad concedida a las energías renovables y a la reducción de la dependencia de combustibles fósiles.",
    sources: {
      PSOE: "Programa electoral PSOE 2023",
      PP: "Programa electoral PP 2023",
      VOX: "Programa electoral VOX 2023",
      Sumar: "Programa electoral Sumar 2023",
      Podemos: "Documentación programática de Podemos",
    },
    scores: { PSOE: 2, PP: 1, VOX: -1, Sumar: 2, Podemos: 2 },
  },
  {
    id: 15,
    text: "España debería mantener abiertas las centrales nucleares que actualmente están funcionando.",
    topic: "Energía nuclear",
    explanation:
      "Esta pregunta compara las posiciones sobre la continuidad de la energía nuclear dentro del sistema energético español.",
    sources: {
      PSOE: "Programa electoral PSOE 2023",
      PP: "Programa electoral PP 2023",
      VOX: "Programa electoral VOX 2023",
      Sumar: "Programa electoral Sumar 2023",
      Podemos: "Documentación programática de Podemos",
    },
    scores: { PSOE: -2, PP: 2, VOX: 2, Sumar: -2, Podemos: -2 },
  },
  {
    id: 16,
    text: "Los agricultores deberían tener menos trámites y obligaciones administrativas para facilitar su actividad.",
    topic: "Agricultura",
    explanation:
      "Esta cuestión compara el apoyo a reducir cargas administrativas y obligaciones para agricultores y explotaciones agrarias.",
    sources: {
      PSOE: "Programa electoral PSOE 2023",
      PP: "Programa electoral PP 2023",
      VOX: "Programa electoral VOX 2023",
      Sumar: "Programa electoral Sumar 2023",
      Podemos: "Documentación programática de Podemos",
    },
    scores: { PSOE: -1, PP: 1, VOX: 2, Sumar: -1, Podemos: -1 },
  },
  {
    id: 17,
    text: "España debería facilitar la llegada legal de trabajadores extranjeros cuando exista necesidad de mano de obra.",
    topic: "Inmigración laboral",
    explanation:
      "Esta pregunta compara las posiciones sobre vías legales de inmigración vinculadas a las necesidades del mercado laboral.",
    sources: {
      PSOE: "Programa electoral PSOE 2023",
      PP: "Programa electoral PP 2023",
      VOX: "Programa electoral VOX 2023",
      Sumar: "Programa electoral Sumar 2023",
      Podemos: "Documentación programática de Podemos",
    },
    scores: { PSOE: 2, PP: 1, VOX: -1, Sumar: 2, Podemos: 2 },
  },
  {
    id: 18,
    text: "España debería aumentar los recursos destinados a reforzar el control de sus fronteras.",
    topic: "Control fronterizo",
    explanation:
      "Esta cuestión compara la prioridad concedida al refuerzo de los medios destinados al control de las fronteras.",
    sources: {
      PSOE: "Programa electoral PSOE 2023",
      PP: "Programa electoral PP 2023",
      VOX: "Programa electoral VOX 2023",
      Sumar: "Programa electoral Sumar 2023",
      Podemos: "Documentación programática de Podemos",
    },
    scores: { PSOE: 1, PP: 2, VOX: 2, Sumar: 0, Podemos: -1 },
  },
  {
    id: 19,
    text: "El Gobierno debería aplicar medidas más estrictas contra la inmigración irregular y facilitar las expulsiones cuando la ley lo permita.",
    topic: "Inmigración irregular",
    explanation:
      "Esta pregunta compara las posiciones sobre endurecer las medidas frente a la inmigración irregular dentro del marco legal.",
    sources: {
      PSOE: "Programa electoral PSOE 2023",
      PP: "Programa electoral PP 2023",
      VOX: "Programa electoral VOX 2023",
      Sumar: "Programa electoral Sumar 2023",
      Podemos: "Documentación programática de Podemos",
    },
    scores: { PSOE: 0, PP: 2, VOX: 2, Sumar: -1, Podemos: -2 },
  },
  {
    id: 20,
    text: "El Estado debería aumentar los recursos destinados a la Policía y la Guardia Civil para combatir la delincuencia.",
    topic: "Seguridad",
    explanation:
      "Esta cuestión compara la prioridad concedida al aumento de recursos para las fuerzas de seguridad y la lucha contra la delincuencia.",
    sources: {
      PSOE: "Programa electoral PSOE 2023",
      PP: "Programa electoral PP 2023",
      VOX: "Programa electoral VOX 2023",
      Sumar: "Programa electoral Sumar 2023",
      Podemos: "Documentación programática de Podemos",
    },
    scores: { PSOE: 1, PP: 2, VOX: 2, Sumar: 1, Podemos: 1 },
  },
  {
    id: 21,
    text: "El Gobierno debería mantener y ampliar las políticas destinadas a garantizar la igualdad entre hombres y mujeres.",
    topic: "Igualdad",
    explanation:
      "Esta pregunta compara el apoyo a mantener o ampliar políticas públicas de igualdad entre hombres y mujeres.",
    sources: {
      PSOE: "Programa electoral PSOE 2023",
      PP: "Programa electoral PP 2023",
      VOX: "Programa electoral VOX 2023",
      Sumar: "Programa electoral Sumar 2023",
      Podemos: "Documentación programática de Podemos",
    },
    scores: { PSOE: 2, PP: 1, VOX: -2, Sumar: 2, Podemos: 2 },
  },
  {
    id: 22,
    text: "El Gobierno debería mantener y ampliar las medidas destinadas a proteger los derechos de las personas LGTBI.",
    topic: "Derechos LGTBI",
    explanation:
      "Esta cuestión compara las posiciones sobre mantener o ampliar las políticas públicas de protección de los derechos LGTBI.",
    sources: {
      PSOE: "Programa electoral PSOE 2023",
      PP: "Programa electoral PP 2023",
      VOX: "Programa electoral VOX 2023",
      Sumar: "Programa electoral Sumar 2023",
      Podemos: "Documentación programática de Podemos",
    },
    scores: { PSOE: 2, PP: 1, VOX: -2, Sumar: 2, Podemos: 2 },
  },
  {
    id: 23,
    text: "El aborto debería seguir siendo legal en España dentro de los plazos y condiciones establecidos por la ley.",
    topic: "Aborto",
    explanation:
      "Esta pregunta compara las posiciones sobre mantener el marco legal que permite el aborto dentro de los plazos y condiciones establecidos.",
    sources: {
      PSOE: "Programa electoral PSOE 2023",
      PP: "Programa electoral PP 2023",
      VOX: "Programa electoral VOX 2023",
      Sumar: "Programa electoral Sumar 2023",
      Podemos: "Documentación programática de Podemos",
    },
    scores: { PSOE: 2, PP: 1, VOX: -2, Sumar: 2, Podemos: 2 },
  },
  {
    id: 24,
    text: "Las comunidades autónomas deberían tener más competencias para tomar decisiones sobre asuntos que afectan directamente a su territorio.",
    topic: "Modelo territorial",
    explanation:
      "Esta cuestión compara el grado de descentralización territorial y la distribución de competencias entre el Estado y las comunidades autónomas.",
    sources: {
      PSOE: "Programa electoral PSOE 2023",
      PP: "Programa electoral PP 2023",
      VOX: "Programa electoral VOX 2023",
      Sumar: "Programa electoral Sumar 2023",
      Podemos: "Documentación programática de Podemos",
    },
    scores: { PSOE: 1, PP: -1, VOX: -2, Sumar: 1, Podemos: 2 },
  },
  {
    id: 25,
    text: "España debería aumentar el gasto en defensa para mejorar las capacidades de las Fuerzas Armadas.",
    topic: "Defensa",
    explanation:
      "Esta pregunta compara la prioridad concedida a aumentar el gasto y las capacidades de defensa de España.",
    sources: {
      PSOE: "Programa electoral PSOE 2023",
      PP: "Programa electoral PP 2023",
      VOX: "Programa electoral VOX 2023",
      Sumar: "Programa electoral Sumar 2023",
      Podemos: "Documentación programática de Podemos",
    },
    scores: { PSOE: 1, PP: 2, VOX: 2, Sumar: -1, Podemos: -2 },
  },
];