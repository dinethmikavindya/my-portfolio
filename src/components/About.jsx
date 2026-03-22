import { motion } from 'framer-motion'

const skills = [
  { label: 'React / Next.js', pct: 90 },
  { label: 'Node.js / Express', pct: 82 },
  { label: 'Figma / UI Design', pct: 94 },
  { label: 'Flutter / React Native', pct: 78 },
  { label: 'Illustrator / PS', pct: 88 },
  { label: 'Python / Firebase', pct: 76 },
]

const stats = [
  { value: '10+', label: 'PROJECTS' },
  { value: '3+', label: 'DISCIPLINES' },
  { value: '∞', label: 'CREATIVITY' },
]

const techStack = [
  {
    category: 'FRONTEND',
    icon: '▣',
    color: 'var(--surface-a)',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Flutter', 'Tailwind CSS', 'Bootstrap', 'Material UI'],
  },
  {
    category: 'BACKEND',
    icon: '◈',
    color: 'var(--surface-b)',
    items: ['Node.js', 'Express.js', 'Firebase Auth', 'Firestore'],
  },
  {
    category: 'MOBILE',
    icon: '◉',
    color: 'var(--surface-c)',
    items: ['Flutter', 'React Native', 'Android (Kotlin)', 'Java'],
  },
  {
    category: 'DESIGN',
    icon: '◆',
    color: 'var(--surface-d)',
    items: ['Figma', 'Photoshop', 'Illustrator', 'Wireframing', 'Prototyping'],
  },
  {
    category: 'TOOLS',
    icon: '▲',
    color: 'var(--surface-e)',
    items: ['Git', 'GitHub', 'VS Code', 'Android Studio', 'Postman', 'npm / yarn'],
  },
  {
    category: 'DEPLOY',
    icon: '■',
    color: 'var(--surface-a)',
    items: ['Firebase Hosting', 'Vercel', 'Docker'],
  },
]

const SkillBar = ({ label, pct, delay }) => (
  <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay, duration: 0.4 }} style={{ marginBottom: '1rem' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: 'var(--text-secondary)' }}>{label}</span>
      <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.4rem', color: 'var(--text-muted)' }}>{pct}%</span>
    </div>
    <div className="pixel-bar-bg">
      <motion.div className="pixel-bar-fill" initial={{ width: 0 }} whileInView={{ width: `${pct}%` }} viewport={{ once: true }} transition={{ delay: delay + 0.2, duration: 0.8, ease: 'easeOut' }} />
    </div>
  </motion.div>
)

const statusItems = [
  { icon: '◎', label: 'UNDERGRADUATE STUDENT' },
  { icon: '◈', label: 'FULL STACK DEVELOPER' },
  { icon: '◆', label: 'UI/UX + GRAPHIC DESIGNER' },
  { icon: '▶', label: 'OPEN TO OPPORTUNITIES' },
]

export default function About() {
  return (
    <section id="about">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '2rem' }}>
        <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.45rem', color: 'var(--text-muted)', letterSpacing: '0.2em' }}>◆ SECTION 02</span>
        <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-primary)', letterSpacing: '-0.02em', marginTop: '0.4rem' }}>
          ABOUT
        </h2>
      </motion.div>

      {/* Bento Grid */}
      <div className="bento-resp-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '12px' }}>

        {/* Bio */}
        <motion.div className="bento-cell" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          style={{ gridColumn: 'span 6', background: 'var(--surface-a)', position: 'relative' }}>
          <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.55rem', color: 'var(--text-muted)', marginBottom: '1rem', letterSpacing: '0.1em' }}>BIO.TXT</div>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(0.7rem, 1.5vw, 0.82rem)', lineHeight: 2, color: 'var(--text-secondary)' }}>
            Hi, I'm <strong>Dinethmi</strong> — an undergraduate passionate about building digital experiences
            that blend design and functionality.
          </p>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(0.7rem, 1.5vw, 0.82rem)', lineHeight: 2, color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
            I work across the full stack, combining solid engineering with a strong eye for UI —
            leveraging a range of technologies to create efficient, intuitive, and well-designed applications.
          </p>
          <div style={{ position: 'absolute', bottom: 12, right: 12, fontFamily: "'Press Start 2P', monospace", fontSize: '0.35rem', color: 'var(--text-muted)', opacity: 0.4 }}>◆ ◆ ◆</div>
        </motion.div>

        {/* Skill bars */}
        <motion.div className="bento-cell" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          style={{ gridColumn: 'span 6', background: 'var(--surface-b)' }}>
          <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.55rem', color: 'var(--text-muted)', marginBottom: '1.25rem', letterSpacing: '0.1em' }}>SKILL.LEVELS</div>
          {skills.map((s, i) => <SkillBar key={s.label} label={s.label} pct={s.pct} delay={i * 0.07} />)}
        </motion.div>

        {/* Stats */}
        {stats.map((s, i) => (
          <motion.div key={s.label} className="bento-cell"
            initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1, type: 'spring', stiffness: 200 }}
            style={{ gridColumn: 'span 4', background: ['var(--surface-c)', 'var(--surface-d)', 'var(--surface-e)'][i], textAlign: 'center', padding: '1.5rem 1rem' }}>
            <div style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 900, fontSize: '2rem', color: 'var(--text-primary)', lineHeight: 1, marginBottom: '0.5rem' }}>{s.value}</div>
            <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.45rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>{s.label}</div>
          </motion.div>
        ))}

        {/* Status bar */}
        <motion.div className="bento-cell" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
          style={{ gridColumn: '1 / -1', background: 'var(--surface-e)', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' }}>
          <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.55rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>STATUS:</div>
          {statusItems.map(({ icon, label }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.55rem', color: 'var(--accent)' }}>{icon}</span>
              <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.45rem', letterSpacing: '0.05em', color: 'var(--text-secondary)' }}>{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Tech Stack full section */}
        <motion.div className="bento-cell" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
          style={{ gridColumn: '1 / -1', background: 'var(--card-bg)', border: '3px solid var(--border)', boxShadow: 'var(--pixel-shadow)' }}>
          <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.55rem', color: 'var(--text-muted)', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>TECH.STACK</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
            {techStack.map((group, gi) => (
              <motion.div key={group.category}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: gi * 0.08 }}
                style={{ background: group.color, border: '2px solid var(--border)', boxShadow: '2px 2px 0 var(--border)', padding: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
                  <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.6rem', color: 'var(--text-primary)' }}>{group.icon}</span>
                  <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.45rem', color: 'var(--text-primary)', letterSpacing: '0.05em' }}>{group.category}</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                  {group.items.map(item => (
                    <span key={item} style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', padding: '2px 8px', background: 'rgba(0,0,0,0.08)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
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