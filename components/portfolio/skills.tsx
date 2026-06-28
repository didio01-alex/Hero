import { Check } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const SKILLS = [
  'Automatisation avec IA',
  'Création de Chatbots',
  'Veille technologique',
  'Recherche juridique',
  'Analyse de risques',
  'Synthèse et rédaction',
  'Suite Office',
  'Outils collaboratifs',
  'Travail en équipe',
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
          title="Mes compétences"
          description="Des compétences techniques, juridiques et organisationnelles au service de la transformation numérique."
        />

        <Reveal>
          <div className="mt-14 rounded-[32px] border border-border bg-card p-10 shadow-xl shadow-primary/5">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SKILLS.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 rounded-xl border border-border/50 bg-background/40 p-4 transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-5 w-5 text-primary" />
                  </div>

                  <span className="font-medium text-foreground">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}