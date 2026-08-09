"use client";

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
      "Aplicações estruturadas com TypeScript, padrões SOLID e arquitetura modular, garantindo código limpo, manutenível e escalável.",
  },
  {
    icon: Zap,
    title: "Performance & Experiência",
    description:
      "Renderização otimizada com Next.js (SSR/ISR), bundles enxutos e Tailwind CSS para interfaces fluidas e de altíssimo rendimento.",
  },
  {
    icon: Database,
    title: "Backend & Dados Robustos",
    description:
      "APIs RESTful e microsserviços em Node.js e Express, integrados com ORMs modernos (Prisma) e bancos SQL (PostgreSQL, SQLite).",
  },
  {
    icon: Rocket,
    title: "Engenharia de IA & LLMs",
    description:
      "Integração de inteligência artificial aplicada em produção com OpenAI API e LangChain para automação e novos modelos de produto.",
  },
  {
    icon: Cpu,
    title: "Realtime & Eventos",
    description:
      "Comunicação bidirecional e baixa latência utilizando Socket.io para dashboards interativos, chats e atualizações em tempo real.",
  },
  {
    icon: Code2,
    title: "Interfaces Modernas & 3D",
    description:
      "Construção de ecossistemas visuais marcantes combinando Styled Components, Styled UI e renderizações dinâmicas com Three.js.",
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
                className="object-cover object-[center_15%] scale-105 transition-transform duration-700 hover:scale-100"
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
                <GlassCard
                  key={stat.label}
                  className="text-center !p-4"
                  glow={i === 0}
                >
                  <p className="text-gradient text-xl font-bold sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-slate">{stat.label}</p>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              {...fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ delay: i * 0.08, duration: 0.3, ease: "easeOut" }}
              className="group"
            >
              <GlassCard className="h-full transition-colors duration-300 group-hover:border-silver/30">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-silver/20 bg-silver/5 transition-colors duration-300 group-hover:border-warm/40 group-hover:bg-warm/10">
                  <pillar.icon size={20} className="text-warm transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="mb-2 text-lg font-semibold transition-colors duration-300 group-hover:text-white">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/55 transition-colors duration-300 group-hover:text-white/75">
                  {pillar.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}