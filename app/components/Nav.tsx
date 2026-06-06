'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Findings', href: '#findings' },
  { label: 'Experiments', href: '#experiments' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Formula', href: '#formula' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-purple/20' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div
          className="font-poppins font-black text-lg gradient-text"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Content Lab
        </div>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs text-muted hover:text-cream transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:akshay.iyer10@gmail.com"
            className="font-mono text-xs px-4 py-2 rounded-full border border-purple/50 text-purple hover:bg-purple hover:text-white transition-all duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
