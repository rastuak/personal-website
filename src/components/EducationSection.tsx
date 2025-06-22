'use client'

import { GraduationCap, Calendar, Award } from 'lucide-react'

interface Education {
  institution: string
  location: string
  degree: string
  duration: string
  details: string[]
}

export default function EducationSection() {
  const education: Education[] = [
    {
      institution: "Universitas Indonesia",
      location: "Depok, West Java",
      degree: "Bachelor of Electrical Engineering",
      duration: "Aug 2023 - Present",
      details: []
    },
    {
      institution: "SMAN 13 GARUT",
      location: "Garut, West Java",
      degree: "High/Secondary Mathematics and Natural Science",
      duration: "Aug 2020 - Jun 2023",
      details: ["Best graduate of SMAN 13 Garut"]
    }
  ]

  return (
    <section id="education" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.institution}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{edu.location}</p>
                </div>
              </div>
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{edu.degree}</p>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                <Calendar className="w-4 h-4" />
                <span>{edu.duration}</span>
              </div>
              {edu.details.length > 0 && (
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  {edu.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{detail}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}