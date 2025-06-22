'use client'

import { Calendar, CheckCircle } from 'lucide-react'

interface Experience {
  title: string
  organization: string
  duration: string
  location: string
  responsibilities: string[]
  achievements?: string[]
}

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      title: "Vice Head of Software Engineering Division",
      organization: "EXERCISE FTUI",
      duration: "Feb 2025 - Present",
      location: "Depok",
      responsibilities: [
        "Led and coordinated multiple software development projects involving 10+ team members",
        "Obtained junior Electrical Engineering Department students through an open internship program, posting them in web development fundamentals",
        "Collaborated with UI/UX, Content, and Hardware divisions to deliver integrated and functional tech solutions",
        "Facilitated idea designation, progress tracking, and peer reviews to ensure efficient and high-quality project outcomes"
      ]
    },
    {
      title: "Fixed Wing Head of Programming Division",
      organization: "AUAV - Tim Robotik Universitas Indonesia",
      duration: "Feb 2025 - Present",
      location: "Depok",
      responsibilities: [
        "Led the programming division of AUAV UI’s Fixed Wing competition team, overseeing development of autonomous drone software systems.",
        "Spearheaded improvements to the Ground Control System, enhancing communication reliability and mission control efficiency",
        "Ensured real-time implementation of advanced image recognition system to support autonomous navigation and target detection",
        "Collaborated cross-divisionally with electrical and mechanical teams to ensure seamless system integration and field readiness"
      ]
    },
    {
      title: "Staff of Software",
      organization: "AUAV - Tim Robotik Universitas Indonesia",
      duration: "Feb 2024 - Jan 2025",
      location: "Depok",
      responsibilities: [
        "Contributed to various software projects as part of a team of 10+ members",
        "Actively involved in the EXERCISE Web Redesign project, focusing on enhancing the user experience and interface design",
        "Contributed to the Bluetooth Positioning Project (Mobile App), primarily focusing on the user experience and interface of the mobile app with Bluetooth-based positioning",
        "Collaborated with the UI/UX, Content, and Hardware divisions to deliver integrated and functional tech solutions",
        "Assisted in task delegation, progress tracking, and peer reviews to ensure project efficiency and high quality outcomes"
      ]
    },
    {
      title: "Fixed Wing Staff of Programming",
      organization: "AUAV - Tim Robotik Universitas Indonesia",
      duration: "Feb 2024 - Jan 2025",
      location: "Depok",
      responsibilities: [
        "Participated in the development of unmanned aerial vehicle (UAV) technologies as part of the Ground Control System for AUAV U's Fixed Wing competition team, improving mission control and communication reliability",
        "Collaborated with cross-divisional mechanical and electrical teams to ensure integrated navigation and field detection",
        "Assisted in testing and troubleshooting UAV software during ground and flight trials to ensure operational readiness"
      ]
    },
    {
      title: "Vice Chairman",
      organization: "Kelompok Ilmiah Remaja SMAN 13 Garut",
      duration: "Jan 2022 - Jan 2023",
      location: "Garut",
      responsibilities: [
        "Provide full support to the KIR chairman with active involvement in all activities and open communication to help retain their vision and goals",
        "Proactively contributing to the revival of KIR activity previously affected by the Covid-19 pandemic"
      ]
    }
  ]

  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                  <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold">{exp.organization}</p>
                  {exp.location && <p className="text-gray-600 dark:text-gray-400">{exp.location}</p>}
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">{exp.duration}</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Responsibilities:</h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}