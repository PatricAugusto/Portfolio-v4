export interface Skill {
  name: string;
  category: "frontend" | "backend" | "database" | "ai" | "cyber" | "tools";
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  featured: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export const siteConfig = {
  name: "Patric Augusto",
  role: "Desenvolvedor Web Full Stack",
  tagline: "Arquitetura escalável. Performance. Inteligência.",
  email: "desenvolvedorpatric@gmail.com",
  github: "https://github.com/PatricAugusto",
  linkedin: "https://www.linkedin.com/in/patric-augusto-bab47b240/",
  location: "Brasil",
};

export const navLinks: NavLink[] = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Inspiração", href: "#inspiration" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

export const skills: Skill[] = [
  // Frontend
  { name: "Next.js", category: "frontend", icon: "nextjs" },
  { name: "React.js", category: "frontend", icon: "react" },
  { name: "TypeScript", category: "frontend", icon: "typescript" },
  { name: "JavaScript", category: "frontend", icon: "javascript" },
  { name: "Tailwind CSS", category: "frontend", icon: "tailwind" },
  { name: "Styled Components", category: "frontend", icon: "styledcomponents" },
  { name: "Three.js", category: "frontend", icon: "threejs" },

  // Backend
  { name: "Node.js", category: "backend", icon: "nodejs" },
  { name: "Express", category: "backend", icon: "express" },
  { name: "REST APIs", category: "backend", icon: "api" },
  { name: "Socket.io", category: "backend", icon: "socketio" },

  // Database
  { name: "PostgreSQL", category: "database", icon: "postgresql" },
  { name: "MySQL", category: "database", icon: "mysql" },
  { name: "SQLite", category: "database", icon: "sqlite" },
  { name: "Prisma", category: "database", icon: "prisma" },
  { name: "SQL", category: "database", icon: "sql" },

  // AI
  { name: "OpenAI", category: "ai", icon: "openai" },
  { name: "LangChain", category: "ai", icon: "langchain" },
  { name: "Google Gemini", icon: "gemini", category: "ai" },
  { name: "Claude AI", icon: "claude", category: "ai" },
  { name: "Responsible AI", icon: "responsibleai", category: "ai" },

  // Cybersecurity
  { name: "Playwright E2E", category: "cyber", icon: "playwright" },
  { name: "OWASP ZAP Baseline", category: "cyber", icon: "zap" },
  { name: "OWASP ASVS", category: "cyber", icon: "asvs" },
  { name: "Burp Suite", category: "cyber", icon: "burp" },
  { name: "Nmap", category: "cyber", icon: "nmap" },
  { name: "Wireshark", category: "cyber", icon: "wireshark" },
  { name: "Wazuh", category: "cyber", icon: "wazuh" },
  { name: "Suricata", category: "cyber", icon: "suricata" },

  // Tools & DevOps
  { name: "Git", category: "tools", icon: "git" },
  { name: "GitHub", category: "tools", icon: "github" },
  { name: "Docker", category: "tools", icon: "docker" },
  { name: "Render", icon: "render", category: "tools" },
  { name: "VS Code", icon: "vscode", category: "tools" },
  { name: "npm", icon: "npm", category: "tools" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Buscador de empresas por CNPJ",
    description:
      "API REST para consulta e gerenciamento de dados públicos de empresas brasileiras via CNPJ. Consome a BrasilAPI, persiste os dados localmente e expõe endpoints de busca com paginação e suporte a favoritos.",
    tags: ["Node.js (18+)", "Express", "SQLite", "BrasilAPI", "dotenv", "nodemon"],
    github: "https://github.com/PatricAugusto/Buscador-de-empresas-por-CNPJ",
    featured: true,
  },
  {
    id: "2",
    title: "API de Receitas com IA",
    description:
      "API REST desenvolvida com Node.js e Express que utiliza inteligência artificial para sugerir receitas com base nos ingredientes que o usuário tem disponíveis.",
    tags: ["Node.js", "Express", "Groq API", "dotenv"],
    github: "https://github.com/PatricAugusto/API-de-Receita-com-IA",
    featured: true,
  },
  {
    id: "3",
    title: "Kendrick",
    description:
      "Bot de compras no Telegram",
    tags: ["Python"],
    github: "https://github.com/PatricAugusto/Kendrick",
    featured: true,
  },
  {
    id: "4",
    title: "Studio Forma",
    description:
      "UI neo-minimalista para um estúdio de product design, construída com Next.js 14, styled-components e Framer Motion.",
    tags: ["Next.js", "TypeScript", "Styled-components", "Framer Motion", "Lucide React"],
    link: "https://forma-studio-ruby.vercel.app/",
    github: "https://github.com/PatricAugusto/Forma-Studio",
    featured: true,
  },
  {
    id: "5",
    title: "Aquiles",
    description:
      "Bot de registro de consumo",
    tags: ["Typescript", "SQLite", "Prisma ORM"],
    github: "https://github.com/PatricAugusto/Aquiles",
    featured: true,
  },
  {
    id: "6",
    title: "AgendaGlass ",
    description:
      "SaaS de agendamento (estilo Calendly) com autenticação JWT, PostgreSQL e lógica de conflito de horários.",
    tags: ["Backend: Node.js + Express + PostgreSQL", "Frontend: React + styled-components + date-fns", "Design: Liquid Glass + paleta Solarpunk (neons) + tipografia retro gaming"],
    link: "https://agendaglass.vercel.app",
    github: "https://github.com/PatricAugusto/SaaS-Solarpunk-de-agendamento",
    featured: true,
  },
  {
    id: "7",
    title: "Freelance / OS Management System",
    description:
      "Sistema robusto de gestão de tempo e faturamento para freelancers (MEI). A aplicação permite o rastreamento de horas em tempo real, gestão de projetos e análise financeira automatizada com precisão decimal.",
    tags: ["Next.js 14+", "Styled Components", "Lucide React", "Axios", "Node.js", "Express", "Knex.js", "SQLite", "Cors"],
    github: "https://github.com/PatricAugusto/Sistema-de-Gestao-de-Freelancer",
    featured: true,
  },
  {
    id: "8",
    title: "Zion",
    description:
      "O Zion começa como uma interface de terminal para explorar conceitos de consciência e segurança espacial em um ambiente demonstrativo.",
    tags: ["JavaScript", "Security as a pillar"],
    github: "https://github.com/PatricAugusto/Zion",
    featured: true,
  },
  {
    id: "9",
    title: "Relógio Pomodoro",
    description:
      "Um timer Pomodoro minimalista desenvolvido com React e Vite. A aplicação oferece sessões de foco, pausa curta, controle do cronômetro e um alarme sonoro ao final da sessão.",
    tags: ["React", "Vite", "styled-components", "JavaScript (ES modules)"],
    github: "https://github.com/PatricAugusto/Relogio-Pomodoro",
    featured: true,
  },
];

export const aboutStats = [
  { label: "Anos de experiência", value: "4+" },
  { label: "Projetos", value: "300+" },
  { label: "Stack principal", value: "Full Stack and IA" },
  { label: "Disponibilidade", value: "Remoto" },
];

export const categoryLabels: Record<string, string> = {
  frontend: "Frontend Development",
  backend: "Backend & APIs",
  database: "Bancos de Dados",
  ai: "Inteligência Artificial",
  cyber: "Engenharia Cibernética",
  tools: "Ferramentas & DevOps",
};