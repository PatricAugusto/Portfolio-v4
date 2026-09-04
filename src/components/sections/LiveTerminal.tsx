"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ChevronRight, Terminal as TerminalIcon } from "lucide-react";
import { siteConfig, skills } from "@/data/portfolio";

type OutputLine = {
  id: number;
  text: string;
  tone?: "command" | "muted" | "success" | "accent";
};

const initialOutput: OutputLine[] = [
  { id: 1, text: "live-shell v1.0.0 // session ready", tone: "muted" },
  { id: 2, text: 'Digite "help" para listar os comandos disponíveis.', tone: "muted" },
];

const commandHelp = [
  ["help", "lista os comandos disponíveis"],
  ["fetch --stack", "imprime a stack em JSON"],
  ["cat about.txt", "exibe um resumo profissional"],
  ["sudo hire", "abre um canal de contato"],
  ["clear", "limpa a sessão atual"],
];

export function LiveTerminal() {
  const [output, setOutput] = useState<OutputLine[]>(initialOutput);
  const [command, setCommand] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isHiring, setIsHiring] = useState(false);
  const nextId = useRef(initialOutput.length + 1);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const timerIds = useRef<ReturnType<typeof setTimeout>[]>([]);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const outputElement = outputRef.current;
    if (outputElement) outputElement.scrollTop = outputElement.scrollHeight;
  }, [output]);

  useEffect(() => {
    return () => timerIds.current.forEach((timerId) => clearTimeout(timerId));
  }, []);

  function appendLine(text: string, tone?: OutputLine["tone"]) {
    setOutput((current) => [...current, { id: nextId.current++, text, tone }]);
  }

  function clearTimers() {
    timerIds.current.forEach((timerId) => clearTimeout(timerId));
    timerIds.current = [];
  }

  function printStack() {
    const stack = {
      frontend: skills.filter((skill) => skill.category === "frontend").map((skill) => skill.name),
      backend: skills.filter((skill) => skill.category === "backend").map((skill) => skill.name),
      database: skills.filter((skill) => skill.category === "database").map((skill) => skill.name),
      ai: skills.filter((skill) => skill.category === "ai").map((skill) => skill.name),
      tools: skills.filter((skill) => skill.category === "tools").map((skill) => skill.name),
    };
    const lines = JSON.stringify(stack, null, 2).split("\n");
    appendLine("fetching /api/stack ...", "muted");

    lines.forEach((line, index) => {
      const timerId = setTimeout(() => appendLine(line, "accent"), reduceMotion ? 0 : 55 * (index + 1));
      timerIds.current.push(timerId);
    });
  }

  function executeCommand(rawCommand: string) {
    const normalizedCommand = rawCommand.trim().toLowerCase();
    if (!normalizedCommand) return;

    clearTimers();
    appendLine(`visitor@portfolio:~$ ${rawCommand.trim()}`, "command");
    setCommandHistory((current) => [rawCommand.trim(), ...current.filter((item) => item !== rawCommand.trim())]);
    setHistoryIndex(-1);

    switch (normalizedCommand) {
      case "help":
        commandHelp.forEach(([name, description]) => appendLine(`${name.padEnd(17)} ${description}`));
        break;
      case "fetch --stack":
        printStack();
        break;
      case "cat about.txt":
        appendLine(`${siteConfig.name} // ${siteConfig.role}`, "success");
        appendLine("Construo sistemas web escaláveis com foco em arquitetura, performance e IA aplicada.");
        appendLine("Base: Brasil // disponibilidade: remoto / worldwide", "muted");
        break;
      case "sudo hire":
        appendLine("permission granted // iniciando canal seguro...", "success");
        setIsHiring(true);
        const hireTimer = setTimeout(() => {
          document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
          setIsHiring(false);
        }, reduceMotion ? 250 : 900);
        timerIds.current.push(hireTimer);
        break;
      case "clear":
        setOutput([]);
        break;
      default:
        appendLine(`command not found: ${normalizedCommand}`, "muted");
        appendLine('Digite "help" para ver os comandos disponíveis.', "muted");
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    executeCommand(command);
    setCommand("");
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      const nextIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
      setHistoryIndex(nextIndex);
      setCommand(commandHistory[nextIndex] ?? "");
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      const nextIndex = Math.max(historyIndex - 1, -1);
      setHistoryIndex(nextIndex);
      setCommand(nextIndex === -1 ? "" : commandHistory[nextIndex]);
    }
  }

  return (
    <section id="terminal" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_60%,transparent_100%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div>
            <div className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-warm">
              <TerminalIcon size={14} />
              <span>04 . LIVE TERMINAL</span>
            </div>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-5xl">
              Acesso ao <span className="font-semibold text-silver">sistema</span>
            </h2>
          </div>
          <span className="font-mono text-xs text-white/50">INTERACTIVE_SHELL // ONLINE</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className={`glass-panel relative rounded-2xl border border-white/15 p-1 transition-all duration-500 ${isHiring ? "border-warm/70 shadow-[0_0_55px_rgba(243,243,243,0.2)]" : ""}`}
        >
          <div className="rounded-xl border border-white/10 bg-black/55">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-white/50 sm:px-5">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-400/70" />
                <span className="h-2 w-2 rounded-full bg-yellow-300/70" />
                <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
                <span className="ml-2">portfolio-shell</span>
              </div>
              <span className="hidden sm:inline">readonly / local session</span>
            </div>

            <div ref={outputRef} aria-live="polite" className="h-72 overflow-y-auto px-4 py-5 font-mono text-xs leading-6 sm:px-5 sm:text-sm">
              {output.map((line) => (
                <div key={line.id} className={line.tone === "command" ? "text-white" : line.tone === "success" ? "text-emerald-300" : line.tone === "accent" ? "text-silver" : "text-white/60"}>
                  {line.text}
                </div>
              ))}
              {isHiring && <div className="mt-2 text-warm animate-pulse">redirecting to contact...</div>}
            </div>

            <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-white/10 px-4 py-4 font-mono text-xs sm:px-5 sm:text-sm">
              <ChevronRight size={15} className="shrink-0 text-warm" />
              <label htmlFor="live-terminal-command" className="sr-only">Comando do terminal</label>
              <input
                ref={inputRef}
                id="live-terminal-command"
                value={command}
                onChange={(event) => setCommand(event.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => setHistoryIndex(-1)}
                placeholder="digite um comando..."
                autoComplete="off"
                spellCheck={false}
                className="min-w-0 flex-1 bg-transparent text-white outline-none placeholder:text-white/40"
              />
              <button type="submit" aria-label="Executar comando" className="cursor-pointer text-white/50 transition-colors hover:text-warm">
                <ArrowDown size={15} className="-rotate-90" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}