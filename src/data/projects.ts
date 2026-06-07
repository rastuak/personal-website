import { Project } from '@/types/content'

export const projects: Project[] = [
  {
    id: 'pemira-e-voting',
    title: 'Pemira FTUI 2025 E-Voting System',
    role: 'Tech Lead',
    duration: 'Dec 2025',
    category: 'web',
    summary:
      'A web-based voting platform for the Faculty of Engineering student election at Universitas Indonesia. Built to handle high-concurrency traffic with verified votes.',
    context:
      `Built for the annual FTUI Student Election, which had to serve ~3,200 eligible voters in a 6-hour window. The legacy system was a Google Form, which couldn't enforce one-vote-per-student or surface live turnout.`,
    problem:
      'How do you build a voting system that is auditable, one-vote-per-student, and resilient to peak traffic from a campus that hits the site between classes?',
    approach:
      'Split the system into a Remix frontend (server-rendered, fast first paint) and an Express.js backend (complex vote-counting logic). Containerized with Docker, deployed on Dokploy. Identity verification happened against a pre-loaded student list, votes were stored append-only with timestamps.',
    result:
      'Served 2,900+ unique users, processed 2,600+ verified votes — about 90% turnout, the highest in FTUI Pemira history. No data loss, no double-voting incidents.',
    stack: ['Remix', 'Express.js', 'Tailwind CSS', 'Docker', 'Dokploy', 'PostgreSQL'],
    metrics: [
      { label: 'Unique users', value: '2,900+' },
      { label: 'Verified votes', value: '2,600+' },
      { label: 'Turnout', value: '~90%' },
      { label: 'Peak window', value: '6 hours' },
    ],
    highlights: [
      'Led a 4-person team across frontend, backend, and deployment',
      'Containerized the entire stack; redeploys in under 90 seconds',
      'One-vote-per-student enforced via pre-loaded student registry + session-bound tokens',
    ],
    learnings:
      'The interesting part was not the voting logic — it was the traffic pattern. People vote in clusters between classes, so the system has to be ready for 200 concurrent writes at 11:55 sharp. That shaped the whole architecture.',
    featured: true,
  },
  {
    id: 'common-source-amplifier',
    title: 'Common-Source Amplifier — 130nm Characterization',
    role: 'Coursework (Independent)',
    duration: 'Mar 2026',
    category: 'semiconductor',
    summary:
      'Designed and characterized a common-source amplifier using open-source EDA tools targeting the Skywater 130nm PDK. Bridged textbook amplifier theory with real transistor-level design.',
    context:
      'A self-directed coursework project to understand analog design at the layout level — not just simulation. The goal was to take a design from schematic through to a clean GDS-ready layout.',
    problem:
      'How does load choice (resistive vs diode-connected vs current-source) change gain, bandwidth, and headroom? What does it look like in silicon?',
    approach:
      'Used Xschem for schematic entry, Ngspice for characterization sweeps. Ran DC operating-point analysis on NMOS/PMOS devices to size them for the target gain, then built the amplifier with three load configurations and compared their trade-offs.',
    result:
      'Confirmed textbook behavior in simulation: current-source load gave highest gain, resistive load gave most headroom, diode-connected gave the most compact layout. A working schematic in Xschem + characterization plots in Ngspice.',
    stack: ['Xschem', 'Ngspice', 'Skywater 130nm PDK', 'NMOS/PMOS characterization'],
    highlights: [
      'Ran DC sweeps across Vov, Vds, and W/L to find the saturation region',
      'Compared three load configurations on the same transistor size',
      'All open-source tooling — no paid EDA licenses',
    ],
    learnings:
      'Reading about "current-source load gives more gain" in a textbook is one thing. Sweeping it in Ngspice and watching the gain plot curve up is a different kind of knowing.',
  },
  {
    id: 'selamat-sentosa-battery-charger',
    title: 'Selamat Sentosa — Li-ion Battery Charger with Auto-Cutoff',
    role: 'Electronics Project Lead',
    duration: 'Aug 2025',
    category: 'hardware',
    summary:
      'A smart Li-ion battery charger that cuts off charging at 4.2V using discrete analog blocks. No microcontroller, just an IC 555 timer, op-amps, Zener diodes, and transistors.',
    context:
      'A class project to design a battery charger that does not overcharge. The brief was "design it without firmware." That constraint forced real analog thinking.',
    problem:
      'How do you safely stop a charging current at 4.2V using only hardware?',
    approach:
      'Three blocks: (1) IC 555 in astable mode for pulse charging, (2) op-amp + Zener voltage detector that compares battery voltage to a 4.2V reference, (3) NPN cutoff transistor that pulls the 555 reset pin to ground when the threshold is crossed.',
    result:
      'Functional circuit on breadboard. Cutoff engaged within ±50mV of target. The system runs in a tight loop — pulse, sense, decide, cut.',
    stack: ['IC 555 Timer', 'Op-Amps (LM358)', 'Zener Diodes', 'NPN Transistors', 'Breadboard'],
    highlights: [
      'Cutoff at 4.2V ± 50mV',
      'Pulse charging with adjustable duty cycle via 555 timing components',
      'Zero software, zero microcontroller',
    ],
    learnings:
      'The first version had hysteresis problems — the cutoff would oscillate near the threshold. Adding a small amount of positive feedback on the comparator fixed it. That oscillation is something you only see by building.',
  },
  {
    id: 'exertion-2025',
    title: 'EXERTION 2025 — National Competition Platform',
    role: 'Tech Lead',
    duration: 'May 2025 – Jul 2025',
    category: 'web',
    summary:
      'A national-scale competition platform with three sub-events: UI/UX Design, Business Innovation, and Exermind (an online exam with tab-switch detection).',
    context:
      'EXERTION is the annual EXERCISE FTUI 2025 national competition. The brief was a single platform that could host multiple event types, with role-based access for participants, judges, and admins.',
    problem:
      'Three event types with very different UX needs: open-ended submissions, pitch decks, and timed online exams with integrity checks.',
    approach:
      'Next.js frontend with Supabase for auth, database, and real-time updates. The Exermind exam module was the hardest part — autosave, randomized questions, a server-side timer, and tab-switch detection that pauses the exam when the participant leaves the window.',
    result:
      'Shipped on time, ran all three sub-events in parallel, served participants from multiple universities. The tab-switch detection worked as designed — flagged several attempted violations during the actual exam.',
    stack: ['Next.js', 'Supabase', 'Tailwind CSS', 'TypeScript', 'PostgreSQL'],
    highlights: [
      'Exermind exam: autosave, randomized questions, tab-switch detection',
      'Role-based access: participants, judges, admins',
      'Real-time submission status updates',
    ],
    learnings:
      'Tab-switch detection sounds simple until you try it — visibilitychange events, focus events, blur events, all firing in different combinations. The fix was a server-side heartbeat: the client pings every 5 seconds, and the server infers focus from that.',
  },
  {
    id: 'iot-water-dispenser',
    title: 'IoT Smart Water Dispenser with Real-Time Monitoring',
    role: 'Firmware & Cloud Developer',
    duration: 'Jun 2025',
    category: 'iot',
    summary:
      'An automated water dispenser that detects cup presence and tank level using ultrasonic sensors on an ESP32, with real-time monitoring over MQTT.',
    context:
      'A practical project: replace the manual gallon dispenser in the lab with one that pours when a cup is placed, and reports usage to a dashboard.',
    problem:
      'How do you reliably detect a cup under a spout, and report water level without a cloud bill per sensor?',
    approach:
      'ESP32 with two HC-SR04 ultrasonic sensors — one pointed at the cup platform, one at the tank. C/C++ firmware on the ESP32 processes the sensor data and publishes to MQTT. A small Node.js bridge pushes to a dashboard.',
    result:
      'Working system. Cup detection reliable within 2cm. Tank level tracked over time. Real-time monitoring on a simple dashboard.',
    stack: ['ESP32', 'C/C++', 'MQTT', 'HC-SR04 Ultrasonic Sensors', 'Node.js'],
    highlights: [
      'Cup detection reliable within 2cm',
      'MQTT-based telemetry — no per-message cloud cost',
      'Tank level tracked over time, alertable at low level',
    ],
    learnings:
      'Ultrasonic sensors have a blind zone — they cannot read closer than ~2cm. The first version thought every cup was "already gone" because the sensor was too close. Mounting it higher fixed it.',
  },
  {
    id: 'tis-exercise-collab',
    title: 'TIS × EXERCISE FTUI 2025 Collaboration Site',
    role: 'Tech Lead',
    duration: 'May 2025 – Jun 2025',
    category: 'web',
    summary:
      'A joint web presence for the partnership between TIS FTUI 2025 and EXERCISE FTUI 2025, designed so non-technical contributors can update it.',
    context:
      'Two student organizations wanted a single site for their joint activities. The challenge: build something the org members (mostly non-engineers) can actually maintain.',
    problem:
      'How do you give content ownership to non-technical users without giving them access to break the codebase?',
    approach:
      'Next.js frontend with a headless CMS backend. Editors get a familiar WYSIWYG interface; the build pipeline pulls content at build time. Performance stays static, content stays editable.',
    result:
      'Shipped. Editors have published dozens of updates without engineering involvement. Site loads fast, passes Lighthouse, works on phones.',
    stack: ['Next.js', 'Tailwind CSS', 'Headless CMS', 'Static Site Generation'],
    highlights: [
      'Decoupled content from code via headless CMS',
      'Editors can publish without touching the repo',
      'Static output, fast on any connection',
    ],
  },
]
