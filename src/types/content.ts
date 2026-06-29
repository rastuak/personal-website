export interface Project {
  id: string
  title: string
  role: string
  duration: string
  category: 'semiconductor' | 'web' | 'hardware' | 'iot' | 'mobile'
  cover?: string
  summary: string
  context?: string
  problem?: string
  approach?: string
  result?: string
  stack: string[]
  metrics?: { label: string; value: string }[]
  highlights: string[]
  links?: { label: string; href: string }[]
  learnings?: string
  featured?: boolean
}

export interface Experience {
  id: string
  role: string
  organization: string
  type: 'research' | 'teaching' | 'leadership' | 'engineering'
  start: string
  end: string | null
  location: string
  context?: string
  responsibilities: string[]
  outcome?: string
  links?: { label: string; href: string }[]
}

export interface Education {
  id: string
  institution: string
  location: string
  degree: string
  start: string
  end: string | null
  details: string[]
  coursework?: string[]
  activities?: string[]
}

export interface SkillGroup {
  category: string
  level?: 'expert' | 'proficient' | 'familiar'
  skills: string[]
}

export interface Award {
  title: string
  event: string
  year: string
  placement?: string
}
