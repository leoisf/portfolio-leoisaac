import { Project, Certificate, Skill, SocialInitiative, ProfileSettings, ClippingItem } from "@/types/database";

export const initialProfile: ProfileSettings = {
  id: "profile-leo-1",
  full_name: "Leonardo Isaac",
  headline: "Cientista da Computação | Analista & Desenvolvedor Full Stack | Agilista",
  bio: "Bacharel em Ciência da Computação formado pela Universidade Federal de Ouro Preto (UFOP), com mais de 22 anos de atuação nos mais diversos segmentos da Tecnologia da Informação. Especialista no desenvolvimento de sistemas web modernos, arquiteturas escaláveis e banco de dados relacional. Histórico comprovado de liderança em projetos de inclusão digital e transformação tecnológica de impacto comunitário.",
  years_experience: 22,
  people_impacted: "+7.000",
  cv_url: "/docs/curriculum_LEONARDO_ISAAC.pdf",
  whatsapp: "+5531988527732",
  email: "contato@leoisaac.com.br",
  linkedin: "https://www.linkedin.com/in/leonardo-isaac-silva-flores-9b66236b",
  github: "https://github.com/leoisf",
  location: "Ouro Preto - MG, Brasil"
};

export const initialSkills: Skill[] = [
  // Frontend
  { id: "sk-1", name: "React", category: "Frontend", display_order: 1 },
  { id: "sk-2", name: "Next.js", category: "Frontend", display_order: 2 },
  { id: "sk-3", name: "TypeScript", category: "Frontend", display_order: 3 },
  { id: "sk-4", name: "JavaScript (ES6+)", category: "Frontend", display_order: 4 },
  { id: "sk-5", name: "Tailwind CSS", category: "Frontend", display_order: 5 },
  { id: "sk-6", name: "HTML5 & CSS3", category: "Frontend", display_order: 6 },
  { id: "sk-7", name: "Bootstrap", category: "Frontend", display_order: 7 },
  
  // Backend
  { id: "sk-8", name: "Node.js", category: "Backend", display_order: 8 },
  { id: "sk-9", name: "Python", category: "Backend", display_order: 9 },
  { id: "sk-10", name: "PHP", category: "Backend", display_order: 10 },
  { id: "sk-11", name: "REST APIs", category: "Backend", display_order: 11 },
  { id: "sk-12", name: "Composer", category: "Backend", display_order: 12 },

  // Database
  { id: "sk-13", name: "PostgreSQL", category: "Database", display_order: 13 },
  { id: "sk-14", name: "MySQL", category: "Database", display_order: 14 },
  { id: "sk-15", name: "Supabase", category: "Database", display_order: 15 },
  { id: "sk-16", name: "Modelagem Relacional", category: "Database", display_order: 16 },

  // Agile & Gestão
  { id: "sk-17", name: "Certified SAFe® 6 Agilist", category: "Agile / Gestão", display_order: 17 },
  { id: "sk-18", name: "Scrum & Kanban", category: "Agile / Gestão", display_order: 18 },
  { id: "sk-19", name: "Gestão de Projetos Sociais", category: "Agile / Gestão", display_order: 19 },
  { id: "sk-20", name: "Liderança de Equipes", category: "Agile / Gestão", display_order: 20 },

  // DevOps & Ferramentas
  { id: "sk-21", name: "Git & GitHub", category: "DevOps / Infra", display_order: 21 },
  { id: "sk-22", name: "Docker", category: "DevOps / Infra", display_order: 22 },
  { id: "sk-23", name: "AWS Cloud Fundamentals", category: "DevOps / Infra", display_order: 23 },
  { id: "sk-24", name: "Cloudflare & CDN", category: "DevOps / Infra", display_order: 24 },
  { id: "sk-25", name: "Redes Lógicas & Hardware", category: "DevOps / Infra", display_order: 25 },
];

