import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const roles = ['FULL STACK DEV', 'UI/UX DESIGNER', 'GRAPHIC DESIGNER', 'UNDERGRAD STUDENT']

const PixelAvatar = () => (
  <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <motion.div
      className="float"
      style={{
        width: 100, height: 100,
        background: 'var(--mauve-2, #c8b6ff)',
        border: '3px solid var(--border)',
        boxShadow: 'var(--pixel-shadow)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '2.5rem',
        position: 'relative',
      }}
    >
      👾
      <div style={{
        position: 'absolute', bottom: -6, right: -6,
        width: 20, height: 20,
        background: 'var(--petal-frost, #ffd6ff)',
        border: '2px solid var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '0.6rem',
      }}>★</div>
    </motion.div>
  </div>
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

const StatusBadge = ({ label, color }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: 6,
    padding: '4px 10px',
    border: '2px solid var(--border)',
    boxShadow: '2px 2px 0 var(--border)',
    background: color || 'var(--surface-a)',
    fontFamily: "'Press Start 2P', monospace",
    fontSize: '0.4rem',
    letterSpacing: '0.05em',
    color: 'var(--text-primary)',
  }}>
    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4caf50', display: 'inline-block', boxShadow: '0 0 6px #4caf50' }} />
    {label}
  </div>
)

const SkillChip = ({ label, color }) => (
  <motion.div
    whileHover={{ y: -2, boxShadow: '4px 4px 0 var(--border)' }}
    style={{
      padding: '6px 12px',
      background: color,
      border: '2px solid var(--border)',
      boxShadow: '2px 2px 0 var(--border)',
      fontFamily: "'Space Mono', monospace",
      fontSize: '0.65rem',
      cursor: 'default',
    }}
  >
    {label}
  </motion.div>
)

const BentoCell = ({ children, style, delay = 0, className = '' }) => (
  <motion.div
    className={`bento-cell ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5, type: 'spring', stiffness: 180 }}
    style={style}
  >
    {children}
  </motion.div>
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
          .bento-resp-grid > *:nth-child(5) { grid-column: span 6 !important; display: flex !important; flex-direction: row !important; gap: 10px !important; }
          .bento-resp-grid > *:nth-child(6) { grid-column: 1 / -1 !important; }
        }
      `}</style>
      <div style={{ width: '100%' }}>
        {/* Bento Grid */}
        <div className="bento-resp-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridTemplateRows: 'auto',
          gap: '12px',
          width: '100%',
        }}>

          {/* A: Main Name Cell — spans 8 cols */}
          <BentoCell
            delay={0}
            style={{
              gridColumn: 'span 8',
              gridRow: '1',
              background: 'var(--surface-a)',
              minHeight: 180,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ marginBottom: '0.5rem' }}>
                <StatusBadge label="AVAILABLE FOR WORK" />
              </div>
              <h1
                className="glitch-text"
                data-text="DINETHMI"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontWeight: 900,
                  fontSize: 'clamp(1.8rem, 5vw, 4rem)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  color: 'var(--text-primary)',
                  marginTop: '0.75rem',
                }}
              >
                DINETHMI
              </h1>
              <h1 style={{
                fontFamily: "'Orbitron', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(1.8rem, 5vw, 4rem)',
                letterSpacing: '-0.02em',
                lineHeight: 1,
                color: 'var(--accent)',
                marginBottom: '1rem',
              }}>
                WEERASINGHE
              </h1>
            </div>
            <div>
              <TypewriterText texts={roles} />
            </div>
          </BentoCell>

          {/* B: Avatar Cell — spans 4 cols */}
          <BentoCell
            delay={0.1}
            style={{
              gridColumn: 'span 4',
              gridRow: '1',
              background: 'var(--surface-b)',
              minHeight: 180,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="scanlines"
          >
            <PixelAvatar />
            <div style={{
              position: 'absolute', top: 8, right: 8,
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '0.35rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.1em',
            }}>
              VER 2025.1
            </div>
          </BentoCell>

          {/* C: About blurb — spans 5 cols */}
          <BentoCell
            delay={0.2}
            style={{
              gridColumn: 'span 5',
              gridRow: '2',
              background: 'var(--surface-c)',
            }}
          >
            <p style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 'clamp(0.7rem, 1.5vw, 0.85rem)',
              lineHeight: 1.8,
              color: 'var(--text-secondary)',
            }}>
              Undergraduate student crafting <strong>digital experiences</strong> at the intersection
              of code and design. I build things that look good <em>and</em> work well.
            </p>
          </BentoCell>

          {/* D: Skills — spans 4 cols */}
          <BentoCell
            delay={0.25}
            style={{
              gridColumn: 'span 4',
              gridRow: '2',
              background: 'var(--surface-d)',
            }}
          >
            <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.55rem', marginBottom: '0.75rem', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
              SKILL.SET
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {['React', 'Node.js', 'Figma', 'Python', 'SQL', 'Illustrator'].map((s, i) => (
                <SkillChip key={s} label={s} color={['var(--surface-a)', 'var(--surface-b)', 'var(--surface-c)', 'var(--surface-e)', 'var(--surface-a)', 'var(--surface-b)'][i]} />
              ))}
            </div>
          </BentoCell>

          {/* E: CTA — spans 3 cols */}
          <BentoCell
            delay={0.3}
            style={{
              gridColumn: 'span 3',
              gridRow: '2',
              background: 'var(--surface-e)',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              justifyContent: 'center',
            }}
          >
            <motion.a
              href="#projects"
              className="btn-pixel"
              onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              whileHover={{ x: -2, y: -2 }}
              style={{ justifyContent: 'center', textAlign: 'center' }}
            >
              VIEW WORK ▶
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-pixel dark-btn"
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              whileHover={{ x: -2, y: -2 }}
              style={{ justifyContent: 'center', textAlign: 'center' }}
            >
              CONTACT ✉
            </motion.a>
          </BentoCell>

          {/* F: Marquee ticker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              gridColumn: '1 / -1',
              gridRow: '3',
              background: 'var(--text-primary)',
              color: 'var(--bg)',
              padding: '8px 0',
              overflow: 'hidden',
              border: '2px solid var(--border)',
              position: 'relative',
            }}
          >
            <div className="marquee-track" style={{ display: 'flex', whiteSpace: 'nowrap', gap: '3rem' }}>
              {Array(4).fill(['◆ FULL STACK DEVELOPER', '▲ UI/UX DESIGNER', '■ GRAPHIC DESIGNER', '● UNDERGRAD STUDENT']).flat().map((t, i) => (
                <span key={i} style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.5rem', letterSpacing: '0.1em', paddingRight: '3rem' }}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}