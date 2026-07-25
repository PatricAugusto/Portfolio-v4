export interface Skill {
  name: string;
  category: "frontend" | "backend" | "database" | "ai" | "tools";
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
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

export const skills: Skill[] = [
  { name: "Next.js", category: "frontend", icon: "nextjs" },
  { name: "React.js", category: "frontend", icon: "react" },
  { name: "TypeScript", category: "frontend", icon: "typescript" },
  { name: "Tailwind CSS", category: "frontend", icon: "tailwind" },
  { name: "Node.js", category: "backend", icon: "nodejs" },
  { name: "Express", category: "backend", icon: "express" },
  { name: "REST APIs", category: "backend", icon: "api" },
  { name: "PostgreSQL", category: "database", icon: "postgresql" },
  { name: "MySQL", category: "database", icon: "mysql" },
  { name: "SQL", category: "database", icon: "sql" },
  { name: "OpenAI", category: "ai", icon: "openai" },
  { name: "LangChain", category: "ai", icon: "langchain" },
  { name: "Git", category: "tools", icon: "git" },
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
    title: "O Corte Perfeito",
    description:
      "Este projeto representa uma vitrine digital, refletindo a qualidade, elegância e a experiência impecável que oferecemos a cada cliente.",
    tags: ["React", "Vite", "TypeScript", "shadcn/ui", "Tailwind CSS"],
    link: "https://barber-glass-neo.vercel.app/",
    github: "https://github.com/PatricAugusto/barber-glass-neo",
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
    title: "Hydro ZAP ",
    description:
      "HYDRO+ZAP ajuda a manter o consumo diário de água e cafeína equilibrado. Registre doses com um toque, acompanhe o progresso em tempo real e revise seu histórico em um calendário — tudo salvo localmente, sem servidor.",
    tags: ["Next.js", "TypeScript", "Styled-components", "localStorage"],
    link: "https://hydro-caffeine-sag3-henna.vercel.app/",
    github: "https://github.com/PatricAugusto/Hydro-Caffeine",
    featured: true,
  },
];

export const aboutStats = [
  { label: "Anos de experiência", value: "3+" },
  { label: "Projetos", value: "200+" },
  { label: "Stack principal", value: "Full Stack and IA" },
  { label: "Disponibilidade", value: "Remoto" },
];

export const categoryLabels: Record<Skill["category"], string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Banco de Dados",
  ai: "Inteligência Artificial",
  tools: "Ferramentas",
};
