import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const roles = ['FULL STACK DEV', 'UI/UX DESIGNER', 'GRAPHIC DESIGNER', 'UNDERGRAD STUDENT']

/* ── SVG Icons ─────────────────────────────────────── */
const CodeIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
)
const StarIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)
const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

const PixelAvatar = () => (
  <a
    href="https://github.com/dinethmikavindya"
    target="_blank"
    rel="noreferrer"
    style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
  >
    <motion.div
      className="float"
      style={{
        width: 110, height: 110,
        background: 'var(--mauve-2, #c8b6ff)',
        border: '3px solid var(--border)',
        boxShadow: 'var(--pixel-shadow)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative',
        color: 'var(--text-primary)',
      }}
    >
      <CodeIcon />
      {/* Star badge */}
      <div style={{
        position: 'absolute', bottom: -6, right: -6,
        width: 22, height: 22,
        background: 'var(--petal-frost, #ffd6ff)',
        border: '2px solid var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--text-primary)',
      }}>
        <StarIcon />
      </div>
      {/* GitHub badge */}
      <div style={{
        position: 'absolute', top: -6, left: -6,
        background: 'var(--surface-a)',
        border: '2px solid var(--border)',
        padding: '3px 6px',
        display: 'flex', alignItems: 'center', gap: 4,
        fontFamily: "'Press Start 2P', monospace",
        fontSize: '0.35rem',
        color: 'var(--text-primary)',
        whiteSpace: 'nowrap',
      }}>
        <GithubIcon /> GITHUB
      </div>
    </motion.div>
  </a>
)

const TypewriterText = ({ texts }) => {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[index]
    if (!deleting && displayed.length < current.length) {
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
      return () => clearTimeout(t)
    }
    if (!deleting && displayed.length === current.length) {
      const t = setTimeout(() => setDeleting(true), 1800)
      return () => clearTimeout(t)
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
      return () => clearTimeout(t)
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false)
      setIndex((index + 1) % texts.length)
    }
  }, [displayed, deleting, index, texts])

  return (
    <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.55rem', color: 'var(--accent)', letterSpacing: '0.05em' }}>
      {displayed}<span className="blink">▮</span>
    </span>
  )
}

const StatusBadge = () => (
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px', border: '2px solid var(--border)', boxShadow: '2px 2px 0 var(--border)', background: 'var(--surface-a)', fontFamily: "'Press Start 2P', monospace", fontSize: '0.4rem', letterSpacing: '0.05em', color: 'var(--text-primary)' }}>
    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4caf50', display: 'inline-block', boxShadow: '0 0 6px #4caf50' }} />
    AVAILABLE FOR WORK
  </div>
)

