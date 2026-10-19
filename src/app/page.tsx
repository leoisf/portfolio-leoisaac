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
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { AdminFloatingBar } from "@/components/AdminFloatingBar";
import { CvSelectorModal } from "@/components/ui/CvSelectorModal";
import { 
  getProfile, 
  getProjects, 
  getCertificates, 
  getSkills, 
  getSocialInitiatives,
  getClippings,
  getTestimonials,
  isSupabaseConfigured 
} from "@/lib/supabase/client";
import { 
  initialProfile, 
  initialProjects, 
  initialCertificates, 
  initialSkills, 
  initialSocialInitiatives,
  initialClippings,
  initialTestimonials
} from "@/data/initialData";
import { Project, Certificate, Skill, SocialInitiative, ProfileSettings, ClippingItem, Testimonial } from "@/types/database";

export default function HomePage() {
  const [profile, setProfile] = useState<ProfileSettings>(initialProfile);
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [certificates, setCertificates] = useState<Certificate[]>(initialCertificates);
  const [skills, setSkills] = useState<Skill[]>(initialSkills);
  const [initiatives, setInitiatives] = useState<SocialInitiative[]>(initialSocialInitiatives);
  const [clippings, setClippings] = useState<ClippingItem[]>(initialClippings);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAllData() {
      try {
        const [p, projs, certs, sks, inits, clips, tests] = await Promise.all([
          getProfile(),
          getProjects(),
          getCertificates(),
          getSkills(),
          getSocialInitiatives(),
          getClippings(),
          getTestimonials()
        ]);
        setProfile(p);
        setProjects(projs);
        setCertificates(certs);
        setSkills(sks);
        setInitiatives(inits);
        setClippings(clips);
        setTestimonials(tests);
      } catch (err) {
        console.error("Error loading portfolio data:", err);
      } finally {
        setLoading(false);
      }
    }

    loadAllData();

    window.addEventListener("portfolio_data_changed", loadAllData);
    window.addEventListener("storage", loadAllData);
    return () => {
      window.removeEventListener("portfolio_data_changed", loadAllData);
      window.removeEventListener("storage", loadAllData);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSection profile={profile} />
        <AboutSection profile={profile} />
        <SkillsSection skills={skills} />
        <CertificatesSection certificates={certificates} />
        <ProjectsSection projects={projects} />
        <ClippingSection clippings={clippings} />
        <SocialSection initiatives={initiatives} />
        <TestimonialsSection testimonials={testimonials} />
        <ContactSection profile={profile} />
      </main>

      <Footer />
      <CvSelectorModal />
      <AdminFloatingBar />
    </div>
  );
}
