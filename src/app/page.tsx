'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import ProjectModal from '@/components/ProjectModal'
import AboutSection from '@/components/AboutSection'
import ExperienceSection from '@/components/ExperienceSection'
import EducationSection from '@/components/EducationSection'
import SkillsSection from '@/components/SkillsSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero')
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)

  useEffect(() => {
    const sections = ['hero', 'about', 'work', 'experience', 'education', 'skills', 'contact']

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    for (const id of sections) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navigation activeSection={activeSection} />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <ProjectsSection onProjectSelect={setSelectedProjectId} />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <ProjectModal
        projectId={selectedProjectId}
        onClose={() => setSelectedProjectId(null)}
      />
    </>
  )
}
