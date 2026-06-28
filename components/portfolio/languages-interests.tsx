import { ProgressBar } from './progress-bar'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const LANGUAGES = [
  { name: 'Malgache', level: '5/5', value: 100 },
  { name: 'Français', level: '4/5', value: 85 },
  { name: 'Anglais', level: '4/5', value: 75 },
]

export function LanguagesInterests() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            eyebrow="Communication"
            title="Langues"
            description="Compétences linguistiques adaptées aux contextes académiques, professionnels et internationaux."
          />
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {LANGUAGES.map((lang, i) => (
            <Reveal key={lang.name} delay={i * 100}>
              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-lg font-semibold text-foreground">{lang.name}</span>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-secondary-foreground">
                    {lang.level}
                  </span>
                </div>
                <ProgressBar className="mt-6" value={lang.value} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
