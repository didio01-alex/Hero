import { Reveal } from './reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <span className="inline-block rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </Reveal>
  )
}
