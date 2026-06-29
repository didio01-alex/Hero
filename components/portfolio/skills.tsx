import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const CATEGORIES = [
  {
    icon: 'fa-solid fa-microchip',
    title: 'IA & Technologies',
    items: [
      'Automatisation avec IA',
      'Création de Chatbots',
      'Veille technologique',
    ],
  },
  {
    icon: 'fa-solid fa-balance-scale',
    title: 'Juridique & Analyse',
    items: [
      'Recherche juridique',
      'Analyse de risques',
      'Synthèse et rédaction',
    ],
  },
  {
    icon: 'fa-solid fa-tools',
    title: 'Outils & Méthodes',
    items: ['Suite Office', 'Outils collaboratifs', 'Travail en équipe'],
  },
]

export function Skills() {
  return (
    <section
      id="competences"
      className="scroll-mt-24 bg-secondary/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Compétences"
          title="Mes points forts"
          description="Un équilibre entre compétences techniques, analyse juridique et rigueur méthodologique."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 120}>
              <div className="group rounded-[28px] border border-border bg-card p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                    <i className={`${cat.icon} text-xl`} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{cat.title}</h3>
                </div>

                <ul className="mt-6 space-y-3 pl-2">
                  {cat.items.map((it) => (
                    <li key={it} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <i className="fa-solid fa-check" aria-hidden="true" />
                      </span>
                      <span className="text-sm text-foreground">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}