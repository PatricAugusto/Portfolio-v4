"use client";

import { motion } from "framer-motion";
import { Code } from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiLangchain,
  SiGit,
} from "react-icons/si";
import { TbApi, TbSql } from "react-icons/tb";

import {
  categoryLabels,
  skills,
  type Skill,
} from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

// Logo SVG Inline oficial da OpenAI para evitar falha de exportação no react-icons
function OpenAiIcon({ size = 22, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.5045 4.5045 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.47 4.47 0 0 1-.5355-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9503a4.4997 4.4997 0 0 1-6.1408-1.6465zM2.3423 8.587a4.4635 4.4635 0 0 1 2.3372-1.9733v5.6772a.7996.7996 0 0 0 .388.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.5045 4.5045 0 0 1 2.3423 8.587zm16.5963 3.8558L13.1038 9.0744l2.0201-1.1685a.0757.0757 0 0 1 .071 0l4.8303 2.7865a4.5045 4.5045 0 0 1-.6813 8.1213v-5.6772a.79 0 0 0-.3928-.6813zm2.0107-3.0231l-.142-.0852-4.7735-2.7582a.7712.7712 0 0 0-.7806 0l-5.8428 3.3685V7.6124a.0804.0804 0 0 1 .0332-.0615l4.8303-2.7866a4.4997 4.4997 0 0 1 6.6802 4.6613zM8.3061 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0599a4.5045 4.5045 0 0 1 7.3757-3.4537l-.1419.0805-4.7783 2.7581a.7948.7948 0 0 0-.3927.6813v6.7369zm1.1176-3.3259l2.5834-1.492 2.5834 1.492v2.984l-2.5834 1.492-2.5834-1.492z" />
    </svg>
  );
}

const iconMap: Record<string, React.ElementType> = {
  nextjs: SiNextdotjs,
  react: SiReact,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  nodejs: SiNodedotjs,
  express: SiExpress,
  api: TbApi,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  sql: TbSql,
  openai: OpenAiIcon,
  langchain: SiLangchain,
  git: SiGit,
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
        "stack-float-card glass glass-hover group relative flex w-33 flex-col items-center gap-3 rounded-2xl px-4 py-5 sm:w-37",
      )}
      style={{ animationDelay: `${index * 0.35}s` }}
    >
      <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-linear-to-r from-transparent via-blue-soft/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-primary/25 bg-linear-to-br from-blue-primary/15 to-cyan-glow/5 transition-colors duration-300 group-hover:border-blue-soft/40 group-hover:from-blue-primary/25">
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
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-blue-primary/3 to-transparent" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-105 w-105 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-primary/5 blur-[100px]" />

      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeading
          tag="Stack"
          title="Tecnologias que domino"
          description="Um ecossistema completo para construir aplicações web de ponta a ponta, do frontend reativo ao backend robusto, bancos de dados e inteligência artificial."
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