export type Language = "pt" | "en";

export const translations = {
  pt: {
    nav: {
      about: "Sobre",
      skills: "Habilidades",
      projects: "Projetos",
      clipping: "Clipping",
      social: "Impacto Social",
      certificates: "Certificados",
      contact: "Contato",
      resume: "Currículo",
      getInTouch: "Fale Comigo",
      legacySite: "Site Antigo",
      role: "Data & AI | Full Stack"
    },
    hero: {
      availability: "Disponível para projetos & novos desafios",
      greeting: "Olá, eu sou o",
      headline: "Construo software resiliente para operações críticas e transformo dados complexos em inteligência acionável. Foco em engenharia web moderna, arquitetura em nuvem e governança corporativa para gerar impacto real.",
      btnProjects: "Ver Projetos",
      btnResume: "Baixar Currículo",
      btnWhatsapp: "WhatsApp Direto",
      btnContact: "Fale Comigo",
      graduation: "Bacharel em Ciência da Computação (UFOP) & Pós em Ciência de Dados",
      specialty: "Full Stack (Java, Kotlin, React) & Data Science",
      currentRole: "Sustentação AMS Comercial • Embraer (via AI/R)",
      safeRole: "Certified SAFe® 6 Agilist & POPM",
      location: "Ouro Preto - MG / São José dos Campos - SP",
      experienceSummary: "22+ Anos em TI • +7.000 Pessoas Impactadas",
      downloadCvCard: "Baixar Currículo Oficial (PDF)",
      cleanCode: "Engenharia de software, IA & código resiliente"
    },
    about: {
      tag: "// Trajetória & Experiência",
      title: "Duas décadas transformando tecnologia, dados e processos em impacto real",
      summary: "Com mais de duas décadas de atuação contínua em tecnologia, minha trajetória une desenvolvimento web de alta criticidade, liderança ágil corporativa e pesquisa aplicada em Ciência de Dados e IA na UFOP.",
      expandAll: "Expandir todos os detalhes",
      collapseAll: "Recolher todos",
      viewDetails: "Ver detalhes",
      hideDetails: "Ocultar detalhes",
      showMoreMilestones: "Ver mais marcos da carreira",
      showLessMilestones: "Mostrar menos marcos",
      currentRoleBadge: "Atuação Atual",
      responsibilitiesTag: "Principais Atividades & Entregas",
      technologiesTag: "Stack & Tecnologias Utilizadas",
      milestones: [
        {
          year: "04/2026 – Presente",
          role: "Full-Stack Developer",
          title: "AI/R Company – Sustentação AMS (Embraer Comercial)",
          company: "AI/R Company | Cliente: Embraer (Comercial) – São José dos Campos, SP",
          current: true,
          desc: "Sustentação de sistemas web de alta criticidade para a aviação comercial, arquitetura API First, microsserviços em Java/Kotlin, React e Cloud AWS.",
          fullDesc: "Atuação técnica como Desenvolvedor Web Full Stack alocado na Squad de Sustentação AMS Comercial da Embraer. Responsável pela estabilidade contínua, análise e resolução de incidentes em sistemas web corporativos, aplicação rigorosa de padrões API First, elaboração de tutoriais e documentações técnicas de engenharia, integrando IA generativa ao ciclo de desenvolvimento.",
          achievements: [
            "Sustentação, evolução e resolução de incidentes críticos em sistemas web corporativos.",
            "Arquitetura API First com governança de contratos REST e microsserviços em Java e Kotlin.",
            "Desenvolvimento e manutenção de interfaces reativas e responsivas com React e WebDev.",
            "Consultas de alta performance e governança de dados em AWS Aurora e PostgreSQL.",
            "Gerenciamento seguro de credenciais com AWS Secrets Manager e automações serverless com AWS Lambda.",
            "Observabilidade em tempo real, monitoramento de métricas, APM e logs com Datadog.",
            "Elaboração de tutoriais práticos, guias operacionais e documentações técnicas para o time.",
            "Utilização intensiva de GitHub Copilot e Kiro para aceleração técnica e qualidade de código."
          ],
          technologies: [
            "Java", "Kotlin", "React", "API First", "AWS Aurora", "AWS Lambda", 
            "DATADOG", "AWS Secrets Manager", "PostgreSQL", "GitHub Copilot", 
            "GitHub", "IntelliJ IDEA", "VSCode", "Kiro", "WebDev"
          ]
        },
        {
          year: "2026 – 2027",
          role: "Pós-Graduando em Ciência de Dados (Conceito A)",
          title: "Pós-Graduação em Ciência de Dados (UFOP) & IA Especializada",
          company: "Universidade Federal de Ouro Preto (ICEB / DECOM)",
          current: false,
          desc: "Especialização com conceito máximo 'A' (notas 9.0 a 9.8) em pipelines analíticos, Recuperação da Informação, Redução de Dimensionalidade (PCA) e IA Generativa.",
          fullDesc: "Programa de excelência na UFOP voltado à resolução de problemas complexos de dados em larga escala, modelagem estatística multivariada e integração de agentes autônomos de IA.",
          achievements: [
            "Pipelines completos de pré-processamento, engenharia de atributos e análise exploratória com Python.",
            "Modelagem para Recuperação da Informação e Processamento de Linguagem Natural (NLP).",
            "Redução de Dimensionalidade (PCA, t-SNE) e clusters analíticos para dados de alta dimensionalidade.",
            "Estatística descritiva e testes de hipóteses no ecossistema da Indústria 4.0.",
            "Certificações: Databricks Fundamentals, Kiro Agentic AI, AI Cockpit Reasoning e AWS Prompt Engineering."
          ],
          technologies: [
            "Python", "Pandas", "Scikit-learn", "Databricks", "Apache Spark", 
            "PCA", "NLP", "Power BI", "Estatística Descritiva", "Jupyter", "Seaborn"
          ]
        },
        {
          year: "2021 – 03/2026",
          role: "Certified SAFe® 6 Agilist / Especialista em Governança & Sistemas",
          title: "AI/R Company (Compass UOL) – Transformação Digital Vivo B2B (Fênix)",
          company: "AI/R Company | Cliente: Vivo (Telefônica Brasil)",
          current: false,
          desc: "Liderança ágil e técnica no programa corporativo Fênix (Vivo B2B) com SAFe® 6 em escala, ecossistema Salesforce CRM, Microsoft Azure e IA Generativa.",
          fullDesc: "Atuação estratégica no maior programa de transformação digital B2B da Vivo. Facilitação de cerimônias ágeis em larga escala, governança entre times multidisciplinares e orquestração de entregas corporativas.",
          achievements: [
            "Facilitação de cerimônias SAFe (PI Planning, System Demos, I&A, Refinamentos técnicos e Retrospectivas).",
            "Mapeamento e mitigação de riscos críticos, dependências cross-squads e alinhamento de roadmap de entrega.",
            "Integração técnica entre ecossistema CRM Salesforce corporativo e microsserviços em nuvem Microsoft Azure.",
            "Pioneirismo na validação prática de ferramentas de IA generativa (Kiro AI, AI Cockpit) para ganhos de produtividade.",
            "Certificações conquistadas: Certified SAFe® 6 Agilist e SAFe® 6 Product Owner / Product Manager (POPM)."
          ],
          technologies: [
            "SAFe® 6 Agilist", "SAFe® 6 POPM", "Salesforce CRM", "Microsoft Azure", 
            "Jira", "Confluence", "Kiro AI", "Scrum", "Kanban", "Databricks"
          ]
        },
        {
          year: "2014 – 2021",
          role: "Bacharel em Ciência da Computação",
          title: "Bacharelado em Ciência da Computação (UFOP)",
          company: "Universidade Federal de Ouro Preto (ICEB / DECOM)",
          current: false,
          desc: "Graduação pelo Instituto de Ciências Exatas e Biológicas, sedimentando algoritmos avançados, engenharia de software e arquitetura de sistemas.",
          fullDesc: "Formação científica e prática profunda nos fundamentos da computação moderna. Foco em arquiteturas distribuídas, teoria computacional, inteligência artificial, modelagem de banco de dados e engenharia de software.",
          achievements: [
            "Projeto de graduação focado em modelagem de sistemas inteligentes e engenharia de software.",
            "Domínio de estruturas de dados avançadas, teoria dos grafos e análise assintótica de complexidade.",
            "Participação ativa em grupos de estudo, maratonas de programação e projetos práticos acadêmicos.",
            "Sólida base matemática em cálculo, álgebra linear, probabilidade e física computacional."
          ],
          technologies: [
            "C/C++", "Java", "Python", "SQL", "Estruturas de Dados", 
            "Algoritmos", "Engenharia de Software", "Redes de Computadores", "Linux"
          ]
        },
        {
          year: "2017 – 2020",
          role: "Diretor de Sistemas & TI",
          title: "Diretoria de Sistemas & TI – Prefeitura Municipal de Ouro Preto",
          company: "Prefeitura Municipal de Ouro Preto - MG",
          current: false,
          desc: "Gestão executiva de infraestrutura de TI corporativa, segurança perimetral com pfSense, servidores e modernização da Escola Digital.",
          fullDesc: "Liderança de toda a tecnologia da informação da administração pública municipal. Planejamento orçamentário, aquisições de soluções, diretrizes de segurança da informação e gestão de equipes técnicas multidisciplinares.",
          achievements: [
            "Modernização integral do parque de servidores (Windows Server e Linux Debian/CentOS).",
            "Implementação de segurança de borda corporativa com pfSense, VPNs e segmentação com VLANs.",
            "Revitalização e expansão do programa Escola Digital, equipando unidades escolares municipais.",
            "Reestruturação do suporte técnico N1/N2/N3, com padronização de processos e redução expressiva de SLA."
          ],
          technologies: [
            "pfSense", "Linux Server", "Windows Server", "Active Directory", 
            "VLANs", "TCP/IP", "Segurança da Informação", "Gestão Pública"
          ]
        },
        {
          year: "2003 – 2016",
          role: "Coordenador de Tecnologia & Inclusão Digital",
          title: "Coordenação dos Telecentros & Inclusão Digital Comunitária",
          company: "Câmara Municipal de Ouro Preto - MG",
          current: false,
          desc: "Mais de 15 anos à frente de programas pioneiros de inclusão sociodigital, capacitando mais de 7.000 pessoas e implantando infraestrutura LTSP.",
          fullDesc: "Coordenação pioneira de telecentros comunitários em Ouro Preto e distritos. Gestão de recursos públicos, laboratórios de informática com software livre, treinamento de instrutores e democratização do acesso digital.",
          achievements: [
            "Mais de 7.000 pessoas capacitadas gratuitamente em informática e ferramentas digitais para o mercado de trabalho.",
            "Implantação pioneira de rede de terminais leves com Linux Terminal Server Project (LTSP), gerando economia expressiva.",
            "Ampla cobertura jornalística e matérias na mídia regional atestando o pioneirismo e impacto social do projeto.",
            "Desenvolvimento de matrizes pedagógicas inclusivas para jovens da rede pública, adultos e melhor idade."
          ],
          technologies: [
            "GNU/Linux", "LTSP (Thin Clients)", "Samba Server", "NFS", 
            "Capacitação Digital", "Inclusão Social", "Gestão de Projetos"
          ]
        },
        {
          year: "Início",
          role: "Assistente de Informática & Infraestrutura",
          title: "Bases Técnicas, Redes & Infraestrutura – Jovens de Ouro",
          company: "Programa Jovens de Ouro / Apoio Técnico Municipal",
          current: false,
          desc: "Primeiros passos no programa 'Jovens de Ouro': manutenção corretiva e preventiva de computadores, redes e suporte a usuários.",
          fullDesc: "Início da carreira técnica em tecnologia da informação. Vivência prática em montagem e manutenção de computadores, instalação de sistemas operacionais, cabeamento de rede e suporte presencial aos usuários.",
          achievements: [
            "Manutenção corretiva e preventiva em dezenas de estações de trabalho e equipamentos de informática.",
            "Instalação e conectorização de cabeamento de rede estruturada em prédios públicos.",
            "Desenvolvimento precoce de disciplina técnica, raciocínio analítico e foco absoluto na resolução de problemas."
          ],
          technologies: [
            "Hardware", "Manutenção Preventiva", "Redes Ethernet", 
            "Cabeamento Estruturado", "Windows", "Suporte Técnico N1"
          ]
        }
      ]
    },
    skills: {
      tag: "// Competências & Tecnologias",
      title: "Stack Tecnológica, Dados & Metodologias",
      subtitle: "Ferramentas analíticas modernas, linguagens de programação e práticas ágeis utilizadas no dia a dia.",
      categories: {
        all: "Todas",
        data: "Data Science & IA",
        agile: "Agile / Gestão",
        backend: "Backend",
        database: "Database",
        frontend: "Frontend",
        devops: "DevOps / Infra"
      }
    },
    projects: {
      tag: "// Portfólio, Git & Entregas",
      title: "Principais Trabalhos & Projetos",
      subtitle: "Projetos em código aberto no GitHub, soluções corporativas de missão crítica em Data/IA e iniciativas de impacto social.",
      gitHubBadge: "Engenharia de Software & Git Hub",
      gitHubProfileCta: "Explorar Repositórios no GitHub",
      terminalStatus: "git status: active • repositórios com branch main sincronizados",
      categories: {
        all: "Todos",
        github: "Repositórios Git",
        data_ai: "Data & IA",
        fullstack: "Full Stack",
        social: "Social / Inclusão"
      },
      viewDetails: "Ver detalhes",
      badges: {
        public: "Repositório Público",
        enterprise: "Corporativo / Privado",
        social: "Impacto Social & Público"
      },
      highlights: "Destaques Técnicos & Entregas",
      aboutProject: "Sobre o Projeto",
      techUsed: "Tecnologias Utilizadas",
      liveProject: "Acessar Projeto Online",
      githubRepo: "Ver Código no GitHub",
      copyClone: "Copiar git clone",
      copied: "Comando copiado!",
      viewSocialHistory: "Ver Ações Sociais",
      viewClipping: "Ver Clipping na Imprensa"
    },
    clipping: {
      tag: "Imprensa & Registro Histórico",
      title: "Clipping & Matérias na Mídia",
      subtitle: "Reportagens e matérias de jornais registrando a repercussão pública dos projetos de inclusão digital, formação comunitária e tecnologia em Ouro Preto.",
      categories: {
        all: "Todos",
        telecentros: "Telecentros",
        escolaDigital: "Escola Digital",
        inclusao: "Inclusão Digital"
      },
      readArticle: "Ler Matéria",
      mediaSource: "Veículo",
      viewAll: "Visualizar todas as matérias",
      viewMore: "Visualizar mais matérias",
      showLess: "Mostrar menos"
    },
    social: {
      badge: "Transformação Social & Inclusão Digital",
      title: "Tecnologia a Serviço da Comunidade",
      subtitle: "Histórico de coordenação de projetos públicos que levaram capacitação profissional, acesso à internet e revitalização de laboratórios para milhares de cidadãos em Minas Gerais.",
      highlights: "Destaques & Entregas"
    },
    certificates: {
      tag: "// Formação Contínua & Conquistas",
      title: "Certificações & Credenciais",
      subtitle: "Reconhecimento oficial em metodologias ágeis em escala, inteligência artificial generativa, engenharia em nuvem e ciência de dados.",
      featuredTag: "Credenciais de Alto Impacto",
      featuredTitle: "Certificações de Peso & Credenciais Verificadas",
      featuredSubtitle: "Emitidas por instituições globais de referência como Scaled Agile (SAFe®), AWS, UFOP e AI/R.",
      verifiedBadge: "Credencial Oficial Verificada",
      statsTotal: "+40 Certificações",
      statsIssuers: "Scaled Agile, AWS & UFOP",
      statsFocus: "Agilidade, IA & Nuvem",
      categories: {
        all: "Todos",
        data_ai: "Data Science & IA",
        agile: "Metodologias Ágeis",
        cloud: "Cloud / DevOps",
        dev: "Desenvolvimento",
        social: "Inclusão Digital & Social"
      },
      validateBtn: "Validar Credencial",
      viewCertificateBtn: "Ver Certificado",
      issuer: "Emissor",
      viewAll: "Visualizar acervo completo",
      viewMore: "Visualizar mais certificados",
      showLess: "Mostrar menos"
    },
    contact: {
      tag: "// Fale Comigo",
      title: "Vamos construir algo incrível juntos?",
      subtitle: "Seja para oportunidades em Ciência de Dados, IA Generativa, desenvolvimento Full Stack, consultoria em agilidade com SAFe/Scrum ou projetos de impacto social, estou sempre aberto a novas conexões.",
      emailLabel: "E-mail Principal",
      phoneLabel: "Telefone / WhatsApp",
      locationLabel: "Localização",
      formName: "Seu Nome",
      namePlaceholder: "Ex: João da Silva",
      formEmail: "Seu E-mail",
      emailPlaceholder: "seu.email@empresa.com",
      formMessage: "Mensagem",
      messagePlaceholder: "Olá Leonardo, gostaria de conversar sobre...",
      submitBtn: "Enviar Mensagem via WhatsApp / Direto",
      sentTitle: "Mensagem Encaminhada!",
      sentDesc: "Obrigado pelo contato! Retornarei o mais breve possível.",
      sendAnother: "Enviar outra mensagem"
    },
    footer: {
      tagline: "Cientista da Computação | Pós-Graduando em Ciência de Dados | 22 anos transformando desafios em sistemas robustos e soluções inteligentes.",
      rights: "Todos os direitos reservados.",
      backToTop: "Voltar ao topo",
      legacySite: "Versão Anterior (WordPress)",
      admin: "Admin"
    }
  },

  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      clipping: "Clipping",
      social: "Social Impact",
      certificates: "Certificates",
      contact: "Contact",
      resume: "Resume",
      getInTouch: "Get in Touch",
      legacySite: "Legacy Site",
      role: "Data & AI | Full Stack"
    },
    hero: {
      availability: "Available for projects & new challenges",
      greeting: "Hello, I'm",
      headline: "Building mission-critical resilient software and turning complex data into actionable business intelligence. Focused on modern web engineering, cloud architecture, and corporate governance to deliver real impact.",
      btnProjects: "View Projects",
      btnResume: "Download Resume",
      btnWhatsapp: "Direct WhatsApp",
      btnContact: "Get in Touch",
      graduation: "B.S. in Computer Science & Data Science Postgrad (UFOP)",
      specialty: "Full Stack (Java, Kotlin, React) & Data Science",
      currentRole: "Commercial AMS Support • Embraer (via AI/R)",
      safeRole: "Certified SAFe® 6 Agilist & POPM",
      location: "Ouro Preto - MG / São José dos Campos - SP, Brazil",
      experienceSummary: "22+ Years in Tech • +7,000+ People Impacted",
      downloadCvCard: "Download Official Resume (PDF)",
      cleanCode: "Software engineering, AI & resilient code"
    },
    about: {
      tag: "// Trajectory & Experience",
      title: "Two decades transforming technology, data, and processes into real impact",
      summary: "With over two decades of hands-on experience in technology, my journey bridges mission-critical full-stack development, enterprise agile leadership, and applied research in Data Science and AI at UFOP.",
      expandAll: "Expand all details",
      collapseAll: "Collapse all",
      viewDetails: "View details",
      hideDetails: "Hide details",
      showMoreMilestones: "View more career milestones",
      showLessMilestones: "Show fewer milestones",
      currentRoleBadge: "Current Role",
      responsibilitiesTag: "Key Responsibilities & Deliverables",
      technologiesTag: "Tech Stack & Tools Used",
      milestones: [
        {
          year: "04/2026 – Present",
          role: "Full-Stack Developer",
          title: "AI/R Company – AMS Support Squad (Embraer Commercial)",
          company: "AI/R Company | Client: Embraer (Commercial) – São José dos Campos, SP",
          current: true,
          desc: "Mission-critical web application maintenance for commercial aviation, API First architecture, Java/Kotlin microservices, React, and AWS Cloud.",
          fullDesc: "Full-Stack Web Developer in Embraer's Commercial AMS Support Squad. In charge of operational stability, troubleshooting critical production incidents, upholding API First design principles, crafting technical documentation and developer tutorials, and leveraging AI tools in the engineering workflow.",
          achievements: [
            "Maintenance, troubleshooting, and continuous improvement of critical web applications and microservices.",
            "API First architecture with strict REST contract governance using Java and Kotlin.",
            "Front-end engineering and reactive UI maintenance using React and modern WebDev standards.",
            "High-performance data management and queries on AWS Aurora and PostgreSQL.",
            "Secure credential governance with AWS Secrets Manager and serverless workloads with AWS Lambda.",
            "Full-stack observability, real-time APM monitoring, traces, and metrics using Datadog.",
            "Authoring in-depth technical documentation, runbooks, and developer onboarding guides.",
            "Accelerating development and documentation velocity using GitHub Copilot and Kiro."
          ],
          technologies: [
            "Java", "Kotlin", "React", "API First", "AWS Aurora", "AWS Lambda", 
            "DATADOG", "AWS Secrets Manager", "PostgreSQL", "GitHub Copilot", 
            "GitHub", "IntelliJ IDEA", "VSCode", "Kiro", "WebDev"
          ]
        },
        {
          year: "2026 – 2027",
          role: "Data Science Postgrad (Grade A)",
          title: "Postgraduate in Data Science (UFOP) & Applied AI",
          company: "Federal University of Ouro Preto (ICEB / DECOM)",
          current: false,
          desc: "Academic excellence with top 'A' grades (9.0 to 9.8) in analytical pipelines, Information Retrieval, Dimensionality Reduction (PCA), and Generative AI.",
          fullDesc: "Rigorous graduate specialization at UFOP tackling large-scale analytics challenges, multivariate statistical modeling, and the deployment of autonomous AI agent workflows.",
          achievements: [
            "End-to-end data preprocessing, feature engineering, and exploratory analysis pipelines with Python.",
            "Information Retrieval and Natural Language Processing (NLP) with vector-based modeling.",
            "Dimensionality reduction algorithms (PCA, t-SNE) and clustering for complex data spaces.",
            "Descriptive statistics and predictive modeling aligned with Industry 4.0 paradigms.",
            "Industry credentials: Databricks Fundamentals, Kiro Agentic AI, AI Cockpit Reasoning, and AWS Prompt Engineering."
          ],
          technologies: [
            "Python", "Pandas", "Scikit-learn", "Databricks", "Apache Spark", 
            "PCA", "NLP", "Power BI", "Descriptive Statistics", "Jupyter", "Seaborn"
          ]
        },
        {
          year: "2021 – 03/2026",
          role: "Certified SAFe® 6 Agilist / Systems & Governance Specialist",
          title: "AI/R Company (Compass UOL) – Vivo B2B Digital Transformation (Fênix)",
          company: "AI/R Company | Client: Vivo (Telefônica Brasil)",
          current: false,
          desc: "Agile and technical governance in Vivo's flagship B2B transformation program with Scaled Agile (SAFe® 6), Salesforce CRM, Microsoft Azure, and AI tooling.",
          fullDesc: "Strategic leadership within Vivo's enterprise B2B transformation initiative. Facilitating scaled agile practices, aligning multi-disciplinary squads, and bridging technical architecture with business value.",
          achievements: [
            "Facilitation of scaled agile ceremonies (PI Planning, System Demos, I&A, Technical Refinements, and Retrospectives).",
            "Cross-squad dependency management, enterprise risk mitigation, and strategic delivery roadmapping.",
            "Technical synchronization between enterprise Salesforce CRM and Microsoft Azure cloud microservices.",
            "Early adoption and rollout of generative AI tools (Kiro AI, AI Cockpit) for team productivity.",
            "Earned credentials: Certified SAFe® 6 Agilist and SAFe® 6 Product Owner / Product Manager (POPM)."
          ],
          technologies: [
            "SAFe® 6 Agilist", "SAFe® 6 POPM", "Salesforce CRM", "Microsoft Azure", 
            "Jira", "Confluence", "Kiro AI", "Scrum", "Kanban", "Databricks"
          ]
        },
        {
          year: "2014 – 2021",
          role: "B.S. in Computer Science",
          title: "Bachelor of Science in Computer Science (UFOP)",
          company: "Federal University of Ouro Preto (ICEB / DECOM)",
          current: false,
          desc: "Rigorous degree from the Institute of Exact and Biological Sciences, mastering advanced algorithms, software engineering, and systems architecture.",
          fullDesc: "Comprehensive academic foundation in theoretical and applied computer science, covering distributed systems, computational complexity, artificial intelligence, relational databases, and modern software design.",
          achievements: [
            "Graduation project focused on intelligent software architecture and systems modeling.",
            "Mastery of advanced data structures, graph theory, algorithmic complexity, and design patterns.",
            "Active participation in academic research labs, programming marathons, and hands-on software labs.",
            "Robust mathematical foundations in calculus, linear algebra, probability, and discrete mathematics."
          ],
          technologies: [
            "C/C++", "Java", "Python", "SQL", "Data Structures", 
            "Algorithms", "Software Engineering", "Computer Networks", "Linux"
          ]
        },
        {
          year: "2017 – 2020",
          role: "Systems & IT Director",
          title: "Director of Systems & IT – Municipality of Ouro Preto",
          company: "City Hall of Ouro Preto - MG",
          current: false,
          desc: "Executive management of municipal IT infrastructure, perimeter network security with pfSense, servers, and Digital School expansion.",
          fullDesc: "Head of municipal IT operations overseeing budget planning, technology procurements, information security compliance, and leading infrastructure teams supporting city services.",
          achievements: [
            "Complete modernization of enterprise server infrastructure (Windows Server and Linux Debian/CentOS).",
            "Deployment of corporate perimeter network security using pfSense, site-to-site VPNs, and VLAN segmentation.",
            "Revitalization and expansion of the Digital School project across municipal public schools.",
            "Standardized Tier 1/2/3 IT service desk procedures, significantly shortening response and resolution times."
          ],
          technologies: [
            "pfSense", "Linux Server", "Windows Server", "Active Directory", 
            "VLANs", "TCP/IP", "Information Security", "Public IT Management"
          ]
        },
        {
          year: "2003 – 2016",
          role: "Technology & Digital Inclusion Coordinator",
          title: "Community Telecenters Coordination & Digital Inclusion",
          company: "City Council of Ouro Preto - MG",
          current: false,
          desc: "Over 15 years directing pioneering digital inclusion programs, empowering 7,000+ citizens and implementing LTSP thin-client infrastructure.",
          fullDesc: "Pioneering coordination of community digital centers throughout Ouro Preto and rural districts. Managing public infrastructure, open-source computer labs, instructor training, and democratizing digital literacy.",
          achievements: [
            "Over 7,000 community members trained free of charge in computer literacy and career digital skills.",
            "Innovative deployment of thin-client computer labs powered by LTSP (Linux Terminal Server Project), drastically reducing costs.",
            "Extensive news and press coverage across regional media documenting high social and civic impact.",
            "Designed adaptable digital curricula tailored to school students, working adults, and senior citizens."
          ],
          technologies: [
            "GNU/Linux", "LTSP (Thin Clients)", "Samba Server", "NFS", 
            "Digital Literacy", "Social Impact", "Project Management"
          ]
        },
        {
          year: "Beginning",
          role: "IT Support & Infrastructure Assistant",
          title: "Technical Foundations, Networking & Infrastructure – Jovens de Ouro",
          company: "Jovens de Ouro Program / Municipal Tech Support",
          current: false,
          desc: "First steps through the 'Jovens de Ouro' program: preventive and corrective PC maintenance, networking, and user support.",
          fullDesc: "Early start in the information technology field through hands-on technical training. Direct involvement in computer hardware assembly, OS installations, network cabling, and on-site end-user support.",
          achievements: [
            "Hands-on corrective and preventive maintenance across dozens of desktop PCs and computer peripherals.",
            "Ethernet network cabling installation and termination across public municipal offices.",
            "Fostered strong problem-solving acumen, technical work ethic, and passion for computing that shaped entire career."
          ],
          technologies: [
            "Hardware", "Preventive Maintenance", "Ethernet Networks", 
            "Structured Cabling", "Windows", "Tier 1 Support"
          ]
        }
      ]
    },
    skills: {
      tag: "// Skills & Technologies",
      title: "Tech Stack, Data & Methodologies",
      subtitle: "Modern analytics tools, programming languages, and agile practices applied daily.",
      categories: {
        all: "All",
        data: "Data Science & AI",
        agile: "Agile / Mgmt",
        backend: "Backend",
        database: "Database",
        frontend: "Frontend",
        devops: "DevOps / Infra"
      }
    },
    projects: {
      tag: "// Portfolio, Git & Deliveries",
      title: "Key Works & Projects",
      subtitle: "Open-source projects on GitHub, mission-critical enterprise solutions in Data/AI, and digital inclusion initiatives.",
      gitHubBadge: "Software Engineering & Git Hub",
      gitHubProfileCta: "Explore Repositories on GitHub",
      terminalStatus: "git status: active • repositories on main branch up to date",
      categories: {
        all: "All",
        github: "Git Repositories",
        data_ai: "Data & AI",
        fullstack: "Full Stack",
        social: "Social / Inclusion"
      },
      viewDetails: "View details",
      badges: {
        public: "Public Repository",
        enterprise: "Enterprise / Private",
        social: "Social & Public Initiative"
      },
      highlights: "Technical Highlights & Deliverables",
      aboutProject: "About the Project",
      techUsed: "Technologies Used",
      liveProject: "Open Live Demo",
      githubRepo: "View Code on GitHub",
      copyClone: "Copy git clone",
      copied: "Command copied!",
      viewSocialHistory: "View Social Initiatives",
      viewClipping: "View Press Coverage"
    },
    clipping: {
      tag: "Press & Historical Records",
      title: "Clipping & Media Coverage",
      subtitle: "Newspaper articles and press features documenting the public impact of digital inclusion, community training, and technology in Ouro Preto.",
      categories: {
        all: "All",
        telecentros: "Telecenters",
        escolaDigital: "Digital School",
        inclusao: "Digital Inclusion"
      },
      readArticle: "Read Article",
      mediaSource: "Media Outlet",
      viewAll: "View all articles",
      viewMore: "View more articles",
      showLess: "Show less"
    },
    social: {
      badge: "Social Transformation & Digital Inclusion",
      title: "Technology Serving the Community",
      subtitle: "A proven track record of managing public initiatives that delivered professional training, broadband access, and lab revitalization to thousands of citizens in Minas Gerais.",
      highlights: "Highlights & Deliverables"
    },
    certificates: {
      tag: "// Lifelong Learning & Achievements",
      title: "Certificates & Credentials",
      subtitle: "Official recognition across enterprise agile frameworks, generative AI, cloud architecture, and data science.",
      featuredTag: "High-Impact Credentials",
      featuredTitle: "Industry-Standard Certifications & Verified Credentials",
      featuredSubtitle: "Issued by leading global institutions including Scaled Agile (SAFe®), AWS, UFOP, and AI/R.",
      verifiedBadge: "Verified Official Credential",
      statsTotal: "+40 Certificates",
      statsIssuers: "Scaled Agile, AWS & UFOP",
      statsFocus: "Agile, AI & Cloud",
      categories: {
        all: "All",
        data_ai: "Data Science & AI",
        agile: "Agile Methodologies",
        cloud: "Cloud / DevOps",
        dev: "Development",
        social: "Digital & Social Inclusion"
      },
      validateBtn: "Verify Credential",
      viewCertificateBtn: "View Certificate",
      issuer: "Issuer",
      viewAll: "View full collection",
      viewMore: "View more certificates",
      showLess: "Show less"
    },
    contact: {
      tag: "// Get in Touch",
      title: "Let's build something amazing together",
      subtitle: "Whether for Data Science, Generative AI, Full Stack development opportunities, web architecture consulting, agility with SAFe/Scrum, or social impact initiatives, I'm always open to connecting.",
      emailLabel: "Primary Email",
      phoneLabel: "Phone / WhatsApp",
      locationLabel: "Location",
      formName: "Your Name",
      namePlaceholder: "E.g. John Doe",
      formEmail: "Your Email",
      emailPlaceholder: "your.email@company.com",
      formMessage: "Message",
      messagePlaceholder: "Hello Leonardo, I would like to talk about...",
      submitBtn: "Send Message via WhatsApp / Direct",
      sentTitle: "Message Forwarded!",
      sentDesc: "Thank you for reaching out! I will get back to you as soon as possible.",
      sendAnother: "Send another message"
    },
    footer: {
      tagline: "Computer Scientist | Data Science Postgrad | 22 years transforming challenges into robust systems and intelligent solutions.",
      rights: "All rights reserved.",
      backToTop: "Back to top",
      legacySite: "Previous Version (WordPress)",
      admin: "Admin"
    }
  }
};
