'use client'

import { Award } from 'lucide-react'

export default function SkillsSection() {
  const skills = {
    "Programming Languages": ["Python", "JavaScript", "TypeScript", "C++", "MATLAB"],
    "Web Technologies": ["React.js", "Next.js", "Node.js", "HTML/CSS", "Tailwind CSS"],
    "Databases & Cloud": ["Supabase", "MongoDB", "Firebase"],
    // "Mobile Development": ["React Native", "Flutter"],
    "Hardware & IoT": ["ESP32", "Arduino", "Digital Logic Design", "PCB Design"],
    "Tools & Platforms": ["Git", "VS Code", "Figma", "Adobe Creative Suite"],
    "Soft Skills": ["Leadership", "Team Management", "Problem Solving", "Communication"]
  }

  const achievements = [
    "Kontes Robot Terbang Indonesia (KRTI) Finalist (2024) - Fixed Wing Division",
    "Technoskill 1.0 (2024), 2nd Place Fullstack Web Development, IME FTUI 2024",
    "More to go..."
  ]

  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className='mb-16'>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-blue-100 dark:from-primary-900/20 dark:to-blue-900/20 rounded-lg p-6 text-center card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Award className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
                <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* scholarship */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Scholarship
          </h3>
          <div className="flex justify-center items-center">
            <div
              className="bg-gradient-to-br from-primary-50 to-blue-100 dark:from-primary-900/20 dark:to-blue-900/20 rounded-lg p-6 text-center card-hover animate-slide-up"
              style={{ animationDelay: `${0.2}s` }}
            >
              <Award className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
              <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                Jabar Future Leaders Scholarship (Full Bachelor Scholarship)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}