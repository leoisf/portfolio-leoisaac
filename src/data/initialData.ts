import { Project, Certificate, Skill, SocialInitiative, ProfileSettings, ClippingItem } from "@/types/database";

export const initialProfile: ProfileSettings = {
  id: "profile-leo-1",
  full_name: "Leonardo Isaac",
  headline: "Full-Stack Developer (Embraer) | Ciência de Dados & IA | SAFe® 6 Agilist",
  bio: "Bacharel em Ciência da Computação e Pós-Graduando em Ciência de Dados pela UFOP (Conceito A), com mais de 22 anos de sólida atuação em Tecnologia da Informação. Atualmente atuando como Full-Stack Developer na AI/R Company alocado na Embraer (Squad de Sustentação AMS Comercial), sustentando sistemas web com Java, Kotlin, React, AWS Lambda/Aurora e Datadog com abordagem API First. Combina liderança técnica ágil (Certified SAFe® 6 Agilist) com transição ativa para Ciência de Dados e IA Generativa.",
  years_experience: 22,
  people_impacted: "+7.000",
  cv_url: "/docs/curriculum_LEONARDO_ISAAC.pdf",
  avatar_url: "/images/profile/leo.png",
  whatsapp: "+5531988527732",
  email: "contato@leoisaac.com.br",
  linkedin: "https://www.linkedin.com/in/leonardo-isaac-silva-flores-9b66236b",
  github: "https://github.com/leoisf",
  location: "Ouro Preto - MG / São José dos Campos - SP, Brasil"
};

export const initialSkills: Skill[] = [
  // Data Science & IA
  { id: "sk-data-1", name: "Python (Pandas, NumPy, Scikit-learn)", category: "Data Science & IA", display_order: 1 },
  { id: "sk-data-2", name: "Databricks & Apache Spark", category: "Data Science & IA", display_order: 2 },
  { id: "sk-data-3", name: "IA Generativa & Prompt Engineering", category: "Data Science & IA", display_order: 3 },
  { id: "sk-data-4", name: "Agentic AI (Kiro & Cockpit Reasoning)", category: "Data Science & IA", display_order: 4 },
  { id: "sk-data-5", name: "Recuperação da Informação & NLP", category: "Data Science & IA", display_order: 5 },
  { id: "sk-data-6", name: "Redução de Dimensão (PCA, t-SNE)", category: "Data Science & IA", display_order: 6 },
  { id: "sk-data-7", name: "Estatística Descritiva & Visualização", category: "Data Science & IA", display_order: 7 },
  { id: "sk-data-8", name: "Power BI & Dashboards", category: "Data Science & IA", display_order: 8 },

  // Agile & Gestão
  { id: "sk-agile-1", name: "Certified SAFe® 6 Agilist", category: "Agile / Gestão", display_order: 9 },
  { id: "sk-agile-2", name: "SAFe® 6 POPM", category: "Agile / Gestão", display_order: 10 },
  { id: "sk-agile-3", name: "Scrum & Kanban", category: "Agile / Gestão", display_order: 11 },
  { id: "sk-agile-4", name: "Gestão de Projetos & Equipes", category: "Agile / Gestão", display_order: 12 },

  // Backend
  { id: "sk-back-java", name: "Java", category: "Backend", display_order: 13 },
  { id: "sk-back-kt", name: "Kotlin", category: "Backend", display_order: 14 },
  { id: "sk-back-api", name: "API First & RESTful Services", category: "Backend", display_order: 15 },
  { id: "sk-back-1", name: "Node.js & Express", category: "Backend", display_order: 16 },
  { id: "sk-back-2", name: "Python (Backend & Scripts)", category: "Backend", display_order: 17 },

  // Database
  { id: "sk-db-1", name: "PostgreSQL & AWS Aurora", category: "Database", display_order: 18 },
  { id: "sk-db-2", name: "MySQL", category: "Database", display_order: 19 },
  { id: "sk-db-3", name: "Supabase", category: "Database", display_order: 20 },
  { id: "sk-db-4", name: "Modelagem Relacional", category: "Database", display_order: 21 },

  // Frontend
  { id: "sk-front-1", name: "React & Next.js", category: "Frontend", display_order: 22 },
  { id: "sk-front-2", name: "TypeScript", category: "Frontend", display_order: 23 },
  { id: "sk-front-3", name: "JavaScript (ES6+)", category: "Frontend", display_order: 24 },
  { id: "sk-front-4", name: "Tailwind CSS", category: "Frontend", display_order: 25 },
  { id: "sk-front-5", name: "WebDev (HTML5 & CSS3)", category: "Frontend", display_order: 26 },

  // DevOps & Infra
  { id: "sk-ops-dd", name: "Datadog (Observabilidade & APM)", category: "DevOps / Infra", display_order: 27 },
  { id: "sk-ops-lambda", name: "AWS Lambda & Secrets Manager", category: "DevOps / Infra", display_order: 28 },
  { id: "sk-ops-1", name: "Docker & Containers", category: "DevOps / Infra", display_order: 29 },
  { id: "sk-ops-2", name: "AWS Cloud & Amazon Q", category: "DevOps / Infra", display_order: 30 },
  { id: "sk-ops-3", name: "Git, GitHub & GitHub Copilot", category: "DevOps / Infra", display_order: 31 },
  { id: "sk-ops-4", name: "Cloudflare Pages & CDN", category: "DevOps / Infra", display_order: 32 },
  { id: "sk-ops-5", name: "Linux Server & Redes", category: "DevOps / Infra", display_order: 33 }
];

