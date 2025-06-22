export interface Project {
  title: string
  role: string
  duration: string
  description: string
  technologies: string[]
  achievements: string[]
  category: string
}

export interface Experience {
  title: string
  organization: string
  duration: string
  location: string
  responsibilities: string[]
  achievements?: string[]
}

export interface Education {
  institution: string
  location: string
  degree: string
  duration: string
  details: string[]
}