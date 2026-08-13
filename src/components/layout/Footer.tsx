import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

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

      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_8px_32px_-8px_rgba(0,0,0,0.35)] backdrop-blur-xl backdrop-saturate-150 sm:p-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="animate-[footer-fade-up_0.6s_ease-out_both] text-center sm:text-left">
            <p className="font-semibold">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-white/40">
              © {year} · Desenvolvido com Next.js & React
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, label, icon: Icon, external }, index) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="group relative animate-[footer-fade-up_0.6s_ease-out_both]"
                style={{ animationDelay: `${120 + index * 80}ms` }}
              >
                <span className="pointer-events-none absolute inset-0 rounded-xl bg-warm/0 blur-md transition-colors duration-500 group-hover:bg-warm/20" />
                <span className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:border-warm/30 group-hover:text-warm group-active:translate-y-0 group-active:scale-95 group-active:rotate-0">
                  <Icon size={18} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}