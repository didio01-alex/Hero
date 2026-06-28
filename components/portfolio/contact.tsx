'use client'

import { useState, type FormEvent } from 'react'
import { CircleCheckBig, Mail, MapPin, Phone, Send } from 'lucide-react'
import { LinkedInIcon } from './linkedin-icon'
import { PROFILE } from './data'

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: 'Email',
    value: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: PROFILE.phone,
    href: `tel:${PROFILE.phoneHref}`,
  },
  {
    icon: MapPin,
    label: 'Adresse',
    value: PROFILE.address || PROFILE.location,
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    value: 'Voir mon profil',
    href: PROFILE.linkedin,
    external: true,
  },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const subject = String(data.get('subject') ?? '')
    const message = String(data.get('message') ?? '')

    const body = `Nom: ${name}\nEmail: ${email}\n\n${message}`
    const mailto = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      subject || 'Contact depuis le portfolio',
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailto
    setSent(true)
    form.reset()
  }

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
            Contact
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Travaillons ensemble
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Intéressé par mon profil ? N&apos;hésitez pas à me contacter pour toute opportunité de stage, projet ou collaboration.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nom" name="name" type="text" placeholder="Votre nom" />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="vous@exemple.com"
                />
              </div>
              <Field
                label="Sujet"
                name="subject"
                type="text"
                placeholder="Objet de votre message"
              />
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Décrivez votre projet ou votre opportunité..."
                  className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-3 focus:ring-primary/15"
                />
              </div>
              <button
                type="submit"
                className="button-smooth inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary/90"
              >
                <Send className="size-4" />
                Envoyer le message
              </button>
              {sent && (
                <p className="flex items-center justify-center gap-2 rounded-2xl bg-emerald/10 px-4 py-3 text-sm font-medium text-emerald">
                  <CircleCheckBig className="size-4" />
                  Merci ! Votre messagerie va s&apos;ouvrir pour finaliser l&apos;envoi.
                </p>
              )}
            </form>
          </div>

          <div className="flex flex-col justify-between gap-6">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Informations
              </h3>
              <ul className="mt-6 space-y-4">
                {CONTACT_ITEMS.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 rounded-2xl border border-border bg-background p-4 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-sm"
                      >
                        <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                          <item.icon className="size-5" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            {item.label}
                          </p>
                          <p className="truncate font-medium text-foreground">{item.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-2xl border border-border bg-background p-4">
                        <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                          <item.icon className="size-5" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            {item.label}
                          </p>
                          <p className="truncate font-medium text-foreground">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="button-smooth inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90"
              >
                <LinkedInIcon className="size-4" />
                LinkedIn
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="button-smooth inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              >
                <Mail className="size-4" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type,
  placeholder,
}: {
  label: string
  name: string
  type: string
  placeholder: string
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-3 focus:ring-primary/15"
      />
    </div>
  )
}
