"use client";

import { useRef, type MouseEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";

const techBadges = ["Next.js", "React", "Node.js", "Express", "SQL", "IA"];

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);
  const shouldReduceMotion = useReducedMotion();

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;
    sectionRef.current?.style.setProperty("--mx", x.toFixed(3));
    sectionRef.current?.style.setProperty("--my", y.toFixed(3));
  }

  function handleHeadingMouseMove(event: MouseEvent<HTMLHeadingElement>) {
    const bounds = wordRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const x = clamp(((event.clientX - bounds.left) / bounds.width) * 100, 0, 100);
    const y = clamp(((event.clientY - bounds.top) / bounds.height) * 100, 0, 100);

    wordRef.current?.style.setProperty("--hero-tx", `${x}%`);
    wordRef.current?.style.setProperty("--hero-ty", `${y}%`);
  }

  function handleHeadingMouseLeave() {
    wordRef.current?.style.setProperty("--hero-tx", "50%");
    wordRef.current?.style.setProperty("--hero-ty", "50%");
  }

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20 pb-28 sm:pb-20"
    >
      <style>{`
        @keyframes aurora-drift-a {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -20px) scale(1.08); }
        }
        @keyframes aurora-drift-b {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-24px, 18px) scale(1.05); }
        }

        @property --hero-tx {
          syntax: '<percentage>';
          inherits: true;
          initial-value: 50%;
        }
        @property --hero-ty {
          syntax: '<percentage>';
          inherits: true;
          initial-value: 50%;
        }
        .hero-word-gradient {
          background-image: radial-gradient(
            140% 140% at var(--hero-tx) var(--hero-ty),
            var(--color-warm) 0%,
            var(--color-silver) 55%,
            var(--color-warm) 100%
          );
          transition:
            --hero-tx 0.5s cubic-bezier(0.16, 1, 0.3, 1),
            --hero-ty 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>

      <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" />

      {/* grão sutil pra dar profundidade ao gradiente, só na Hero, é a primeira impressão */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.035] mix-blend-overlay"
        aria-hidden="true"
      >
        <filter id="hero-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>

      {/* orb silver: deriva sozinho + reage sutilmente à posição do cursor */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[500px]"
        style={{
          transform:
            "translate(-50%, -50%) translate(calc(var(--mx, 0) * -24px), calc(var(--my, 0) * -24px))",
        }}
      >
        <div className="h-full w-full rounded-full bg-silver/8 blur-[120px] motion-safe:animate-[aurora-drift-a_16s_ease-in-out_infinite]" />
      </div>

      {/* orb warm: mesma lógica, direção e velocidade diferentes pra sensação orgânica */}
      <div
        className="pointer-events-none absolute right-0 bottom-0 h-[300px] w-[300px]"
        style={{
          transform:
            "translate(calc(var(--mx, 0) * 18px), calc(var(--my, 0) * 18px))",
        }}
      >
        <div className="h-full w-full rounded-full bg-warm/5 blur-[100px] motion-safe:animate-[aurora-drift-b_18s_ease-in-out_infinite]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-silver/25 bg-silver/5 px-4 py-2 text-sm text-silver shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] backdrop-blur-md">
            <Sparkles size={14} className="text-warm" />
            <span>{siteConfig.location}</span>
          </div>

          <h1
            onMouseMove={handleHeadingMouseMove}
            onMouseLeave={handleHeadingMouseLeave}
            className="mb-6 text-4xl leading-tight font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Desenvolvimento web{" "}
            <span
              ref={wordRef}
              className="hero-word-gradient bg-clip-text text-transparent"
            >
              escalável
            </span>
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
                  y: shouldReduceMotion ? 0 : [0, -4, 0],
                  scale: 1,
                }}
                transition={{
                  opacity: { duration: 0.4, delay: 0.6 + i * 0.08 },
                  scale: { duration: 0.4, delay: 0.6 + i * 0.08 },
                  y: {
                    duration: 3.5,
                    repeat: shouldReduceMotion ? 0 : Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 1.0 + i * 0.2,
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                className="cursor-default rounded-lg border border-white/10 bg-white/5 px-3.5 py-1.5 font-mono text-xs text-white/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-md transition-colors duration-300 hover:border-warm/30 hover:text-warm"
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