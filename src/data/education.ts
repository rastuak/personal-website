import { Education } from '@/types/content'

export const education: Education[] = [
  {
    id: 'ui-ee',
    institution: 'Universitas Indonesia',
    location: 'Depok, West Java',
    degree: 'Bachelor of Electrical Engineering',
    start: '2023-08',
    end: null,
    details: [
      'Focus areas: electronics, semiconductor technology, VLSI design',
      'Active in IC Design Lab, AUAV Tim Robotik, EXERCISE FTUI',
    ],
    coursework: [
      'VLSI Design',
      'Digital Signal Processing',
      'Computer Architecture',
      'Analog Electronics',
      'Microprocessors & Microcontrollers',
      'Data Structures & Algorithms',
    ],
    activities: [
      'IC Design Lab — Junior Researcher',
      'Electronics Lab — Teaching Assistant',
      'AUAV Tim Robotik UI — Fixed Wing Programming',
      'EXERCISE FTUI — Software Engineering Division',
    ],
  },
  {
    id: 'sman13',
    institution: 'SMAN 13 Garut',
    location: 'Garut, West Java',
    degree: 'Mathematics and Natural Sciences',
    start: '2020-08',
    end: '2023-06',
    details: ['Best graduate of the year'],
  },
]

export const awards = [
  {
    title: '1st Place — PKM-KC',
    event: 'Olimpiade Ilmiah Mahasiswa FTUI (OIM FTUI) 2025',
    year: '2025',
    placement: '1st',
  },
  {
    title: '3rd Place — PKM-KC',
    event: 'Olimpiade Ilmiah Mahasiswa Universitas Indonesia (OIM UI) 2025',
    year: '2025',
    placement: '3rd',
  },
  {
    title: 'Finalist — Fixed Wing Division',
    event: 'Kontes Robot Terbang Indonesia (KRTI) 2025',
    year: '2025',
  },
  {
    title: 'Finalist — Fixed Wing Division',
    event: 'Kontes Robot Terbang Indonesia (KRTI) 2024',
    year: '2024',
  },
  {
    title: '2nd Place — Fullstack Web Development',
    event: 'Technoskill 1.0, IME FTUI 2024',
    year: '2024',
    placement: '2nd',
  },
]

export const scholarship = {
  name: 'Jabar Future Leaders Scholarship',
  type: 'Full Bachelor Scholarship',
  issuer: 'Government of West Java',
}
