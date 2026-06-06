'use client'

import { motion } from 'framer-motion'

const links = [
  { label: 'Instagram', href: 'https://www.instagram.com/akshayiyer/', icon: '▲' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@akshayiyerdrums', icon: '◆' },
  { label: 'GTM Analyzer', href: 'https://project-1-eta-jade.vercel.app', icon: '◉' },
  { label: 'akshay.iyer10@gmail.com', href: 'mailto:akshay.iyer10@gmail.com', icon: '✉' },
]

export default function Footer() {
  return (
    <footer className="border-t border-purple/20 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left */}
          <div>
            <div
              className="font-poppins text-2xl font-black gradient-text mb-1"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Content Lab
            </div>
            <div className="font-mono text-xs text-muted mb-1">by Akshay Iyer</div>
            <div className="font-mono text-xs text-muted">
              Growth Marketer &amp; Creator · Rutgers Business School 2027
            </div>
          </div>

          {/* Center links */}
          <div className="flex flex-wrap gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="font-mono text-xs text-muted hover:text-purple transition-colors duration-200 flex items-center gap-1.5"
              >
                <span className="text-purple/60">{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Availability banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 border border-orange/30 rounded-2xl px-6 py-4 bg-orange/5 flex flex-col md:flex-row items-start md:items-center gap-3"
        >
          <span className="w-2 h-2 rounded-full bg-orange animate-pulse flex-shrink-0 mt-1 md:mt-0" />
          <p className="font-mono text-sm text-cream/80">
            Targeting founding growth roles at seed/Series A startups —{' '}
            <span className="text-orange">available May 2027</span>
          </p>
        </motion.div>

        <div className="mt-8 font-mono text-xs text-muted/40 text-center">
          © 2025 Akshay Iyer · Content Lab · All data from real experiments
        </div>
      </div>
    </footer>
  )
}
