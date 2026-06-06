'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { experiments, type Experiment } from '../data/experiments'

const filters = ['All', 'Completed', 'Running', 'Instagram', 'TikTok'] as const
type Filter = (typeof filters)[number]

function WinnerBadge({ winner }: { winner: Experiment['winner'] }) {
  const styles: Record<string, string> = {
    'VARIANT WON': 'bg-purple/20 text-purple border-purple/40',
    'CONTROL WON': 'bg-orange/20 text-orange border-orange/40',
    INCONCLUSIVE: 'bg-muted/20 text-muted border-muted/40',
    PENDING: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40',
  }
  return (
    <span className={`font-mono text-xs px-2 py-1 rounded-full border ${styles[winner]}`}>
      {winner}
    </span>
  )
}

function StatusBadge({ status }: { status: Experiment['status'] }) {
  const styles: Record<string, string> = {
    COMPLETED: 'text-green-400 border-green-400/40',
    RUNNING: 'text-orange border-orange/40',
    PLANNED: 'text-muted border-muted/40',
  }
  return (
    <span className={`font-mono text-xs px-2 py-1 rounded-full border ${styles[status]}`}>
      {status === 'RUNNING' && <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange animate-pulse mr-1" />}
      {status}
    </span>
  )
}

function PlatformBadge({ platform }: { platform: Experiment['platform'] }) {
  return (
    <span className="font-mono text-xs px-2 py-1 rounded-full border border-cream/20 text-cream/60">
      {platform === 'Instagram' ? 'IG' : platform === 'TikTok' ? 'TT' : 'IG+TT'}
    </span>
  )
}

function ExperimentCard({ experiment, index }: { experiment: Experiment; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6, ease: 'easeOut' }}
      className="card-border rounded-2xl overflow-hidden transition-all duration-300"
    >
      {/* Card header */}
      <div
        className="p-6 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="font-mono text-xs text-purple border border-purple/40 rounded-full px-2 py-1">
            #{experiment.number}
          </span>
          <PlatformBadge platform={experiment.platform} />
          <WinnerBadge winner={experiment.winner} />
          <StatusBadge status={experiment.status} />
          <span className="font-mono text-xs text-muted ml-auto">{experiment.date}</span>
        </div>

        <h3
          className="font-poppins text-xl font-black text-cream mb-3 leading-tight"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {experiment.title}
        </h3>

        {/* Quick metrics */}
        <div className="flex flex-wrap gap-3 mb-3">
          {experiment.metrics.slice(0, 2).map((m) => (
            <div key={m.label} className="font-mono text-xs">
              <span className="text-muted">{m.label}: </span>
              <span className="text-cream">
                {m.value ?? (m.control && m.variant ? `${m.control} → ${m.variant}` : '')}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 text-purple font-mono text-xs">
          <span>{expanded ? '▲ collapse' : '▼ view experiment'}</span>
        </div>
      </div>

      {/* Expanded content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="border-t border-purple/20 p-6 space-y-6">
              {/* Hypothesis */}
              <div>
                <div className="font-mono text-xs text-muted mb-2 tracking-widest">HYPOTHESIS</div>
                <p className="font-mono text-sm text-cream/80 leading-relaxed">{experiment.hypothesis}</p>
              </div>

              {/* Variable tested */}
              <div>
                <div className="font-mono text-xs text-muted mb-2 tracking-widest">VARIABLE TESTED</div>
                <p className="font-mono text-sm text-purple">{experiment.variableTested}</p>
              </div>

              {/* Control vs Variant */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/3 rounded-xl p-4 border border-white/10">
                  <div className="font-mono text-xs text-muted mb-2 tracking-widest">CONTROL</div>
                  <p className="font-mono text-sm text-cream/80">{experiment.controlDesc}</p>
                </div>
                <div className="bg-purple/10 rounded-xl p-4 border border-purple/30">
                  <div className="font-mono text-xs text-purple mb-2 tracking-widest">VARIANT</div>
                  <p className="font-mono text-sm text-cream/80">{experiment.variantDesc}</p>
                </div>
              </div>

              {/* Metrics table */}
              <div>
                <div className="font-mono text-xs text-muted mb-3 tracking-widest">METRICS</div>
                <div className="overflow-x-auto">
                  <table className="w-full font-mono text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left text-muted text-xs py-2 pr-4 font-normal">Metric</th>
                        {experiment.metrics[0]?.control !== undefined && (
                          <th className="text-left text-muted text-xs py-2 pr-4 font-normal">Control</th>
                        )}
                        {experiment.metrics[0]?.variant !== undefined && (
                          <th className="text-left text-muted text-xs py-2 pr-4 font-normal">Variant</th>
                        )}
                        {experiment.metrics[0]?.value !== undefined && (
                          <th className="text-left text-muted text-xs py-2 pr-4 font-normal">Value</th>
                        )}
                        <th className="text-left text-muted text-xs py-2 font-normal">Note</th>
                      </tr>
                    </thead>
                    <tbody>
                      {experiment.metrics.map((m) => (
                        <tr key={m.label} className="border-b border-white/5">
                          <td className="py-2 pr-4 text-muted">{m.label}</td>
                          {m.control !== undefined && (
                            <td className="py-2 pr-4 text-cream/70">{m.control}</td>
                          )}
                          {m.variant !== undefined && (
                            <td className="py-2 pr-4 text-purple font-bold">{m.variant}</td>
                          )}
                          {m.value !== undefined && (
                            <td className="py-2 pr-4 text-purple font-bold">{m.value}</td>
                          )}
                          <td className="py-2 text-muted text-xs italic">{m.note ?? '—'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Result */}
              <div className="bg-orange/10 border border-orange/30 rounded-xl p-4">
                <div className="font-mono text-xs text-orange mb-2 tracking-widest">RESULT</div>
                <p className="font-mono text-sm text-cream font-bold">{experiment.result}</p>
              </div>

              {/* Key learning */}
              <div className="bg-purple/10 border border-purple/30 rounded-xl p-4">
                <div className="font-mono text-xs text-purple mb-2 tracking-widest">KEY LEARNING</div>
                <p className="font-mono text-sm text-cream leading-relaxed">{experiment.keyLearning}</p>
              </div>

              {/* What to test next */}
              <div>
                <div className="font-mono text-xs text-muted mb-2 tracking-widest">WHAT I'D TEST NEXT</div>
                <p className="font-mono text-sm text-cream/60 italic">{experiment.whatNext}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function ExperimentTracker() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')
  const headerRef = useRef(null)
  const isInView = useInView(headerRef, { once: true })

  const filtered = experiments.filter((exp) => {
    if (activeFilter === 'All') return true
    if (activeFilter === 'Completed') return exp.status === 'COMPLETED'
    if (activeFilter === 'Running') return exp.status === 'RUNNING'
    if (activeFilter === 'Instagram') return exp.platform === 'Instagram'
    if (activeFilter === 'TikTok') return exp.platform === 'TikTok'
    return true
  })

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div ref={headerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="font-mono text-xs text-purple mb-3 tracking-widest">§ 03 — EXPERIMENT TRACKER</div>
          <h2
            className="font-poppins text-5xl md:text-6xl font-black text-cream"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            The experiments
          </h2>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`font-mono text-xs px-4 py-2 rounded-full border transition-all duration-200 ${
                activeFilter === f
                  ? 'bg-purple border-purple text-white'
                  : 'border-white/20 text-muted hover:border-purple/40 hover:text-cream'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>
      </div>

      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((exp, i) => (
            <ExperimentCard key={exp.id} experiment={exp} index={i} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
