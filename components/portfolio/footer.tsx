import { Mail } from 'lucide-react'
import { LinkedInIcon } from './linkedin-icon'
import { NAV_LINKS, PROFILE } from './data'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          {/* Logo */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center gap-2.5 md:justify-start">
              <span className="grid size-9 place-items-center rounded-2xl bg-gradient-to-br from-primary to-violet text-primary-foreground shadow-lg shadow-primary/10">
                <i className="fa-solid fa-user-shield" aria-hidden="true" />
              </span>

              <span className="font-heading text-base font-semibold text-foreground">
                Didio
              </span>
            </div>

            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Droit • Intelligence Artificielle • Cybersécurité
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Liens rapides">
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Réseaux */}
          <div className="flex items-center gap-3">
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid size-10 place-items-center rounded-xl border border-border bg-background text-foreground transition-colors hover:border-primary/40 hover:bg-primary hover:text-primary-foreground"
            >
              <LinkedInIcon className="size-4" />
            </a>

            <a
              href={`mailto:${PROFILE.email}`}
              aria-label="Email"
              className="grid size-10 place-items-center rounded-xl border border-border bg-background text-foreground transition-colors hover:border-primary/40 hover:bg-primary hover:text-primary-foreground"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Sarobidindrainy Didio Alex RAZAFIMAHATRATRA. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}