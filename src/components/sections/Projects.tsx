"use client";

import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Padrão de spans do bento grid, repetido em ciclo caso a lista de projetos cresça.
const BENTO_SPANS = [
  "lg:col-span-2 lg:row-span-2",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-2 lg:row-span-1",
];

export function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          tag="Projetos"
          title="Soluções que entreguei"
          description="Projetos que demonstram minha capacidade de construir aplicações completas, do design system ao deploy em produção."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-flow-dense lg:auto-rows-[minmax(200px,auto)] lg:grid-cols-3">
          {featured.map((project, index) => (
            <ProjectBentoCard
              key={project.id}
              project={project}
              index={index}
              span={BENTO_SPANS[index % BENTO_SPANS.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectBentoCard({
  project,
  index,
  span,
}: {
  project: Project;
  index: number;
  span: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Tilt 3D sutil que segue o cursor, com física de mola para suavizar o retorno.
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [7, -7]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-7, 7]), {
    stiffness: 200,
    damping: 20,
  });

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const bounds = cardRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    mouseX.set(x);
    mouseY.set(y);

    cardRef.current?.style.setProperty("--spot-x", `${x * 100}%`);
    cardRef.current?.style.setProperty("--spot-y", `${y * 100}%`);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  const isLarge = index === 0;

  return (
    <motion.div
      className={span}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        style={{ rotateX, rotateY, transformPerspective: 800 }}
        className="h-full [--spot-x:50%] [--spot-y:50%]"
      >
        <GlassCard
          className={`group relative h-full overflow-hidden !p-0 ${
            isLarge ? "min-h-[280px]" : "min-h-[220px]"
          }`}
        >
          {/* spotlight que segue o cursor, na paleta warm */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(360px circle at var(--spot-x) var(--spot-y), color-mix(in oklab, var(--color-warm) 16%, transparent), transparent 70%)",
            }}
          />

          {/* véu sutil silver -> warm no hover, mesma linguagem do Navbar/Footer */}
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-silver/5 to-warm/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div
            className={`relative flex h-full flex-col p-6 sm:p-8 ${
              isLarge ? "sm:p-10" : ""
            }`}
          >
            <div className="mb-4 flex items-start justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-silver/25 bg-gradient-to-b from-white/10 to-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] backdrop-blur-md transition-colors duration-300 group-hover:border-warm/40">
                <ArrowUpRight
                  size={18}
                  className="text-silver transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-warm"
                />
              </span>

              <div className="flex gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-warm/30 hover:text-warm active:translate-y-0 active:scale-95"
                    aria-label={`GitHub - ${project.title}`}
                  >
                    <Github size={16} />
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-warm/30 hover:text-warm active:translate-y-0 active:scale-95"
                    aria-label={`Demo - ${project.title}`}
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>

            <h3
              className={`mb-3 font-semibold transition-colors group-hover:text-warm ${
                isLarge ? "text-2xl" : "text-xl"
              }`}
            >
              {project.title}
            </h3>
            <p
              className={`leading-relaxed text-white/55 ${
                isLarge ? "mb-6 text-base" : "mb-5 text-sm"
              }`}
            >
              {project.description}
            </p>

            <div className="mt-auto flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-white/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}