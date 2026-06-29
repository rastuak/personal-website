'use client'

import { projects } from '@/data/projects'
import { ExternalLink } from 'lucide-react'

interface ProjectsSectionProps {
  onProjectSelect: (id: string) => void
}

const categoryMeta: Record<string, { label: string; className: string }> = {
  semiconductor: {
    label: 'Semiconductor',
    className: 'bg-amber-100 text-amber-900 dark:bg-amber-900/30 dark:text-amber-200',
  },
  web: {
    label: 'Web',
    className: 'bg-blue-100 text-blue-900 dark:bg-blue-900/30 dark:text-blue-200',
  },
  hardware: {
    label: 'Hardware',
    className: 'bg-orange-100 text-orange-900 dark:bg-orange-900/30 dark:text-orange-200',
  },
  iot: {
    label: 'IoT',
    className: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-200',
  },
  mobile: {
    label: 'Mobile',
    className: 'bg-violet-100 text-violet-900 dark:bg-violet-900/30 dark:text-violet-200',
  },
}

export default function ProjectsSection({ onProjectSelect }: ProjectsSectionProps) {
  const featured = projects.find((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="work" className="py-24 md:py-32 bg-paper-50 dark:bg-paper-900">
      <div className="max-w-wide mx-auto px-6 md:px-10">
        <div className="flex items-baseline gap-4 mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-copper-600">Selected work</span>
          <span className="font-serif italic text-4xl md:text-5xl text-paper-900 dark:text-paper-100">Projects</span>
          <span className="hidden sm:inline font-mono text-xs text-paper-500 dark:text-paper-500 ml-auto">
            {projects.length} total
          </span>
        </div>

        {/* Featured project — full case study card */}
        {featured && (
          <article
            className="group relative mb-12 md:mb-16 cursor-pointer"
            onClick={() => onProjectSelect(featured.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') onProjectSelect(featured.id)
            }}
            tabIndex={0}
            role="button"
            aria-label={`View case study: ${featured.title}`}
          >
            <div className="border border-paper-300 dark:border-paper-700 p-5 md:p-10 hover:bg-paper-100 dark:hover:bg-paper-800 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className={cx(categoryMeta[featured.category]?.className, 'font-mono text-xs px-2 py-1')}>
                  {categoryMeta[featured.category]?.label}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-copper-600 dark:text-copper-400">
                  Featured study
                </span>
              </div>

              <div className="grid md:grid-cols-5 gap-6 mt-4">
                <div className="md:col-span-3 space-y-4">
                  <h3 className="font-serif italic text-3xl md:text-4xl text-paper-900 dark:text-paper-100 group-hover:text-copper-600 dark:group-hover:text-copper-400 transition-colors">
                    {featured.title}
                  </h3>
                  <p className="prose-body">
                    {featured.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {featured.stack.slice(0, 4).map((tech) => (
                      <span key={tech} className="font-mono text-xs text-paper-600 dark:text-paper-400 px-2 py-0.5 border border-paper-300 dark:border-paper-700">
                        {tech}
                      </span>
                    ))}
                    {featured.stack.length > 4 && (
                      <span className="font-mono text-xs text-paper-500">
                        +{featured.stack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                <div className="md:col-span-2 md:border-l md:border-paper-300 dark:md:border-paper-700 md:pl-6 space-y-4 self-center">
                  {featured.metrics?.map((m) => (
                    <div key={m.label} className="text-right">
                      <dd className="font-serif text-3xl text-paper-900 dark:text-paper-100">
                        {m.value}
                      </dd>
                      <dt className="font-mono text-xs uppercase tracking-wider text-paper-600 dark:text-paper-400">
                        {m.label}
                      </dt>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 mt-6 font-mono text-sm text-copper-600 dark:text-copper-400">
                <span>View case study</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </article>
        )}

        {/* Other projects — compact grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-paper-300 dark:bg-paper-700 border-t border-paper-300 dark:border-paper-700">
          {others.map((project) => (
            <article
              key={project.id}
              className="group bg-paper-50 dark:bg-paper-900 p-5 md:p-6 cursor-pointer hover:bg-paper-100 dark:hover:bg-paper-800 transition-colors"
              onClick={() => onProjectSelect(project.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') onProjectSelect(project.id)
              }}
              tabIndex={0}
              role="button"
              aria-label={project.title}
            >
              <div className="space-y-3">
                <span className={cx(categoryMeta[project.category]?.className, 'inline-block font-mono text-xs px-2 py-0.5')}>
                  {categoryMeta[project.category]?.label}
                </span>
                <h3 className="font-serif italic text-xl text-paper-900 dark:text-paper-100 group-hover:text-copper-600 dark:group-hover:text-copper-400 transition-colors">
                  {project.title}
                </h3>
                <p className="font-mono text-xs text-paper-600 dark:text-paper-400">
                  {project.role} · {project.duration}
                </p>
                <p className="text-sm text-paper-700 dark:text-paper-300 line-clamp-3">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span key={tech} className="font-mono text-[10px] text-paper-500 dark:text-paper-400 px-1.5 py-0.5 border border-paper-200 dark:border-paper-700">
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="font-mono text-[10px] text-paper-400">
                      +{project.stack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function cx(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}
