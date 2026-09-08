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

// Helper: Fetch Projects
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
  return initialProjects;
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
  return initialCertificates;
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
