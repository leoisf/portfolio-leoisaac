"use client";

import React, { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SocialSection } from "@/components/sections/SocialSection";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { ClippingSection } from "@/components/sections/ClippingSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { 
  getProfile, 
  getProjects, 
  getCertificates, 
  getSkills, 
  getSocialInitiatives,
  getClippings,
  isSupabaseConfigured 
} from "@/lib/supabase/client";
import { 
  initialProfile, 
  initialProjects, 
  initialCertificates, 
  initialSkills, 
  initialSocialInitiatives,
  initialClippings 
} from "@/data/initialData";
import { Project, Certificate, Skill, SocialInitiative, ProfileSettings, ClippingItem } from "@/types/database";

export default function HomePage() {
  const [profile, setProfile] = useState<ProfileSettings>(initialProfile);
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [certificates, setCertificates] = useState<Certificate[]>(initialCertificates);
  const [skills, setSkills] = useState<Skill[]>(initialSkills);
  const [initiatives, setInitiatives] = useState<SocialInitiative[]>(initialSocialInitiatives);
  const [clippings, setClippings] = useState<ClippingItem[]>(initialClippings);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAllData() {
      try {
        if (isSupabaseConfigured) {
          const [p, projs, certs, sks, inits, clips] = await Promise.all([
            getProfile(),
            getProjects(),
            getCertificates(),
            getSkills(),
            getSocialInitiatives(),
            getClippings()
          ]);
          setProfile(p);
          setProjects(projs);
          setCertificates(certs);
          setSkills(sks);
          setInitiatives(inits);
          setClippings(clips);
        }
      } catch (err) {
        console.error("Error loading data from Supabase:", err);
      } finally {
        setLoading(false);
      }
    }
    loadAllData();
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSection profile={profile} />
        <AboutSection profile={profile} />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
        <ClippingSection clippings={clippings} />
        <SocialSection initiatives={initiatives} />
        <CertificatesSection certificates={certificates} />
        <ContactSection profile={profile} />
      </main>

      <Footer />
    </div>
  );
}
