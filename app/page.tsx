import { DashboardHeader } from '@/components/dashboard-header';
import { HeroSection } from '@/components/hero-section';
import { ProjectsSection } from '@/components/projects-section';
import { SkillsSection } from '@/components/skills-section';
import { MetricsSection } from '@/components/metrics-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <DashboardHeader />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <MetricsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
