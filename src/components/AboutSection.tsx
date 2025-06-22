'use client'

import { MapPin, GraduationCap, Calendar, Code, Cpu, Smartphone, Zap } from 'lucide-react'

export default function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'React, Next.js, Node.js, Supabase',
      color: 'blue'
    },
    {
      icon: Cpu,
      title: 'IoT & Hardware',
      description: 'ESP32, Arduino, Circuit Design',
      color: 'green'
    },
    // {
    //   icon: Smartphone,
    //   title: 'Mobile Development',
    //   description: 'React Native, Flutter',
    //   color: 'purple'
    // },
    {
      icon: Zap,
      title: 'Robotics & UAV',
      description: 'Autonomous Systems, Control',
      color: 'orange'
    }
  ]

  const colorClasses = {
    blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
    green: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400',
    purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
    orange: 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400'
  }

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up text-justify">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Electrical Engineering student at the University of Indonesia with
              a deep passion for technology, especially in electronics, renewable energy,
              fullstack development, IoT, and robotics. Enjoys turning ideas into
              real-world systems—whether it’s through circuit design, coding
              fullstack apps, or building automation apps.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Always looking for new challenges to grow and make meaningful
              contributions to innovative technology solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5 text-primary-600" />
                <span>Depok, West Java</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <GraduationCap className="w-5 h-5 text-primary-600" />
                <span>Universitas Indonesia</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Calendar className="w-5 h-5 text-primary-600" />
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>

          <div
            className="grid grid-cols-2 gap-6 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`${
                  colorClasses[item.color as keyof typeof colorClasses]
                } p-6 rounded-lg card-hover`}
              >
                <item.icon className="w-8 h-8 mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}