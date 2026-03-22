import { motion } from 'framer-motion'

const skills = [
  { label: 'React / Next.js', pct: 88 },
  { label: 'Node.js / Express', pct: 80 },
  { label: 'Figma / UI Design', pct: 92 },
  { label: 'Python / Flask', pct: 75 },
  { label: 'Illustrator / PS', pct: 85 },
  { label: 'SQL / MongoDB', pct: 78 },
]

const stats = [
  { value: '10+', label: 'PROJECTS' },
  { value: '3+', label: 'DISCIPLINES' },
  { value: '∞', label: 'CREATIVITY' },
]

const SkillBar = ({ label, pct, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4 }}
    style={{ marginBottom: '1rem' }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: 'var(--text-secondary)' }}>{label}</span>
      <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.4rem', color: 'var(--text-muted)' }}>{pct}%</span>
    </div>
    <div className="pixel-bar-bg">
      <motion.div
        className="pixel-bar-fill"
        initial={{ width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.2, duration: 0.8, ease: 'easeOut' }}
      />
    </div>
  </motion.div>
)

const StatBox = ({ value, label, delay, color }) => (
  <motion.div
    className="bento-cell"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, type: 'spring', stiffness: 200 }}
    style={{ background: color, textAlign: 'center', padding: '1.5rem 1rem' }}
  >
    <div style={{
      fontFamily: "'Orbitron', sans-serif",
      fontWeight: 900,
      fontSize: '2rem',
      color: 'var(--text-primary)',
      lineHeight: 1,
      marginBottom: '0.5rem',
    }}>
      {value}
    </div>
    <div style={{
      fontFamily: "'Press Start 2P', monospace",
      fontSize: '0.4rem',
      color: 'var(--text-muted)',
      letterSpacing: '0.1em',
    }}>
      {label}
    </div>
  </motion.div>
)

export default function About() {
  return (
    <section id="about">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: '2rem' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
          <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.45rem', color: 'var(--text-muted)', letterSpacing: '0.2em' }}>
            ◆ SECTION 02
          </span>
        </div>
        <h2 style={{
          fontFamily: "'Orbitron', sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
        }}>
          ABOUT.SYS
        </h2>
      </motion.div>

      {/* Bento Grid */}
      <div className="bento-resp-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: '12px',
      }}>

        {/* Bio Cell */}
        <motion.div
          className="bento-cell"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{ gridColumn: 'span 6', background: 'var(--surface-a)', position: 'relative' }}
        >
          <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.55rem', color: 'var(--text-muted)', marginBottom: '1rem', letterSpacing: '0.1em' }}>
            BIO.TXT
          </div>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(0.7rem, 1.5vw, 0.82rem)', lineHeight: 2, color: 'var(--text-secondary)' }}>
            Hi! I'm <strong>Dinethmi</strong>, an undergraduate student with a deep passion
            for building digital experiences that merge aesthetics with functionality.
          </p>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(0.7rem, 1.5vw, 0.82rem)', lineHeight: 2, color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
            I work across the full stack — from database architecture to pixel-perfect UI —
            and I bring a <em>designer's eye</em> to every line of code.
          </p>
          <div style={{
            position: 'absolute', bottom: 12, right: 12,
            fontFamily: "'Press Start 2P', monospace",
            fontSize: '0.35rem',
            color: 'var(--text-muted)',
            opacity: 0.4,
          }}>
            ◆ ◆ ◆
          </div>
        </motion.div>

        {/* Skills Bar Cell */}
        <motion.div
          className="bento-cell"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ gridColumn: 'span 6', background: 'var(--surface-b)' }}
        >
          <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.55rem', color: 'var(--text-muted)', marginBottom: '1.25rem', letterSpacing: '0.1em' }}>
            SKILL.LEVELS
          </div>
          {skills.map((s, i) => (
            <SkillBar key={s.label} label={s.label} pct={s.pct} delay={i * 0.07} />
          ))}
        </motion.div>

        {/* Stat Boxes — each 4 cols */}
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="bento-cell"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1, type: 'spring', stiffness: 200 }}
            style={{
              gridColumn: 'span 4',
              background: ['var(--surface-c)', 'var(--surface-d)', 'var(--surface-e)'][i],
              textAlign: 'center', padding: '1.5rem 1rem',
            }}
          >
            <div style={{
              fontFamily: "'Orbitron', sans-serif",
              fontWeight: 900,
              fontSize: '2rem',
              color: 'var(--text-primary)',
              lineHeight: 1,
              marginBottom: '0.5rem',
            }}>
              {s.value}
            </div>
            <div style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '0.45rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.1em',
            }}>
              {s.label}
            </div>
          </motion.div>
        ))}

        {/* Currently Cell */}
        <motion.div
          className="bento-cell"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{ gridColumn: '1 / -1', background: 'var(--surface-e)', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' }}
        >
          <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.55rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
            STATUS:
          </div>
          {[
            ['🎓', 'UNDERGRADUATE STUDENT'],
            ['💻', 'FULL STACK DEVELOPER'],
            ['🎨', 'UI/UX + GRAPHIC DESIGNER'],
            ['🚀', 'OPEN TO OPPORTUNITIES'],
          ].map(([icon, label]) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>{icon}</span>
              <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.45rem', letterSpacing: '0.05em', color: 'var(--text-secondary)' }}>
                {label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 767px) {
          #about .bento-resp-grid { grid-template-columns: 1fr !important; }
          #about .bento-resp-grid > * { grid-column: 1 / -1 !important; }
        }
        @media (min-width: 768px) and (max-width: 1024px) {
          #about .bento-resp-grid { grid-template-columns: repeat(6, 1fr) !important; }
          #about .bento-resp-grid > *:nth-child(1),
          #about .bento-resp-grid > *:nth-child(2) { grid-column: span 6 !important; }
          #about .bento-resp-grid > *:nth-child(3),
          #about .bento-resp-grid > *:nth-child(4),
          #about .bento-resp-grid > *:nth-child(5) { grid-column: span 2 !important; }
        }
      `}</style>

    </section>
  )
}