export const initialProjects: Project[] = [
  {
    id: "proj-embraer-ams",
    title: "Sustentação AMS & Engenharia Web Embraer (AI/R)",
    slug: "sustentacao-ams-embraer",
    short_description: "Atuação como Full-Stack Developer na Squad de Sustentação AMS Comercial da Embraer: sistemas web com Java, Kotlin, React, API First e Cloud AWS.",
    full_description: "Atuação técnica como Desenvolvedor Web Full Stack na sustentação contínua de sistemas web de missão crítica para o segmento de aviação comercial da Embraer (São José dos Campos - SP). Aplicação de arquitetura API First, microsserviços em Java e Kotlin, interfaces reativas em React, banco de dados AWS Aurora / PostgreSQL, gerenciamento seguro de credenciais com AWS Secrets Manager, execuções serverless com AWS Lambda, observabilidade e monitoramento em tempo real com Datadog, além de tutoriais técnicos e documentações de alta qualidade com auxílio de GitHub Copilot e Kiro.",
    technologies: ["Java", "Kotlin", "React", "AWS Aurora", "AWS Lambda", "Datadog", "PostgreSQL", "AWS Secrets Manager", "API First", "GitHub Copilot", "Kiro"],
    image_url: "/images/projects/system_e.jpg",
    category: "Full Stack",
    is_featured: true,
    display_order: 1
  },
  {
    id: "proj-data-1",
    title: "Pipeline de Ciência de Dados & Machine Learning (UFOP)",
    slug: "pipeline-ciencia-dados-ufop",
    short_description: "Desenvolvimento de pipelines analíticos com Python (Pandas, Scikit-learn, Seaborn) para recuperação de informação, redução de dimensão (PCA) e estatística descritiva.",
    full_description: "Projeto acadêmico e prático desenvolvido no programa de Pós-Graduação em Ciência de Dados da UFOP (Conceito A). Inclui pré-processamento avançado de dados heterogêneos, engenharia de atributos, redução dimensional com PCA e t-SNE, treinamento de classificadores e visualizações analíticas de alta interpretabilidade.",
    technologies: ["Python", "Pandas", "Scikit-learn", "PCA", "Matplotlib", "Seaborn", "Jupyter"],
    image_url: "/images/projects/system.jpg",
    category: "Data & IA",
    is_featured: true,
    display_order: 2
  },
  {
    id: "proj-1",
    title: "Portfólio Web Moderno & Painel Dinâmico",
    slug: "portfolio-web-moderno",
    short_description: "Arquitetura Jamstack de alta performance com Next.js 15, TypeScript, Tailwind CSS, Supabase (PostgreSQL + Auth + Storage) e deploy na Cloudflare.",
    full_description: "Refatoração completa do portfólio pessoal migrado de WordPress para uma arquitetura moderna sem custos de infraestrutura. Inclui suporte nativo bilíngue (Português/Inglês), autenticação segura, painel administrativo dinâmico para uploads de projetos e certificados, suporte nativo a temas Dark/Light e pontuação 95+ no Google Lighthouse.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Cloudflare Pages"],
    image_url: "/images/projects/system.jpg",
    github_url: "https://github.com/leoisf/portfolio-leoisaac",
    live_url: "https://leoisaac.com.br",
    category: "Full Stack",
    is_featured: true,
    display_order: 3
  },
  {
    id: "proj-compass",
    title: "Transformação Digital & Agilidade Vivo B2B (AI/R)",
    slug: "transformacao-digital-vivo-b2b",
    short_description: "Atuação analítica e técnica no Programa Estruturante Fênix (Vivo B2B) com SAFe® 6, ecossistema CRM Salesforce, Azure Cloud e IA Generativa.",
    full_description: "Participação de alto nível na governança ágil e entrega contínua de funcionalidades críticas no projeto Vivo Fênix B2B. Condução de cerimônias ágeis, mapeamento de dependências, refinamentos técnicos e integração de ferramentas modernas de Inteligência Artificial (Kiro Agentic AI, AI Cockpit) para otimização de fluxos operacionais.",
    technologies: ["SAFe® 6 Agilist", "Salesforce CRM", "Microsoft Azure", "Jira", "Kiro AI", "Databricks"],
    image_url: "/images/projects/system_e.jpg",
    category: "Full Stack",
    is_featured: true,
    display_order: 4
  },
  {
    id: "proj-2",
    title: "Telecentros Comunitários - Inclusão Digital",
    slug: "telecentros-comunitarios",
    short_description: "Coordenação de projeto público de inclusão digital que atendeu mais de 7.000 cidadãos com acesso gratuito à internet e cursos profissionalizantes.",
    full_description: "Iniciativa realizada em parceria com a Câmara Municipal de Ouro Preto. Atuação na coordenação geral, capacitação técnica de instrutores, gestão da infraestrutura de redes e laboratórios de informática, além da aplicação de metodologias educacionais inclusivas por mais de 15 anos.",
    technologies: ["Gestão de Projetos", "Infraestrutura de Redes", "LTSP", "Capacitação", "Inclusão Digital"],
    image_url: "/images/projects/tc.jpeg",
    category: "Social / Inclusão",
    is_featured: true,
    display_order: 5
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
    display_order: 6
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
  // === DATA & IA ===
  {
    id: "cert-kiro-agentic",
    title: "Certified AI/R Kiro Agentic AI",
    issuer: "AI/R Company",
    issue_date: "2026-07",
    image_url: "/images/certificates/AIR_Certified_Kiro_Agentic_AI.png",
    category: "Data & IA",
    display_order: 1
  },
  {
    id: "cert-reasoning",
    title: "AI Cockpit Reasoning Certified",
    issuer: "AI/R Company",
    issue_date: "2026-07",
    image_url: "/images/certificates/AIR_AI_Cockpit_Reasoning_Certified.png",
    category: "Data & IA",
    display_order: 2
  },
  {
    id: "cert-kiro-dev",
    title: "Amazon Kiro: Agentic AI Development",
    issuer: "AI/R Company",
    issue_date: "2026-03",
    image_url: "/images/certificates/AIR_Amazon_Kiro_Agentic_AI_Development.png",
    category: "Data & IA",
    display_order: 3
  },
  {
    id: "cert-aws-prompt",
    title: "Prompt Engineering with Generative AI",
    issuer: "AWS Training & Certification",
    issue_date: "2024",
    image_url: "/images/certificates/AWS_Prompt_Engineering_Generative_AI.png",
    category: "Data & IA",
    display_order: 4
  },
  {
    id: "cert-aws-q-fund",
    title: "Amazon Q Developer Fundamentals",
    issuer: "AWS Training & Certification",
    issue_date: "2024",
    image_url: "/images/certificates/AWS_Amazon_Q_Developer_Fundamentals.png",
    category: "Data & IA",
    display_order: 5
  },

  // === METODOLOGIAS ÁGEIS ===
  {
    id: "cert-safe-agilist",
    title: "Certified SAFe® 6 Agilist",
    issuer: "Scaled Agile",
    issue_date: "2025-04",
    credential_url: "https://www.credly.com",
    image_url: "/images/certificates/Certified_SAFe_6_Agilist.png",
    category: "Metodologias Ágeis",
    display_order: 6
  },
  {
    id: "cert-safe-popm",
    title: "SAFe® 6 Product Owner / Product Manager (POPM)",
    issuer: "Scaled Agile",
    issue_date: "2025",
    image_url: "/images/certificates/SAFe_POPM.png",
    category: "Metodologias Ágeis",
    display_order: 7
  },
  {
    id: "cert-gov-mg-projetos",
    title: "Introdução ao Planejamento e Gerenciamento de Projetos",
    issuer: "Governo de Minas / Projeto Estruturador",
    issue_date: "2006-05",
    image_url: "/images/certificates/09.png",
    category: "Metodologias Ágeis",
    display_order: 8
  },

  // === CLOUD / DEVOPS ===
  {
    id: "cert-alura-docker",
    title: "Docker: Criando Containers sem Dor de Cabeça",
    issuer: "Alura",
    issue_date: "2023-06",
    image_url: "/images/certificates/Alura_Docker_Containers.png",
    category: "Cloud / DevOps",
    display_order: 9
  },
  {
    id: "cert-air-software-seguro",
    title: "Desenvolvimento de Software Seguro",
    issuer: "AI/R Company",
    issue_date: "2026-06",
    image_url: "/images/certificates/AIR_Desenvolvimento_Software_Seguro.png",
    category: "Cloud / DevOps",
    display_order: 10
  },
  {
    id: "cert-air-sec-info",
    title: "Segurança da Informação - AIR 2026",
    issuer: "AI/R Company",
    issue_date: "2026-08",
    image_url: "/images/certificates/AIR_Seguranca_da_Informacao_2026.png",
    category: "Cloud / DevOps",
    display_order: 11
  },
  {
    id: "cert-rnp-proinfo",
    title: "Formação de Suporte Técnico Para Laboratórios Proinfo (32h)",
    issuer: "Escola Superior de Redes RNP / IBICT / UnB",
    issue_date: "2010-10",
    image_url: "/images/certificates/16.png",
    category: "Cloud / DevOps",
    display_order: 12
  },
  {
    id: "cert-ufop-linux",
    title: "Curso de Introdução em Linux (40h)",
    issuer: "UFOP - Universidade Federal de Ouro Preto",
    issue_date: "2004-12",
    image_url: "/images/certificates/6.png",
    category: "Cloud / DevOps",
    display_order: 13
  },

  // === DESENVOLVIMENTO ===
  {
    id: "cert-python-ufmg",
    title: "Composição de Programas em Python (10h)",
    issuer: "UFMG - Universidade Federal de Minas Gerais (DCC)",
    issue_date: "2020-07",
    image_url: "/images/certificates/28.png",
    category: "Desenvolvimento",
    display_order: 14
  },
  {
    id: "cert-benchmark",
    title: "Benchmark Certificate 2023",
    issuer: "Compass UOL / AI/R",
    issue_date: "2023-08",
    image_url: "/images/certificates/benchmark_certificate_2023.jpg",
    category: "Desenvolvimento",
    display_order: 15
  },
  {
    id: "cert-alura-typescript",
    title: "TypeScript: Evoluindo seu JavaScript",
    issuer: "Alura",
    issue_date: "2023-06",
    image_url: "/images/certificates/Alura_TypeScript.png",
    category: "Desenvolvimento",
    display_order: 16
  },
  {
    id: "cert-alura-nodejs",
    title: "Node.js: Streaming de Dados e Repositório",
    issuer: "Alura",
    issue_date: "2023-06",
    image_url: "/images/certificates/Alura_NodeJS_Streaming.png",
    category: "Desenvolvimento",
    display_order: 17
  },
  {
    id: "cert-alura-rest",
    title: "REST com Node.js: API com Express e MySQL",
    issuer: "Alura",
    issue_date: "2023-06",
    image_url: "/images/certificates/Alura_Rest_NodeJS_MySQL.png",
    category: "Desenvolvimento",
    display_order: 18
  },
  {
    id: "cert-alura-js-browser",
    title: "JavaScript: Conhecendo o Browser e Padrões de Projeto",
    issuer: "Alura",
    issue_date: "2023-06",
    image_url: "/images/certificates/Alura_JavaScript_Browser.png",
    category: "Desenvolvimento",
    display_order: 19
  },
  {
    id: "cert-dio-es6",
    title: "JavaScript ES6 Essencial (4h)",
    issuer: "Digital Innovation One",
    issue_date: "2020-04",
    image_url: "/images/certificates/24.png",
    category: "Desenvolvimento",
    display_order: 20
  },
  {
    id: "cert-dio-angular",
    title: "Introdução ao Angular 8 (5h)",
    issuer: "Digital Innovation One",
    issue_date: "2020-04",
    image_url: "/images/certificates/26.png",
    category: "Desenvolvimento",
    display_order: 21
  },
  {
    id: "cert-dio-bootstrap",
    title: "Construindo Páginas para Internet com Bootstrap (4h)",
    issuer: "Digital Innovation One",
    issue_date: "2020-04",
    image_url: "/images/certificates/25.png",
    category: "Desenvolvimento",
    display_order: 22
  },
  {
    id: "cert-dio-js-web",
    title: "Programação para Internet com JavaScript (2h)",
    issuer: "Digital Innovation One",
    issue_date: "2020-04",
    image_url: "/images/certificates/27.png",
    category: "Desenvolvimento",
    display_order: 23
  },
  {
    id: "cert-dio-jquery",
    title: "Introdução à Biblioteca jQuery (2h)",
    issuer: "Digital Innovation One",
    issue_date: "2020-04",
    image_url: "/images/certificates/23.png",
    category: "Desenvolvimento",
    display_order: 24
  },
  {
    id: "cert-ufop-android-1",
    title: "Programação para Dispositivos Móveis Android - Módulo I (32h)",
    issuer: "Framework Training Center",
    issue_date: "2013-12",
    image_url: "/images/certificates/20.png",
    category: "Desenvolvimento",
    display_order: 25
  },
  {
    id: "cert-ufop-android-2",
    title: "Programação para Dispositivos Móveis Android - Módulo II (32h)",
    issuer: "Framework Training Center",
    issue_date: "2013-12",
    image_url: "/images/certificates/21.png",
    category: "Desenvolvimento",
    display_order: 26
  },
  {
    id: "cert-ufop-omnet",
    title: "Curso de Omnet++ (8h) - Laboratório IMÓBILIS",
    issuer: "UFOP / DECOM",
    issue_date: "2014-05",
    image_url: "/images/certificates/22.jpeg",
    category: "Desenvolvimento",
    display_order: 27
  },
  {
    id: "cert-ufop-rails",
    title: "I Workshop da Computação: Ruby on Rails (4h)",
    issuer: "UFOP / DECOM",
    issue_date: "2013-06",
    image_url: "/images/certificates/17.png",
    category: "Desenvolvimento",
    display_order: 28
  },

  // === INCLUSÃO DIGITAL & SOCIAL ===
  {
    id: "cert-bb-telecentros-1",
    title: "Formação Básica de Coordenadores de Telecentros Comunitários",
    issuer: "Banco do Brasil & ONG Programando o Futuro",
    issue_date: "2005-03",
    image_url: "/images/certificates/08.png",
    category: "Inclusão Digital & Social",
    display_order: 29
  },
  {
    id: "cert-bb-telecentros-2",
    title: "Metodologia para Capacitação de Monitores de Telecentros (56h)",
    issuer: "Fundação Banco do Brasil & ONG Programando o Futuro",
    issue_date: "2006-07",
    image_url: "/images/certificates/12.png",
    category: "Inclusão Digital & Social",
    display_order: 30
  },
  {
    id: "cert-mct-inclusao",
    title: "Seminário Inclusão Digital: Impactos e Oportunidades no Sudeste",
    issuer: "Ministério da Ciência e Tecnologia & Governo de Minas",
    issue_date: "2005-09",
    image_url: "/images/certificates/10.png",
    category: "Inclusão Digital & Social",
    display_order: 31
  },
  {
    id: "cert-personalidade-2006",
    title: "Personalidade do Ano 2006 - Destaque Cultura & Telecentros",
    issuer: "Comissão de Juventude de Ouro Preto",
    issue_date: "2006-12",
    image_url: "/images/certificates/18.png",
    category: "Inclusão Digital & Social",
    display_order: 32
  },
  {
    id: "cert-ctid-oficina",
    title: "8ª Oficina para Inclusão Digital - CTID",
    issuer: "Comitê Técnico de Inclusão Digital",
    issue_date: "2009-11",
    image_url: "/images/certificates/14.png",
    category: "Inclusão Digital & Social",
    display_order: 33
  },
  {
    id: "cert-minc-cultura",
    title: "Encontro de Conhecimentos Livres & MetaReciclagem (24h)",
    issuer: "Ministério da Cultura - Programa Cultura Viva",
    issue_date: "2006-06",
    image_url: "/images/certificates/13.png",
    category: "Inclusão Digital & Social",
    display_order: 34
  },
  {
    id: "cert-ufop-openoffice",
    title: "Curso de Treinamento em OpenOffice (40h)",
    issuer: "UFOP - Universidade Federal de Ouro Preto",
    issue_date: "2004-12",
    image_url: "/images/certificates/7.png",
    category: "Inclusão Digital & Social",
    display_order: 35
  },
  {
    id: "cert-sebrae-empreender",
    title: "Aprender a Empreender pela Internet (16h)",
    issuer: "SEBRAE",
    issue_date: "2006-07",
    image_url: "/images/certificates/11.png",
    category: "Inclusão Digital & Social",
    display_order: 36
  },
  {
    id: "cert-prodemge-info",
    title: "Informática Instrumental (80h)",
    issuer: "SEE-MG & Prodemge",
    issue_date: "1998-12",
    image_url: "/images/certificates/02.png",
    category: "Inclusão Digital & Social",
    display_order: 37
  },
  {
    id: "cert-unesco-fundamental",
    title: "1º Ciclo do Ensino Fundamental - UNESCO",
    issuer: "E.E. Dom Velloso",
    issue_date: "1997-12",
    image_url: "/images/certificates/01.png",
    category: "Inclusão Digital & Social",
    display_order: 38
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
