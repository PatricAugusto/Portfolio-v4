"use client";

import { motion } from "framer-motion";
import { Code, Terminal, Cpu } from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiStyledcomponents,
  SiThreedotjs,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiPrisma,
  SiLangchain,
  SiGit,
  SiGithub,
  SiDocker,
  SiGooglegemini,
  SiAnthropic,
  SiRender,
  SiNpm,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { TbApi, TbSql, TbBrain } from "react-icons/tb";

import { categoryLabels, skills, type Skill } from "@/data/portfolio";
import { cn } from "@/lib/utils";

// Logo SVG Inline oficial da OpenAI
function OpenAiIcon({ size = 18, className }: { size?: number; className?: string }) {
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
  javascript: SiJavascript,
  tailwind: SiTailwindcss,
  styledcomponents: SiStyledcomponents,
  threejs: SiThreedotjs,
  nodejs: SiNodedotjs,
  express: SiExpress,
  api: TbApi,
  socketio: SiSocketdotio,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  sqlite: SiSqlite,
  prisma: SiPrisma,
  sql: TbSql,
  openai: OpenAiIcon,
  gemini: SiGooglegemini,
  claude: SiAnthropic,
  responsibleai: TbBrain,
  langchain: SiLangchain,
  git: SiGit,
  github: SiGithub,
  docker: SiDocker,
  render: SiRender,
  vscode: VscCode,
  npm: SiNpm,
};

const categoryMap: Record<string, { code: string; colSpan: string }> = {
  frontend: { code: "01", colSpan: "lg:col-span-7" },
  backend: { code: "02", colSpan: "lg:col-span-5" },
  database: { code: "03", colSpan: "lg:col-span-6" },
  ai: { code: "04", colSpan: "lg:col-span-6" },
  tools: { code: "05", colSpan: "lg:col-span-12" },
};

function SkillBadge({ skill }: { skill: Skill }) {
  const Icon = iconMap[skill.icon] ?? Code;
  const isCore = ["nextjs", "nodejs", "openai", "gemini", "typescript", "render"].includes(
    skill.icon
  );

  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 420, damping: 24, mass: 0.6 }}
      className={cn(
        "group relative flex items-center gap-2.5 rounded-xl border px-3.5 py-2.5 backdrop-blur-md transition-colors duration-300",
        isCore
          ? "border-warm/30 bg-warm/5 hover:border-warm hover:bg-warm/10 hover:shadow-[0_8px_24px_rgba(243,243,243,0.1)]"
          : "border-white/10 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.06] hover:shadow-[0_8px_20px_rgba(208,208,210,0.06)]"
      )}
    >
      <Icon
        size={18}
        className={cn(
          "transition-colors duration-300",
          isCore ? "text-warm" : "text-white/60 group-hover:text-white"
        )}
      />
      <span
        className={cn(
          "font-mono text-xs font-medium tracking-tight transition-colors duration-300",
          isCore ? "text-white" : "text-white/70 group-hover:text-white"
        )}
      >
        {skill.name}
      </span>
      {isCore && (
        <span className="h-1 w-1 rounded-full bg-warm animate-pulse" />
      )}
    </motion.div>
  );
}

export function Stack() {
  const categories = ["frontend", "backend", "database", "ai", "tools"] as const;

  return (
    <section id="stack" className="relative overflow-hidden py-24 sm:py-32">
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Cabeçalho Editorial */}
        <div className="mb-16 border-b border-white/10 pb-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-warm">
               03 . ECOSSISTEMA
            </span>
            <div className="h-px w-8 bg-warm/30" />
          </div>

          <h2 className="mt-4 text-3xl font-light tracking-tight text-white sm:text-5xl">
            Stack & Ferramentas de <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-silver to-warm">
              Alta Performance
            </span>
          </h2>
        </div>

        {/* Bento Grid Desconstruído de Tecnologias */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {categories.map((category, catIndex) => {
            const categorySkills = skills.filter((s: Skill) => s.category === category);
            const config = categoryMap[category];

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: catIndex * 0.08, duration: 0.5 }}
                className={cn(
                  "relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20",
                  config.colSpan
                )}
              >
                {/* Header de Telemetria do Módulo */}
                <div className="mb-6 flex items-center justify-between border-b border-white/5 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-warm">{config.code} --</span>
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-white/80">
                      {categoryLabels[category]}
                    </span>
                  </div>
                  <span className="font-mono text-[9px] tracking-widest text-white/30 uppercase">
                    SYS_MODULE
                  </span>
                </div>

                {/* Badge Grid de Tecnologias */}
                <div className="flex flex-wrap gap-2.5">
                  {categorySkills.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Terminal Telemetry Strip Footer */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/5 bg-white/[0.02] px-5 py-3 font-mono text-xs text-white/50 backdrop-blur-md"
        >
          <div className="flex items-center gap-2">
            <Terminal size={14} className="text-warm" />
            <span>ARQUITETURA: Monolítica & Microsserviços</span>
          </div>

          <div className="flex items-center gap-4 text-white/30">
            <span className="flex items-center gap-1">
              <Cpu size={12} className="text-emerald-500" /> REALTIME_OK
            </span>
            <span>--</span>
            <span>IA_PIPELINES_ACTIVE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}