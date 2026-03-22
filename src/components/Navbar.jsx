import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = ['HERO', 'ABOUT', 'PROJECTS', 'CONTACT']

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
      style={{
        boxShadow: scrolled ? 'var(--pixel-shadow)' : 'none',
      }}
    >
      {/* Logo */}
      <div
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span style={{
          fontFamily: "'Press Start 2P', monospace",
          fontSize: '0.65rem',
          letterSpacing: '0.05em',
          color: 'var(--text-primary)',
        }}>
          DW<span className="blink" style={{ color: 'var(--accent)' }}>_</span>
        </span>
        <span style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: '0.55rem',
          fontWeight: 700,
          color: 'var(--text-muted)',
          letterSpacing: '0.2em',
          display: 'none',
        }}>
          PORTFOLIO
        </span>
      </div>

      {/* Desktop Nav */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {navLinks.map((link, i) => (
            <motion.button
              key={link}
              onClick={() => scrollTo(link)}
              whileHover={{ y: -2 }}
              whileTap={{ y: 1 }}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: "'Press Start 2P', monospace",
                fontSize: '0.45rem',
                color: 'var(--text-secondary)',
                letterSpacing: '0.1em',
                padding: '4px 8px',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
            >
              {link}
            </motion.button>
          ))}
        </div>

        {/* Theme Toggle */}
        <motion.button
          onClick={() => setDarkMode(!darkMode)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: 'var(--surface-b)',
            border: '2px solid var(--border)',
            boxShadow: '2px 2px 0 var(--border)',
            padding: '6px 12px',
            cursor: 'pointer',
            fontFamily: "'Press Start 2P', monospace",
            fontSize: '0.5rem',
            color: 'var(--text-primary)',
            letterSpacing: '0.05em',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <span>{darkMode ? '☀' : '◑'}</span>
          <span style={{ fontSize: '0.4rem' }}>{darkMode ? 'LIGHT' : 'DARK'}</span>
        </motion.button>
      </div>
    </motion.nav>
  )
}