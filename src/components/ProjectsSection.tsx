'use client'

import { ExternalLink } from 'lucide-react'
import { Project } from '@/types'

interface ProjectsSectionProps {
  onProjectSelect: (project: Project) => void
}

export default function ProjectsSection({ onProjectSelect }: ProjectsSectionProps) {
  const projects: Project[] = [
    {
      title: "EXERTION 2025 - Official Competition Website",
      role: "Tech Lead",
      duration: "May 2025 - Present",
      description:
        "A full-scale competition organized by EXERCISE FTUI 2025 platform.",
      technologies: ["React.js", "Supabase", "Next.js", "Tailwind CSS"],
      achievements: [
        "Built the gamification with Next.js and Supabase, focusing on performance, scalability, and accessibility",
        "Develop and implement a gamification system to list UI/UX and Business Innovation tracks with deadline and life validation",
        "Design and online collaboration tools in building workspace, submission and validation systems, advanced detection, and randomized questions",
        "Integrate authentication, role-based access control, and real-time database features using Supabase",
        "Collaborate with competition committee to gather requirements and iterate on features based on user feedback",
      ],
      category: "Web Development",
    },
    {
      title: "IoT-Based Smart Water Dispenser with Real-Time Monitoring",
      role: "Developer",
      duration: "Jun 2025",
      description:
        "Developed an automated water dispenser system using ESP32 microcontroller and ultrasonic sensors.",
      technologies: ["ESP32", "IoT", "Sensors", "Real-time Monitoring"],
      achievements: [
        "Provided a hands-free, efficient water dispensing solution",
        "Enabled transparent, remote monitoring of water availability",
        "Created a comprehensive solution that offers real-time protective monitoring",
      ],
      category: "IoT Development",
    },
    {
      title: "TIS x EXERCISE FTUI 2025 - Collaborative Website Project",
      role: "Developer",
      duration: "May 2025 - Jun 2025",
      description:
        "Developing a collaborative website as part of an official partnership between TIS FTUI 2025 and EXERCISE FTUI 2025.",
      technologies: ["Next.js", "Tailwind CSS"],
      achievements: [
        "Build responsive and user-friendly interfaces using Next.JS and Tailwind CSS",
        "Implement content management tools to enable non-technical users to update the website",
        "Ensure the website is accessible, cross-browser compatible, and optimized for performance",
        "Participate in weekly meetings to align technical approaches with collaborative goals and timelines",
      ],
      category: "Web Development",
    },
    {
      title: "Open Recruitment Website — EXERCISE FTUI 2025",
      role: "Frontend Developer",
      duration: "Jan 2025",
      description:
        "Developed the frontend of a web-based open recruitment platform for EXERCISE FTUI to streamline applicant registration and task submission. The platform allows applicants to fill in personal information and upload assignment files directly, with seamless integration to Google Drive via API for centralized storage.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Supabase",
        "Framer Motion",
        "Google Drive API",
      ],
      achievements: [
        "Built responsive and accessible UI using Next.js and Tailwind CSS, enhanced with Framer Motion for smooth animations.",
        "Ensured mobile-friendly experience and clear user flow for 67 applicants.",
      ],
      category: "Web Development",
    },
    // {
    //   title: "Bluetooth Positioning Ocule Interactive x EXERCISE FTUI",
    //   role: "Mobile Frontend Developer",
    //   duration: "Jan 2024 - Jul 2024",
    //   description: "A collaborative Hackeaton Interactive and Exercise FTUI project to track device location using Bluetooth signals.",
    //   technologies: ["React Native", "Bluetooth", "ESP32", "RSSI"],
    //   achievements: [
    //     "Built the mobile app UI to display device location and proximity in real-time",
    //     "Integrated BLE Signal data to Determine floor and distance",
    //     "Ensured smooth UX and UI structured with outlined and embedded teams for data flow consistency"
    //   ],
    //   category: "Mobile Development"
    // },
    // {
    //   title: "Signal Detection Rehabilitation",
    //   role: "Hardware Design Engineer",
    //   duration: "May 2024 - Jun 2024",
    //   description: "A hardware-based buzzer system developed using only digital logic components without microcontrollers.",
    //   technologies: ["Digital Logic", "IC", "Hardware Design"],
    //   achievements: [
    //     "Designed and implemented a fully digital circuit to function as a real-time shield reminder system using logic ICs",
    //     "Configured the system to activate LEDs and a buzzer at 5 predetermined prayer times",
    //     "Added a secondary alert feature: 10 minutes after each adzan time, another LED lights up and a buzzer sounds again as a second reminder",
    //     "Focused on reliability and simplicity by eliminating software dependency and using purely line-based hardware logic"
    //   ],
    //   category: "Hardware Design"
    // },
    {
      title: "Shalat Reminder Device",
      role: "Team Leader",
      duration: "May 2024 - Jun 2024",
      description:
        "A hardware buzzer reminder system developed using digital logic components.",
      technologies: ["Digital Logic", "IC Counters", "Decoders", "Hardware"],
      achievements: [
        "Designed and implemented a fully digital circuit to function as a real-time sholat reminder system using logic ICs (counters, decoders,logic gates, etc.).",
        "Configured the system to activate LEDs and a buzzer at 5 predetermined prayer times: 05:00, 12:00, 15:00, 18:00, and 19:00.",
        "Added a secondary alert feature: 10 minutes after each adzan time, another LED lights up and a buzzer sounds again as a second reminder.",
        "Focused on reliability and simplicity by eliminating software dependency and using purely time-based hardware logic.",
        "Gained hands-on experience in circuit timing, logic sequencing, and practical application of combinational and sequential logic systems.",
      ],
      category: "Hardware Design",
    },
  ];

  const categoryColors = {
    "Web Development": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    "IoT Development": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    "Mobile Development": "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
    "Hardware Design": "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
  }

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of innovative projects spanning web development, IoT systems, mobile applications, and hardware design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg card-hover cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => onProjectSelect(project)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${categoryColors[project.category as keyof typeof categoryColors]}`}>
                    {project.category}
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{project.role} • {project.duration}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-gray-500 dark:text-gray-400">+{project.technologies.length - 3} more</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}