export const initialProjects: Project[] = [
  {
    id: "proj-1",
    title: "Portfólio Web Moderno & Painel Dinâmico",
    slug: "portfolio-web-moderno",
    short_description: "Arquitetura Jamstack de alta performance com Next.js 15, TypeScript, Tailwind CSS, Supabase (PostgreSQL + Auth + Storage) e deploy na Cloudflare.",
    full_description: "Refatoração completa do portfólio pessoal migrado de WordPress para uma arquitetura moderna sem custos de infraestrutura. Inclui autenticação segura, painel administrativo dinâmico para uploads de projetos e certificados, suporte nativo a temas Dark/Light e pontuação 95+ no Google Lighthouse.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Cloudflare Pages"],
    image_url: "/images/projects/system.jpg",
    github_url: "https://github.com/leoisf/portfolio-leoisaac",
    live_url: "https://leoisaac.com.br",
    category: "Full Stack",
    is_featured: true,
    display_order: 1
  },
  {
    id: "proj-2",
    title: "Telecentros Comunitários - Inclusão Digital",
    slug: "telecentros-comunitarios",
    short_description: "Coordenação de projeto público de inclusão digital que atendeu mais de 7.000 cidadãos com acesso gratuito à internet e cursos profissionalizantes.",
    full_description: "Iniciativa realizada em parceria com a Câmara Municipal de Ouro Preto. Atuação na coordenação geral, capacitação técnica de instrutores, gestão da infraestrutura de redes e laboratórios de informática, além da aplicação de metodologias educacionais inclusivas por mais de 15 anos.",
    technologies: ["Gestão de Projetos", "Infraestrutura de Redes", "Capacitação", "Inclusão Digital"],
    image_url: "/images/projects/tc.jpeg",
    category: "Social / Inclusão",
    is_featured: true,
    display_order: 2
  },
  {
    id: "proj-3",
    title: "Projeto Escola Digital",
    slug: "projeto-escola-digital",
    short_description: "Revitalização e automação de laboratórios de informática em escolas municipais para viabilizar novas ferramentas de aprendizagem.",
    full_description: "Desenvolvido na Prefeitura de Ouro Preto visando reduzir os impactos da era da informação nas instituições municipais. Implantação de cursos, recuperação de parques de máquinas parados ou subutilizados e suporte técnico a educadores.",
    technologies: ["Infraestrutura", "Hardware", "Linux / Windows", "Treinamento Técnico"],
    image_url: "/images/projects/ED.png",
    category: "Social / Inclusão",
    is_featured: true,
    display_order: 3
  },
  {
    id: "proj-4",
    title: "Soluções Corporativas Full Stack na Compass UOL",
    slug: "solucoes-corporativas-compass",
    short_description: "Atuação como analista e desenvolvedor em squads ágeis com SAFe 6, focando em aplicações escaláveis, microsserviços e inovação contínua.",
    full_description: "Participação no desenvolvimento e manutenção de sistemas corporativos de alta criticidade, aplicando boas práticas de engenharia de software, Clean Code, testes e metodologias ágeis em escala.",
    technologies: ["React", "Node.js", "Python", "SAFe 6", "Docker", "Git"],
    image_url: "/images/projects/system_e.jpg",
    category: "Full Stack",
    is_featured: true,
    display_order: 4
  }
];

export const initialSocialInitiatives: SocialInitiative[] = [
  {
    id: "soc-1",
    title: "Telecentros Comunitários",
    role: "Coordenador Geral & Gestor de TI",
    period: "Aprox. 15 anos de atuação",
    impact_metric: "+7.000 Pessoas Beneficiadas",
    description: "Espaços públicos providos de computadores conectados à Internet em banda larga, com o objetivo de promover a inclusão digital e social através do ensino prático de informática, cidadania e acesso a serviços digitais.",
    image_url: "/images/projects/tc.jpeg",
    achievements: [
      "Mais de 7.000 pessoas capacitadas com cursos gratuitos de informática",
      "Manutenção e sustentação de unidades de telecentros em distritos e bairros",
      "Formação de instrutores e equipe técnica de apoio comunitário",
      "Parceria pioneira com a Câmara Municipal de Ouro Preto"
    ],
    display_order: 1
  },
  {
    id: "soc-2",
    title: "Projeto Escola Digital",
    role: "Técnico Especialista & Coordenador Técnico",
    period: "Prefeitura Municipal de Ouro Preto",
    impact_metric: "Centenas de Alunos & Educadores",
    description: "Visando reduzir os impactos gerados pela era da informação nas instituições de ensino municipais, promoveu a revitalização de laboratórios que se encontravam parados ou subutilizados, transformando-os em ferramentas ativas de ensino.",
    image_url: "/images/projects/ED.png",
    achievements: [
      "Recuperação e reaproveitamento de dezenas de computadores",
      "Instalação e configuração de redes locais e segurança de acesso",
      "Cursos de capacitação e treinamentos para servidores e professores municipais"
    ],
    display_order: 2
  }
];

