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
  Terminal,
  Radio,
  ArrowUpRight,
} from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const contactLinks = [
  {
    code: "01",
    icon: Mail,
    label: "Email Direct",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    code: "02",
    icon: Github,
    label: "Source Code",
    value: "github.com/PatricAugusto",
    href: siteConfig.github,
  },
  {
    code: "03",
    icon: Linkedin,
    label: "Network",
    value: "linkedin.com/in/PatricAugusto",
    href: siteConfig.linkedin,
  },
  {
    code: "04",
    icon: MapPin,
    label: "Location Base",
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
        e.currentTarget.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      console.error("Erro no envio do formulário:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Cabeçalho Editorial */}
        <div className="mb-16 border-b border-white/10 pb-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-warm">
               05 . COMUNICAÇÃO
            </span>
            <div className="h-px w-8 bg-warm/30" />
          </div>

          <h2 className="mt-4 text-3xl font-light tracking-tight text-white sm:text-5xl">
            Vamos Construir <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-silver to-warm">
              O Próximo Projeto
            </span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Coluna Esquerda: Channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-3 lg:col-span-5"
          >
            <div className="mb-2 flex items-center justify-between px-1 font-mono text-[10px] tracking-widest text-white/40 uppercase">
              <span>CANANIS_DE_CONEXÃO</span>
              <span className="flex items-center gap-1 text-emerald-400">
                <Radio size={10} className="animate-pulse" /> ONLINE
              </span>
            </div>

            {contactLinks.map((link) => {
              const Icon = link.icon;
              const content = (
                <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur-xl transition-all duration-300 hover:border-warm/40 hover:bg-white/[0.03]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-silver transition-colors duration-300 group-hover:border-warm/40 group-hover:text-warm">
                        <Icon size={18} />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] text-warm">
                            [{link.code}]
                          </span>
                          <p className="font-mono text-xs text-white/50">
                            {link.label}
                          </p>
                        </div>
                        <p className="text-sm font-medium text-white/90 group-hover:text-white">
                          {link.value}
                        </p>
                      </div>
                    </div>

                    {link.href && (
                      <ArrowUpRight
                        size={16}
                        className="text-white/30 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-warm"
                      />
                    )}
                  </div>
                </div>
              );

              return link.href ? (
                <a
                  key={link.label}
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
                <div key={link.label}>{content}</div>
              );
            })}
          </motion.div>

          {/* Coluna Direita: Form Console */}
          <motion.div
            ref={formPanelRef}
            onMouseMove={handleFormMouseMove}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl sm:p-8 lg:col-span-7 [--spot-x:50%] [--spot-y:50%]"
          >
            {/* Spotlight */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(420px circle at var(--spot-x) var(--spot-y), color-mix(in oklab, var(--color-warm) 8%, transparent), transparent 70%)",
              }}
            />

            {/* Form Terminal Header */}
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Terminal size={16} className="text-warm" />
                <span className="font-mono text-xs font-semibold tracking-wider text-white uppercase">
                  DISPATCH_CONSOLE
                </span>
              </div>
              <span className="font-mono text-[10px] text-white/30 uppercase">
                PORT: 443 // SECURE
              </span>
            </div>

            <form className="relative space-y-5" onSubmit={handleSubmit}>
              {/* Anti-Spam Honeypot */}
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
                    className="mb-2 block font-mono text-xs text-white/60"
                  >
                    IDENTIFIER [NOME]
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Ex: Alan Turing"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 font-mono text-sm text-white transition-all duration-300 placeholder:text-white/20 focus:border-warm/50 focus:bg-white/[0.06] focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-mono text-xs text-white/60"
                  >
                    RETURN_ADDR [EMAIL]
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="alan@turing.org"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 font-mono text-sm text-white transition-all duration-300 placeholder:text-white/20 focus:border-warm/50 focus:bg-white/[0.06] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-xs text-white/60"
                >
                  PAYLOAD [MENSAGEM]
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Descreva o escopo do projeto ou ideia..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 font-mono text-sm text-white transition-all duration-300 placeholder:text-white/20 focus:border-warm/50 focus:bg-white/[0.06] focus:outline-none"
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
                  className="font-mono text-[11px] leading-tight text-white/40"
                >
                  Autorizo o processamento dos dados informados para retorno da
                  comunicação, de acordo com as políticas de privacidade.
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
                    size={15}
                    className={isSubmitting ? "animate-pulse" : ""}
                  />
                  {isSubmitting ? "Transmitindo..." : "Transmitir Mensagem"}
                </Button>

                <AnimatePresence mode="wait">
                  {submitStatus === "success" && (
                    <motion.p
                      key="success"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="flex items-center gap-2 font-mono text-xs font-medium text-emerald-400"
                    >
                      <CheckCircle2 size={16} />
                      TRANSMISSÃO_CONCLUÍDA
                    </motion.p>
                  )}
                  {submitStatus === "error" && (
                    <motion.p
                      key="error"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="flex items-center gap-2 font-mono text-xs font-medium text-red-400"
                    >
                      <AlertCircle size={16} />
                      ERRO_NO_ENVIO: Tente novamente.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}