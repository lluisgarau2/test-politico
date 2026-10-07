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
  const [answers, setAnswers] = useState<Record<number, AnswerValue>>({});
  const [finished, setFinished] = useState(false);
  const [sharingCard, setSharingCard] = useState(false);

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

    const text = `🧠 He hecho el TestPolítico\n🎯 Mi mayor coincidencia: ${winner.party} — ${winner.percentage}%\n📊 ¿Con qué partido coinciden tus ideas? Haz el test.`;

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

  async function shareResultCard() {
    if (sharingCard) return;

    setSharingCard(true);

    try {
      const results = calculateResults();
      const winner = results[0];

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        throw new Error("No se pudo crear la tarjeta.");
      }

      const width = 1200;
      const height = 630;

      canvas.width = width;
      canvas.height = height;

      const background = ctx.createLinearGradient(
        0,
        0,
        width,
        height
      );

      background.addColorStop(0, "#020617");
      background.addColorStop(1, "#0f172a");

      ctx.fillStyle = background;
      ctx.fillRect(0, 0, width, height);

      const glow = ctx.createRadialGradient(
        950,
        80,
        0,
        950,
        80,
        500
      );

      glow.addColorStop(0, "rgba(34, 211, 238, 0.22)");
      glow.addColorStop(1, "rgba(34, 211, 238, 0)");

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(34, 211, 238, 0.25)";
      ctx.lineWidth = 3;
      ctx.strokeRect(24, 24, width - 48, height - 48);

      ctx.fillStyle = "#ffffff";
      ctx.font = "700 42px Arial";
      ctx.fillText("Test", 80, 90);

      ctx.fillStyle = "#22d3ee";
      ctx.fillText("Político", 175, 90);

      ctx.fillStyle = "#94a3b8";
      ctx.font = "500 24px Arial";
      ctx.fillText("Mi resultado", 80, 155);

      ctx.fillStyle = "#94a3b8";
      ctx.font = "600 28px Arial";
      ctx.fillText("Mi mayor coincidencia", 80, 225);

      ctx.fillStyle = "#ffffff";
      ctx.font = "700 92px Arial";
      ctx.fillText(winner.party, 80, 330);

      ctx.fillStyle = "#22d3ee";
      ctx.font = "700 110px Arial";
      ctx.fillText(`${winner.percentage}%`, 80, 455);

      ctx.fillStyle = "#94a3b8";
      ctx.font = "400 25px Arial";
      ctx.fillText(
        "Comparación matemática basada en 25 preguntas",
        80,
        525
      );

      ctx.fillStyle = "#64748b";
      ctx.font = "500 22px Arial";
      ctx.fillText(window.location.host, 80, 575);

      const blob = await new Promise<Blob | null>((resolve) => {
        canvas.toBlob(resolve, "image/png");
      });

      if (!blob) {
        throw new Error("No se pudo generar la imagen.");
      }

      const file = new File(
        [blob],
        "mi-resultado-test-politico.png",
        {
          type: "image/png",
        }
      );

      const shareText = `🧠 Mi mayor coincidencia en TestPolítico: ${winner.party} — ${winner.percentage}%`;

      if (
        navigator.share &&
        navigator.canShare &&
        navigator.canShare({ files: [file] })
      ) {
        await navigator.share({
          title: "Mi resultado en TestPolítico",
          text: shareText,
          files: [file],
        });

        return;
      }

      const imageUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = imageUrl;
      link.download = "mi-resultado-test-politico.png";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(imageUrl);

      alert(
        "Tu tarjeta se ha generado. Ahora puedes subirla a WhatsApp, Instagram o donde quieras."
      );
    } catch (error) {
      if (
        error instanceof DOMException &&
        error.name === "AbortError"
      ) {
        return;
      }

      console.error(error);
      alert(
        "No se ha podido generar la tarjeta. Puedes utilizar el botón de compartir normal."
      );
    } finally {
      setSharingCard(false);
    }
  }

  if (finished) {
    const results = calculateResults();
    const winner = results[0];

    const winnerSources = Array.from(
      new Set(
        questions
          .map((question) => question.sources[winner.party])
          .filter((source): source is string => Boolean(source))
      )
    );

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

              {/* What the percentage means */}
              <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-slate-800 bg-slate-950/60 p-5 text-left">
                <p className="text-sm font-semibold text-white">
                  ¿Qué significa este porcentaje?
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Un {winner.percentage}% significa que tus respuestas presentan
                  un grado de coincidencia matemática del {winner.percentage}%
                  con las posiciones utilizadas para este partido en las
                  preguntas del test.
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  No significa que compartas el {winner.percentage}% de su
                  programa ni constituye una recomendación de voto.
                </p>
              </div>

              {/* Methodology and sources */}
              <details className="mx-auto mt-5 max-w-xl rounded-2xl border border-slate-800 bg-slate-950/60 text-left">
                <summary className="cursor-pointer px-5 py-4 text-sm font-semibold text-white transition hover:text-cyan-400">
                  Ver metodología y fuentes
                </summary>

                <div className="border-t border-slate-800 px-5 pb-5 pt-4">
                  <p className="text-sm leading-6 text-slate-400">
                    El porcentaje se obtiene comparando tus respuestas con
                    las posiciones codificadas para cada organización en las
                    25 preguntas del test. La escala utilizada va de -2 a +2
                    y el resultado final es la media de las coincidencias
                    obtenidas en todas las preguntas.
                  </p>

                  <p className="mt-4 text-sm leading-6 text-slate-400">
                    Las posiciones utilizadas son una simplificación
                    metodológica de propuestas y documentos públicos. No
                    representan necesariamente la totalidad del programa de
                    cada organización ni deben interpretarse como citas
                    literales.
                  </p>

                  <div className="mt-5">
                    <p className="text-sm font-semibold text-white">
                      Documentación utilizada para {winner.party}
                    </p>

                    <ul className="mt-3 space-y-2">
                      {winnerSources.map((source) => (
                        <li
                          key={source}
                          className="rounded-xl bg-slate-900 px-4 py-3 text-sm text-slate-400"
                        >
                          {source}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/metodologia"
                    className="mt-5 inline-block text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
                  >
                    Leer la metodología completa →
                  </Link>
                </div>
              </details>
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
              onClick={shareResultCard}
              disabled={sharingCard}
              className="rounded-xl bg-cyan-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {sharingCard
                ? "Generando tarjeta..."
                : "📸 Compartir tarjeta"}
            </button>

            <button
              onClick={shareResult}
              className="rounded-xl border border-slate-700 px-7 py-4 font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
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