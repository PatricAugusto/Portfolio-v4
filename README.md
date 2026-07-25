# Portfolio v4 — Patric Augusto

Portfólio pessoal de desenvolvedor web full stack, construído com **Next.js 15**, **React 19** e **Tailwind CSS v4**. A interface segue uma estética **clean, minimalista e futurista**, com **glassmorphism** e paleta inspirada em tons de preto, cinza e acentos quentes.

🔗 **GitHub:** [PatricAugusto](https://github.com/PatricAugusto)  
📧 **Contato:** desenvolvedorpatric@gmail.com

---

## Preview

Single-page application com navegação por âncoras, animações fluidas e layout totalmente responsivo.

### Seções

| Seção | Descrição |
|---|---|
| **Hero** | Apresentação principal, badges de tecnologia e CTAs |
| **Sobre** | Foto de perfil integrada, estatísticas e pilares de atuação |
| **Stack** | Cards flutuantes com tecnologias organizadas por categoria |
| **Projetos** | Destaques com links para demo e repositório |
| **Contato** | Formulário funcional, links sociais e consentimento LGPD |

---

## Stack tecnológica

| Camada | Tecnologias |
|---|---|
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router) |
| **UI** | [React 19](https://react.dev/) |
| **Estilização** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animações** | [Framer Motion](https://www.framer.com/motion/) |
| **Ícones** | [Lucide React](https://lucide.dev/) |
| **Linguagem** | [TypeScript](https://www.typescriptlang.org/) |
| **Lint** | ESLint + eslint-config-next |

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- [npm](https://www.npmjs.com/) (ou yarn / pnpm)

---

## Instalação e execução

```bash
# 1. Clone o repositório
git clone https://github.com/PatricAugusto/portfolio-v4.git
cd portfolio-v4

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

---

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento com hot reload |
| `npm run build` | Gera a build de produção otimizada |
| `npm run start` | Executa a aplicação em modo produção (após o build) |
| `npm run lint` | Executa a verificação de lint do ESLint |

---

## Estrutura do projeto

```
src/
├── app/
│   ├── globals.css       # Design tokens, glassmorphism e utilitários CSS
│   ├── layout.tsx        # Layout raiz, fontes e metadados SEO
│   ├── page.tsx          # Página principal (composição das seções)
│   ├── robots.ts         # Configuração para crawlers
│   └── sitemap.ts        # Sitemap estático
├── assets/
│   └── profile.png       # Foto de perfil (seção Sobre)
├── components/
│   ├── layout/           # Navbar e Footer
│   ├── sections/         # Hero, About, Stack, Projects, Contact
│   └── ui/               # GlassCard, Button, SectionHeading
├── data/
│   └── portfolio.ts      # Dados centralizados do portfólio
└── lib/
    └── utils.ts          # Utilitários compartilhados
```

---

## Personalização

Todo o conteúdo editável está centralizado em `src/data/portfolio.ts`:

```ts
export const siteConfig = {
  name: "Patric Augusto",
  role: "Desenvolvedor Web Full Stack",
  tagline: "Arquitetura escalável. Performance. Inteligência.",
  email: "desenvolvedorpatric@gmail.com",
  github: "https://github.com/PatricAugusto",
  linkedin: "https://www.linkedin.com/in/patric-augusto-bab47b240/",
  location: "Brasil",
};
```

Neste arquivo você pode alterar:

- **Informações pessoais** — nome, email, links sociais e localização
- **Skills** — tecnologias e categorias (frontend, backend, database, ai, tools)
- **Projetos** — título, descrição, tags, links de demo e GitHub
- **Estatísticas** — anos de experiência, quantidade de projetos etc.

### Paleta de cores

Os tokens de cor ficam em `src/app/globals.css`:

| Token | Valor | Uso |
|---|---|---|
| `void` | `#121212` | Fundo principal |
| `void-light` | `#2b2b2b` | Superfícies elevadas |
| `slate` | `#5e6266` | Texto secundário |
| `silver` | `#a0a4a8` | Acentos e bordas |
| `warm` | `#d2a68e` | Destaques e gradientes |

### Foto de perfil

Substitua o arquivo `src/assets/profile.png` pela sua imagem. A seção About aplica máscara fluida, gradientes e integração com o glassmorphism do layout.

---

## Formulário de contato

O formulário na seção **Contato** envia os dados via `POST` para a rota `/api/contact` com os campos:

- `name` — nome do remetente
- `email` — email do remetente
- `message` — mensagem
- `botcheck` — honeypot anti-spam (campo oculto)

Inclui validação de campos obrigatórios, checkbox de consentimento LGPD e feedback visual de sucesso/erro.

> **Nota:** certifique-se de que a rota `src/app/api/contact/route.ts` está configurada e apontando para o seu email profissional antes do deploy em produção.

---

## Deploy

A aplicação é compatível com plataformas que suportam Next.js, como [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/) ou servidores Node.js.

```bash
npm run build
npm run start
```

### Vercel (recomendado)

1. Importe o repositório na Vercel
2. Configure as variáveis de ambiente (se houver integração de email)
3. Deploy automático a cada push na branch principal

---

## Design

- **Glassmorphism** — cards com `backdrop-blur`, bordas translúcidas e sombras em camadas
- **Animações** — entrada suave com Framer Motion e cards flutuantes na seção Stack
- **Responsividade** — navbar com menu mobile, grids adaptáveis e tipografia fluida
- **SEO** — metadados Open Graph, `robots.txt` e `sitemap.xml` gerados estaticamente

---

## Licença

Este projeto é de uso pessoal. Consulte o autor antes de reutilizar o código ou o design.

---

Desenvolvido por **Patric Augusto** · [GitHub](https://github.com/PatricAugusto) · [LinkedIn](https://www.linkedin.com/in/patric-augusto-bab47b240/)
