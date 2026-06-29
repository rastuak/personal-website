import { skillGroups, softSkills } from '@/data/skills'

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 paper-texture">
      <div className="max-w-wide mx-auto px-6 md:px-10">
        <div className="flex items-baseline gap-4 mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-copper-600">Capabilities</span>
          <span className="font-serif italic text-4xl md:text-5xl text-paper-900 dark:text-paper-100">Skills</span>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-xs uppercase tracking-wider text-paper-900 dark:text-paper-100 mb-3 pb-2 border-b border-paper-200 dark:border-paper-800">
                {group.category}
              </h3>
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

        <div className="mt-12 pt-8 border-t border-paper-300 dark:border-paper-700">
          <h3 className="font-mono text-xs uppercase tracking-wider text-paper-600 dark:text-paper-400 mb-4">
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="font-mono text-sm text-paper-600 dark:text-paper-400 px-3 py-1 bg-paper-100 dark:bg-paper-800 border border-paper-200 dark:border-paper-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
