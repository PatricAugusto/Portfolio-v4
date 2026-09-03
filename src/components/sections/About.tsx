"use client";

import { useRef, type MouseEvent } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { Code2, Cpu, Database, Layers, Rocket, Terminal, Zap } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import profileImage from "@/assets/profile.png";

const pillars = [
  {
    code: "01",
    icon: Layers,
    title: "Arquitetura & Clean Code",
    description:
      "TypeScript e SOLID como base, arquitetura modular como consequência — cresce em funcionalidade sem crescer em dívida técnica.",
    colSpan: "lg:col-span-7",
  },
  {
    code: "02",
    icon: Zap,
    title: "Performance & Experiência",
    description:
      "SSR e ISR em Next.js, bundles enxutos e Tailwind afinado a milímetro: cada pixel carrega rápido.",
    colSpan: "lg:col-span-5",
  },
  {
    code: "03",
    icon: Database,
    title: "Backend & Dados Robustos",
    description:
      "APIs RESTful e microsserviços em Node.js e Express, com Prisma dando tipagem e ordem aos dados em PostgreSQL e SQLite.",
    colSpan: "lg:col-span-4",
  },
  {
    code: "04",
    icon: Rocket,
    title: "Engenharia de IA & LLMs",
    description:
      "IA fora do hype, dentro do produto: OpenAI API e LangChain orquestrando automações que resolvem problemas reais.",
    colSpan: "lg:col-span-8",
  },
  {
    code: "05",
    icon: Cpu,
    title: "Realtime & Eventos",
    description:
      "Socket.io conectando pontas em baixa latência — dashboards e chats que se atualizam sozinhos, sem F5.",
    colSpan: "lg:col-span-6",
  },
  {
    code: "06",
    icon: Code2,
    title: "Interfaces Modernas",
    description:
      "Styled Components e ecossistemas visuais com identidade própria, onde a interface também é produto.",
    colSpan: "lg:col-span-6",
  },
];

const EASE_ORGANIC: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: EASE_ORGANIC },
};

