import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'MAIN', id: 'hero' },
  { label: 'ABOUT', id: 'about' },
  { label: 'PROJECTS', id: 'projects' },
  { label: 'CONTACT', id: 'contact' },
]

const SunIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <circle cx="12" cy="12" r="4"/>
    <line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/>
    <line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/><line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/>
    <line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/>
    <line x1="4.22" y1="19.78" x2="6.34" y2="17.66"/><line x1="17.66" y1="6.34" x2="19.78" y2="4.22"/>
  </svg>
)

const MoonIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
)

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        className="navbar"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
        style={{ boxShadow: scrolled ? 'var(--pixel-shadow)' : 'none' }}
      >
        {/* Logo */}
        <div style={{ cursor: 'pointer', flexShrink: 0 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.65rem', color: 'var(--text-primary)' }}>
            DW<span className="blink" style={{ color: 'var(--accent)' }}>_</span>
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {/* Desktop nav links */}
          <div className="nav-desktop" style={{ display: 'flex', gap: '1.5rem' }}>
            {navLinks.map(({ label, id }) => (
              <motion.button key={id} onClick={() => scrollTo(id)}
                whileHover={{ y: -2 }} whileTap={{ y: 1 }}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Press Start 2P', monospace", fontSize: '0.45rem', color: 'var(--text-secondary)', letterSpacing: '0.1em', padding: '4px 8px', whiteSpace: 'nowrap' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
              >{label}</motion.button>
            ))}
          </div>

          {/* Theme toggle — always visible */}
          <motion.button onClick={() => setDarkMode(!darkMode)}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            style={{ background: 'var(--surface-b)', border: '2px solid var(--border)', boxShadow: '2px 2px 0 var(--border)', padding: '6px 10px', cursor: 'pointer', fontFamily: "'Press Start 2P', monospace", fontSize: '0.45rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}
          >
            {darkMode ? <SunIcon /> : <MoonIcon />}
            <span className="toggle-label" style={{ fontSize: '0.4rem' }}>{darkMode ? 'LIGHT' : 'DARK'}</span>
          </motion.button>

          {/* Hamburger — mobile only */}
          <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: '2px solid var(--border)', padding: '6px 8px', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: '4px', flexShrink: 0 }}
          >
            {[0,1,2].map(i => <span key={i} style={{ display: 'block', width: 16, height: 2, background: 'var(--border)' }} />)}
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          style={{ position: 'fixed', top: 58, left: 0, right: 0, background: 'var(--bg)', borderBottom: '2px solid var(--border)', zIndex: 99, padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          {navLinks.map(({ label, id }) => (
            <button key={id} onClick={() => scrollTo(id)}
              style={{ background: 'none', border: 'none', borderBottom: '1px dashed var(--border)', cursor: 'pointer', fontFamily: "'Press Start 2P', monospace", fontSize: '0.5rem', color: 'var(--text-secondary)', letterSpacing: '0.1em', padding: '10px 0', textAlign: 'left' }}
            >▶ {label}</button>
          ))}
        </motion.div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .toggle-label { display: none !important; }
        }
      `}</style>
    </>
  )
}