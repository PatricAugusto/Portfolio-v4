"use client";

import { useRef, type MouseEvent } from "react";
import { ArrowUp, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { navLinks, siteConfig } from "@/data/portfolio";

const socialLinks = [
  { href: siteConfig.github, label: "GitHub", icon: Github, external: true },
  {
    href: siteConfig.linkedin,
    label: "LinkedIn",
    icon: Linkedin,
    external: true,
  },
  { href: `mailto:${siteConfig.email}`, label: "Email", icon: Mail, external: false },
];

export function Footer() {
  const year = new Date().getFullYear();
  const panelRef = useRef<HTMLDivElement>(null);

  function handlePanelMouseMove(event: MouseEvent<HTMLDivElement>) {
    const bounds = panelRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    panelRef.current?.style.setProperty("--spot-x", `${x}%`);
    panelRef.current?.style.setProperty("--spot-y", `${y}%`);
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="px-4 py-10 sm:px-6 sm:py-14">
      <style>{`
        @keyframes footer-fade-up {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div
        ref={panelRef}
        onMouseMove={handlePanelMouseMove}
        className="group relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_8px_32px_-8px_rgba(0,0,0,0.35)] backdrop-blur-xl backdrop-saturate-150 sm:p-8 [--spot-x:50%] [--spot-y:50%]"
      >
        {/* spotlight que segue o cursor, mesma técnica do Projects e do About */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(420px circle at var(--spot-x) var(--spot-y), color-mix(in oklab, var(--color-warm) 10%, transparent), transparent 70%)",
          }}
        />

        <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div
            className="animate-[footer-fade-up_0.6s_ease-out_both] text-center sm:text-left"
            style={{ animationDelay: "0ms" }}
          >
            <p className="text-lg font-semibold">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-white/50">{siteConfig.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-white/40">
              {siteConfig.tagline}
            </p>
          </div>

          <div
            className="animate-[footer-fade-up_0.6s_ease-out_both] text-center sm:text-left"
            style={{ animationDelay: "80ms" }}
          >
            <p className="mb-3 text-xs font-semibold tracking-widest text-white/40 uppercase">
              Navegação
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors duration-300 hover:text-warm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="animate-[footer-fade-up_0.6s_ease-out_both] text-center sm:text-left"
            style={{ animationDelay: "160ms" }}
          >
            <p className="mb-3 text-xs font-semibold tracking-widest text-white/40 uppercase">
              Contato
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="block text-sm text-white/60 transition-colors duration-300 hover:text-warm"
            >
              {siteConfig.email}
            </a>
            <p className="mt-1.5 flex items-center justify-center gap-1.5 text-sm text-white/40 sm:justify-start">
              <MapPin size={14} />
              {siteConfig.location}
            </p>

            <div className="mt-4 flex items-center justify-center gap-3 sm:justify-start">
              {socialLinks.map(({ href, label, icon: Icon, external }, index) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="group/icon relative animate-[footer-fade-up_0.6s_ease-out_both]"
                  style={{ animationDelay: `${240 + index * 80}ms` }}
                >
                  <span className="pointer-events-none absolute inset-0 rounded-xl bg-warm/0 blur-md transition-colors duration-500 group-hover/icon:bg-warm/20" />
                  <span className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-md transition-all duration-300 group-hover/icon:-translate-y-1 group-hover/icon:rotate-3 group-hover/icon:border-warm/30 group-hover/icon:text-warm group-active/icon:translate-y-0 group-active/icon:scale-95 group-active/icon:rotate-0">
                    <Icon size={18} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="relative mt-10 flex flex-col items-center gap-4 border-t border-white/10 pt-6 animate-[footer-fade-up_0.6s_ease-out_both] sm:flex-row sm:justify-between"
          style={{ animationDelay: "320ms" }}
        >
          <p className="text-xs text-white/40">
            © {year} {siteConfig.name} · Desenvolvido com Next.js & React
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group/top inline-flex items-center gap-2 rounded-full border border-silver/25 bg-gradient-to-b from-white/10 to-white/5 px-4 py-2 text-xs font-medium text-silver shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] backdrop-blur-md transition-all duration-300 hover:border-warm/40 hover:text-warm active:scale-95"
          >
            Voltar ao topo
            <ArrowUp
              size={14}
              className="transition-transform duration-300 group-hover/top:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}