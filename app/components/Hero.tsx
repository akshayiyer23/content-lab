'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const tickerItems = [
  'HOOK TESTING',
  'SOUND STRATEGY',
  'HASHTAG ANALYSIS',
  'FORMAT EXPERIMENTS',
  'ENGAGEMENT OPTIMIZATION',
  'REACH ATTRIBUTION',
  'CONVERSION TRACKING',
  'HOOK TESTING',
  'SOUND STRATEGY',
  'HASHTAG ANALYSIS',
  'FORMAT EXPERIMENTS',
  'ENGAGEMENT OPTIMIZATION',
  'REACH ATTRIBUTION',
  'CONVERSION TRACKING',
]

const stats = [
  { value: '90K+', label: 'Total Audience' },
  { value: '2.1M+', label: 'Total Views (top 5 posts)' },
  { value: '4', label: 'Documented Experiments' },
  { value: '645K', label: 'Best Single Post Views' },
]

function CountUp({ target, suffix = '' }: { target: string; suffix?: string }) {
  const [display, setDisplay] = useState('0')
  const ref = useRef<HTMLDivElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          const numericPart = parseFloat(target.replace(/[^0-9.]/g, ''))
          const hasSuffix = target.replace(numericPart.toString(), '').trim()
          if (isNaN(numericPart)) {
            setDisplay(target)
            return
          }
          const duration = 1500
          const steps = 60
          let step = 0
          const timer = setInterval(() => {
            step++
            const progress = step / steps
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = Math.floor(eased * numericPart)
            setDisplay(current.toLocaleString() + hasSuffix)
            if (step >= steps) {
              clearInterval(timer)
              setDisplay(target)
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <div ref={ref}>{display}</div>
}

const letterVariants = {
  hidden: { y: 80, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.06, duration: 0.6, ease: 'easeOut' as const },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen grid-bg flex flex-col justify-center overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(108,71,255,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-purple/40 rounded-full px-4 py-1.5 mb-10 font-mono text-xs text-purple"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
          90K+ audience · Instagram &amp; TikTok · Updated weekly
        </motion.div>

        {/* Hero text */}
        <div className="overflow-hidden mb-2">
          <div className="flex">
            {'CONTENT'.split('').map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="font-poppins text-[clamp(5rem,15vw,14rem)] font-black leading-none tracking-tighter text-cream"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900 }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>
        <div className="overflow-hidden mb-8">
          <div className="flex">
            {'LAB'.split('').map((char, i) => (
              <motion.span
                key={i}
                custom={i + 8}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="font-poppins text-[clamp(5rem,15vw,14rem)] font-black leading-none tracking-tighter gradient-text"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900 }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-muted font-mono text-lg mb-16 max-w-xl"
        >
          Real experiments. Real audience. Real data.
        </motion.p>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1, duration: 0.5, ease: 'easeOut' }}
              className="card-border rounded-2xl p-6 transition-all duration-300"
            >
              <div
                className="font-poppins text-3xl font-black text-cream mb-1"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <CountUp target={stat.value} />
              </div>
              <div className="font-mono text-xs text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="border-t border-b border-purple/20 py-3 overflow-hidden bg-purple/5">
        <div className="marquee-track">
          {tickerItems.map((item, i) => (
            <span key={i} className="font-mono text-xs text-purple px-8 whitespace-nowrap">
              {item}
              <span className="mx-6 text-orange opacity-60">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
