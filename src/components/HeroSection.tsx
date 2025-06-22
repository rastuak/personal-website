'use client'

import { ChevronDown, Mail, Linkedin, Phone, Github } from "lucide-react";
import ProfilePicture from './ProfilePicture';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-600 via-primary-700 to-blue-800 dark:from-primary-800 dark:via-primary-900 dark:to-blue-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/3 rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        <div className="mb-8">
          <ProfilePicture />
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-slide-up">
            Kautsar Faradika Faisal
          </h1>
          <p
            className="text-xl md:text-2xl text-blue-100 mb-2 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Electrical Engineering Student
          </p>
          <p
            className="text-lg text-blue-200 mb-8 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            Passionate about electronics, robotics, technologies, and innovative solutions
          </p>
        </div>

        <div
          className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="mailto:kfaradika@gmail.com"
            className="glass-effect px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            <span>kfaradika@gmail.com</span>
          </a>
          <a
            href="https://linkedin.com/in/kautsarfaisal"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-effect px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/rastuak"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-effect px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <div className="glass-effect px-6 py-3 rounded-lg flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <span>+62 88 123 223 57</span>
          </div>
        </div>

        <a
          href="#about"
          className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 animate-slide-up"
          style={{ animationDelay: "0.8s" }}
        >
          <span>Explore My Work</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}