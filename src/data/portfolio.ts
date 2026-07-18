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
  github: "https://github.com",
  linkedin: "https://linkedin.com",
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
  { name: "Docker", category: "tools", icon: "docker" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "SaaS Dashboard",
    description:
      "Plataforma de analytics em tempo real com Next.js App Router, autenticação JWT e cache inteligente via Redis.",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: "2",
    title: "AI Content Engine",
    description:
      "Motor de geração de conteúdo com integração OpenAI, filas assíncronas e API REST escalável em Express.",
    tags: ["Node.js", "Express", "OpenAI", "MySQL"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: "3",
    title: "E-commerce Headless",
    description:
      "Loja virtual headless com SSR, carrinho persistente e arquitetura de microserviços containerizada.",
    tags: ["Next.js", "React", "SQL", "Docker"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: "4",
    title: "DevOps Pipeline",
    description:
      "CI/CD automatizado com testes E2E, deploy contínuo e monitoramento de performance em produção.",
    tags: ["Node.js", "Docker", "Git", "Express"],
    link: "#",
    github: "#",
    featured: false,
  },
];

export const aboutStats = [
  { label: "Anos de experiência", value: "3+" },
  { label: "Projetos entregues", value: "20+" },
  { label: "Stack principal", value: "Full Stack" },
  { label: "Disponibilidade", value: "Remoto" },
];

export const categoryLabels: Record<Skill["category"], string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Banco de Dados",
  ai: "Inteligência Artificial",
  tools: "Ferramentas",
};
