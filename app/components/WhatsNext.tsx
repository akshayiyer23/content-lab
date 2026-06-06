'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { plannedExperiments } from '../data/experiments'

export default function WhatsNext() {
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
            <div className="font-mono text-xs text-purple mb-3 tracking-widest">§ 06 — WHAT'S NEXT</div>
            <h2
              className="font-poppins text-5xl md:text-6xl font-black text-cream"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Planned experiments
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plannedExperiments.map((exp, i) => (
            <motion.div
              key={exp.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.6, ease: 'easeOut' }}
              className="card-border rounded-2xl p-6 relative overflow-hidden group transition-all duration-300"
            >
              {/* Dashed planned border overlay */}
              <div className="absolute inset-0 rounded-2xl border border-dashed border-muted/30 pointer-events-none" />

              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-xs text-muted border border-muted/30 rounded-full px-2 py-1">
                  #{exp.number}
                </span>
                <span className="font-mono text-xs text-muted border border-muted/30 rounded-full px-2 py-1">
                  PLANNED
                </span>
              </div>

              <h3
                className="font-poppins text-lg font-black text-cream mb-4 leading-tight"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {exp.title}
              </h3>

              <div className="mb-3">
                <div className="font-mono text-xs text-muted mb-1 tracking-widest">HYPOTHESIS</div>
                <p className="font-mono text-xs text-cream/60 leading-relaxed">{exp.hypothesis}</p>
              </div>

              <div>
                <div className="font-mono text-xs text-muted mb-1 tracking-widest">VARIABLE</div>
                <p className="font-mono text-xs text-purple">{exp.variable}</p>
              </div>

              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="font-mono text-xs text-muted">Coming soon →</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
