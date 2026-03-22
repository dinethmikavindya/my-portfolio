import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './index.css'

const PageBreak = ({ label }) => (
  <motion.div className="page-break"
    style={{ padding: '2rem 2rem', maxWidth: 1200, margin: '0 auto' }}
    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
    <div className="break-line" />
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
      {['◆', '▲', '■', '▲', '◆'].map((s, i) => (
        <motion.span key={i} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          transition={{ delay: i * 0.08, type: 'spring', stiffness: 300 }}
          style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.5rem', color: 'var(--text-muted)', opacity: i === 2 ? 1 : 0.4 }}>
          {s}
        </motion.span>
      ))}
      {label && (
        <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.45rem', color: 'var(--text-muted)', padding: '4px 12px', border: '2px solid var(--border)', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>
          {label}
        </span>
      )}
      {['◆', '▲', '■', '▲', '◆'].map((s, i) => (
        <motion.span key={i + 10} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          transition={{ delay: (4 - i) * 0.08, type: 'spring', stiffness: 300 }}
          style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.5rem', color: 'var(--text-muted)', opacity: i === 2 ? 1 : 0.4 }}>
          {s}
        </motion.span>
      ))}
    </div>
    <div className="break-line" />
  </motion.div>
)

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : 'light'} style={{ minHeight: '100vh', background: 'var(--bg)', transition: 'background 0.4s ease' }}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main style={{ paddingTop: '70px' }}>
        <Hero />
        <PageBreak label="ABOUT" />
        <About />
        <PageBreak label="PROJECTS" />
        <Projects />
        <PageBreak label="CONTACT" />
        <Contact />
        <footer style={{ textAlign: 'center', padding: '2rem', fontFamily: "'Press Start 2P', monospace", fontSize: '0.45rem', color: 'var(--text-muted)', borderTop: '2px solid var(--border)', marginTop: '2rem', letterSpacing: '0.1em' }}>
          © 2026 DINETHMI.WEERASINGHE — ALL RIGHTS RESERVED
        </footer>
      </main>
    </div>
  )
}

export default App