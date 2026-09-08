# Portfólio Profissional - Leonardo Isaac (`leoisaac.com.br`)

Aplicação web moderna, responsiva e de alta performance desenvolvida para apresentar a trajetória de mais de 22 anos de carreira em TI, projetos de software, impacto social e certificações de **Leonardo Isaac** (Cientista da Computação pela UFOP, Desenvolvedor Full Stack e Certified SAFe® 6 Agilist).

---

## 🚀 Tecnologias Utilizadas

- **Frontend**: Next.js 15 (App Router, React 19, TypeScript)
- **Estilização**: Tailwind CSS v4, Lucide Icons e Tema Dark/Light nativo via `next-themes`
- **Backend & Database**: Supabase (PostgreSQL relacional, RLS e Storage)
- **Hospedagem & CDN**: Cloudflare Pages (Deploy contínuo, SSL gratuito e CDN no Brasil)

---

## 📂 Estrutura do Projeto

```
portfolio-leoisaac/
├── src/
│   ├── app/
│   │   ├── page.tsx               # Landing page principal
│   │   ├── layout.tsx             # Layout global com fontes e tema
│   │   └── admin/                 # Painel Administrativo
│   │       ├── login/page.tsx     # Tela de login seguro
│   │       ├── dashboard/page.tsx # Visão geral de métricas
│   │       ├── projetos/page.tsx  # CRUD de projetos
│   │       └── certificados/page.tsx # CRUD de certificados
│   ├── components/
│   │   ├── Header.tsx             # Menu responsivo e alternador de tema
│   │   ├── Footer.tsx             # Rodapé institucional e links sociais
│   │   ├── ThemeToggle.tsx        # Botão Dark / Light mode
│   │   ├── sections/              # Seções (Hero, About, Skills, Projects, etc.)
│   │   └── ui/Modal.tsx           # Modal Lightbox para fotos e certificados
│   ├── data/initialData.ts        # Dados reais extraídos do backup
│   ├── lib/supabase/client.ts     # Cliente Supabase resiliente (com fallback)
│   └── types/database.ts          # Interfaces TypeScript
├── public/
│   ├── docs/                      # Currículo em PDF
│   ├── images/certificates/       # Certificados em alta resolução
│   └── images/projects/           # Imagens e banners dos projetos
├── supabase/
│   └── schema.sql                 # Script SQL para criação de tabelas e RLS
└── DEPLOY_CLOUDFLARE.md           # Guia de publicação na Cloudflare Pages
```

---

## 🛠️ Como Executar Localmente

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em modo de desenvolvimento
npm run dev

# Acesse no navegador:
# Site público: http://localhost:3000
# Painel Admin: http://localhost:3000/admin/login
```

---

## 📦 Compilação para Produção (Cloudflare Pages)

```bash
npm run build
```

Os arquivos estáticos otimizados serão gerados na pasta `out/`, prontos para distribuição global.
