"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

const inspirations = [
  { name: "NASA", mark: "N", focus: "Exploração sem fronteiras" },
  { name: "SpaceXSI", mark: "SX", focus: "Engenharia que desafia limites" },
  { name: "Google", mark: "G", focus: "Conhecimento em escala" },
  { name: "Anthropic", mark: "A", focus: "IA com responsabilidade" },
  { name: "OpenAI", mark: "O", focus: "Pesquisa que amplia possibilidades" },
];

export function Inspiration() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="inspiration"
      aria-labelledby="inspiration-title"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(208,208,210,0.06),transparent_65%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-warm">
            04 . INSPIRAÇÕES
          </span>
          <div className="h-px w-8 bg-warm/30" />
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <GlassCard className="!p-6 sm:!p-10">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
              <div className="lg:col-span-5">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-silver">
                  <Sparkles size={19} aria-hidden="true" />
                </div>
                <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-silver/70">
                  Com admiração e gratidão
                </p>
                <h2
                  id="inspiration-title"
                  className="text-3xl font-light tracking-tight text-white sm:text-4xl"
                >
                  Ideias que inspiram{" "}
                  <span className="font-semibold text-gradient">
                    novos caminhos.
                  </span>
                </h2>
                <p className="mt-5 max-w-lg text-sm leading-7 text-white/55 sm:text-base">
                  Um agradecimento aos times que compartilham conhecimento,
                  pesquisa e visões capazes de expandir possibilidades. O
                  trabalho de vocês inspira o que construímos a seguir.
                </p>
              </div>

              <div className="grid gap-2 sm:grid-cols-2 lg:col-span-7">
                {inspirations.map((inspiration, index) => (
                  <motion.div
                    key={inspiration.name}
                    initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 0.4,
                      delay: reduceMotion ? 0 : index * 0.06,
                    }}
                    className="group flex min-h-[76px] items-center gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05]"
                  >
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-black/30 font-mono text-xs font-semibold tracking-wide text-white/65 transition-colors group-hover:border-white/20 group-hover:text-white"
                    >
                      {inspiration.mark}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-white/85">
                        {inspiration.name}
                      </span>
                      <span className="mt-1 block text-xs text-white/45">
                        {inspiration.focus}
                      </span>
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
