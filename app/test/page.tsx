"use client";

import Link from "next/link";
import { useState } from "react";
import { parties, questions } from "../data/questions";

type AnswerValue = -2 | -1 | 0 | 1 | 2;

const answerOptions: {
  value: AnswerValue;
  label: string;
}[] = [
  { value: 2, label: "Muy de acuerdo" },
  { value: 1, label: "De acuerdo" },
  { value: 0, label: "Ni de acuerdo ni en desacuerdo" },
  { value: -1, label: "En desacuerdo" },
  { value: -2, label: "Muy en desacuerdo" },
];

export default function TestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<
    Record<number, AnswerValue>
  >({});
  const [finished, setFinished] = useState(false);

  function selectAnswer(value: AnswerValue) {
    const question = questions[currentQuestion];

    setAnswers((previous) => ({
      ...previous,
      [question.id]: value,
    }));
  }

  function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((previous) => previous + 1);
    } else {
      setFinished(true);
    }
  }

  function previousQuestion() {
    if (currentQuestion > 0) {
      setCurrentQuestion((previous) => previous - 1);
    }
  }

  function calculateResults() {
    const results = parties.map((party) => {
      let total = 0;

      questions.forEach((question) => {
        const userAnswer = answers[question.id] ?? 0;
        const partyScore = question.scores[party];

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

  function restartTest() {
    setAnswers({});
    setCurrentQuestion(0);
    setFinished(false);
  }

  async function shareResult() {
    const results = calculateResults();
    const winner = results[0];

    const text = `He hecho el TestPolítico y mi mayor coincidencia es ${winner.party} con un ${winner.percentage}% de coincidencia.`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Mi resultado en TestPolítico",
          text,
          url: window.location.href,
        });
      } catch {
        // El usuario ha cancelado el menú de compartir.
      }
    } else {
      await navigator.clipboard.writeText(
        `${text} ${window.location.origin}`
      );

      alert("Resultado copiado al portapapeles.");
    }
  }

  if (finished) {
    const results = calculateResults();
    const winner = results[0];

    return (
      <main className="min-h-screen bg-slate-950 px-6 py-12 text-white sm:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center">
            <Link
              href="/"
              className="text-sm font-medium text-slate-400 transition hover:text-cyan-400"
            >
              ← Volver a TestPolítico
            </Link>

            <p className="mt-10 text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Resultado
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Tu mayor coincidencia
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-400">
              Este resultado compara matemáticamente tus respuestas con las
              posiciones representadas en el test.
            </p>
          </div>

          {/* Winner */}
          <section className="relative mt-12 overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-900 p-8 text-center shadow-2xl shadow-cyan-950/20 sm:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_55%)]" />

            <div className="relative">
              <p className="text-sm font-medium uppercase tracking-widest text-slate-400">
                Mayor coincidencia
              </p>

              <h2 className="mt-4 text-4xl font-bold sm:text-6xl">
                {winner.party}
              </h2>

              <div className="mt-6">
                <span className="text-6xl font-bold text-cyan-400 sm:text-7xl">
                  {winner.percentage}%
                </span>
              </div>

              <p className="mx-auto mt-5 max-w-xl text-slate-400">
                Según tus respuestas, esta es la organización política cuyas
                posiciones representadas en el test presentan mayor coincidencia
                matemática contigo.
              </p>
            </div>
          </section>

          {/* All results */}
          <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold">
                Comparación con todos los partidos
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Ordenado de mayor a menor coincidencia.
              </p>
            </div>

            <div className="space-y-6">
              {results.map((result, index) => (
                <div key={result.party}>
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                          index === 0
                            ? "bg-cyan-400 text-slate-950"
                            : "bg-slate-800 text-slate-400"
                        }`}
                      >
                        {index + 1}
                      </span>

                      <span className="font-semibold">
                        {result.party}
                      </span>
                    </div>

                    <span
                      className={`font-bold ${
                        index === 0
                          ? "text-cyan-400"
                          : "text-slate-300"
                      }`}
                    >
                      {result.percentage}%
                    </span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className={`h-full rounded-full transition-all ${
                        index === 0
                          ? "bg-cyan-400"
                          : "bg-slate-600"
                      }`}
                      style={{
                        width: `${result.percentage}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Disclaimer */}
          <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <h3 className="font-semibold text-white">
              Importante
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              Este resultado no es una recomendación de voto. El porcentaje
              representa únicamente el grado de coincidencia matemática entre
              tus respuestas y las posiciones utilizadas en el test.
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              Las posiciones políticas pueden cambiar con el tiempo y el test
              simplifica cuestiones que pueden ser más complejas en los
              programas y propuestas de cada organización.
            </p>
          </section>

          {/* Actions */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={shareResult}
              className="rounded-xl bg-cyan-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Compartir resultado
            </button>

            <button
              onClick={restartTest}
              className="rounded-xl border border-slate-700 px-7 py-4 font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
            >
              Repetir test
            </button>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/metodologia"
              className="text-sm font-medium text-slate-500 transition hover:text-cyan-400"
            >
              Ver metodología del test →
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const question = questions[currentQuestion];
  const selectedAnswer = answers[question.id];

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white sm:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight"
          >
            Test<span className="text-cyan-400">Político</span>
          </Link>

          <span className="text-sm text-slate-500">
            {currentQuestion + 1} / {questions.length}
          </span>
        </div>

        {/* Progress */}
        <div className="mt-8 h-2 overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full rounded-full bg-cyan-400 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Question */}
        <section className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Pregunta {currentQuestion + 1}
          </p>

          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            {question.text}
          </h1>

          <p className="mt-4 text-slate-500">
            Selecciona la opción que mejor represente tu opinión.
          </p>
        </section>

        {/* Answers */}
        <div className="mt-10 space-y-3">
          {answerOptions.map((option) => {
            const selected = selectedAnswer === option.value;

            return (
              <button
                key={option.value}
                onClick={() => selectAnswer(option.value)}
                className={`w-full rounded-2xl border p-5 text-left font-medium transition ${
                  selected
                    ? "border-cyan-400 bg-cyan-400/10 text-cyan-300"
                    : "border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-600 hover:bg-slate-900/80"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                      selected
                        ? "border-cyan-400 bg-cyan-400 text-slate-950"
                        : "border-slate-600"
                    }`}
                  >
                    {selected && "✓"}
                  </span>

                  <span>{option.label}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="mt-10 flex items-center justify-between gap-4">
          <button
            onClick={previousQuestion}
            disabled={currentQuestion === 0}
            className="rounded-xl border border-slate-800 px-5 py-3 font-semibold text-slate-400 transition hover:border-slate-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            ← Anterior
          </button>

          <button
            onClick={nextQuestion}
            disabled={selectedAnswer === undefined}
            className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-30"
          >
            {currentQuestion === questions.length - 1
              ? "Ver resultado"
              : "Siguiente →"}
          </button>
        </div>

        <p className="mt-8 text-center text-xs leading-5 text-slate-600">
          Tus respuestas se utilizan para calcular el resultado mostrado en
          este navegador.
        </p>
      </div>
    </main>
  );
}