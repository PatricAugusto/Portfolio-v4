import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="font-semibold">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-white/40">
            © {year} · Desenvolvido com Next.js & React
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass glass-hover flex h-10 w-10 items-center justify-center rounded-xl text-white/50 hover:text-white"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass glass-hover flex h-10 w-10 items-center justify-center rounded-xl text-white/50 hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="glass glass-hover flex h-10 w-10 items-center justify-center rounded-xl text-white/50 hover:text-white"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
