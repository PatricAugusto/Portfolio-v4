"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  Check,
  Code2,
  Database,
  Layers3,
  Terminal,
} from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";

const workflowSteps = [
  {
    icon: Code2,
    title: "Produto & engenharia",
    detail: "Interfaces rápidas, APIs e arquitetura",
  },
  {
    icon: BrainCircuit,
    title: "IA com propósito",
    detail: "Automação e inteligência integrada",
  },
  {
    icon: Database,
    title: "Dados confiáveis",
    detail: "Persistência segura e pronta para escalar",
  },
];

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative flex min-h-[92svh] flex-col justify-between overflow-hidden px-6 pb-10 pt-32 sm:px-10 sm:pt-36 lg:px-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10rem] top-36 h-[28rem] w-[28rem] rounded-full bg-silver/[0.035] blur-3xl"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl flex-1 items-center gap-14 py-14 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-8 flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] text-silver/70 uppercase">
            <span aria-hidden="true" className="h-px w-8 bg-warm/70" />
            Engenharia de software · IA aplicada
          </div>

          <h1
            id="hero-title"
            className="mb-7 text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-6xl lg:text-[4.5rem]"
          >
            Software inteligente,
            <span className="mt-1 block font-normal text-silver">
              feito para resolver.
            </span>
          </h1>

          <p className="max-w-xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
            Olá, sou{" "}
            <strong className="font-medium text-white">{siteConfig.name}</strong>.
            Transformo problemas complexos em produtos digitais claros,
            escaláveis e com IA aplicada onde ela realmente agrega valor.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="#projects" size="lg" className="group">
              Ver Projetos
              <ArrowUpRight
                size={16}
                aria-hidden="true"
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              Vamos conversar
            </Button>
          </div>

          <div className="mt-11 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-5 text-xs text-white/50">
            <span className="inline-flex items-center gap-2">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-silver"
              />
              Disponível para projetos
            </span>
            <span>{siteConfig.location} · Remoto</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
          className="relative"
        >
          <div className="glass-panel rounded-2xl border border-white/10 p-5 sm:p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="font-mono text-[10px] tracking-[0.16em] text-white/40 uppercase">
                  Como eu construo
                </p>
                <h2 className="mt-2 text-lg font-medium text-white">
                  Da ideia ao produto
                </h2>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-silver/15 bg-white/[0.04] text-silver">
                <BrainCircuit size={19} aria-hidden="true" />
              </div>
            </div>

            <div
              className="space-y-1 py-5"
              aria-label="Etapas de desenvolvimento"
            >
              {workflowSteps.map(({ icon: Icon, title, detail }, index) => (
                <div
                  key={title}
                  className="flex items-center gap-4 rounded-xl px-3 py-3 transition-colors hover:bg-white/[0.035]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-black/20 text-silver/80">
                    <Icon size={16} aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-white/90">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-white/45">
                      {detail}
                    </p>
                  </div>
                  {index === 1 ? (
                    <span className="rounded-md border border-silver/15 bg-white/[0.04] px-2 py-1 font-mono text-[9px] tracking-wide text-silver/70 uppercase">
                      IA
                    </span>
                  ) : (
                    <Check
                      size={14}
                      className="text-white/25"
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-white/10 pt-4">
              <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-wider text-white/40 uppercase">
                <Layers3 size={13} aria-hidden="true" />
                Stack full stack
              </span>
              <Terminal
                size={14}
                className="text-white/30"
                aria-hidden="true"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between border-t border-white/10 pt-5">
        <p className="text-xs text-white/40">{siteConfig.tagline}</p>
        <a
          href="#about"
          className="inline-flex items-center gap-2 text-xs text-white/45 transition-colors hover:text-white"
          aria-label="Conheça mais sobre mim"
        >
          <span className="hidden sm:inline">Conheça meu trabalho</span>
          <ArrowDown size={14} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
