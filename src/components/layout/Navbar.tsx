"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
          ? "border-b border-white/10 bg-black/40 py-3 shadow-lg shadow-black/30 backdrop-blur-2xl backdrop-saturate-150"
          : "py-5"
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent transition-opacity duration-500",
          scrolled ? "opacity-100" : "opacity-0"
        )}
      />

      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a
          href="#hero"
          className="group relative flex items-center gap-2"
          onClick={() => setMobileOpen(false)}
        >
          <span className="relative flex h-9 w-9 items-center justify-center">
            <span className="pointer-events-none absolute inset-0 rounded-xl bg-warm/0 blur-md transition-colors duration-500 group-hover:bg-warm/25" />
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-silver/30 bg-gradient-to-b from-white/10 to-white/5 font-mono text-sm font-bold text-silver shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] backdrop-blur-md transition-colors duration-300 group-hover:border-warm/40 group-hover:text-warm">
              {siteConfig.name.charAt(0)}
            </span>
          </span>
          <span className="hidden font-semibold tracking-tight sm:block">
            {siteConfig.name}
          </span>
        </a>

        <ul className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-xl md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative block rounded-full border border-transparent px-4 py-2 text-sm text-white/60 transition-all duration-300 hover:border-white/10 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="group/cta relative hidden md:inline-flex">
          <span className="pointer-events-none absolute -inset-1 rounded-xl bg-warm/0 blur-md transition-colors duration-500 group-hover/cta:bg-warm/20" />
          <span className="relative overflow-hidden rounded-xl border border-silver/25 bg-gradient-to-b from-white/10 to-white/5 px-5 py-2.5 text-sm font-medium text-silver shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] backdrop-blur-md transition-all duration-300 group-hover/cta:border-warm/40 group-hover/cta:text-warm">
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover/cta:translate-x-full" />
            <span className="relative">Fale comigo</span>
          </span>
        </a>

        <button
          type="button"
          className="rounded-lg border border-transparent p-2 text-white/70 transition-all duration-300 hover:border-white/10 hover:bg-white/10 hover:text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="relative border-t border-white/10 bg-black/50 backdrop-blur-2xl backdrop-saturate-150 md:hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg border border-transparent px-4 py-3 text-sm text-white/70 transition-all duration-300 hover:border-white/10 hover:bg-white/10 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                className="block rounded-xl border border-silver/25 bg-gradient-to-b from-white/10 to-white/5 px-4 py-3 text-center text-sm font-medium text-silver shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] backdrop-blur-md"
                onClick={() => setMobileOpen(false)}
              >
                Fale comigo
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}