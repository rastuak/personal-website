'use client'

import { Mail, Linkedin, Phone, Github } from 'lucide-react'

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section-padding bg-gray-900 dark:bg-gray-950 text-white"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
        <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
        <p className="text-xl text-gray-300 mb-12 animate-slide-up">
          I'm always interested in new opportunities and challenging projects.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a
            href="mailto:kfaradika@gmail.com"
            className="flex flex-col items-center gap-3 p-6 bg-gray-800 dark:bg-gray-900 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors card-hover animate-slide-up"
          >
            <Mail className="w-8 h-8 text-primary-400" />
            <span className="font-semibold">Email</span>
            <span className="text-sm text-gray-300">
              kautsarafadika@gmail.com
            </span>
          </a>
          <a
            href="https://linkedin.com/in/kautsarfaisal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 bg-gray-800 dark:bg-gray-900 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors card-hover animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <Linkedin className="w-8 h-8 text-primary-400" />
            <span className="font-semibold">LinkedIn</span>
            <span className="text-sm text-gray-300">Connect with me</span>
          </a>
          <a
            href="https://github.com/rastuak"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 bg-gray-800 dark:bg-gray-900 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors card-hover animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <Github className="w-8 h-8 text-primary-400" />
            <span className="font-semibold">GitHub</span>
            <span className="text-sm text-gray-300">Get in touch with me</span>
          </a>
          <div
            className="flex flex-col items-center gap-3 p-6 bg-gray-800 dark:bg-gray-900 rounded-lg animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Phone className="w-8 h-8 text-primary-400" />
            <span className="font-semibold">Phone</span>
            <span className="text-sm text-gray-300">+62 822 1637 8467</span>
          </div>
        </div>

        <p
          className="text-gray-400 animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          © 2025 Kautsar Faradika Faisal. All rights reserved.
        </p>
      </div>
    </section>
  );
}