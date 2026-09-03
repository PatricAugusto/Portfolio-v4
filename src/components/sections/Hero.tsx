"use client";

import { useEffect, useRef, type MouseEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Code2, Sparkles, Terminal } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";

const techBadges = ["Next.js", "React", "Node.js", "Express", "SQL", "IA"];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Animação de fundo via HTML5 Canvas (constelação fluida minimalista)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || shouldReduceMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Criação de partículas com opacidade baixa
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.5 + 0.5,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Conecta partículas próximas com linhas sutis
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [shouldReduceMotion]);

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;
    sectionRef.current?.style.setProperty("--mx", x.toFixed(3));
    sectionRef.current?.style.setProperty("--my", y.toFixed(3));
  }

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen flex-col justify-between overflow-hidden px-6 pt-28 pb-12 sm:px-12 lg:px-20"
    >
      {/* Canvas de Fundo Fluido */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
      />

      {/* Marca d'água Desconstruída de Código */}
      <div className="pointer-events-none absolute -right-20 top-1/4 select-none font-mono text-[18vw] font-bold leading-none tracking-tighter text-white/[0.015]">
        &lt;DEV/&gt;
      </div>

      {/* Top Bar Desconstruída (Status e Badge Minimalista) */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-6">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-warm/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-warm" />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-white/50">
            {siteConfig.location}
          </span>
        </div>

        <div className="hidden font-mono text-xs tracking-wider text-white/50 sm:block">
          01 // PORTFOLIO EDITORIAL
        </div>
      </div>

      {/* Conteúdo Principal (Layout Assimétrico e Desconstruído) */}
      <div className="relative z-10 my-auto grid gap-12 py-12 lg:grid-cols-12 lg:items-center">
        {/* Bloco de Título e Chamada Principal (8 colunas) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-8"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-warm/20 bg-warm/5 px-3.5 py-1.5 font-mono text-xs text-warm backdrop-blur-md">
            <Terminal size={14} />
            <span>{siteConfig.role}</span>
          </div>

          <h1 className="mb-8 text-4xl font-light tracking-tight text-white sm:text-6xl lg:text-7xl">
            Sistemas em <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-silver to-warm">
              Escala & Alta Performance
            </span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            Especializado em arquiteturas web robustas, unindo{" "}
            <strong className="font-medium text-white">Next.js</strong>,{" "}
            <strong className="font-medium text-white">React</strong> e{" "}
            <strong className="font-medium text-white">Node.js</strong> a soluções modernas integradas com{" "}
            <strong className="font-medium text-warm">Inteligência Artificial</strong>.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#projects" size="lg">
              Ver Projetos
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              Entrar em Contato
            </Button>
          </div>
        </motion.div>

        {/* Card Flutuante de Código (4 colunas na lateral - Visual Tech Desconstruído) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative lg:col-span-4"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl transition-all duration-500 hover:border-warm/40">
            <div className="mb-4 flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/40" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/40" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500/40" />
              </div>
              <Code2 size={14} className="text-white/50" />
            </div>

            <pre className="font-mono text-xs leading-relaxed text-white/70">
              <code>
                <span className="text-warm">const</span> stack = &#123;
                <br />
                {"  "}core: [<span className="text-silver">Next.js</span>, <span className="text-silver">React</span>],
                <br />
                {"  "}backend: [<span className="text-silver">Node</span>, <span className="text-silver">Express</span>],
                <br />
                {"  "}database: <span className="text-silver">SQL</span>,
                <br />
                {"  "}aiReady: <span className="text-warm">true</span>
                <br />
                &#125;;
              </code>
            </pre>

            {/* Badges Minimalistas no Rodapé do Card */}
            <div className="mt-6 flex flex-wrap gap-1.5 border-t border-white/5 pt-4">
              {techBadges.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-white/5 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-white/50"
                >
                  #{tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Rodapé da Hero (Navegação Desconstruída) */}
      <div className="relative z-10 flex items-center justify-between border-t border-white/5 pt-6">
        <p className="font-mono text-xs tracking-wide text-white/50">
          {siteConfig.tagline}
        </p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex items-center gap-2 font-mono text-xs text-white/50 transition-colors hover:text-warm"
          aria-label="Rolar para baixo"
        >
          <span>SCROLL</span>
          <ArrowDown size={14} className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}