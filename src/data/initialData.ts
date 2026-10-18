import { Project, Certificate, Skill, SocialInitiative, ProfileSettings, ClippingItem } from "@/types/database";

export const initialProfile: ProfileSettings = {
  id: "profile-leo-1",
  full_name: "Leonardo Isaac",
  headline: "Cientista da Computação & Full-Stack | Pós em Ciência de Dados & IA (UFOP)",
  bio: "Profissional com 25 anos de carreira em tecnologia — atuando como Desenvolvedor Full-Stack na AI/R Company (alocado na squad AMS Comercial da Embraer) e na pós-graduação em Ciência de Dados e Inteligência Artificial na UFOP. Especialista em unir engenharia de software de alta criticidade, modelos analíticos e inteligência artificial aplicada.",
  years_experience: 25,
  people_impacted: "+7.000",
  cv_url: "/docs/curriculum_LEONARDO_ISAAC.pdf",
  avatar_url: "/images/profile/foto_perfil.png",
  whatsapp: "+5531988527732",
  email: "contato@leoisaac.com.br",
  linkedin: "https://www.linkedin.com/in/leonardo-isaac-silva-flores-9b66236b",
  github: "https://github.com/leoisf",
  location: "Ouro Preto - MG, Brasil"
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
    full_description: "Atuação técnica remota como Desenvolvedor Web Full Stack na sustentação contínua de sistemas web de missão crítica para o segmento de aviação comercial da Embraer (sede em São José dos Campos - SP). Aplicação de arquitetura API First, microsserviços em Java e Kotlin, interfaces reativas em React, banco de dados AWS Aurora / PostgreSQL, gerenciamento seguro de credenciais com AWS Secrets Manager, execuções serverless com AWS Lambda, observabilidade e monitoramento em tempo real com Datadog, além de tutoriais técnicos e documentações de alta qualidade com auxílio de GitHub Copilot e Kiro.",
    technologies: ["Java", "Kotlin", "React", "AWS Aurora", "AWS Lambda", "Datadog", "PostgreSQL", "AWS Secrets Manager", "API First", "GitHub Copilot", "Kiro"],
    image_url: "/images/projects/system_e.jpg",
    category: "Full Stack",
    repo_name: "Embraer / Squad AMS Comercial",
    repo_type: "enterprise",
    primary_language: "Java / Kotlin",
    default_branch: "production",
    highlights: [
      "Sustentação de sistemas web críticos de aviação comercial com arquitetura API First",
      "Microsserviços resilientes em Java e Kotlin com AWS Aurora e funções serverless Lambda",
      "Observabilidade APM em tempo real com Datadog e suporte de IA generativa (GitHub Copilot/Kiro)"
    ],
    is_featured: true,
    display_order: 1
  },
  {
    id: "proj-1",
    title: "Portfólio Web Moderno & Painel Dinâmico",
    slug: "portfolio-web-moderno",
    short_description: "Arquitetura Jamstack de alta performance com Next.js 16, TypeScript, Tailwind CSS, Supabase (PostgreSQL + Auth + Storage) e deploy Cloudflare.",
    full_description: "Refatoração completa do ecossistema do portfólio pessoal migrado de WordPress para uma arquitetura moderna sem custos fixos de servidor. Inclui suporte nativo bilíngue (Português/Inglês), autenticação segura, painel administrativo dinâmico com Supabase, temas Dark/Light nativos e pontuação 95+ no Google Lighthouse.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Cloudflare Pages"],
    image_url: "/images/projects/system.jpg",
    category: "Full Stack",
    repo_name: "leoisf/portfolio-leoisaac",
    repo_type: "public",
    primary_language: "TypeScript",
    default_branch: "master",
    highlights: [
      "Arquitetura Jamstack Next.js 16 com exportação estática ultra-veloz na Cloudflare",
      "Integração híbrida Supabase para persistência de dados, autenticação e storage",
      "Design responsivo com tema Dark/Light, internacionalização (i18n) e SEO técnico"
    ],
    github_url: "https://github.com/leoisf/portfolio-leoisaac",
    live_url: "https://leoisaac.com.br",
    is_featured: true,
    display_order: 2
  },
  {
    id: "proj-data-1",
    title: "Pipeline de Ciência de Dados & Machine Learning (UFOP)",
    slug: "pipeline-ciencia-dados-ufop",
    short_description: "Pipelines analíticos com Python (Pandas, Scikit-learn, Seaborn) para recuperação de informação, redução dimensional (PCA) e modelagem descritiva.",
    full_description: "Projeto acadêmico e técnico desenvolvido no programa de Pós-Graduação em Ciência de Dados da UFOP (Conceito A). Abrange pré-processamento avançado de dados heterogêneos, engenharia de atributos, redução dimensional com PCA e t-SNE, treinamento de classificadores supervisionados e visualizações interpretáveis em Jupyter Notebooks.",
    technologies: ["Python", "Pandas", "Scikit-learn", "PCA", "t-SNE", "Matplotlib", "Seaborn", "Jupyter"],
    image_url: "/images/projects/system.jpg",
    category: "Data & IA",
    repo_name: "leoisf/CDD106---TECNICAS-DE-REDUCAO-DE-DIMENSAO",
    repo_type: "public",
    primary_language: "Python",
    default_branch: "main",
    highlights: [
      "Pipelines analíticos com Pandas, NumPy, Scikit-learn e visualizações interpretáveis",
      "Redução dimensional avançada com PCA e t-SNE preservando variância estatística",
      "Notebooks reprodutíveis focados em recuperação de informação e estatística descritiva"
    ],
    github_url: "https://github.com/leoisf/CDD106---TECNICAS-DE-REDUCAO-DE-DIMENSAO",
    is_featured: true,
    display_order: 3
  },
  {
    id: "proj-turguides",
    title: "TurGuides - Plataforma Conectando Guias a Turistas",
    slug: "turguides-app",
    short_description: "Aplicativo mobile desenvolvido em Dart/Flutter para intermediação direta entre guias locais e turistas com geolocalização e roteiros.",
    full_description: "Solução para turismo inteligente com geolocalização de atrativos históricos e conexão entre guias credenciados e visitantes. Construído com arquitetura reativa em Flutter/Dart, integração de APIs de mapas, gerenciamento de estado e interface intuitiva.",
    technologies: ["Dart", "Flutter", "Mobile", "REST API", "Geolocalização", "Git"],
    image_url: "/images/projects/system.jpg",
    category: "Full Stack",
    repo_name: "leoisf/TurGuides",
    repo_type: "public",
    primary_language: "Dart",
    default_branch: "main",
    highlights: [
      "Aplicativo móvel multiplataforma com interfaces reativas em Dart e Flutter",
      "Mapeamento de rotas turísticas e conexão dinâmica entre guias e viajantes",
      "Código aberto disponibilizado sob licença MIT no GitHub"
    ],
    github_url: "https://github.com/leoisf/TurGuides",
    is_featured: true,
    display_order: 4
  },
  {
    id: "proj-api-crud",
    title: "API RESTful Modular com Node.js & TypeScript",
    slug: "api-crud-typescript-nodejs",
    short_description: "Serviço de backend em TypeScript com arquitetura limpa em camadas, validações rigorosas, rotas REST e conteinerização Docker.",
    full_description: "API desenvolvida aplicando conceitos modernos de tipagem estrita com TypeScript, separação de responsabilidades em camadas de serviço e controlador, tratamento uniforme de exceções e preparação para orquestração em contêineres Docker.",
    technologies: ["TypeScript", "Node.js", "Express", "Docker", "REST API", "Git"],
    image_url: "/images/projects/system_e.jpg",
    category: "Full Stack",
    repo_name: "leoisf/api-crud-typescript-nodejs",
    repo_type: "public",
    primary_language: "TypeScript",
    default_branch: "master",
    highlights: [
      "Arquitetura em camadas com tipagem rigorosa em TypeScript e Express",
      "Tratamento robusto de requisições RESTful e padronização de respostas JSON",
      "Ambiente padronizado pronto para execução e testes via Docker container"
    ],
    github_url: "https://github.com/leoisf/api-crud-typescript-nodejs",
    is_featured: true,
    display_order: 5
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
    repo_name: "Vivo Fênix B2B / AI/R",
    repo_type: "enterprise",
    primary_language: "Salesforce / SAFe",
    default_branch: "release",
    highlights: [
      "Governança técnica ágil em entregas contínuas em larga escala com SAFe® 6 Agilist",
      "Alinhamento em ecossistema empresarial Salesforce CRM e nuvem Microsoft Azure",
      "Adoção de esteiras com inteligência artificial generativa e Agentic AI para eficiência"
    ],
    is_featured: true,
    display_order: 6
  },
  {
    id: "proj-2",
    title: "Telecentros Comunitários - Inclusão Digital",
    slug: "telecentros-comunitarios",
    short_description: "Coordenação de projeto público pioneiro de inclusão digital que atendeu mais de 7.000 cidadãos com acesso gratuito à internet e cursos.",
    full_description: "Iniciativa realizada em parceria com a Câmara Municipal de Ouro Preto. Atuação na coordenação geral, capacitação técnica de instrutores, gestão da infraestrutura de redes e laboratórios de informática, além da aplicação de metodologias educacionais inclusivas por mais de 15 anos.",
    technologies: ["Gestão de Projetos", "Infraestrutura de Redes", "LTSP", "Linux", "Capacitação", "Inclusão Digital"],
    image_url: "/images/projects/tc.jpeg",
    category: "Social / Inclusão",
    repo_name: "Câmara Municipal de Ouro Preto / Telecentros",
    repo_type: "social",
    primary_language: "Linux / LTSP",
    default_branch: "distritos",
    clipping_anchor: "#clipping",
    highlights: [
      "Mais de 7.000 cidadãos certificados em inclusão digital e tecnologias comunitárias",
      "Implantação de redes públicas baseadas em LTSP (Linux Terminal Server) e software livre",
      "Mais de 15 anos de sustentação, com ampla repercussão histórica registrada na imprensa"
    ],
    is_featured: true,
    display_order: 7
  },
  {
    id: "proj-3",
    title: "Projeto Escola Digital",
    slug: "projeto-escola-digital",
    short_description: "Revitalização e automação de laboratórios de informática em escolas municipais para viabilizar novas ferramentas de aprendizagem.",
    full_description: "Desenvolvido na Prefeitura de Ouro Preto visando reduzir os impactos da era da informação nas instituições municipais. Implantação de cursos, recuperação de parques de máquinas parados ou subutilizados e suporte técnico a educadores.",
    technologies: ["Infraestrutura", "Hardware", "Linux / Windows", "Treinamento Técnico", "Inclusão Digital"],
    image_url: "/images/projects/ED.png",
    category: "Social / Inclusão",
    repo_name: "Secretaria Municipal de Educação / PMOP",
    repo_type: "social",
    primary_language: "Hardware & Redes",
    default_branch: "escolas",
    clipping_anchor: "#clipping",
    highlights: [
      "Revitalização de parques de computadores e laboratórios inoperantes na rede municipal",
      "Formação técnica continuada para servidores e corpo docente das escolas públicas",
      "Redução da exclusão digital e modernização dos ambientes pedagógicos comunitários"
    ],
    is_featured: true,
    display_order: 8
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
    display_order: 1,
    is_featured: true
  },
  {
    id: "cert-reasoning",
    title: "AI Cockpit Reasoning Certified",
    issuer: "AI/R Company",
    issue_date: "2026-07",
    image_url: "/images/certificates/AIR_AI_Cockpit_Reasoning_Certified.png",
    category: "Data & IA",
    display_order: 2,
    is_featured: true
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
    display_order: 4,
    is_featured: true
  },
  {
    id: "cert-aws-q-fund",
    title: "Amazon Q Developer Fundamentals",
    issuer: "AWS Training & Certification",
    issue_date: "2024",
    image_url: "/images/certificates/AWS_Amazon_Q_Developer_Fundamentals.png",
    category: "Data & IA",
    display_order: 5,
    is_featured: true
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
    display_order: 6,
    is_featured: true
  },
  {
    id: "cert-safe-popm",
    title: "SAFe® 6 Product Owner / Product Manager (POPM)",
    issuer: "Scaled Agile",
    issue_date: "2025",
    image_url: "/images/certificates/SAFe_POPM.png",
    category: "Metodologias Ágeis",
    display_order: 7,
    is_featured: true
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
    id: "clip-1",
    title: "Inauguração de Unidade de Acesso Digital em Ouro Preto",
    source: "Jornal de Ouro Preto",
    date: "Histórico",
    image_url: "/images/clipping/1.png",
    category: "Inclusão Digital",
    display_order: 1
  },
  {
    id: "clip-2",
    title: "Cursos Gratuitos de Informática nos Distritos de Ouro Preto",
    source: "Voz Ativa Notícias",
    date: "Histórico",
    image_url: "/images/clipping/2.png",
    category: "Telecentros",
    display_order: 2
  },
  {
    id: "clip-3",
    title: "Formatura de Turmas Comunitárias em Cidadania e Tecnologia",
    source: "Diário de Ouro Preto",
    date: "Histórico",
    image_url: "/images/clipping/3.png",
    category: "Telecentros",
    display_order: 3
  },
  {
    id: "clip-4",
    title: "Telecentros Comunitários: Democratizando o Conhecimento Digital",
    source: "Tribuna Regional",
    date: "Histórico",
    image_url: "/images/clipping/4.png",
    category: "Telecentros",
    display_order: 4
  },
  {
    id: "clip-5",
    title: "Inclusão Digital para Jovens e Terceira Idade nos Bairros",
    source: "Gazeta de Ouro Preto",
    date: "Histórico",
    image_url: "/images/clipping/5.png",
    category: "Inclusão Digital",
    display_order: 5
  },
  {
    id: "clip-6",
    title: "Capacitação Profissional Gratuita Impulsiona Jovens no Mercado",
    source: "Jornal Voz Ativa",
    date: "Histórico",
    image_url: "/images/clipping/6.png",
    category: "Inclusão Digital",
    display_order: 6
  },
  {
    id: "clip-7",
    title: "Pioneirismo em Software Livre com Terminais Leves LTSP",
    source: "Boletim de Tecnologia Municipal",
    date: "Histórico",
    image_url: "/images/clipping/7.png",
    category: "Telecentros",
    display_order: 7
  },
  {
    id: "clip-8",
    title: "Laboratório de Informática Comunitário Atende Centenas de Alunos",
    source: "Comunicação Social",
    date: "Histórico",
    image_url: "/images/clipping/8.png",
    category: "Telecentros",
    display_order: 8
  },
  {
    id: "clip-9",
    title: "Revitalização e Manutenção de Equipamentos nas Escolas",
    source: "Mídia Ouro Preto",
    date: "Histórico",
    image_url: "/images/clipping/9.png",
    category: "Escola Digital",
    display_order: 9
  },
  {
    id: "clip-10",
    title: "Inclusão Sociodigital: Transformação Através da Educação e TI",
    source: "Estado de Minas - Regional",
    date: "Histórico",
    image_url: "/images/clipping/10.png",
    category: "Inclusão Digital",
    display_order: 10
  },
  {
    id: "clip-11",
    title: "Novas Turmas de Informática Básica e Ferramentas de Escritório",
    source: "Diário de Notícias Ouro Preto",
    date: "Histórico",
    image_url: "/images/clipping/11.png",
    category: "Telecentros",
    display_order: 11
  },
  {
    id: "clip-12",
    title: "Expansão dos Serviços de Acesso à Internet nos Distritos",
    source: "Voz Ativa",
    date: "Histórico",
    image_url: "/images/clipping/12.png",
    category: "Inclusão Digital",
    display_order: 12
  },
  {
    id: "clip-13",
    title: "Escola Digital Capacita Professores e Servidores da Rede Pública",
    source: "Jornal Ouro Preto em Foco",
    date: "Histórico",
    image_url: "/images/clipping/13.png",
    category: "Escola Digital",
    display_order: 13
  },
  {
    id: "clip-14",
    title: "Modernização Tecnológica e Recuperação de Máquinas Escolares",
    source: "Informativo Educação Ouro Preto",
    date: "Histórico",
    image_url: "/images/clipping/14.png",
    category: "Escola Digital",
    display_order: 14
  },
  {
    id: "clip-15",
    title: "Oficinas Digitais Levam Oportunidades aos Moradores da Região",
    source: "Gazeta Regional",
    date: "Histórico",
    image_url: "/images/clipping/15.png",
    category: "Inclusão Digital",
    display_order: 15
  },
  {
    id: "clip-16",
    title: "Acesso Livre à Informação: O Papel dos Telecentros na Comunidade",
    source: "Tribuna de Ouro Preto",
    date: "Histórico",
    image_url: "/images/clipping/16.png",
    category: "Telecentros",
    display_order: 16
  },
  {
    id: "clip-17",
    title: "Parceria Entre Câmara Municipal e Sociedade Civil em Tecnologia",
    source: "Jornal da Câmara de Ouro Preto",
    date: "Histórico",
    image_url: "/images/clipping/17.png",
    category: "Telecentros",
    display_order: 17
  },
  {
    id: "clip-18",
    title: "Cidadania na Rede: Como o Acesso Digital Reduz Desigualdades",
    source: "Voz Ativa",
    date: "Histórico",
    image_url: "/images/clipping/18.png",
    category: "Inclusão Digital",
    display_order: 18
  },
  {
    id: "clip-19",
    title: "Alunos da Rede Municipal Desenvolvem Projetos em Laboratórios",
    source: "Boletim Escolar Municipal",
    date: "Histórico",
    image_url: "/images/clipping/19.png",
    category: "Escola Digital",
    display_order: 19
  },
  {
    id: "clip-20",
    title: "Entrega de Certificados de Conclusão em Formação Digital",
    source: "Diário de Ouro Preto",
    date: "Histórico",
    image_url: "/images/clipping/20.png",
    category: "Telecentros",
    display_order: 20
  },
  {
    id: "clip-21",
    title: "Tecnologia como Ferramenta Pedagógica nas Escolas Municipais",
    source: "Revista Educação & Tecnologia",
    date: "Histórico",
    image_url: "/images/clipping/21.png",
    category: "Escola Digital",
    display_order: 21
  },
  {
    id: "clip-22",
    title: "Crianças e Jovens Aprendem Informática com Metodologia Prática",
    source: "Gazeta de Ouro Preto",
    date: "Histórico",
    image_url: "/images/clipping/22.png",
    category: "Telecentros",
    display_order: 22
  },
  {
    id: "clip-23",
    title: "Espaços Digitais Promovem Empreendedorismo Comunitário",
    source: "Mídia Regional",
    date: "Histórico",
    image_url: "/images/clipping/23.png",
    category: "Inclusão Digital",
    display_order: 23
  },
  {
    id: "clip-24",
    title: "Ampliação da Rede de Telecentros Leva Cidadania aos Distritos",
    source: "Jornal de Ouro Preto",
    date: "Histórico",
    image_url: "/images/clipping/24.png",
    category: "Telecentros",
    display_order: 24
  },
  {
    id: "clip-25",
    title: "Telecentros Comunitários Levam Cidadania e Tecnologia aos Bairros",
    source: "Voz Ativa / Notícias Locais",
    date: "Histórico",
    image_url: "/images/clipping/25.png",
    category: "Telecentros",
    display_order: 25
  },
  {
    id: "clip-26",
    title: "Integração Comunitária e Cursos Noturnos para Trabalhadores",
    source: "Diário Regional",
    date: "Histórico",
    image_url: "/images/clipping/26.png",
    category: "Telecentros",
    display_order: 26
  },
  {
    id: "clip-27",
    title: "Apoio a Estudantes com Pesquisas Escolares nos Centros Digitais",
    source: "Informativo Municipal",
    date: "Histórico",
    image_url: "/images/clipping/27.png",
    category: "Inclusão Digital",
    display_order: 27
  },
  {
    id: "clip-28",
    title: "Cultura Digital: Exposições e Atividades nos Laboratórios",
    source: "Jornal Ouro Preto Cultural",
    date: "Histórico",
    image_url: "/images/clipping/28.png",
    category: "Inclusão Digital",
    display_order: 28
  },
  {
    id: "clip-29",
    title: "Modernização da Infraestrutura de Redes nas Unidades Educacionais",
    source: "Boletim Técnico de TI",
    date: "Histórico",
    image_url: "/images/clipping/29.png",
    category: "Escola Digital",
    display_order: 29
  },
  {
    id: "clip-30",
    title: "Capacitação Continuada de Instrutores e Monitores Comunitários",
    source: "Comunicação Municipal",
    date: "Histórico",
    image_url: "/images/clipping/30.png",
    category: "Telecentros",
    display_order: 30
  },
  {
    id: "clip-31",
    title: "Democratização da Informática: Histórias de Superação e Aprendizado",
    source: "Voz Ativa",
    date: "Histórico",
    image_url: "/images/clipping/31.png",
    category: "Inclusão Digital",
    display_order: 31
  },
  {
    id: "clip-32",
    title: "Transformação Digital e Apoio às Escolas Públicas",
    source: "Notícias de Minas",
    date: "Histórico",
    image_url: "/images/clipping/32.png",
    category: "Escola Digital",
    display_order: 32
  },
  {
    id: "clip-33",
    title: "Reaproveitamento Inteligente de Hardware em Laboratórios Públicos",
    source: "EcoTecnologia Regional",
    date: "Histórico",
    image_url: "/images/clipping/33.png",
    category: "Escola Digital",
    display_order: 33
  },
  {
    id: "clip-34",
    title: "Cursos Gratuitos de Informática Formam Novas Turmas",
    source: "Comunicação Social",
    date: "Histórico",
    image_url: "/images/clipping/34.png",
    category: "Telecentros",
    display_order: 34
  },
  {
    id: "clip-35",
    title: "Incentivo à Alfabetização Digital para Adultos e Idosos",
    source: "Gazeta Ouro-Pretana",
    date: "Histórico",
    image_url: "/images/clipping/35.png",
    category: "Inclusão Digital",
    display_order: 35
  },
  {
    id: "clip-36",
    title: "Formação de Novos Alunos e Capacitação nos Telecentros",
    source: "Diário de Ouro Preto",
    date: "Histórico",
    image_url: "/images/clipping/36.png",
    category: "Telecentros",
    display_order: 36
  },
  {
    id: "clip-37",
    title: "Seminário Regional Destaca Sucesso dos Telecentros em Minas",
    source: "Imprensa Mineira",
    date: "Histórico",
    image_url: "/images/clipping/37.png",
    category: "Inclusão Digital",
    display_order: 37
  },
  {
    id: "clip-38",
    title: "Projeto de Inclusão Digital Beneficia Milhares de Cidadãos",
    source: "Jornal Ouro Preto",
    date: "Histórico",
    image_url: "/images/clipping/38.png",
    category: "Telecentros",
    display_order: 38
  },
  {
    id: "clip-39",
    title: "Inovação no Ensino: Escolas Integradas com Recursos Digitais",
    source: "Boletim Municipal",
    date: "Histórico",
    image_url: "/images/clipping/39.png",
    category: "Escola Digital",
    display_order: 39
  },
  {
    id: "clip-40",
    title: "Impacto Social: Mais de 7.000 Pessoas Beneficiadas por Cursos de TI",
    source: "Voz Ativa em Destaque",
    date: "Histórico",
    image_url: "/images/clipping/40.png",
    category: "Inclusão Digital",
    display_order: 40
  },
  {
    id: "clip-41",
    title: "Juventude Conectada: Informática Básica e Avançada para Jovens",
    source: "Jornal da Juventude",
    date: "Histórico",
    image_url: "/images/clipping/41.png",
    category: "Telecentros",
    display_order: 41
  },
  {
    id: "clip-42",
    title: "Capacitação Tecnológica de Jovens e Adultos na Comunidade",
    source: "Imprensa Regional",
    date: "Histórico",
    image_url: "/images/clipping/42.png",
    category: "Inclusão Digital",
    display_order: 42
  },
  {
    id: "clip-43",
    title: "Laboratórios Digitais Auxiliam Professores no Planejamento Escolar",
    source: "Informativo SEMED Ouro Preto",
    date: "Histórico",
    image_url: "/images/clipping/43.png",
    category: "Escola Digital",
    display_order: 43
  },
  {
    id: "clip-44",
    title: "Rede Comunitária de Conectividade Ganha Reconhecimento Regional",
    source: "Tribuna Livre",
    date: "Histórico",
    image_url: "/images/clipping/44.png",
    category: "Telecentros",
    display_order: 44
  },
  {
    id: "clip-45",
    title: "Laboratórios Escolares Ativos: Educação e Tecnologia Integradas",
    source: "Boletim Informativo Municipal",
    date: "Histórico",
    image_url: "/images/clipping/45.png",
    category: "Escola Digital",
    display_order: 45
  },
  {
    id: "clip-46",
    title: "Escola Digital: Revitalização de Laboratórios de Informática",
    source: "Câmara Municipal & Prefeitura de Ouro Preto",
    date: "Histórico",
    image_url: "/images/clipping/46.png",
    category: "Escola Digital",
    display_order: 46
  },
  {
    id: "clip-47",
    title: "Oficinas Práticas de Digitação, Internet e Ferramentas Web",
    source: "Gazeta Notícias",
    date: "Histórico",
    image_url: "/images/clipping/47.png",
    category: "Telecentros",
    display_order: 47
  },
  {
    id: "clip-48",
    title: "Cidadania e Inclusão: Ouro Preto na Vanguarda da Educação Digital",
    source: "Diário de Minas Gerais",
    date: "Histórico",
    image_url: "/images/clipping/48.png",
    category: "Inclusão Digital",
    display_order: 48
  },
  {
    id: "clip-49",
    title: "Inovação Social: Da Manutenção de Redes à Gestão de Projetos",
    source: "Mídia Ouro Preto",
    date: "Histórico",
    image_url: "/images/clipping/49.png",
    category: "Inclusão Digital",
    display_order: 49
  },
  {
    id: "clip-50",
    title: "Inclusão Digital e Acesso Gratuito à Internet em Ouro Preto",
    source: "Jornal de Ouro Preto / Mídia Regional",
    date: "Histórico",
    image_url: "/images/clipping/50.png",
    category: "Inclusão Digital",
    display_order: 50
  },
  {
    id: "clip-51",
    title: "Conexão Cidadã: Tecnologia a Serviço das Comunidades Rurais",
    source: "Voz Ativa dos Distritos",
    date: "Histórico",
    image_url: "/images/clipping/51.png",
    category: "Inclusão Digital",
    display_order: 51
  },
  {
    id: "clip-52",
    title: "Modernização e Sustentabilidade de Redes nos Polos Comunitários",
    source: "Tecnologia & Sociedade",
    date: "Histórico",
    image_url: "/images/clipping/52.png",
    category: "Telecentros",
    display_order: 52
  },
  {
    id: "clip-53",
    title: "Registro Histórico: Duas Décadas de Transformação Social com TI",
    source: "Memória & História Ouro Preto",
    date: "Histórico",
    image_url: "/images/clipping/53.png",
    category: "Inclusão Digital",
    display_order: 53
  },
];
