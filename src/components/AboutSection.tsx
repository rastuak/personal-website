import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 paper-texture">
      <div className="max-w-wide mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Left — photo + context */}
          <div className="md:col-span-5">
            <div className="sticky top-24">
              <div className="relative aspect-square max-w-sm">
                <div className="absolute -bottom-3 -left-3 w-full h-full border border-paper-400 dark:border-paper-600" aria-hidden="true" />
                <div className="relative w-full h-full overflow-hidden bg-paper-200 dark:bg-paper-800">
                  <Image
                    src="/photos/profile.jpg"
                    alt="Kautsar working in the IC Design Lab"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
                <div className="mt-3 font-mono text-xs text-paper-600 dark:text-paper-400 flex justify-between">
                  <span>FIG. 02 / AT WORK</span>
                  <span>IC DESIGN LAB · 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div className="md:col-span-7 space-y-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-copper-600 mb-3">About</p>
              <h2 className="font-serif italic text-4xl md:text-5xl text-paper-900 dark:text-paper-100 leading-tight">
                The engineer who builds at the bottom and top of the stack.
              </h2>
            </div>

            <div className="space-y-4 text-paper-700 dark:text-paper-300 leading-relaxed text-lg max-w-reading">
              <p>
                I am an Electrical Engineering student at Universitas Indonesia
                who found that I cannot stay in one layer of abstraction.
                Transistor-level characterization, full-stack shipping, autonomous
                drone firmware — they all scratch the same itch for me: figure
                out how something works, then make it do what I want.
              </p>
              <p>
                Right now I am generating KLayout cells at the IC Design Lab for
                an upcoming IHP 130nm tape-out. At the same time I am tech-leading
                full-stack products at EXERCISE FTUI and running the programming
                division of AUAV UI&apos;s Fixed Wing drone team.
              </p>
              <p>
                What connects these contexts is the same discipline: measure first,
                build second, validate third. The stack changes but the loop does
                not.
              </p>
            </div>

            {/* Proof points — NOT a 4-card grid */}
            <div className="space-y-6 border-l-2 border-paper-300 dark:border-paper-700 pl-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-copper-600 dark:text-copper-400 mb-1">
                  Scale
                </p>
                <p className="font-serif text-xl text-paper-900 dark:text-paper-100">
                  Designed a voting system that handled 2,900+ users with 90% turnout —
                  the highest in FTUI Pemira history.
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-copper-600 dark:text-copper-400 mb-1">
                  Depth
                </p>
                <p className="font-serif text-xl text-paper-900 dark:text-paper-100">
                  Characterized NMOS/PMOS amplifiers at 130nm. DRC-clean layout on first
                  pass for an IHP 130nm tape-out cell.
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-copper-600 dark:text-copper-400 mb-1">
                  Breadth
                </p>
                <p className="font-serif text-xl text-paper-900 dark:text-paper-100">
                  National-level competition finalist in both software (Technoskill)
                  and hardware (KRTI Autonomous Drones).
                </p>
              </div>
            </div>

            <div className="font-mono text-sm text-paper-600 dark:text-paper-400 mt-8">
              <span className="uppercase tracking-wider">Seeking:</span>{' '}
              IC design, semiconductor, and full-stack engineering internships —
              Summer 2026, Jakarta or remote.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
