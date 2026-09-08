export interface Project {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  full_description?: string;
  technologies: string[];
  image_url?: string;
  github_url?: string;
  live_url?: string;
  category: "Full Stack" | "Frontend" | "Backend" | "Social / Inclusão";
  is_featured: boolean;
  display_order: number;
  created_at?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issue_date?: string;
  hours?: number;
  credential_url?: string;
  image_url: string;
  category: "Desenvolvimento" | "Metodologias Ágeis" | "Cloud / DevOps" | "Banco de Dados" | "Outros";
  display_order: number;
}

export interface Skill {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Agile / Gestão" | "DevOps / Infra";
  icon_name?: string;
  level?: string;
  display_order: number;
}

export interface SocialInitiative {
  id: string;
  title: string;
  role: string;
  period: string;
  impact_metric: string;
  description: string;
  image_url?: string;
  achievements: string[];
  display_order: number;
}

export interface ProfileSettings {
  id: string;
  full_name: string;
  headline: string;
  bio: string;
  years_experience: number;
  people_impacted: string;
  cv_url: string;
  whatsapp: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  created_at: string;
}

export interface ClippingItem {
  id: string;
  title: string;
  source: string;
  date?: string;
  image_url: string;
  category: "Telecentros" | "Escola Digital" | "Inclusão Digital" | "Geral";
  display_order: number;
}
