import { skillGroups } from '@/data/skills'

const levelMeta = {
  expert: {
    label: 'Expert',
    className: 'bg-paper-900 text-paper-50 dark:bg-paper-50 dark:text-paper-900',
  },
  proficient: {
    label: 'Proficient',
    className: 'bg-paper-200 text-paper-800 dark:bg-paper-800 dark:text-paper-200',
  },
  familiar: {
    label: 'Familiar',
    className: 'bg-paper-100 text-paper-600 dark:bg-paper-800 dark:text-paper-400',
  },
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 paper-texture">
      <div className="max-w-wide mx-auto px-6 md:px-10">
        <div className="flex items-baseline gap-4 mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-copper-600">Capabilities</span>
          <span className="font-serif italic text-4xl md:text-5xl text-paper-900 dark:text-paper-100">Skills</span>
        </div>

        <div className="space-y-8">
          {skillGroups.map((group) => (
            <div key={group.category} className="border-b border-paper-200 dark:border-paper-800 pb-6 last:border-b-0 last:pb-0">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-mono text-sm uppercase tracking-wider text-paper-900 dark:text-paper-100">
                  {group.category}
                </h3>
                <span className={cx('font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5', levelMeta[group.level]?.className)}>
                  {levelMeta[group.level]?.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-sm text-paper-700 dark:text-paper-300 px-3 py-1 border border-paper-300 dark:border-paper-700 hover:border-copper-600 dark:hover:border-copper-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function cx(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ')
}
