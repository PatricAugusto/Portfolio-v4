"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Code,
  Database,
  GitBranch,
  Globe,
  Server,
  Sparkles,
  Terminal,
} from "lucide-react";
import {
  categoryLabels,
  skills,
  type Skill,
} from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  nextjs: Globe,
  react: Code,
  typescript: Terminal,
  tailwind: Sparkles,
  nodejs: Server,
  express: Server,
  api: Globe,
  postgresql: Database,
  mysql: Database,
  sql: Database,
  openai: Brain,
  langchain: Brain,
  git: GitBranch,
  docker: Server,
};

function SkillIcon({ icon }: { icon: string }) {
  const Icon = iconMap[icon] ?? Code;
  return <Icon size={22} className="text-blue-soft" />;
}

const categories = [
  "frontend",
  "backend",
  "database",
  "ai",
  "tools",
] as const;

function FloatingSkillCard({
  skill,
  index,
}: {
  skill: Skill;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06, duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.04 }}
      className={cn(
        "stack-float-card glass glass-hover group relative flex w-[132px] flex-col items-center gap-3 rounded-2xl px-4 py-5 sm:w-[148px]",
      )}
      style={{ animationDelay: `${index * 0.35}s` }}
    >
      <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-blue-soft/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-primary/25 bg-gradient-to-br from-blue-primary/15 to-cyan-glow/5 transition-colors duration-300 group-hover:border-blue-soft/40 group-hover:from-blue-primary/25">
        <SkillIcon icon={skill.icon} />
      </div>

      <span className="text-center text-sm font-medium text-white/75 transition-colors duration-300 group-hover:text-white">
        {skill.name}
      </span>
    </motion.div>
  );
}

export function Stack() {
  return (
    <section id="stack" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-blue-primary/[0.03] to-transparent" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-primary/5 blur-[100px]" />

      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeading
          tag="Stack"
          title="Tecnologias que domino"
          description="Um ecossistema completo para construir aplicações web de ponta a ponta — do frontend reativo ao backend robusto, bancos de dados e inteligência artificial."
          align="center"
        />

        <div className="mx-auto flex max-w-4xl flex-col items-center gap-14">
          {categories.map((category, catIndex) => {
            const categorySkills = skills.filter(
              (s: Skill) => s.category === category,
            );

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: catIndex * 0.08, duration: 0.5 }}
                className="flex w-full flex-col items-center"
              >
                <h3 className="mb-6 text-center font-mono text-xs tracking-[0.2em] text-blue-soft/70 uppercase">
                  {categoryLabels[category]}
                </h3>

                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
                  {categorySkills.map((skill, index) => (
                    <FloatingSkillCard
                      key={skill.name}
                      skill={skill}
                      index={catIndex * 4 + index}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mx-auto mt-16 max-w-2xl"
        >
          <div className="stack-float-card glass glow-blue rounded-2xl px-6 py-4 text-center">
            <p className="font-mono text-sm text-white/50">
              <span className="text-cyan-glow">→</span> Frontend reativo{" "}
              <span className="text-white/30">·</span> APIs RESTful{" "}
              <span className="text-white/30">·</span> SGBDs relacionais{" "}
              <span className="text-white/30">·</span> Pipelines de IA
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
