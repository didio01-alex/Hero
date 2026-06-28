'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface ProgressBarProps {
  value: number
  label?: string
  sublabel?: string
  className?: string
}

export function ProgressBar({ value, label, sublabel, className }: ProgressBarProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={className}>
      {(label || sublabel) && (
        <div className="mb-1.5 flex items-center justify-between gap-2 text-sm">
          {label && <span className="font-medium text-foreground">{label}</span>}
          {sublabel && (
            <span className="text-xs text-muted-foreground">{sublabel}</span>
          )}
        </div>
      )}
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className={cn(
            'h-full rounded-full bg-gradient-to-r from-primary to-cyan transition-[width] duration-1000 ease-out',
          )}
          style={{ width: active ? `${value}%` : '0%' }}
        />
      </div>
    </div>
  )
}
