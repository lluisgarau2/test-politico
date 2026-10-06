"use client";

import Link from "next/link";
import { useState } from "react";
import { questions } from "../data/questions";

const answerOptions = [
  { label: "Totalmente de acuerdo", value: 2 },
  { label: "De acuerdo", value: 1 },
  { label: "Neutral / No lo sé", value: 0 },
  { label: "En desacuerdo", value: -1 },
  { label: "Totalmente en desacuerdo", value: -2 },
];

export default function TestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  const question = questions[currentQuestion];

  function handleAnswer(value: number) {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;

    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinished(true);
    }
  }

  function calculateResults() {
    const results = Object.keys(questions[0].scores).map((party) => {
      let total = 0;

      questions.forEach((question, index) => {
        const userAnswer = answers[index] ?? 0;
        const partyScore =
          question.scores[party as keyof typeof question.scores];

        const compatibility =
          100 - (Math.abs(userAnswer - partyScore) / 4) * 100;

        total += compatibility;
      });

      return {
        party,
        percentage: Math.round(total / questions.length),
      };
    });

    return results.sort((a, b) => b.percentage - a.percentage);
  }

  if (finished) {
    const results = calculateResults();

    return (
      <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            ← Volver al inicio
          </Link>

          <div className="mt-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Resultado
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight">
              Tu mayor coincidencia programática
            </h1>

            <p className="mt-4 max-w-2xl text-slate-400">
              Este resultado muestra el grado de coincidencia entre tus
              respuestas y las posiciones introducidas en el modelo del test.
              No es una recomendación de voto.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {results.map((result, index) => (
              <div
                key={result.party}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-slate-500">
                        #{index + 1}
                      </span>

                      <h2 className="text-xl font-semibold">
                        {result.party}
                      </h2>
                    </div>
                  </div>

                  <span className="text-2xl font-bold text-cyan-400">
                    {result.percentage}%
                  </span>
                </div>

                <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    style={{ width: `${result.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="font-semibold">Importante</h2>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              El resultado depende de las posiciones políticas utilizadas para
              construir este test y de cómo se hayan formulado las preguntas.
              Las respuestas se procesan localmente en esta versión y no se
              utilizan para recomendarte ningún partido.
            </p>
          </div>

          <button
            onClick={() => {
              setCurrentQuestion(0);
              setAnswers([]);
              setFinished(false);
            }}
            className="mt-8 rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            Repetir el test
          </button>
        </div>
      </main>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-sm text-slate-400 transition hover:text-white"
        >
          ← Volver al inicio
        </Link>

        <div className="mt-8">
          <div className="flex items-center justify-between text-sm text-slate-400">
            <span>
              Pregunta {currentQuestion + 1} de {questions.length}
            </span>

            <span>{Math.round(progress)}%</span>
          </div>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <section className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Tu opinión
          </p>

          <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
            {question.text}
          </h1>

          <div className="mt-10 space-y-3">
            {answerOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className="w-full rounded-2xl border border-slate-800 bg-slate-900 p-5 text-left transition hover:border-cyan-500 hover:bg-slate-800"
              >
                <span className="font-medium">{option.label}</span>
              </button>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}