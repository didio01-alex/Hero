'use client'

import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_LINKS, PROFILE } from './data'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-3xl px-4 py-3 transition-all duration-300 sm:px-6',
          scrolled
            ? 'glass shadow-xl shadow-primary/10 backdrop-blur-xl'
            : 'bg-transparent',
        )}
      >
        <a href="#accueil" className="flex items-center gap-3" aria-label="Accueil">
          <span className="grid place-items-center rounded-2xl bg-primary/10 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/15">
            <i className="fa-solid fa-user-shield fa-icon-gradient" aria-hidden="true" />
          </span>
          <span className="hidden text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:inline">
            Didio
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-secondary/80 hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={PROFILE.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-primary to-violet px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-xl sm:inline-flex"
          >
            <Download className="size-4" />
            Voir CV
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-xl border border-border bg-card text-foreground lg:hidden"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl px-4 lg:hidden sm:px-6">
          <div className="glass flex flex-col gap-2 rounded-3xl p-3 shadow-xl">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:bg-secondary/80 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={PROFILE.cv}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-primary/90 hover:shadow-xl"
            >
              <Download className="size-4" />
              Voir CV
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
