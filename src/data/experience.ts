import { Experience } from '@/types/content'

export const experiences: Experience[] = [
  {
    id: 'ic-design-lab',
    role: 'Junior Researcher',
    organization: 'IC Design Laboratory, Universitas Indonesia',
    type: 'research',
    start: '2026-01',
    end: null,
    location: 'Depok, ID',
    context:
      'Semiconductor research lab focused on physical design of integrated circuits. Currently preparing for a silicon tape-out on the IHP 130nm technology node.',
    responsibilities: [
      'Generate physical layouts in KLayout targeting the IHP 130nm Open PDK',
      'Run DRC (Design Rule Check) against foundry rules to ensure fabricability',
      'Route and optimize layout topologies for area efficiency',
      'Support the Head of Laboratory on tape-out preparation',
    ],
    outcome:
      'Two cells completed in layout, one in routing. DRC-clean on first pass for the smaller cell.',
  },
  {
    id: 'electronics-lab-ta',
    role: 'Coordinator — Electronic Circuits Practicum',
    organization: 'Electronics Laboratory, Universitas Indonesia',
    type: 'teaching',
    start: '2025-09',
    end: null,
    location: 'Depok, ID',
    context:
      'Coordinate the weekly Electronic Circuits practicum for Computer Engineering students.',
    responsibilities: [
      'Coordinate practicum sessions for 150+ students each semester',
      'Instruct experiments on diodes, BJTs, FETs, and operational amplifiers',
      'Maintain and update lab manuals',
      'Coordinate with lecturers and fellow assistants on curriculum improvements',
    ],
    outcome:
      'Refactored the lab manual layout — students report it is easier to follow during the experiment.',
  },
  {
    id: 'auav-head',
    role: 'Fixed Wing — Head of Programming',
    organization: 'AUAV Tim Robotik Universitas Indonesia',
    type: 'leadership',
    start: '2025-02',
    end: '2026-01',
    location: 'Depok, ID',
    context:
      'AUAV UI is a multidisciplinary student team building autonomous UAVs for the Kontes Robot Terbang Indonesia (KRTI) competition.',
    responsibilities: [
      'Led the programming division for the Fixed Wing competition team',
      'Improved the Ground Control System — better comms reliability, faster mission control',
      'Initiated and led development of an onboard image recognition system for autonomous navigation',
      'Coordinated with electrical and mechanical teams on integration',
    ],
    outcome:
      'KRTI 2025 Finalist — Fixed Wing Division. Image recognition system made it to flight test.',
  },
  {
    id: 'exercise-vice-head',
    role: 'Vice Head — Software Engineering Division',
    organization: 'EXERCISE FTUI',
    type: 'leadership',
    start: '2025-02',
    end: '2026-01',
    location: 'Depok, ID',
    context:
      'EXERCISE FTUI is a technology-focused student organization under Electrical Engineering @ UI.',
    responsibilities: [
      'Coordinated software projects across 10+ team members',
      'Worked with UI/UX, Content, and Hardware divisions on integrated deliverables',
      'Ran task delegation, progress tracking, and peer reviews',
    ],
    outcome:
      'Shipped EXERTION 2025 platform on time. Three sub-events ran in parallel without incidents.',
  },
  {
    id: 'auav-staff',
    role: 'Fixed Wing — Staff of Programming',
    organization: 'AUAV Tim Robotik Universitas Indonesia',
    type: 'engineering',
    start: '2024-02',
    end: '2025-01',
    location: 'Depok, ID',
    context:
      'Joined AUAV as a programmer on the Fixed Wing team, focused on the Ground Control System.',
    responsibilities: [
      'Contributed to Ground Control System development',
      'Tested and troubleshot UAV software during ground and flight trials',
      'Coordinated with electrical and mechanical teams on integration',
    ],
    outcome: 'KRTI 2024 Finalist — Fixed Wing Division.',
  },
  {
    id: 'exercise-staff',
    role: 'Staff of Software',
    organization: 'EXERCISE FTUI',
    type: 'engineering',
    start: '2024-02',
    end: '2025-01',
    location: 'Depok, ID',
    context:
      'Joined EXERCISE FTUI as a software staff member, working on web and mobile projects.',
    responsibilities: [
      'Worked on the EXERCISE Web Redesign project (UI/UX focus)',
      'Contributed to the Bluetooth Positioning mobile app',
      'Collaborated with UI/UX, Content, and Hardware divisions',
    ],
  },
]