export function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      {/* Linha de Grade de Fundo Desconstruída */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Cabeçalho Editorial */}
        <div className="mb-16 border-b border-white/10 pb-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-warm">
               02 . SOBRE
            </span>
            <div className="h-px w-8 bg-warm/30" />
          </div>

          <h2 className="mt-4 text-3xl font-light tracking-tight text-white sm:text-5xl">
            Construindo o digital com <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-silver to-warm">
              Precisão & Arquitetura
            </span>
          </h2>
        </div>

        {/* Bloco Perfil + Bio + Métricas Desconstruídas */}
        <div className="mb-24 grid items-start gap-12 lg:grid-cols-12">
          {/* Card da Foto ajustado para cores naturais com overlay de tema */}
          <motion.div {...fadeUp} className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-2 backdrop-blur-xl">
              <div className="absolute top-4 left-4 z-20 font-mono text-[9px] tracking-widest text-white/60 drop-shadow">
                POS: 27.10° S / 52.61° W
              </div>
              <div className="absolute top-4 right-4 z-20 font-mono text-[9px] text-warm drop-shadow">
                [SYS_OK]
              </div>

              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <Image
                  src={profileImage}
                  alt={`Foto de perfil — ${siteConfig.name}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="scale-105 object-cover object-[center_15%] transition-transform duration-700 hover:scale-100"
                />
                {/* Gradient overlay sutil para harmonizar a iluminação com a UI */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-warm/10 opacity-70" />
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between border-t border-white/15 pt-3 backdrop-blur-xs">
                <span className="font-mono text-xs font-medium tracking-wider text-white">
                  {siteConfig.name}
                </span>
                <span className="font-mono text-[10px] text-warm">
                  FULL-STACK / AI
                </span>
              </div>
            </div>
          </motion.div>

          {/* Texto de Bio + Grid de Métricas Bento Assimétrico (7 colunas) */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.15, duration: 0.6, ease: EASE_ORGANIC }}
            className="flex flex-col justify-between space-y-8 lg:col-span-7"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-white/70">
                <Terminal size={12} className="text-warm" />
                <span>manifesto_tecnico.ts</span>
              </div>

              <p className="text-lg leading-relaxed text-white/80 sm:text-xl font-light">
                Transformo requisitos em sistemas que funcionam sob alta demanda — com{" "}
                <strong className="font-medium text-white">frontend reativo</strong>,{" "}
                <strong className="font-medium text-white">backend sólido</strong> e{" "}
                <strong className="font-medium text-warm">IA aplicada</strong> onde realmente resolve gargalos reais.
              </p>

              <p className="text-sm leading-relaxed text-white/50 sm:text-base">
                Design minimalista e engenharia rigorosa não entram em conflito. Cada linha de código nasce para performar, escalar e entregar uma experiência sem atritos, do protótipo ao ambiente de produção.
              </p>
            </div>

            {/* Painel de Métricas e Status Desconstruído (Bento Grid) */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-12">
              {/* Metric 1: Anos de Experiência */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl transition-all duration-300 hover:border-warm/40 sm:col-span-5"
              >
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="font-mono text-[10px] tracking-widest text-white/50 uppercase">
                     METRIC_01
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-warm animate-pulse" />
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-mono text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                    3+
                  </span>
                  <span className="font-mono text-xs text-warm">ANOS</span>
                </div>
                <p className="mt-1 font-mono text-xs tracking-wider text-white/50 uppercase">
                  Experiência
                </p>
              </motion.div>

              {/* Metric 2: Projetos Entregues */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl transition-all duration-300 hover:border-silver/40 sm:col-span-3"
              >
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="font-mono text-[10px] tracking-widest text-white/50 uppercase">
                     METRIC_02
                  </span>
                </div>
                <div className="mt-4 font-mono text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  200<span className="text-warm">+</span>
                </div>
                <p className="mt-1 font-mono text-xs text-white/50 uppercase">
                  Projetos
                </p>
              </motion.div>

              {/* Metric 3: Stack Principal */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="group relative overflow-hidden rounded-2xl border border-warm/20 bg-gradient-to-br from-warm/10 via-black/40 to-black/60 p-5 backdrop-blur-xl transition-all duration-300 hover:border-warm/50 sm:col-span-4"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="font-mono text-[10px] tracking-widest text-warm uppercase">
                     CORE_STACK
                  </span>
                  <span className="rounded bg-warm/20 px-1.5 py-0.5 font-mono text-[9px] text-warm font-semibold">
                    ACTIVE
                  </span>
                </div>
                <div className="mt-3 font-mono text-sm font-bold leading-snug text-white">
                  Full Stack <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-warm via-white to-silver">
                    & IA Integrada
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-1">
                  <span className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[9px] text-white/60">
                    Next.js
                  </span>
                  <span className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[9px] text-white/60">
                    Node
                  </span>
                  <span className="rounded border border-warm/30 bg-warm/10 px-1.5 py-0.5 font-mono text-[9px] text-warm">
                    LLM
                  </span>
                </div>
              </motion.div>

              {/* Strip de Disponibilidade Footer */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.24 }}
                className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/5 bg-white/[0.02] px-5 py-3 font-mono text-xs backdrop-blur-md sm:col-span-12"
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-white/50">DISPONIBILIDADE:</span>
                  <span className="font-semibold text-white">Remoto / Worldwide</span>
                </div>

                <div className="hidden items-center gap-4 text-white/50 sm:flex">
                  <span>LOC: BRASIL</span>
                  <span>--</span>
                  <span>TZ: UTC-3</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Pilares com Grid Desconstruído (Bento Asymmetric) */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {pillars.map((pillar, i) => (
            <PillarCard
              key={pillar.title}
              pillar={pillar}
              index={i}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarCard({
  pillar,
  index,
  reduceMotion,
}: {
  pillar: (typeof pillars)[number];
  index: number;
  reduceMotion: boolean | null;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = pillar.icon;

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 220, damping: 20, mass: 0.6 });
  const springRotateY = useSpring(rotateY, { stiffness: 220, damping: 20, mass: 0.6 });

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const bounds = cardRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    cardRef.current?.style.setProperty("--spot-x", `${x}%`);
    cardRef.current?.style.setProperty("--spot-y", `${y}%`);

    if (!reduceMotion) {
      rotateY.set((x - 50) / 12);
      rotateX.set(-(y - 50) / 14);
    }
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      {...fadeUp}
      transition={{ delay: index * 0.08, duration: 0.5, ease: EASE_ORGANIC }}
      className={`group relative ${pillar.colSpan}`}
      style={{ perspective: 800 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl transition-colors duration-300 hover:border-warm/40"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(240px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(255, 255, 255, 0.05), transparent 80%)",
          }}
        />

        <div className="mb-6 flex items-center justify-between border-b border-white/5 pb-3">
          <span className="font-mono text-xs text-warm">{pillar.code} --</span>
          <Icon size={18} className="text-white/50 transition-colors group-hover:text-warm" />
        </div>

        <h3 className="mb-2 text-lg font-medium text-white transition-colors group-hover:text-warm">
          {pillar.title}
        </h3>

        <p className="text-sm leading-relaxed text-white/50 group-hover:text-white/70">
          {pillar.description}
        </p>
      </motion.div>
    </motion.div>
  );
}