"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
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
          description="Projetos que demonstram minha capacidade de construir aplicações completas — do design system ao deploy em produção."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <GlassCard className="group relative h-full overflow-hidden !p-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-primary/5 to-cyan-glow/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative p-6 sm:p-8">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-primary/30 bg-blue-primary/10">
                      <ArrowUpRight
                        size={18}
                        className="text-blue-soft transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/40 transition-colors hover:border-white/20 hover:text-white"
                          aria-label={`GitHub - ${project.title}`}
                        >
                          <Github size={16} />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/40 transition-colors hover:border-white/20 hover:text-white"
                          aria-label={`Demo - ${project.title}`}
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="mb-3 text-xl font-semibold transition-colors group-hover:text-blue-soft">
                    {project.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-white/55">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
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
          ))}
        </div>
      </div>
    </section>
  );
}
