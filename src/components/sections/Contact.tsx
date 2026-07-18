"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/alexdev",
    href: siteConfig.github,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/alexdev",
    href: siteConfig.linkedin,
  },
  {
    icon: MapPin,
    label: "Localização",
    value: siteConfig.location,
    href: undefined,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[400px] bg-gradient-to-t from-blue-deep/10 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          tag="Contato"
          title="Vamos construir algo incrível"
          description="Estou aberto a novos projetos, parcerias e oportunidades. Entre em contato e vamos conversar sobre como posso ajudar."
          align="center"
        />

        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 lg:col-span-2"
          >
            {contactLinks.map((link) => (
              <GlassCard key={link.label} className="!p-4">
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-4 transition-colors hover:text-blue-soft"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-primary/30 bg-blue-primary/10">
                      <link.icon size={18} className="text-blue-soft" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40">{link.label}</p>
                      <p className="text-sm font-medium">{link.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-primary/30 bg-blue-primary/10">
                      <link.icon size={18} className="text-blue-soft" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40">{link.label}</p>
                      <p className="text-sm font-medium">{link.value}</p>
                    </div>
                  </div>
                )}
              </GlassCard>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <GlassCard className="h-full" glow>
              <form
                className="space-y-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-medium text-white/50"
                    >
                      Nome
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Seu nome"
                      className="glass w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-blue-primary/50 focus:outline-none focus:ring-1 focus:ring-blue-primary/30"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-medium text-white/50"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="glass w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-blue-primary/50 focus:outline-none focus:ring-1 focus:ring-blue-primary/30"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-medium text-white/50"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Conte sobre seu projeto..."
                    className="glass w-full resize-none rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-blue-primary/50 focus:outline-none focus:ring-1 focus:ring-blue-primary/30"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  <Send size={16} />
                  Enviar mensagem
                </Button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
