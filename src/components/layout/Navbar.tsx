"use client";

import { useEffect, useState } from "react";
import { Menu, X, Terminal, Radio } from "lucide-react";
import { navLinks, siteConfig } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/10 bg-black/60 py-3 backdrop-blur-xl shadow-2xl shadow-black/80"
          : "py-5 bg-transparent"
      )}
    >
      {/* Top Telemetry Line */}
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-warm/40 to-transparent transition-opacity duration-500",
          scrolled ? "opacity-100" : "opacity-0"
        )}
      />

      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        {/* Brand / Identifier */}
        <a
          href="#hero"
          className="group relative flex items-center gap-3"
          onClick={() => setMobileOpen(false)}
        >
          <div className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-black/60 font-mono text-xs font-bold text-warm backdrop-blur-md transition-colors duration-300 group-hover:border-warm/50 group-hover:bg-warm/10">
            <span className="relative z-10">{siteConfig.name.charAt(0)}</span>
            <span className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 bg-warm animate-pulse" />
          </div>

          <div className="hidden flex-col sm:flex">
            <span className="font-mono text-xs font-semibold tracking-wider text-white uppercase group-hover:text-warm transition-colors">
              {siteConfig.name}
            </span>
            <span className="font-mono text-[9px] tracking-widest text-white/30 uppercase">
              SYS_NAV // ONLINE
            </span>
          </div>
        </a>

        {/* Desktop Central Navigation Dock */}
        <div className="hidden items-center rounded-xl border border-white/10 bg-black/40 p-1.5 backdrop-blur-xl md:flex">
          <ul className="flex items-center gap-1 font-mono text-xs">
            {navLinks.map((link, idx) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative block rounded-lg px-3.5 py-1.5 text-white/60 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
                >
                  <span className="mr-1.5 text-[10px] text-warm/70 group-hover:text-warm">
                    0{idx + 1}.
                  </span>
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Terminal Action Button */}
        <a
          href="#contact"
          className="group relative hidden font-mono text-xs md:inline-flex"
        >
          <span className="relative flex items-center gap-2 overflow-hidden rounded-lg border border-warm/30 bg-warm/10 px-4 py-2 font-medium text-warm transition-all duration-300 hover:border-warm hover:bg-warm hover:text-black shadow-[0_0_15px_-3px_rgba(255,180,100,0.15)]">
            <Terminal size={13} className="transition-transform group-hover:rotate-12" />
            <span>EXECUTE // CONTACT</span>
          </span>
        </a>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          className="rounded-lg border border-white/10 bg-black/40 p-2 text-white/70 transition-all duration-300 hover:border-warm/40 hover:text-warm md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Terminal Drawer */}
      {mobileOpen && (
        <div className="relative border-b border-white/10 bg-black/90 backdrop-blur-2xl md:hidden">
          <div className="px-6 py-6 font-mono">
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-2 text-[10px] text-white/40 uppercase tracking-widest">
              <span>SYSTEM_MENU</span>
              <span className="flex items-center gap-1 text-emerald-400">
                <Radio size={10} className="animate-pulse" /> CONNECTED
              </span>
            </div>

            <ul className="flex flex-col gap-2">
              {navLinks.map((link, idx) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3 text-sm text-white/80 transition-all hover:border-warm/40 hover:bg-white/[0.05] hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-xs text-warm">0{idx + 1}.</span>
                      {link.label}
                    </span>
                    <span className="text-[10px] text-white/30"> NAV</span>
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 rounded-xl border border-warm/40 bg-warm/10 px-4 py-3 text-center text-sm font-semibold text-warm"
                  onClick={() => setMobileOpen(false)}
                >
                  <Terminal size={14} />
                  EXECUTE // CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}