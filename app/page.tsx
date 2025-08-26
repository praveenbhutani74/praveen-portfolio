import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { AnimatedSection } from "@/components/animated-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />

      <AnimatedSection delay={100}>
        <AboutSection />
      </AnimatedSection>

      <AnimatedSection delay={200}>
        <ExperienceSection />
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <ProjectsSection />
      </AnimatedSection>

      <AnimatedSection delay={150}>
        <SkillsSection />
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <ContactSection />
      </AnimatedSection>
    </main>
  )
}
