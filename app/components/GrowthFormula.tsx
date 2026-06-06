'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    num: '01',
    label: 'Trending Sound',
    detail: 'Algorithmic push to new feeds',
    metric: '90%+ non-follower',
    color: '#6c47ff',
  },
  {
    num: '02',
    label: '3-Word Caption',
    detail: 'Zero cognitive friction',
    metric: '40x reach lift',
    color: '#8b5cf6',
  },
  {
    num: '03',
    label: 'Niche Hashtags',
    detail: 'Right audience, high intent',
    metric: '16%+ engagement',
    color: '#a855f7',
  },
  {
    num: '04',
    label: 'Save-worthy Content',
    detail: 'Strongest algorithmic signal',
    metric: '14,474 saves',
    color: '#ff5c1a',
  },
  {
    num: '05',
    label: 'Result',
    detail: '90%+ non-follower reach',
    metric: '925K views',
    color: '#ff5c1a',
    isResult: true,
  },
]

export default function GrowthFormula() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16"
        ref={ref}
      >
        <div className="font-mono text-xs text-purple mb-3 tracking-widest">§ 05 — THE GROWTH FORMULA</div>
        <h2
          className="font-poppins text-5xl md:text-6xl font-black text-cream"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          What the data proved
        </h2>
      </motion.div>

      {/* Desktop horizontal flow */}
      <div className="hidden md:flex items-stretch gap-0">
        {steps.map((step, i) => (
          <div key={step.num} className="flex items-stretch flex-1">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6, ease: 'easeOut' }}
              className={`flex-1 rounded-2xl p-6 relative overflow-hidden transition-all duration-300 ${
                step.isResult
                  ? 'border-2 border-orange/60 bg-orange/10'
                  : 'card-border hover:border-purple/50'
              }`}
            >
              {/* Step number */}
              <div
                className="font-mono text-xs mb-4 font-bold"
                style={{ color: step.color }}
              >
                STEP {step.num}
              </div>

              {/* Label */}
              <div
                className="font-poppins text-base font-black mb-2 leading-tight"
                style={{ fontFamily: "'Poppins', sans-serif", color: step.isResult ? '#ff5c1a' : '#f0ede8' }}
              >
                {step.label}
              </div>

              {/* Detail */}
              <div className="font-mono text-xs text-muted mb-4">{step.detail}</div>

              {/* Metric callout */}
              <div
                className="font-mono text-xs px-2 py-1 rounded-lg inline-block font-bold"
                style={{
                  color: step.color,
                  background: `${step.color}18`,
                  border: `1px solid ${step.color}40`,
                }}
              >
                {step.metric}
              </div>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5"
                style={{ background: step.color }}
              />
            </motion.div>

            {/* Arrow connector */}
            {i < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.4 }}
                className="flex items-center px-2 text-purple text-xl flex-shrink-0"
              >
                →
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile vertical flow */}
      <div className="flex md:hidden flex-col gap-3">
        {steps.map((step, i) => (
          <div key={step.num}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.5 }}
              className={`rounded-2xl p-5 flex items-center gap-4 ${
                step.isResult
                  ? 'border-2 border-orange/60 bg-orange/10'
                  : 'card-border'
              }`}
            >
              <div
                className="font-mono text-xs font-bold w-10 flex-shrink-0"
                style={{ color: step.color }}
              >
                {step.num}
              </div>
              <div className="flex-1">
                <div
                  className="font-poppins text-sm font-black mb-0.5"
                  style={{ fontFamily: "'Poppins', sans-serif", color: step.isResult ? '#ff5c1a' : '#f0ede8' }}
                >
                  {step.label}
                </div>
                <div className="font-mono text-xs text-muted">{step.detail}</div>
              </div>
              <div
                className="font-mono text-xs px-2 py-1 rounded-lg font-bold text-right flex-shrink-0"
                style={{ color: step.color, background: `${step.color}18`, border: `1px solid ${step.color}30` }}
              >
                {step.metric}
              </div>
            </motion.div>
            {i < steps.length - 1 && (
              <div className="flex justify-center py-1 text-purple text-lg">↓</div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