export const initialCertificates: Certificate[] = [
  {
    id: "cert-safe",
    title: "Certified SAFe® 6 Agilist",
    issuer: "Scaled Agile",
    issue_date: "2025-04",
    credential_url: "https://www.credly.com",
    image_url: "/images/certificates/01.png",
    category: "Metodologias Ágeis",
    display_order: 1
  },
  {
    id: "cert-aws",
    title: "AWS Training & Certification - Certificate of Completion",
    issuer: "Amazon Web Services (AWS)",
    issue_date: "2023-06",
    image_url: "/images/certificates/02.png",
    category: "Cloud / DevOps",
    display_order: 2
  },
  {
    id: "cert-python",
    title: "Composição de Programas em Python",
    issuer: "Universidade Federal de Ouro Preto (UFOP)",
    image_url: "/images/certificates/Composição_de_Programas_em_Python-Certificado_de_conclusão_de_curso_141.png",
    category: "Desenvolvimento",
    display_order: 3
  },
  {
    id: "cert-ufop",
    title: "Bacharelado em Ciência da Computação",
    issuer: "UFOP - Universidade Federal de Ouro Preto",
    image_url: "/images/certificates/04.png",
    category: "Desenvolvimento",
    display_order: 4
  },
  {
    id: "cert-05",
    title: "Desenvolvimento Web Full Stack & Modern JS",
    issuer: "Alura / Especialização Web",
    image_url: "/images/certificates/05.png",
    category: "Desenvolvimento",
    display_order: 5
  },
  {
    id: "cert-08",
    title: "Administração e Modelagem de Bancos de Dados",
    issuer: "Especialização em Banco de Dados Relacional",
    image_url: "/images/certificates/08.png",
    category: "Banco de Dados",
    display_order: 6
  },
  {
    id: "cert-09",
    title: "Gestão Ágil de Projetos & Liderança Técnica",
    issuer: "Capacitação Profissional",
    image_url: "/images/certificates/09.png",
    category: "Metodologias Ágeis",
    display_order: 7
  },
  {
    id: "cert-10",
    title: "Arquitetura de Sistemas & APIs REST",
    issuer: "Especialização Técnica",
    image_url: "/images/certificates/10.png",
    category: "Desenvolvimento",
    display_order: 8
  },
  {
    id: "cert-11",
    title: "Redes Lógicas de Computadores & Infraestrutura",
    issuer: "Formação Técnica de Infraestrutura",
    image_url: "/images/certificates/11.png",
    category: "Cloud / DevOps",
    display_order: 9
  },
  {
    id: "cert-12",
    title: "Segurança da Informação e Boas Práticas",
    issuer: "Certificação Profissional",
    image_url: "/images/certificates/12.png",
    category: "Cloud / DevOps",
    display_order: 10
  }
];

export const initialClippings: ClippingItem[] = [
  {
    id: "clip-50",
    title: "Inclusão Digital e Acesso Gratuito à Internet em Ouro Preto",
    source: "Jornal de Ouro Preto / Mídia Regional",
    date: "Histórico",
    image_url: "/images/clipping/50.png",
    category: "Inclusão Digital",
    display_order: 1
  },
  {
    id: "clip-36",
    title: "Formação de Novos Alunos e Capacitação nos Telecentros",
    source: "Diário de Ouro Preto",
    date: "Histórico",
    image_url: "/images/clipping/36.png",
    category: "Telecentros",
    display_order: 2
  },
  {
    id: "clip-46",
    title: "Escola Digital: Revitalização de Laboratórios de Informática",
    source: "Câmara Municipal & Prefeitura de Ouro Preto",
    date: "Histórico",
    image_url: "/images/clipping/46.png",
    category: "Escola Digital",
    display_order: 3
  },
  {
    id: "clip-25",
    title: "Telecentros Comunitários Levam Cidadania e Tecnologia aos Bairros",
    source: "Voz Ativa / Notícias Locais",
    date: "Histórico",
    image_url: "/images/clipping/25.png",
    category: "Telecentros",
    display_order: 4
  },
  {
    id: "clip-42",
    title: "Capacitação Tecnológica de Jovens e Adultos na Comunidade",
    source: "Imprensa Regional",
    date: "Histórico",
    image_url: "/images/clipping/42.png",
    category: "Inclusão Digital",
    display_order: 5
  },
  {
    id: "clip-38",
    title: "Projeto de Inclusão Digital Beneficia Milhares de Cidadãos",
    source: "Jornal Ouro Preto",
    date: "Histórico",
    image_url: "/images/clipping/38.png",
    category: "Telecentros",
    display_order: 6
  },
  {
    id: "clip-45",
    title: "Laboratórios Escolares Ativos: Educação e Tecnologia Integradas",
    source: "Boletim Informativo Municipal",
    date: "Histórico",
    image_url: "/images/clipping/45.png",
    category: "Escola Digital",
    display_order: 7
  },
  {
    id: "clip-49",
    title: "Inovação Social: Da Manutenção de Redes à Gestão de Projetos",
    source: "Mídia Ouro Preto",
    date: "Histórico",
    image_url: "/images/clipping/49.png",
    category: "Geral",
    display_order: 8
  },
  {
    id: "clip-34",
    title: "Cursos Gratuitos de Informática Formam Novas Turmas",
    source: "Comunicação Social",
    date: "Histórico",
    image_url: "/images/clipping/34.png",
    category: "Telecentros",
    display_order: 9
  },
  {
    id: "clip-32",
    title: "Transformação Digital e Apoio às Escolas Públicas",
    source: "Notícias de Minas",
    date: "Histórico",
    image_url: "/images/clipping/32.png",
    category: "Escola Digital",
    display_order: 10
  }
];
