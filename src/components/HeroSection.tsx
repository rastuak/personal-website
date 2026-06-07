import { FileText, Mail, ArrowDown } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 pb-16 overflow-hidden paper-texture"
    >
      <div className="max-w-wide mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center min-h-[calc(100vh-12rem)]">
          {/* Left column — text */}
          <div className="md:col-span-7 space-y-8">
            <div className="flex items-center gap-3">
              <span className="status-dot" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-paper-700 dark:text-paper-300">
                Open to internships · Summer 2026
              </span>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-copper-600 dark:text-copper-400 mb-3">
                Electrical Engineering · Universitas Indonesia
              </p>
              <h1 className="heading-display text-display-1 italic">
                Kautsar<br />Faradika Faisal.
              </h1>
            </div>

            <p className="prose-body max-w-reading text-xl">
              I design at the transistor level and ship at the application level.
              Currently characterizing 130nm analog cells at the IC Design Lab and
              shipping full-stack products on the side.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href="#work" className="btn-primary">
                View selected work
                <ArrowDown className="w-4 h-4" />
              </a>
              <a href="#contact" className="btn-secondary">
                Get in touch
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="/resume.pdf"
                className="link-underline font-mono text-sm uppercase tracking-wider"
                aria-label="Download resume (PDF)"
              >
                <FileText className="inline w-4 h-4 mr-2 -mt-0.5" />
                Resume.pdf
              </a>
            </div>

            {/* Quick stats — quantified proof */}
            <dl className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-paper-300 dark:border-paper-800 max-w-xl">
              <div className="min-w-0">
                <dt className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-paper-600 dark:text-paper-400 truncate">
                  Users served
                </dt>
                <dd className="font-serif text-2xl sm:text-3xl text-paper-900 dark:text-paper-100 mt-1">
                  2,900<span className="text-copper-600 dark:text-copper-400">+</span>
                </dd>
              </div>
              <div className="min-w-0">
                <dt className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-paper-600 dark:text-paper-400 truncate">
                  Projects
                </dt>
                <dd className="font-serif text-2xl sm:text-3xl text-paper-900 dark:text-paper-100 mt-1">
                  06
                </dd>
              </div>
              <div className="min-w-0">
                <dt className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-paper-600 dark:text-paper-400 truncate">
                  Awards
                </dt>
                <dd className="font-serif text-2xl sm:text-3xl text-paper-900 dark:text-paper-100 mt-1">
                  05
                </dd>
              </div>
            </dl>
          </div>

          {/* Right column — photo */}
          <div className="md:col-span-5 relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              {/* Copper frame accent */}
              <div className="absolute -top-3 -right-3 w-full h-full border border-copper-600 dark:border-copper-400" aria-hidden="true" />
              <div className="relative w-full h-full overflow-hidden bg-paper-200 dark:bg-paper-800">
                <Image
                  src="/photos/profile.jpg"
                  alt="Portrait of Kautsar Faradika Faisal"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              {/* Caption */}
              <div className="mt-3 flex items-baseline justify-between font-mono text-xs text-paper-600 dark:text-paper-400">
                <span>FIG. 01 / PORTRAIT</span>
                <span>DEPOK, ID · 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}

    </section>
  )
}
