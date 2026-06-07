import { education, awards, scholarship } from '@/data/education'

export default function EducationSection() {
  return (
    <section id="education" className="py-24 md:py-32 bg-paper-50 dark:bg-paper-900">
      <div className="max-w-wide mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Left — Education */}
          <div className="md:col-span-7">
        <div className="flex items-baseline gap-4 mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-copper-600">01</span>
          <span className="font-serif italic text-4xl md:text-5xl text-paper-900 dark:text-paper-100">Education</span>
        </div>

            <div className="space-y-10">
              {education.map((edu) => (
                <div key={edu.id} className="border-l-2 border-paper-300 dark:border-paper-700 pl-5">
                  <h3 className="font-serif italic text-2xl text-paper-900 dark:text-paper-100">
                    {edu.institution}
                  </h3>
                  <p className="font-mono text-sm text-paper-700 dark:text-paper-300 mt-1">
                    {edu.degree}
                  </p>
                  <p className="font-mono text-xs text-paper-600 dark:text-paper-400 mt-1">
                    {edu.start} — {edu.end ?? 'Present'} · {edu.location}
                  </p>

                  {edu.details && edu.details.length > 0 && (
                    <ul className="mt-3 space-y-1">
                      {edu.details.map((d, i) => (
                        <li key={i} className="text-sm text-paper-700 dark:text-paper-300 flex items-start gap-2">
                          <span className="text-copper-600 dark:text-copper-400">→</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}

                  {edu.coursework && edu.coursework.length > 0 && (
                    <div className="mt-4">
                      <p className="font-mono text-xs uppercase tracking-wider text-paper-600 dark:text-paper-400 mb-2">
                        Relevant coursework
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.coursework.map((c) => (
                          <span
                            key={c}
                            className="font-mono text-[11px] text-paper-700 dark:text-paper-300 px-2 py-0.5 bg-paper-100 dark:bg-paper-800 border border-paper-200 dark:border-paper-700"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.activities && edu.activities.length > 0 && (
                    <div className="mt-3 text-sm text-paper-600 dark:text-paper-400">
                      <span className="font-mono text-xs uppercase tracking-wider">Activities:</span>
                      <ul className="mt-1 space-y-0.5">
                        {edu.activities.map((a, i) => (
                          <li key={i} className="text-sm text-paper-700 dark:text-paper-300 flex items-start gap-2">
                            <span className="text-copper-600 dark:text-copper-400">→</span>
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Awards + Scholarship */}
          <div className="md:col-span-4 md:col-start-9 md:border-l md:border-paper-300 dark:md:border-paper-700 md:pl-8">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-copper-600 dark:text-copper-400 mb-6">
                Awards & Recognition
              </h3>
              <div className="space-y-6">
                {awards.map((a, i) => (
                  <div key={i}>
                    <p className="font-serif italic text-lg text-paper-900 dark:text-paper-100">
                      {a.title}
                    </p>
                    <p className="font-mono text-xs text-paper-600 dark:text-paper-400 mt-0.5">
                      {a.event} · {a.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-paper-300 dark:border-paper-700">
              <h3 className="font-mono text-xs uppercase tracking-widest text-copper-600 dark:text-copper-400 mb-4">
                Scholarship
              </h3>
              <div>
                <p className="font-serif italic text-lg text-paper-900 dark:text-paper-100">
                  {scholarship.name}
                </p>
                <p className="font-mono text-xs text-paper-600 dark:text-paper-400 mt-0.5">
                  {scholarship.type} · {scholarship.issuer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