const SkillChip = ({ label, color }) => (
  <motion.div whileHover={{ y: -2, boxShadow: '4px 4px 0 var(--border)' }}
    style={{ padding: '6px 12px', background: color, border: '2px solid var(--border)', boxShadow: '2px 2px 0 var(--border)', fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', cursor: 'default', color: 'var(--text-primary)' }}
  >{label}</motion.div>
)

const BentoCell = ({ children, style, delay = 0, className = '' }) => (
  <motion.div
    className={`bento-cell ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5, type: 'spring', stiffness: 180 }}
    style={style}
  >{children}</motion.div>
)

export default function Hero() {
  return (
    <section id="hero" className="pixel-grid-bg" style={{ paddingTop: '3rem', paddingBottom: '3rem', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <style>{`
        @media (max-width: 767px) {
          .bento-resp-grid > * { grid-column: 1 / -1 !important; grid-row: auto !important; }
          .bento-resp-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 768px) and (max-width: 1024px) {
          .bento-resp-grid { grid-template-columns: repeat(6, 1fr) !important; }
          .bento-resp-grid > *:nth-child(1) { grid-column: span 4 !important; }
          .bento-resp-grid > *:nth-child(2) { grid-column: span 2 !important; }
          .bento-resp-grid > *:nth-child(3) { grid-column: span 3 !important; }
          .bento-resp-grid > *:nth-child(4) { grid-column: span 3 !important; }
          .bento-resp-grid > *:nth-child(5) { grid-column: span 6 !important; flex-direction: row !important; }
          .bento-resp-grid > *:nth-child(6) { grid-column: 1 / -1 !important; }
        }
      `}</style>
      <div style={{ width: '100%' }}>
        <div className="bento-resp-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '12px', width: '100%' }}>

          {/* A: Name */}
          <BentoCell delay={0} style={{ gridColumn: 'span 8', gridRow: '1', background: 'var(--surface-a)', minHeight: 180, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <StatusBadge />
              <h1 className="glitch-text" data-text="DINETHMI"
                style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 900, fontSize: 'clamp(1.8rem, 5vw, 4rem)', letterSpacing: '-0.02em', lineHeight: 1, color: 'var(--text-primary)', marginTop: '0.75rem' }}>
                DINETHMI
              </h1>
              <h1 style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 900, fontSize: 'clamp(1.8rem, 5vw, 4rem)', letterSpacing: '-0.02em', lineHeight: 1, color: 'var(--accent)', marginBottom: '1rem' }}>
                WEERASINGHE
              </h1>
            </div>
            <TypewriterText texts={roles} />
          </BentoCell>

          {/* B: Avatar with GitHub link */}
          <BentoCell delay={0.1} className="scanlines"
            style={{ gridColumn: 'span 4', gridRow: '1', background: 'var(--surface-b)', minHeight: 180, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <PixelAvatar />
            <div style={{ position: 'absolute', top: 8, right: 8, fontFamily: "'Press Start 2P', monospace", fontSize: '0.35rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
              VER 2025.1
            </div>
          </BentoCell>

          {/* C: Blurb */}
          <BentoCell delay={0.2} style={{ gridColumn: 'span 5', gridRow: '2', background: 'var(--surface-c)' }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(0.7rem, 1.5vw, 0.82rem)', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
              Hi, I'm <strong>Dinethmi</strong> — an undergraduate passionate about building
              digital experiences that blend design and functionality. I work across the full stack,
              leveraging a range of technologies to create efficient, intuitive, and
              well-designed applications.
            </p>
          </BentoCell>

          {/* D: Skills */}
          <BentoCell delay={0.25} style={{ gridColumn: 'span 4', gridRow: '2', background: 'var(--surface-d)' }}>
            <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.55rem', marginBottom: '0.75rem', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
              SKILL.SET
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {['React', 'Node.js', 'Figma', 'Flutter', 'Python', 'Illustrator'].map((s, i) => (
                <SkillChip key={s} label={s} color={['var(--surface-a)', 'var(--surface-b)', 'var(--surface-c)', 'var(--surface-e)', 'var(--surface-a)', 'var(--surface-b)'][i]} />
              ))}
            </div>
          </BentoCell>

          {/* E: CTA */}
          <BentoCell delay={0.3} style={{ gridColumn: 'span 3', gridRow: '2', background: 'var(--surface-e)', display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center' }}>
            <motion.a href="#projects" className="btn-pixel"
              onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              whileHover={{ x: -2, y: -2 }} style={{ justifyContent: 'center', textAlign: 'center' }}>
              VIEW WORK ▶
            </motion.a>
            <motion.a href="#contact" className="btn-pixel dark-btn"
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              whileHover={{ x: -2, y: -2 }} style={{ justifyContent: 'center', textAlign: 'center' }}>
              CONTACT ▶
            </motion.a>
          </BentoCell>

          {/* F: Marquee */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            style={{ gridColumn: '1 / -1', gridRow: '3', background: 'var(--text-primary)', color: 'var(--bg)', padding: '8px 0', overflow: 'hidden', border: '2px solid var(--border)', position: 'relative' }}>
            <div className="marquee-track" style={{ display: 'flex', whiteSpace: 'nowrap', gap: '3rem' }}>
              {Array(4).fill(['◆ FULL STACK DEVELOPER', '▲ UI/UX DESIGNER', '■ GRAPHIC DESIGNER', '● UNDERGRAD STUDENT']).flat().map((t, i) => (
                <span key={i} style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.5rem', letterSpacing: '0.1em', paddingRight: '3rem' }}>{t}</span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}