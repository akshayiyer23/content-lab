'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const findings = [
  {
    icon: '⚡',
    accent: '#6c47ff',
    title: 'Open Loop Captions Drive 92x More Saves',
    stat: '16K vs 403K views — same creator, same angle',
    detail:
      'Ambiguous 3–5 word captions that create curiosity gaps outperform descriptive captions by 2,344% in views and 9,171% in saves. Same niche, same creator, only the caption changed.',
  },
  {
    icon: '#',
    accent: '#ff5c1a',
    title: 'Niche Hashtags = 101x More Saves',
    stat: '63 saves vs 6,045 avg saves per post',
    detail:
      'Drum-specific hashtags (#ghostnotes #snare #drumloop) reach highly engaged audiences that save at 101x higher rates than broad genre tags like #rnbmusic #viral #trapsoul.',
  },
  {
    icon: '🎵',
    accent: '#6c47ff',
    title: 'Original Sound Can Match Trending Sound',
    stat: '613K views · 0.75% follow rate — no trending audio',
    detail:
      '"step by step" used a self-recorded original sound and achieved the highest follow rate of all 6 posts at 0.75%. Quality content and open loop captions can compensate for non-trending audio.',
  },
  {
    icon: '🔖',
    accent: '#ff5c1a',
    title: 'Save Rate Predicts Growth Better Than Likes',
    stat: 'Every 1,000 saves = ~526 follows on average',
    detail:
      'Save rate is the single strongest predictor of algorithmic distribution and follower conversion across all 6 posts. Design content people want to return to, not just react to.',
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
              className="font-mono text-lg font-bold mb-4 leading-snug"
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
