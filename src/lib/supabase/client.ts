import { createClient } from "@supabase/supabase-js";
import { initialProfile, initialProjects, initialCertificates, initialSkills, initialSocialInitiatives, initialClippings } from "@/data/initialData";
import { Project, Certificate, Skill, SocialInitiative, ProfileSettings, ClippingItem } from "@/types/database";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  !supabaseUrl.includes("your-project-id")
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Storage Keys for Local Dynamic Fallback
const STORAGE_PROJECTS_KEY = "portfolio_projects_custom";
const STORAGE_CERTS_KEY = "portfolio_certs_custom";

function dispatchUpdate() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("portfolio_data_changed"));
  }
}

// Helper: Fetch Profile with fallback to local seed
export async function getProfile(): Promise<ProfileSettings> {
  if (supabase) {
    try {
      const { data, error } = await supabase.from("profile_settings").select("*").single();
      if (!error && data) return data as ProfileSettings;
    } catch {
      // fallback on error
    }
  }
  return initialProfile;
}

// Helper: Fetch Projects (Supabase -> LocalStorage -> initialData)
export async function getProjects(): Promise<Project[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("display_order", { ascending: true });
      if (!error && data && data.length > 0) return data as Project[];
    } catch {
      // fallback
    }
  }

  if (typeof window !== "undefined") {
    try {
      const local = localStorage.getItem(STORAGE_PROJECTS_KEY);
      if (local) {
        const parsed = JSON.parse(local);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error("Erro ao ler projetos do localStorage:", e);
    }
  }

  return initialProjects;
}

// Helper: Save new Project
export async function saveProject(project: Project): Promise<void> {
  if (supabase) {
    try {
      await supabase.from("projects").insert([project]);
    } catch (err) {
      console.error("Erro ao salvar projeto no Supabase:", err);
    }
  }

  if (typeof window !== "undefined") {
    try {
      const current = await getProjects();
      const updated = [project, ...current.filter(p => p.id !== project.id)];
      localStorage.setItem(STORAGE_PROJECTS_KEY, JSON.stringify(updated));
      dispatchUpdate();
    } catch (e) {
      console.error("Erro ao salvar no localStorage:", e);
    }
  }
}

// Helper: Update existing Project
export async function updateProject(project: Project): Promise<void> {
  if (supabase) {
    try {
      await supabase.from("projects").update(project).eq("id", project.id);
    } catch (err) {
      console.error("Erro ao atualizar projeto no Supabase:", err);
    }
  }

  if (typeof window !== "undefined") {
    try {
      const current = await getProjects();
      const updated = current.map(p => p.id === project.id ? { ...p, ...project } : p);
      localStorage.setItem(STORAGE_PROJECTS_KEY, JSON.stringify(updated));
      dispatchUpdate();
    } catch (e) {
      console.error("Erro ao atualizar no localStorage:", e);
    }
  }
}

// Helper: Delete Project
export async function deleteProject(id: string): Promise<void> {
  if (supabase) {
    try {
      await supabase.from("projects").delete().eq("id", id);
    } catch (err) {
      console.error("Erro ao excluir projeto no Supabase:", err);
    }
  }

  if (typeof window !== "undefined") {
    try {
      const current = await getProjects();
      const updated = current.filter(p => p.id !== id);
      localStorage.setItem(STORAGE_PROJECTS_KEY, JSON.stringify(updated));
      dispatchUpdate();
    } catch (e) {
      console.error("Erro ao excluir do localStorage:", e);
    }
  }
}

// Helper: Reset Projects to seed data
export function resetProjectsToDefault(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(STORAGE_PROJECTS_KEY);
    dispatchUpdate();
  }
}

// Helper: Fetch Certificates
export async function getCertificates(): Promise<Certificate[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("certificates")
        .select("*")
        .order("display_order", { ascending: true });
      if (!error && data && data.length > 0) return data as Certificate[];
    } catch {
      // fallback
    }
  }

  if (typeof window !== "undefined") {
    try {
      const local = localStorage.getItem(STORAGE_CERTS_KEY);
      if (local) {
        const parsed = JSON.parse(local);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error("Erro ao ler certificados do localStorage:", e);
    }
  }

  return initialCertificates;
}

// Helper: Save Certificate
export async function saveCertificate(cert: Certificate): Promise<void> {
  if (supabase) {
    try {
      await supabase.from("certificates").insert([cert]);
    } catch (err) {
      console.error("Erro ao salvar certificado no Supabase:", err);
    }
  }

  if (typeof window !== "undefined") {
    try {
      const current = await getCertificates();
      const updated = [cert, ...current.filter(c => c.id !== cert.id)];
      localStorage.setItem(STORAGE_CERTS_KEY, JSON.stringify(updated));
      dispatchUpdate();
    } catch (e) {
      console.error("Erro ao salvar certificado no localStorage:", e);
    }
  }
}

// Helper: Update Certificate
export async function updateCertificate(cert: Certificate): Promise<void> {
  if (supabase) {
    try {
      await supabase.from("certificates").update(cert).eq("id", cert.id);
    } catch (err) {
      console.error("Erro ao atualizar certificado no Supabase:", err);
    }
  }

  if (typeof window !== "undefined") {
    try {
      const current = await getCertificates();
      const updated = current.map(c => c.id === cert.id ? { ...c, ...cert } : c);
      localStorage.setItem(STORAGE_CERTS_KEY, JSON.stringify(updated));
      dispatchUpdate();
    } catch (e) {
      console.error("Erro ao atualizar certificado no localStorage:", e);
    }
  }
}

// Helper: Delete Certificate
export async function deleteCertificate(id: string): Promise<void> {
  if (supabase) {
    try {
      await supabase.from("certificates").delete().eq("id", id);
    } catch (err) {
      console.error("Erro ao excluir certificado no Supabase:", err);
    }
  }

  if (typeof window !== "undefined") {
    try {
      const current = await getCertificates();
      const updated = current.filter(c => c.id !== id);
      localStorage.setItem(STORAGE_CERTS_KEY, JSON.stringify(updated));
      dispatchUpdate();
    } catch (e) {
      console.error("Erro ao excluir certificado do localStorage:", e);
    }
  }
}

// Helper: Reset Certificates to seed data
export function resetCertificatesToDefault(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(STORAGE_CERTS_KEY);
    dispatchUpdate();
  }
}

// Helper: Fetch Skills
export async function getSkills(): Promise<Skill[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("skills")
        .select("*")
        .order("display_order", { ascending: true });
      if (!error && data && data.length > 0) return data as Skill[];
    } catch {
      // fallback
    }
  }
  return initialSkills;
}

// Helper: Fetch Social Initiatives
export async function getSocialInitiatives(): Promise<SocialInitiative[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("social_initiatives")
        .select("*")
        .order("display_order", { ascending: true });
      if (!error && data && data.length > 0) return data as SocialInitiative[];
    } catch {
      // fallback
    }
  }
  return initialSocialInitiatives;
}

// Helper: Fetch Clippings
export async function getClippings(): Promise<ClippingItem[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("clippings")
        .select("*")
        .order("display_order", { ascending: true });
      if (!error && data && data.length > 0) return data as ClippingItem[];
    } catch {
      // fallback
    }
  }
  return initialClippings;
}
