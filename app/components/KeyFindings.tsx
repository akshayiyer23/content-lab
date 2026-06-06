'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const findings = [
  {
    icon: '⚡',
    accent: '#6c47ff',
    title: '3-Word Captions = 40x More Reach',
    stat: '645K vs 16K views',
    detail:
      'Minimal captions with trending sounds consistently outperform descriptive captions by 40x on average.',
  },
  {
    icon: '🔊',
    accent: '#ff5c1a',
    title: 'Trending Sounds Drive 90%+ Non-Follower Reach',
    stat: '90.9% non-follower views',
    detail:
      'Posts using trending audio reach new audiences at 90%+ rate vs algorithm-dependent distribution.',
  },
  {
    icon: '#',
    accent: '#6c47ff',
    title: 'Niche Hashtags Outperform Broad Tags',
    stat: '8.9% follower ratio on best posts',
    detail:
      'Drum-specific hashtags (#ghostnotes, #snare, #drumloop) drive higher saves and shares than broad music tags.',
  },
  {
    icon: '🔖',
    accent: '#ff5c1a',
    title: 'Saves Predict Algorithmic Boost',
    stat: '14,474 saves on top post',
    detail:
      'Posts with high save rates get pushed to non-followers at 2-3x the rate of like-heavy posts.',
  },
]

export default function KeyFindings() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="font-mono text-xs text-purple mb-3 tracking-widest">§ 02 — KEY FINDINGS</div>
        <h2
          className="font-poppins text-5xl md:text-6xl font-black text-cream"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          What the data proved
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {findings.map((finding, i) => (
          <motion.div
            key={finding.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.12, duration: 0.6, ease: 'easeOut' }}
            className="card-border rounded-2xl p-8 group cursor-default transition-all duration-300 relative overflow-hidden"
          >
            {/* Accent line */}
            <div
              className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
              style={{ background: finding.accent }}
            />

            <div className="text-3xl mb-4">{finding.icon}</div>

            <h3
              className="font-poppins text-xl font-black text-cream mb-3 leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {finding.title}
            </h3>

            <div
              className="font-mono text-2xl font-bold mb-4"
              style={{ color: finding.accent }}
            >
              {finding.stat}
            </div>

            <p className="font-mono text-sm text-muted leading-relaxed">{finding.detail}</p>

            {/* Hover glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
              style={{
                background: `radial-gradient(ellipse at top left, ${finding.accent}10 0%, transparent 60%)`,
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
