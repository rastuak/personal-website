import { experiences } from '@/data/experience'

export default function ExperienceSection() {
  const sorted = [...experiences].sort((a, b) => {
    if (a.start > b.start) return -1
    if (a.start < b.start) return 1
    return 0
  })

  return (
    <section id="experience" className="py-24 md:py-32 paper-texture">
      <div className="max-w-wide mx-auto px-6 md:px-10">
        <div className="flex items-baseline gap-4 mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-copper-600">02</span>
          <span className="font-serif italic text-4xl md:text-5xl text-paper-900 dark:text-paper-100">Experience</span>
          <span className="hidden sm:inline font-mono text-xs text-paper-500 dark:text-paper-500 ml-auto">
            {sorted.length} entries
          </span>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-paper-300 dark:bg-paper-700" aria-hidden="true" />

          <div className="space-y-12 ml-0 md:ml-16">
            {sorted.map((exp) => (
              <article key={exp.id} className="relative pl-8 md:pl-0">
                {/* Timeline dot */}
                <div className="absolute left-[-2.25rem] md:left-[-4.125rem] top-1.5 w-4 h-4 rounded-full bg-paper-50 dark:bg-paper-900 border-2 border-paper-400 dark:border-paper-600 z-10" aria-hidden="true" />

                <div className="grid md:grid-cols-12 gap-4 md:gap-8">
                  {/* Left — date + type */}
                  <div className="md:col-span-3 pt-0.5">
                    <div className="font-mono text-xs uppercase tracking-wider text-paper-600 dark:text-paper-400">
                      {formatDate(exp.start)} — {exp.end ? formatDate(exp.end) : 'Present'}
                    </div>
                    <div className="font-mono text-xs text-copper-600 dark:text-copper-400 uppercase tracking-wider mt-1">
                      {exp.type}
                    </div>
                  </div>

                  {/* Right — content */}
                  <div className="md:col-span-9">
                    <h3 className="font-serif italic text-2xl text-paper-900 dark:text-paper-100">
                      {exp.role}
                    </h3>
                    <p className="font-mono text-sm text-paper-700 dark:text-paper-300 mt-1">
                      {exp.organization}
                    </p>
                    {exp.context && (
                      <p className="text-sm text-paper-600 dark:text-paper-400 mt-3 leading-relaxed">
                        {exp.context}
                      </p>
                    )}
                    <ul className="mt-3 space-y-1.5">
                      {exp.responsibilities.map((r, i) => (
                        <li key={i} className="text-sm text-paper-700 dark:text-paper-300 flex items-start gap-2">
                          <span className="text-copper-600 dark:text-copper-400 mt-1 flex-shrink-0">→</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                    {exp.outcome && (
                      <p className="mt-3 text-sm text-paper-600 dark:text-paper-400 italic">
                        {exp.outcome}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function formatDate(ym: string): string {
  const [y, m] = ym.split('-')
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ]
  const monthName = months[parseInt(m, 10) - 1]
  return `${monthName} ${y}`
}
