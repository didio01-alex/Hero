'use client'

import Image from 'next/image'
import { ArrowRight, Mail, MapPin, Sparkles } from 'lucide-react'
import { PROFILE } from './data'
import { Reveal } from './reveal'
import MatrixBackground from './matrix-background'
import { useEffect, useRef, useState } from 'react'

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-[#0f172a] pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      {/* Matrix Background */}
      <MatrixBackground />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/35 -z-0" />

      {/* Existing light effects */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute top-36 -left-24 h-72 w-72 rounded-full bg-violet/15 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-cyan/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[auto_1fr] lg:gap-16">
        {/* Photo */}
        <Reveal className="order-1 mx-auto flex justify-center lg:order-none" delay={100}>
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-primary via-violet to-cyan opacity-70 blur-xl" />

            <div className="relative mx-auto h-[18.75rem] w-[18.75rem] overflow-hidden rounded-full border-4 border-card shadow-2xl shadow-primary/30 sm:h-[20rem] sm:w-[20rem]">
              <Image
                src="/profile.jpg"
                alt={`Photo de profil de ${PROFILE.name}`}
                fill
                priority
                sizes="(max-width:640px) 18rem,20rem"
                className="object-cover animate-profile"
              />
            </div>

            <span className="glass absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
              <span className="size-2 rounded-full bg-emerald-400" />
              Disponible
            </span>
          </div>
        </Reveal>

        {/* Texte */}
        <Reveal className="text-center lg:text-left" delay={200}>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3.5 py-1.5 text-sm font-medium text-slate-200 shadow-sm backdrop-blur">
            <Sparkles className="size-4 text-blue-400" />
            Profil hybride Droit & Technologie
          </span>

          <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient">
              Sarobidindrainy Didio Alex
            </span>

            <span className="block text-white">
              RAZAFIMAHATRATRA
            </span>
          </h1>

          <TerminalSubtitle />

          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate-300 lg:mx-0">
            À l'intersection du droit, de la politique et des technologies
            émergentes. Je combine expertise juridique et compétences
            techniques en Intelligence Artificielle et cybersécurité afin
            d'accompagner la transformation numérique.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#contact"
              className="button-smooth inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg sm:w-auto"
            >
              <Mail className="size-4" />
              Me contacter
            </a>

            <a
              href="#certifications"
              className="button-smooth group inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-600 bg-slate-900/60 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur sm:w-auto"
            >
              Voir mes certifications

              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 text-sm text-slate-300">
            <MapPin className="size-4 text-blue-400" />
            {PROFILE.location}
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function TerminalSubtitle() {
  const lines = [
    PROFILE.title,
    "Passionné par l'IA et la Cybersécurité",
  ]
  const [text, setText] = useState('')
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    let mounted = true
    const currentLine = lines[lineIndex % lines.length]

    if (charIndex <= currentLine.length && mounted) {
      const t = setTimeout(() => {
        setText(currentLine.slice(0, charIndex))
        setCharIndex((c) => c + 1)
      }, 45)
      return () => clearTimeout(t)
    }

    const pause = setTimeout(() => {
      setCharIndex(0)
      setLineIndex((i) => i + 1)
    }, 1400)

    return () => {
      clearTimeout(pause)
      mounted = false
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndex, lineIndex])

  return (
    <div className="mt-4">
      <div className="font-heading text-lg font-semibold text-slate-100 sm:text-xl">
        <span className="terminal-text">{text}</span>
        <span className="terminal-cursor inline-block ml-1 h-6 w-1 bg-slate-100 animate-blink" />
      </div>
    </div>
  )
}