'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const row1 = [
  { value: '645,492', label: 'Best post views ("had to do it again")', accent: '#6c47ff' },
  { value: '29,573', label: 'Total saves across top 5 posts', accent: '#ff5c1a' },
  { value: '4,630', label: 'Highest follows (single post)', accent: '#6c47ff' },
  { value: '0.75%', label: 'Highest follow rate (original sound)', accent: '#ff5c1a' },
]

const row2 = [
  { value: '475K', label: 'Avg views (top 5 posts)', accent: '#6c47ff' },
  { value: '2,936', label: 'Avg follows per viral post', accent: '#ff5c1a' },
  { value: '101x', label: 'More saves: niche vs broad hashtags', accent: '#6c47ff' },
  { value: '2,344%', label: 'View lift: open loop vs descriptive caption', accent: '#ff5c1a' },
]

function StatCard({
  value,
  label,
  accent,
  delay,
}: {
  value: string
  label: string
  accent: string
  delay: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [display, setDisplay] = useState('0')
  const animated = useRef(false)

  useEffect(() => {
    if (isInView && !animated.current) {
      animated.current = true
      const numStr = value.replace(/[^0-9.]/g, '')
      const num = parseFloat(numStr)
      if (isNaN(num) || numStr === '') {
        setDisplay(value)
        return
      }
      const suffix = value.replace(numStr, '')
      const duration = 1800
      const steps = 60
      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps
        const eased = 1 - Math.pow(1 - progress, 3)
        const curr = Math.floor(eased * num)
        setDisplay(curr.toLocaleString() + suffix)
        if (step >= steps) {
          clearInterval(timer)
          setDisplay(value)
        }
      }, duration / steps)
    }
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5, ease: 'easeOut' }}
      className="card-border rounded-2xl p-6 group transition-all duration-300 relative overflow-hidden"
    >
      <div
        className="font-poppins text-3xl md:text-4xl font-black mb-2"
        style={{ fontFamily: "'Poppins', sans-serif", color: accent }}
      >
        {display}
      </div>
      <div className="font-mono text-xs text-muted">{label}</div>
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: accent }}
      />
    </motion.div>
  )
}

export default function PerformanceDashboard() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 bg-white/2 border-y border-purple/10">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="font-mono text-xs text-purple mb-3 tracking-widest">§ 04 — PERFORMANCE DASHBOARD</div>
            <h2
              className="font-poppins text-5xl md:text-6xl font-black text-cream"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Real numbers
            </h2>
          </motion.div>
        </div>

        <div className="space-y-4">
          <div className="font-mono text-xs text-muted tracking-widest mb-2">TOP POST STATS</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {row1.map((s, i) => (
              <StatCard key={s.label} {...s} delay={i * 0.08} />
            ))}
          </div>

          <div className="font-mono text-xs text-muted tracking-widest mb-2 mt-6">ACCOUNT AVERAGES</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {row2.map((s, i) => (
              <StatCard key={s.label} {...s} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
