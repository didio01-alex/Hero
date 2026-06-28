import { Award, Bot, ShieldCheck, type LucideIcon } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

interface Certification {
  icon: LucideIcon
  title: string
  date: string
  highlights: string[]
  tags: string[]
}

const CERTS: Certification[] = [
  {
    icon: Bot,
    title: 'Automatisation avec IA',
    date: 'Juin 2026',
    highlights: [
      'Conception et optimisation de solutions d’automatisation basées sur l’IA',
      'Création et déploiement de chatbots intelligents',
      'Utilisation avancée d’outils de génération de contenu',
      'Développement de workflows automatisés',
    ],
    tags: ['IA', 'Automatisation', 'Chatbots', 'Workflows'],
  },
  {
    icon: ShieldCheck,
    title: 'Cybersécurité Avancée',
    date: 'Avril 2026',
    highlights: [
      'Gestion des risques et analyse des menaces',
      'Techniques de protection des systèmes informatiques',
      'Analyse des vulnérabilités et audit de sécurité',
      'Compréhension des enjeux de sécurité de l’information',
    ],
    tags: ['Cybersécurité', 'Risk Management', 'Audit'],
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Certifications"
          title="Certifications techniques"
          description="Deux parcours certifiés qui renforcent ma double expertise juridique et technologique."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {CERTS.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 120}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100" />

                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-primary to-violet text-primary-foreground shadow-lg shadow-primary/20">
                    <cert.icon className="size-7" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald/15 px-3 py-1.5 text-xs font-semibold text-emerald">
                    <Award className="size-3.5" />
                    Certifié
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-xl font-bold leading-snug text-foreground text-balance">
                  {cert.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-primary">{cert.date}</p>

                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {cert.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {cert.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  Me contacter
                  <span aria-hidden="true">→</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
