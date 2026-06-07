import { Mail, Linkedin, Github, FileText } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-paper-50 dark:bg-paper-900">
      <div className="max-w-wide mx-auto px-6 md:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="status-dot" aria-hidden="true" />
            <span className="font-mono text-sm uppercase tracking-wider text-paper-700 dark:text-paper-300">
              Open to internships · Summer 2026
            </span>
          </div>
          <h2 className="section-title mb-3">Get in touch</h2>
          <p className="text-paper-600 dark:text-paper-400 mb-10 max-w-md mx-auto">
            IC design, semiconductor, or full-stack engineering. If you have a
            role, I would love to hear about it.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a
              href="mailto:kfaradika@gmail.com"
              className="btn-primary"
            >
              <Mail className="w-4 h-4" />
              Send an email
            </a>
            <a
              href="/resume.pdf"
              className="btn-secondary"
              download
            >
              <FileText className="w-4 h-4" />
              Download CV (PDF)
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 text-paper-600 dark:text-paper-400">
            <a
              href="https://linkedin.com/in/kautsarfaisal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-copper-600 dark:hover:text-copper-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/rastuak"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-copper-600 dark:hover:text-copper-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-paper-300 dark:border-paper-700">
            <p className="font-mono text-xs text-paper-500 dark:text-paper-500">
              <span className="text-copper-600 dark:text-copper-400 font-bold">KF</span> / Kautsar Faradika Faisal
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
