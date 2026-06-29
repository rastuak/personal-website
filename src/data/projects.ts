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
    id: 'fully-differential-ota',
    title: 'Fully Differential Two-Stage OTA — IHP 130nm',
    role: 'Microelectronics Project',
    duration: 'Jun 2026',
    category: 'semiconductor',
    summary:
      'Designed a fully differential two-stage operational transconductance amplifier with active common-mode feedback (CMFB) in IHP SG13G2 130nm SiGe BiCMOS, achieving 74.86 dB gain and 9.57 MHz GBW under 2 mW.',
    context:
      'The capstone of the Microelectronics course sequence: design an OTA that meets real target specs — not just sim-to-pass, but sim-to-fabricate. The IHP 130nm process added the complexity of real PDK parameters.',
    problem:
      'How do you size a two-stage OTA with CMFB to meet gain >74 dB, GBW >5 MHz, symmetric slew rate, and sub-2 mW power — all simultaneously?',
    approach:
      'Systematically sized all transistors using hand calculations (square-law, gm/ID methodology) and PDK lookup tables to determine optimal bias points and device dimensions across both stages and the CMFB loop. Used Xschem for schematic capture, IHP SG13G2 PDK for the 130nm process models. Iterative simulation-based fine-tuning closed the gap between hand calcs and silicon behavior.',
    result:
      'All design targets met: gain 74.86 dB (>74), GBW 9.57 MHz (>5), symmetric slew rate 10.43 V/µs, power dissipation 1.92 mW (<2).',
    stack: ['Xschem', 'IHP SG13G2 130nm PDK', 'gm/ID methodology', 'Ngspice', 'Active CMFB'],
    metrics: [
      { label: 'Gain', value: '74.86 dB' },
      { label: 'GBW', value: '9.57 MHz' },
      { label: 'Slew rate', value: '10.43 V/µs' },
      { label: 'Power', value: '1.92 mW' },
    ],
    highlights: [
      'Hand-calculated all transistor sizes using gm/ID methodology before simulation',
      'Active CMFB loop kept common-mode output stabilized without extra power stage',
      'IHP 130nm SiGe BiCMOS process — real foundry PDK, not educational models',
    ],
    learnings:
      'The hand calculations got me within 15% of the final specs. That last 15% was all parasitic capacitances that the square-law model does not capture. The takeaway: hand calcs set the direction, simulation closes the distance.',
  },
  {
    id: '12v-linear-power-supply',
    title: '12V Linear Power Supply with Discrete Shunt Regulator',
    role: 'Coursework Project',
    duration: 'Dec 2025',
    category: 'hardware',
    summary:
      'A stable 12V DC power source built from a 220V AC mains input — full-wave rectification, capacitive smoothing, and a discrete Zener-BJT shunt regulator. No IC regulators, just discrete components.',
    context:
      'A class project with a deliberately pure-analog constraint: design a regulated power supply using only discrete components. The brief was "no 78xx, no LM317 — only transistors, diodes, and passives."',
    problem:
      'How do you get a clean, load-regulated 12V DC from a 220V AC wall outlet using only discrete components?',
    approach:
      'Step-down via CT transformer (220V to 15V AC), full-wave bridge rectifier, capacitive smoothing filter (4700 µF), then a discrete shunt regulator: 12V Zener diode sets the reference, 2N2222 BJT passes the current, and a series resistor drops the excess voltage.',
    result:
      'Working 12V DC output, ripple within spec, load regulation adequate for powering op-amp circuits on a breadboard.',
    stack: ['CT Transformer', 'Full-wave rectifier', '2N2222 BJT', '12V Zener diode', 'Capacitive smoothing'],
    highlights: [
      '220V AC mains to stable 12V DC — all discrete, no IC regulator',
      'Shunt topology dissipates excess as heat, keeps output steady across load variation',
      'Everything through-hole on perfboard — measured with oscilloscope',
    ],
    learnings:
      'A shunt regulator is simple and reliable but inefficient — the series resistor burns power proportional to the current. That tradeoff is obvious on paper but you feel it when the resistor gets hot.',
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
