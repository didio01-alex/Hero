'use client'

import { useEffect, useRef } from 'react'

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight
    }

    resize()

    const chars =
      'アイウエオカキクケコサシスセソABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*'

    const fontSize = 16
    let columns = Math.floor(canvas.width / fontSize)
    let drops = Array(columns).fill(1)

    const draw = () => {
      // Effet de traînée
      ctx.fillStyle = 'rgba(15,23,42,0.08)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]

        // Bleu / Violet aléatoire
        ctx.fillStyle = Math.random() > 0.5 ? '#2563eb' : '#7c3aed'

        ctx.fillText(char, i * fontSize, drops[i] * fontSize)

        if (
          drops[i] * fontSize > canvas.height &&
          Math.random() > 0.975
        ) {
          drops[i] = 0
        }

        drops[i]++
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      resize()
      columns = Math.floor(canvas.width / fontSize)
      drops = Array(columns).fill(1)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 h-full w-full"
    />
  )
}