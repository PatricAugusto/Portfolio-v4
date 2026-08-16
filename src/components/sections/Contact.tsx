"use client";

import React, { useRef, useState, type MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
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
  const formPanelRef = useRef<HTMLDivElement>(null);

  function handleFormMouseMove(event: MouseEvent<HTMLDivElement>) {
    const bounds = formPanelRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    formPanelRef.current?.style.setProperty("--spot-x", `${x}%`);
    formPanelRef.current?.style.setProperty("--spot-y", `${y}%`);
  }

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
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute top-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-warm/5 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-silver/5 blur-[100px]" />

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
            {contactLinks.map((link) => {
              const Icon = link.icon;
              const content = (
                <div className="flex items-center gap-4">
                  <span className="relative flex h-10 w-10 shrink-0 items-center justify-center">
                    <span className="pointer-events-none absolute inset-0 rounded-xl bg-warm/0 blur-md transition-colors duration-500 group-hover:bg-warm/25" />
                    <span className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-silver/25 bg-gradient-to-b from-white/10 to-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] backdrop-blur-md transition-colors duration-300 group-hover:border-warm/40">
                      <Icon
                        size={18}
                        className="text-silver transition-colors duration-300 group-hover:text-warm"
                      />
                    </span>
                  </span>
                  <div>
                    <p className="text-xs text-white/40">{link.label}</p>
                    <p className="text-sm font-medium">{link.value}</p>
                  </div>
                </div>
              );

              return (
                <GlassCard
                  key={link.label}
                  className="group !p-4 transition-colors duration-300 hover:border-silver/30"
                >
                  {link.href ? (
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </GlassCard>
              );
            })}
          </motion.div>

          <motion.div
            ref={formPanelRef}
            onMouseMove={handleFormMouseMove}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 [--spot-x:50%] [--spot-y:50%]"
          >
            <GlassCard className="group relative h-full overflow-hidden" glow>
              {/* spotlight que segue o cursor, mesma técnica do Projects/About/Footer */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(420px circle at var(--spot-x) var(--spot-y), color-mix(in oklab, var(--color-warm) 10%, transparent), transparent 70%)",
                }}
              />

              <form className="relative space-y-5" onSubmit={handleSubmit}>
                {/* Anti-Spam Honeypot (Segurança ISO), Invisível para humanos */}
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
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white backdrop-blur-md transition-all duration-300 placeholder:text-white/30 focus:border-warm/40 focus:shadow-[0_0_20px_-6px_var(--tw-shadow-color)] focus:shadow-warm/40 focus:outline-none"
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
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white backdrop-blur-md transition-all duration-300 placeholder:text-white/30 focus:border-warm/40 focus:shadow-[0_0_20px_-6px_var(--tw-shadow-color)] focus:shadow-warm/40 focus:outline-none"
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
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white backdrop-blur-md transition-all duration-300 placeholder:text-white/30 focus:border-warm/40 focus:shadow-[0_0_20px_-6px_var(--tw-shadow-color)] focus:shadow-warm/40 focus:outline-none"
                  />
                </div>

                {/* Consentimento LGPD */}
                <div className="flex items-start gap-3">
                  <input
                    id="privacy"
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5 text-warm focus:ring-0 focus:ring-offset-0"
                  />
                  <label
                    htmlFor="privacy"
                    className="text-xs leading-tight text-white/50"
                  >
                    Concordo em fornecer estes dados para receber o retorno do
                    meu contato, em conformidade com as diretrizes de
                    privacidade.
                  </label>
                </div>

                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
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

                  <AnimatePresence mode="wait">
                    {submitStatus === "success" && (
                      <motion.p
                        key="success"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.25 }}
                        className="flex items-center gap-2 text-sm font-medium text-emerald-400"
                      >
                        <CheckCircle2 size={16} />
                        Mensagem enviada com sucesso!
                      </motion.p>
                    )}
                    {submitStatus === "error" && (
                      <motion.p
                        key="error"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.25 }}
                        className="flex items-center gap-2 text-sm font-medium text-red-400"
                      >
                        <AlertCircle size={16} />
                        Falha ao enviar. Tente novamente mais tarde.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}