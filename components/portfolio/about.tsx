'use client'

import { useEffect, useRef, useState } from 'react'
import { Activity, GraduationCap, Languages, Bot, ShieldCheck } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const STATS = [
  {
    icon: GraduationCap,
    target: 1,
    suffix: '+',
    label: 'Année d’études',
  },
  {
    icon: ShieldCheck,
    target: 2,
    suffix: '',
    label: 'Certifications',
  },
  {
    icon: Languages,
    target: 3,
    suffix: '',
    label: 'Langues',
  },
]

const INTERESTS = [
  {
    icon: Bot,
    title: 'IA et cybersécurité',
    description: 'Veille technologique et défis juridiques du numérique',
  },
  {
    icon: Activity,
    title: 'Kick Boxing',
    description: 'Discipline, persévérance et esprit de compétition',
  },
]

function AnimatedStat({ icon: Icon, target, suffix, label, delay }: {
  icon: typeof GraduationCap
  target: number
  suffix: string
  label: string
  delay: number
}) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        let current = 0
        const step = Math.max(1, Math.ceil(target / 20))
        const interval = window.setInterval(() => {
          current += step
          if (current >= target) {
            setValue(target)
            window.clearInterval(interval)
          } else {
            setValue(current)
          }
        }, 35)
        observer.disconnect()
      },
      { threshold: 0.5 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [target])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
    >
      <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon className="size-5" />
      </span>
      <p className="mt-3 font-heading text-3xl font-semibold text-foreground">
        {value}
        {suffix}
      </p>
      <p className="mt-1 text-sm leading-snug text-muted-foreground">{label}</p>
    </div>
  )
}

export function About() {
  return (
    <section id="a-propos" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-[1.25fr_0.85fr] lg:gap-20">
          <div className="space-y-10">
            <SectionHeading
              eyebrow="À propos"
              title="Un profil juridique et technologique"
              description="Actuellement en Licence de Droit et Science Politique, passionné par l'IA et la cybersécurité. Intéressé par les enjeux juridiques du numérique et la transformation digitale."
            />

            <div className="grid gap-4 sm:grid-cols-3">
              {STATS.map((stat, index) => (
                <AnimatedStat
                  key={stat.label}
                  icon={stat.icon}
                  target={stat.target}
                  suffix={stat.suffix}
                  label={stat.label}
                  delay={index * 120}
                />
              ))}
            </div>
          </div>

          <Reveal className="rounded-[28px] border border-border bg-card p-6 shadow-xl shadow-primary/10">
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-secondary-foreground">
                  Centres d'intérêt
                </span>
                <h3 className="font-heading text-3xl font-semibold tracking-tight text-foreground">
                  Ce qui m'inspire au-delà du droit
                </h3>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Innovation technologique, enjeux juridiques du numérique et pratique sportive sont au cœur de mon approche personnelle et professionnelle.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {INTERESTS.map((interest) => (
                  <div
                    key={interest.title}
                    className="group flex flex-col gap-4 rounded-3xl border border-border bg-background/90 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
                  >
                    <span className="grid size-12 place-items-center rounded-3xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <interest.icon className="size-6" />
                    </span>
                    <div>
                      <h4 className="font-heading text-lg font-semibold text-foreground">
                        {interest.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {interest.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
