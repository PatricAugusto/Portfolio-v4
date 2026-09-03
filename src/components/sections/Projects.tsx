"use client";

import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

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

        {/* Layout Desconstruído */}
        {/* Grid Desconstruído Assimétrico (Alternado via CSS) */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
            {featured.map((project, index) => (
              <DeconstructedCard
                key={project.id}
                project={project}
                index={index}
                isOffset={index % 2 !== 0} // Desloca colunas ímpares para criar ritmo visual
              />
            ))}
        </div>
      </div>
    </section>
  );
}

{/* Card Secundário Desconstruído com Elevação Offset */}
function DeconstructedCard({
  project,
  index,
  isOffset,
}: {
  project: Project;
  index: number;
  isOffset: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [4, -4]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-4, 4]), { stiffness: 150, damping: 20 });

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const bounds = cardRef.current?.getBoundingClientRect();
    if (!bounds) return;
    mouseX.set((event.clientX - bounds.left) / bounds.width);
    mouseY.set((event.clientY - bounds.top) / bounds.height);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  const isLive = Boolean(project.link);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`h-full ${isOffset ? "lg:translate-y-8" : ""}`} // Aplica o desnível vertical entre colunas
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        className="h-full"
      >
        <GlassCard className="group relative flex h-full flex-col justify-between overflow-hidden border-t-2 border-t-white/10 !p-7 transition-all duration-500 hover:border-t-warm/60">
          <div>
            {/* Top Bar: Número do projeto e links */}
            <div className="mb-6 flex items-center justify-between">
              <span className="font-mono text-xs text-white/50">
                0{index + 2} 
              </span>
              <div className="flex gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 transition-colors hover:text-warm"
                  >
                    <Github size={16} />
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 transition-colors hover:text-warm"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>

            <h3 className="mb-3 text-xl font-medium tracking-wide text-white transition-colors group-hover:text-warm">
              {project.title}
            </h3>
            <p className="text-sm leading-relaxed text-white/55">
              {project.description}
            </p>
          </div>

          {/* Bottom Bar: Status + Tag pill desconstruído */}
          <div className="mt-8 border-t border-white/5 pt-4">
            <div className="mb-3 flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${isLive ? "bg-warm" : "bg-silver/40"}`} />
              <span className="font-mono text-[11px] uppercase tracking-wider text-white/50">
                {isLive ? "Live" : "Open Source"}
              </span>
            </div>

            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {project.tags.map((tag) => (
                <span key={tag} className="font-mono text-[11px] text-white/50">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}