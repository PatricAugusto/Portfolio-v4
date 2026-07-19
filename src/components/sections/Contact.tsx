"use client";

import React, { useState } from "react";
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
    value: "github.com/PatricAugusto",
    href: siteConfig.github,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/PatricAugusto",
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
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
  
    // Usamos e.currentTarget para garantir o tipo correto do elemento do formulário
    const formData = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(formData.entries());
  
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formObject),
      });
  
      const data = await response.json();
  
      if (response.ok && data.success) {
        setSubmitStatus("success");
        e.currentTarget.reset(); // Limpa o formulário de forma segura
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      // 4. Resolvendo o ESLint: registrando o erro no console ou omitindo-o se não for usar
      console.error("Erro no envio do formulário:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  
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
              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Anti-Spam Honeypot (Segurança ISO) - Invisível para humanos */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                />

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
                      name="name"
                      type="text"
                      required
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
                      name="email"
                      type="email"
                      required
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
                    name="message"
                    rows={5}
                    required
                    placeholder="Conte sobre seu projeto..."
                    className="glass w-full resize-none rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-blue-primary/50 focus:outline-none focus:ring-1 focus:ring-blue-primary/30"
                  />
                </div>

                {/* Consentimento LGPD */}
                <div className="flex items-start gap-3">
                  <input
                    id="privacy"
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5 text-blue-primary focus:ring-0 focus:ring-offset-0"
                  />
                  <label
                    htmlFor="privacy"
                    className="text-xs text-white/50 leading-tight"
                  >
                    Concordo em fornecer estes dados para receber o retorno do
                    meu contato, em conformidade com as diretrizes de
                    privacidade.
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    <Send
                      size={16}
                      className={isSubmitting ? "animate-pulse" : ""}
                    />
                    {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                  </Button>

                  {submitStatus === "success" && (
                    <p className="text-sm text-green-400 font-medium">
                      Mensagem enviada com sucesso!
                    </p>
                  )}
                  {submitStatus === "error" && (
                    <p className="text-sm text-red-400 font-medium">
                      Falha ao enviar. Tente novamente mais tarde.
                    </p>
                  )}
                </div>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
