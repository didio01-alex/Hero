import { GraduationCap } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const TIMELINE = [
  {
    title: 'Licence 1 Droit et Science Politique',
    org: 'Université Aceem Manakambahiny, Antananarivo',
    period: 'oct. 2025 - aujourd’hui',
    badge: 'En cours',
    badgeTone: 'active' as const,
    highlight: 'En cours',
  },
  {
    title: 'Baccalauréat Série Scientifique — Option D',
    org: 'Saint Vincent de Paul, Andohanilakaka',
    period: 'sept. 2024 - juil. 2025',
    badge: 'Obtenu',
    badgeTone: 'done' as const,
    highlight: 'Mention Assez-bien',
  },
]

export function Education() {
  return (
    <section id="formation" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Parcours" title="Parcours Académique" />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <span
            className="absolute left-5 top-2 bottom-2 w-px bg-border sm:left-1/2"
            aria-hidden="true"
          />
          <div className="space-y-8">
            {TIMELINE.map((item, i) => (
              <Reveal key={item.title} delay={i * 120}>
                <div
                  className={`relative pl-14 sm:w-1/2 sm:pl-0 ${
                    i % 2 === 0
                      ? 'sm:pr-12 sm:text-right'
                      : 'sm:ml-auto sm:pl-12'
                  }`}
                >
                  <span
                    className={`absolute top-1 grid size-10 place-items-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-md left-0 ${
                      i % 2 === 0
                        ? 'sm:left-auto sm:-right-5'
                        : 'sm:-left-5'
                    }`}
                  >
                    <GraduationCap className="size-5" />
                  </span>
                  <div className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-md">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                        item.badgeTone === 'active'
                          ? 'bg-emerald/15 text-emerald'
                          : 'bg-secondary text-secondary-foreground'
                      }`}
                    >
                      {item.badge}
                    </span>
                    <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.org}</p>
                    <p className="mt-3 font-mono text-xs text-primary">{item.period}</p>
                    <p className="mt-4 rounded-2xl bg-secondary px-3 py-2 text-sm font-medium text-secondary-foreground">
                      {item.highlight}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
