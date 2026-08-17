"use client";

import { useRef, type MouseEvent } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Code2, Cpu, Database, Layers, Rocket, Zap } from "lucide-react";
import { aboutStats, siteConfig } from "@/data/portfolio";
import profileImage from "@/assets/profile.png";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pillars = [
  {
    icon: Layers,
    title: "Arquitetura & Clean Code",
    description:
      "TypeScript e SOLID como base, arquitetura modular como consequência — cresce em funcionalidade sem crescer em dívida técnica.",
  },
  {
    icon: Zap,
    title: "Performance & Experiência",
    description:
      "SSR e ISR em Next.js, bundles enxutos e Tailwind afinado a milímetro: cada pixel carrega rápido e responde ainda mais rápido.",
  },
  {
    icon: Database,
    title: "Backend & Dados Robustos",
    description:
      "APIs RESTful e microsserviços em Node.js e Express, com Prisma dando tipagem e ordem aos dados em PostgreSQL e SQLite.",
  },
  {
    icon: Rocket,
    title: "Engenharia de IA & LLMs",
    description:
      "IA fora do hype, dentro do produto: OpenAI API e LangChain orquestrando automações que resolvem problema real.",
  },
  {
    icon: Cpu,
    title: "Realtime & Eventos",
    description:
      "Socket.io conectando pontas em baixa latência — dashboards, chats e painéis que se atualizam sozinhos, sem F5.",
  },
  {
    icon: Code2,
    title: "Interfaces Modernas & 3D",
    description:
      "Styled Components e Three.js compondo ecossistemas visuais com identidade própria, onde a interface também é produto.",
  },
];

// tupla fixa (cubic-bezier) — sem isso o TS infere number[] e quebra a tipagem do Framer Motion
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
      {/* auras de fundo — respiração lenta para dar sensação de fluidez */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-warm/5 blur-[120px]"
        animate={
          reduceMotion
            ? undefined
            : { x: [0, -24, 0], y: [0, 18, 0], opacity: [0.6, 1, 0.6] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-silver/5 blur-[100px]"
        animate={
          reduceMotion
            ? undefined
            : { x: [0, 20, 0], y: [0, -16, 0], opacity: [0.5, 0.9, 0.5] }
        }
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          tag="Sobre"
          title="Construindo o digital com precisão"
          description="Transformo ideias em produtos web robustos, combinando engenharia de software com design minimalista e experiências imersivas."
        />

        <div className="mb-16 grid items-center gap-10 lg:grid-cols-[minmax(280px,380px)_1fr] lg:gap-14">
          <motion.div
            {...fadeUp}
            className="relative mx-auto w-full max-w-[380px] lg:mx-0"
          >
            {/* aura giratória — o elemento de assinatura do bloco */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 rounded-[2.5rem] opacity-70 blur-2xl animate-[spin_18s_linear_infinite]"
              style={{
                background:
                  "conic-gradient(from 0deg, color-mix(in oklab, var(--color-warm) 35%, transparent), transparent 30%, color-mix(in oklab, var(--color-silver) 25%, transparent) 55%, transparent 80%)",
              }}
            />

            <div className="profile-fluid-mask relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src={profileImage}
                alt={`Foto de perfil — ${siteConfig.name}`}
                fill
                priority
                sizes="(max-width: 1024px) 380px, 380px"
                className="scale-105 object-cover object-[center_15%] transition-transform duration-700 hover:scale-100"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-void/30 via-transparent to-void/30" />
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-void/60 to-transparent" />

              <div className="absolute inset-0 rounded-[2rem] border border-white/10" />
              <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-warm/40 to-transparent" />
            </div>

            <div className="absolute -right-3 -bottom-3 hidden rounded-2xl border border-white/10 bg-void-light/80 px-4 py-3 backdrop-blur-xl sm:block">
              <p className="font-mono text-xs tracking-widest text-silver uppercase">
                {siteConfig.role}
              </p>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.15, duration: 0.6, ease: EASE_ORGANIC }}
            className="flex flex-col justify-center space-y-6"
          >
            <p className="text-lg leading-relaxed text-white/70 sm:text-xl">
              Sou{" "}
              <span className="font-semibold text-white">{siteConfig.name}</span>
              , {siteConfig.role.toLowerCase()}. Transformo requisitos em
              sistemas que funcionam sob pressão — frontend reativo, backend
              sólido e IA aplicada onde ela realmente resolve algo.
            </p>
            <p className="text-sm leading-relaxed text-slate sm:text-base">
              Design minimalista e precisão técnica não competem entre si —
              se completam. Cada projeto nasce para performar, escalar e
              chegar ao usuário como uma experiência fluida, do primeiro
              clique ao deploy.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {aboutStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.06, duration: 0.45, ease: EASE_ORGANIC }}
                  whileHover={{ y: -4 }}
                >
                  <GlassCard className="text-center !p-4" glow={i === 0}>
                    <p className="text-gradient text-xl font-bold sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-slate">{stat.label}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} index={i} reduceMotion={reduceMotion} />
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

  // motion values para o tilt 3D sutil — spring deixa o movimento fluido, não mecânico
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 220, damping: 20, mass: 0.6 });
  const springRotateY = useSpring(rotateY, { stiffness: 220, damping: 20, mass: 0.6 });
  const translateZ = useTransform([springRotateX, springRotateY], () => 0);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const bounds = cardRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    cardRef.current?.style.setProperty("--spot-x", `${x}%`);
    cardRef.current?.style.setProperty("--spot-y", `${y}%`);

    if (!reduceMotion) {
      rotateY.set((x - 50) / 10); // -5 a 5 graus
      rotateX.set(-(y - 50) / 12);
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
      className="group [--spot-x:50%] [--spot-y:50%]"
      style={{ perspective: 800 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          translateZ,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ y: -6, scale: 1.02 }}
      >
        <GlassCard className="relative h-full overflow-hidden transition-colors duration-300 group-hover:border-silver/30">
          {/* spotlight que segue o cursor */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(220px circle at var(--spot-x) var(--spot-y), color-mix(in oklab, var(--color-warm) 14%, transparent), transparent 70%)",
            }}
          />

          <div className="relative mb-4 flex h-11 w-11 items-center justify-center">
            <span className="pointer-events-none absolute inset-0 rounded-xl bg-warm/0 blur-md transition-colors duration-500 group-hover:bg-warm/25" />
            <span className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-silver/20 bg-silver/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-sm transition-colors duration-300 group-hover:border-warm/40 group-hover:bg-warm/10">
              <Icon
                size={20}
                className="text-warm transition-transform duration-300 group-hover:scale-110"
              />
            </span>
          </div>

          <h3 className="relative mb-2 text-lg font-semibold transition-colors duration-300 group-hover:text-white">
            {pillar.title}
          </h3>
          <p className="relative text-sm leading-relaxed text-white/55 transition-colors duration-300 group-hover:text-white/75">
            {pillar.description}
          </p>

          {/* linha inferior que "acende" no hover — reforça o feedback tátil do card */}
          <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-warm/0 via-warm/60 to-warm/0 transition-transform duration-500 group-hover:scale-x-100" />
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}