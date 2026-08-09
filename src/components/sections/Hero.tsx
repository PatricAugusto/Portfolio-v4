"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";

const techBadges = ["Next.js", "React", "Node.js", "Express", "SQL", "IA"];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20 pb-28 sm:pb-20"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />

      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-silver/8 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-warm/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-silver/25 bg-silver/5 px-4 py-2 text-sm text-silver">
            <Sparkles size={14} className="text-warm" />
            <span>{siteConfig.location}</span>
          </div>

          <h1 className="mb-6 text-4xl leading-tight font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Desenvolvimento web{" "}
            <span className="text-gradient">escalável</span>
            <br />
            para o futuro
          </h1>

          <p className="mx-auto mb-4 max-w-2xl text-lg text-white/60 sm:text-xl">
            {siteConfig.role} especializado em arquiteturas robustas com{" "}
            <span className="text-white/80">Next.js</span>,{" "}
            <span className="text-white/80">React</span>,{" "}
            <span className="text-white/80">Node.js</span> e integração com{" "}
            <span className="text-white/80">IA</span>.
          </p>

          <p className="mx-auto mb-10 max-w-xl font-mono text-sm tracking-wide text-white/40">
            {siteConfig.tagline}
          </p>

          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="#projects" size="lg">
              Ver projetos
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              Entrar em contato
            </Button>
          </div>

          {/* Badges Animadas */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {techBadges.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  y: [0, -4, 0],
                  scale: 1,
                }}
                transition={{
                  opacity: { duration: 0.4, delay: 0.6 + i * 0.08 },
                  scale: { duration: 0.4, delay: 0.6 + i * 0.08 },
                  y: {
                    duration: 3.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 1.0 + i * 0.2,
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  borderColor: "rgba(255, 255, 255, 0.25)",
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                className="glass cursor-default rounded-lg border border-silver/10 px-3.5 py-1.5 font-mono text-xs text-white/50 transition-colors hover:text-white/80 hover:shadow-[0_0_12px_rgba(255,255,255,0.05)]"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Seta posicionada em relação à Section inteira com espaçamento seguro no mobile */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 p-2 text-white/30 transition-colors hover:text-warm sm:bottom-8"
        aria-label="Rolar para baixo"
      >
        <ArrowDown size={24} className="animate-bounce" />
      </motion.a>
    </section>
  );
}