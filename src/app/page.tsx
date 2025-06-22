'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import ExperienceSection from '@/components/ExperienceSection'
import EducationSection from '@/components/EducationSection'
import SkillsSection from '@/components/SkillsSection'
import ContactSection from '@/components/ContactSection'
import ScrollToTop from '@/components/ScrollToTop'
import ProjectModal from '@/components/ProjectModal'
import { Project } from '@/types'

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'experience', 'education', 'skills', 'contact']
      const scrollPosition = window.scrollY + 100

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })

      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navigation activeSection={activeSection} />
      <HeroSection />
      <AboutSection />
      <ProjectsSection onProjectSelect={setSelectedProject} />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
      
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
      
      <ScrollToTop show={showScrollTop} />
    </div>
  )
}