"use client";

import { useRef, type MouseEvent } from "react";
import { ArrowUp, Github, Linkedin, Mail, MapPin, Terminal } from "lucide-react";
import { navLinks, siteConfig } from "@/data/portfolio";

const socialLinks = [
  {
    code: "01",
    href: siteConfig.github,
    label: "GitHub",
    icon: Github,
    external: true,
  },
  {
    code: "02",
    href: siteConfig.linkedin,
    label: "LinkedIn",
    icon: Linkedin,
    external: true,
  },
  {
    code: "03",
    href: `mailto:${siteConfig.email}`,
    label: "Email",
    icon: Mail,
    external: false,
  },
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
        className="glass-panel group relative mx-auto max-w-6xl rounded-2xl border border-white/10 p-6 shadow-2xl backdrop-blur-xl sm:p-8 [--spot-x:50%] [--spot-y:50%]"
      >
        {/* Spotlight Interativo */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(420px circle at var(--spot-x) var(--spot-y), color-mix(in oklab, var(--color-warm) 8%, transparent), transparent 70%)",
          }}
        />

        {/* Console Termination Header */}
        <div className="relative mb-8 flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs text-white/50">
          <div className="flex items-center gap-2">
            <Terminal size={14} className="text-warm" />
            <span className="font-semibold tracking-wider text-white uppercase">
              END_OF_PAGE // SYSTEM_LOGS
            </span>
          </div>
          <span className="hidden uppercase sm:inline">STATUS: 200 OK</span>
        </div>

        <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-3">
          {/* Identidade / Perfil */}
          <div
            className="animate-[footer-fade-up_0.6s_ease-out_both] text-left"
            style={{ animationDelay: "0ms" }}
          >
            <p className="font-mono text-base font-semibold tracking-wide text-white">
              {siteConfig.name}
            </p>
            <p className="mt-1 font-mono text-xs text-warm">{siteConfig.role}</p>
            <p className="mt-3 font-mono text-xs leading-relaxed text-white/50">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Navegação Rápida */}
          <div
            className="animate-[footer-fade-up_0.6s_ease-out_both] text-left"
            style={{ animationDelay: "80ms" }}
          >
            <p className="mb-3 font-mono text-[10px] font-semibold tracking-widest text-white/50 uppercase">
             INDEX_NAV
            </p>
            <ul className="space-y-2 font-mono text-xs">
              {navLinks.map((link, idx) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    <span className="text-[10px] text-warm/70 group-hover:text-warm">
                      0{idx + 1}.
                    </span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Comunicação e Redes */}
          <div
            className="animate-[footer-fade-up_0.6s_ease-out_both] text-left"
            style={{ animationDelay: "160ms" }}
          >
            <p className="mb-3 font-mono text-[10px] font-semibold tracking-widest text-white/50 uppercase">
               CONNECTIVITY
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="block font-mono text-xs text-white/60 transition-colors duration-300 hover:text-warm"
            >
              {siteConfig.email}
            </a>
            <p className="mt-1.5 flex items-center gap-1.5 font-mono text-xs text-white/50">
              <MapPin size={13} className="text-warm/80" />
              {siteConfig.location}
            </p>

            <div className="mt-4 flex items-center gap-2">
              {socialLinks.map(
                ({ code, href, label, icon: Icon, external }, index) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className="group/icon relative animate-[footer-fade-up_0.6s_ease-out_both]"
                    style={{ animationDelay: `${240 + index * 80}ms` }}
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white/50 backdrop-blur-md transition-all duration-300 group-hover/icon:-translate-y-0.5 group-hover/icon:border-warm/40 group-hover/icon:bg-warm/10 group-hover/icon:text-warm">
                      <Icon size={16} />
                    </div>
                  </a>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Linha de Fechamento / Back to Top */}
        <div
          className="relative mt-10 flex flex-col items-center gap-4 border-t border-white/10 pt-6 animate-[footer-fade-up_0.6s_ease-out_both] sm:flex-row sm:justify-between"
          style={{ animationDelay: "320ms" }}
        >
          <p className="font-mono text-[11px] text-white/50">
            © {year} {siteConfig.name} · BUILD_STACK: [NEXT.JS / REACT / STYLED-COMPONENTS]
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group/top inline-flex cursor-pointer items-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-white/70 backdrop-blur-md transition-all duration-300 hover:border-warm/50 hover:bg-warm/10 hover:text-warm active:scale-95"
          >
            <span>SYS_TOP // RETURN</span>
            <ArrowUp
              size={13}
              className="transition-transform duration-300 group-hover/top:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}