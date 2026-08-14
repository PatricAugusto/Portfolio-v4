"use client";

import { useRef, type MouseEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
      "Bases sólidas em TypeScript e princípios SOLID, com arquitetura modular pensada para crescer sem acumular dívida técnica.",
  },
  {
    icon: Zap,
    title: "Performance & Experiência",
    description:
      "Next.js com SSR e ISR, bundles enxutos e Tailwind CSS trabalhando juntos para interfaces rápidas do primeiro ao último pixel.",
  },
  {
    icon: Database,
    title: "Backend & Dados Robustos",
    description:
      "APIs RESTful e microsserviços em Node.js e Express, com Prisma orquestrando dados em PostgreSQL e SQLite de forma tipada.",
  },
  {
    icon: Rocket,
    title: "Engenharia de IA & LLMs",
    description:
      "IA aplicada em produção de verdade: OpenAI API e LangChain orquestrando automações e novos fluxos de produto.",
  },
  {
    icon: Cpu,
    title: "Realtime & Eventos",
    description:
      "Socket.io para comunicação bidirecional de baixa latência — dashboards, chats e eventos que atualizam sozinhos, em tempo real.",
  },
  {
    icon: Code2,
    title: "Interfaces Modernas & 3D",
    description:
      "Ecossistemas visuais marcantes com Styled Components e renderizações 3D em Three.js, onde a interface também é produto.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-warm/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-silver/5 blur-[100px]" />

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
            <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-warm/15 via-silver/5 to-transparent blur-2xl" />

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
            transition={{ delay: 0.15, duration: 0.5 }}
            className="flex flex-col justify-center space-y-6"
          >
            <p className="text-lg leading-relaxed text-white/70 sm:text-xl">
              Sou{" "}
              <span className="font-semibold text-white">{siteConfig.name}</span>
              , {siteConfig.role.toLowerCase()} com foco em soluções web
              escaláveis, unindo frontend reativo, backend sólido e integração
              inteligente com IA.
            </p>
            <p className="text-sm leading-relaxed text-slate sm:text-base">
              Minha abordagem combina precisão técnica com estética minimalista.
              Cada projeto é pensado para performar, escalar e entregar
              experiências fluidas que convergem design e engenharia.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {aboutStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  whileHover={{ y: -3 }}
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
            <PillarCard key={pillar.title} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = pillar.icon;

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const bounds = cardRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    cardRef.current?.style.setProperty("--spot-x", `${x}%`);
    cardRef.current?.style.setProperty("--spot-y", `${y}%`);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      {...fadeUp}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ delay: index * 0.08, duration: 0.3, ease: "easeOut" }}
      className="group [--spot-x:50%] [--spot-y:50%]"
    >
      <GlassCard className="relative h-full overflow-hidden transition-colors duration-300 group-hover:border-silver/30">
        {/* spotlight que segue o cursor, mesma técnica do Projects */}
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
      </GlassCard>
    </motion.div>
  );
}