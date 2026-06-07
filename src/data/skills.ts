import { SkillGroup, Award } from '@/types/content'

export const skillGroups: SkillGroup[] = [
  {
    category: 'Semiconductor & EDA',
    level: 'expert',
    skills: ['Xschem', 'KLayout', 'Ngspice', 'IHP 130nm PDK', 'Skywater 130nm', 'NMOS/PMOS characterization'],
  },
  {
    category: 'Languages',
    level: 'expert',
    skills: ['TypeScript', 'JavaScript', 'Python', 'C/C++'],
  },
  {
    category: 'Web Stack',
    level: 'expert',
    skills: ['Next.js', 'Remix', 'React', 'Node.js', 'Tailwind CSS', 'HTML/CSS', 'Supabase', 'PostgreSQL'],
  },
  {
    category: 'Embedded & IoT',
    level: 'proficient',
    skills: ['ESP32', 'Arduino', 'MQTT', 'OpenCV', 'Ardupilot', 'PLC'],
  },
  {
    category: 'Analog & Hardware',
    level: 'proficient',
    skills: ['Digital logic wiring', 'Electrical wiring', 'IC 555 timer', 'Op-amps', 'Zener diodes', 'PCB design'],
  },
  {
    category: 'Tools',
    level: 'proficient',
    skills: ['Figma', 'Canva', 'Microsoft Office', 'Git'],
  },
  {
    category: 'Familiar',
    level: 'familiar',
    skills: ['React Native', 'MongoDB', 'Firebase', 'Flutter'],
  },
]

export const softSkills = [
  'Public speaking',
  'Cross-functional collaboration',
  'Technical writing',
  'Project coordination',
  'Mentoring',
  'Adaptability',
]

export const awardsList: Award[] = [
  {
    title: '1st Place — PKM-KC',
    event: 'Olimpiade Ilmiah Mahasiswa FTUI (OIM FTUI) 2025',
    year: '2025',
  },
  {
    title: '3rd Place — PKM-KC',
    event: 'Olimpiade Ilmiah Mahasiswa UI (OIM UI) 2025',
    year: '2025',
  },
  {
    title: 'KRTI Finalist',
    event: 'Kontes Robot Terbang Indonesia 2025 — Fixed Wing',
    year: '2025',
  },
  {
    title: 'KRTI Finalist',
    event: 'Kontes Robot Terbang Indonesia 2024 — Fixed Wing',
    year: '2024',
  },
  {
    title: '2nd Place — Fullstack Web Development',
    event: 'Technoskill 1.0, IME FTUI 2024',
    year: '2024',
  },
]
