import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

/* ─── DATA ────────────────────────────────────────── */
const skills = [
  { label: 'Flutter / Dart', pct: 88 },
  { label: 'Firebase', pct: 84 },
  { label: 'Figma / UI Design', pct: 95 },
  { label: 'React / Next.js', pct: 80 },
  { label: 'Illustrator / PS', pct: 88 },
  { label: 'PHP / Web Dev', pct: 75 },
]

const stats = [
  { value: '10+', label: 'PROJECTS' },
  { value: '3+',  label: 'DISCIPLINES' },
  { value: '∞',   label: 'CREATIVITY' },
]

const techStack = [
  { category: 'FRONTEND', icon: '▣', color: 'var(--surface-a)', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Flutter', 'Tailwind CSS', 'Bootstrap', 'Material UI'] },
  { category: 'BACKEND',  icon: '◈', color: 'var(--surface-b)', items: ['Node.js', 'Express.js', 'Firebase Auth', 'Firestore'] },
  { category: 'MOBILE',   icon: '◉', color: 'var(--surface-c)', items: ['Flutter', 'React Native', 'Android (Kotlin)', 'Java'] },
  { category: 'DESIGN',   icon: '◆', color: 'var(--surface-d)', items: ['Figma', 'Photoshop', 'Illustrator', 'Wireframing', 'Prototyping'] },
  { category: 'TOOLS',    icon: '▲', color: 'var(--surface-e)', items: ['Git', 'GitHub', 'VS Code', 'Android Studio', 'Postman', 'npm / yarn'] },
  { category: 'DEPLOY',   icon: '■', color: 'var(--surface-a)', items: ['Firebase Hosting', 'Vercel', 'Docker'] },
]

const statusItems = [
  { icon: '◎', label: 'SE UNDERGRAD @ NSBM' },
  { icon: '◈', label: 'FLUTTER + FIREBASE DEV' },
  { icon: '◆', label: 'UI/UX + GRAPHIC DESIGNER' },
  { icon: '▶', label: 'VIBE CODER — AI POWERED' },
]

/* ─── SUB-COMPONENTS ──────────────────────────────── */
const SkillBar = ({ label, pct, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }} transition={{ delay, duration: 0.4 }}
    style={{ marginBottom: '1rem' }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: 'var(--text-secondary)' }}>{label}</span>
      <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.4rem', color: 'var(--text-muted)' }}>{pct}%</span>
    </div>
    <div className="pixel-bar-bg">
      <motion.div className="pixel-bar-fill"
        initial={{ width: 0 }} whileInView={{ width: `${pct}%` }}
        viewport={{ once: true }} transition={{ delay: delay + 0.2, duration: 0.8, ease: 'easeOut' }}
      />
    </div>
  </motion.div>
)

/* ─── 3D RUBIK'S CUBE TECH STACK ──────────────────── */
const CUBE_SIZE = 300

const faceTransforms = [
  { id: 'FRONTEND', rotX: 0,   rotY: 0   },
  { id: 'BACKEND',  rotX: 0,   rotY: 180 },
  { id: 'MOBILE',   rotX: 0,   rotY: 90  },
  { id: 'DESIGN',   rotX: 0,   rotY: -90 },
  { id: 'TOOLS',    rotX: -90, rotY: 0   },
  { id: 'DEPLOY',   rotX: 90,  rotY: 0   },
]

const cubeFaces = [
  { bg: 'var(--surface-a)', transform: `translateZ(${CUBE_SIZE/2}px)`,                 cat: 'FRONTEND' },
  { bg: 'var(--surface-b)', transform: `rotateY(180deg) translateZ(${CUBE_SIZE/2}px)`, cat: 'BACKEND'  },
  { bg: 'var(--surface-c)', transform: `rotateY(90deg) translateZ(${CUBE_SIZE/2}px)`,  cat: 'MOBILE'   },
  { bg: 'var(--surface-d)', transform: `rotateY(-90deg) translateZ(${CUBE_SIZE/2}px)`, cat: 'DESIGN'   },
  { bg: 'var(--surface-e)', transform: `rotateX(90deg) translateZ(${CUBE_SIZE/2}px)`,  cat: 'TOOLS'    },
  { bg: 'var(--periwinkle-2, #bbd0ff)', transform: `rotateX(-90deg) translateZ(${CUBE_SIZE/2}px)`, cat: 'DEPLOY' },
]

const TechStackWidget = () => {
  const [rotX, setRotX] = useState(-22)
  const [rotY, setRotY] = useState(35)
  const [dragging, setDragging] = useState(false)
  const [last, setLast] = useState({ x: 0, y: 0 })
  const [active, setActive] = useState('FRONTEND')

  const activeGroup = techStack.find(g => g.category === active)

  const onMouseDown = (e) => { setDragging(true); setLast({ x: e.clientX, y: e.clientY }) }
  const onMouseMove = (e) => {
    if (!dragging) return
    setRotY(r => r + (e.clientX - last.x) * 0.5)
    setRotX(r => r - (e.clientY - last.y) * 0.5)
    setLast({ x: e.clientX, y: e.clientY })
  }
  const onMouseUp = () => setDragging(false)

  const onTouchStart = (e) => { setDragging(true); setLast({ x: e.touches[0].clientX, y: e.touches[0].clientY }) }
  const onTouchMove = (e) => {
    if (!dragging) return
    setRotY(r => r + (e.touches[0].clientX - last.x) * 0.5)
    setRotX(r => r - (e.touches[0].clientY - last.y) * 0.5)
    setLast({ x: e.touches[0].clientX, y: e.touches[0].clientY })
  }

  const snapTo = (faceId) => {
    const f = faceTransforms.find(f => f.id === faceId)
    setRotX(-f.rotX)
    setRotY(-f.rotY)
    setActive(faceId)
  }

  return (
    <motion.div className="bento-cell"
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ delay: 0.6 }}
      style={{ gridColumn: '1 / -1', background: 'var(--card-bg)', padding: '2.5rem' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
          TECH.STACK
        </div>
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.5rem', color: 'var(--accent)', padding: '4px 12px', border: '2px solid var(--accent)', letterSpacing: '0.05em' }}>
          ◈ DRAG TO ROTATE
        </div>
      </div>

      <div className="cube-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>

        {/* ── Cube ── */}
        <div
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}
          onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp} onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onMouseUp}
        >
          <div style={{ width: CUBE_SIZE, height: CUBE_SIZE, perspective: 900, cursor: dragging ? 'grabbing' : 'grab', userSelect: 'none', filter: 'drop-shadow(8px 16px 0px rgba(0,0,0,0.25))' }}>
            <div style={{
              width: '100%', height: '100%', position: 'relative', transformStyle: 'preserve-3d',
              transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
              transition: dragging ? 'none' : 'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)',
            }}>
              {cubeFaces.map(face => {
                const items = techStack.find(g => g.category === face.cat)?.items || []
                return (
                  <div key={face.cat}
                    onClick={() => { setActive(face.cat); snapTo(face.cat) }}
                    style={{
                      position: 'absolute', width: CUBE_SIZE, height: CUBE_SIZE,
                      background: face.bg, border: '4px solid var(--border)',
                      transform: face.transform,
                      display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gridTemplateRows: 'repeat(3,1fr)',
                      gap: 6, padding: 14, boxSizing: 'border-box', cursor: 'pointer', backfaceVisibility: 'visible',
                    }}
                  >
                    {Array(9).fill(0).map((_, ci) => (
                      <div key={ci} style={{
                        background: items[ci] ? 'rgba(0,0,0,0.14)' : 'rgba(0,0,0,0.04)',
                        border: '2px solid var(--border)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '0.38rem', fontFamily: "'Press Start 2P', monospace",
                        color: 'var(--text-primary)', overflow: 'hidden', padding: '3px',
                        textAlign: 'center', lineHeight: 1.3, fontWeight: 700,
                        opacity: items[ci] ? 1 : 0.25,
                      }}>
                        {items[ci] ? items[ci].split(' ')[0].slice(0, 7) : ''}
                      </div>
                    ))}
                    <div style={{
                      position: 'absolute', bottom: 8, right: 10,
                      fontFamily: "'Press Start 2P', monospace", fontSize: '0.38rem',
                      color: 'var(--text-primary)', opacity: 0.6, letterSpacing: '0.05em',
                      background: 'rgba(0,0,0,0.1)', padding: '2px 6px', border: '1px solid var(--border)',
                    }}>{face.cat}</div>
                  </div>
                )
              })}
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}>
            {techStack.map(g => (
              <motion.button key={g.category} onClick={() => snapTo(g.category)}
                whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}
                style={{
                  padding: '6px 12px',
                  background: active === g.category ? g.color : 'transparent',
                  border: `2px solid ${active === g.category ? 'var(--border)' : 'var(--text-muted)'}`,
                  boxShadow: active === g.category ? '3px 3px 0 var(--border)' : 'none',
                  cursor: 'pointer', fontFamily: "'Press Start 2P', monospace",
                  fontSize: '0.42rem', color: active === g.category ? 'var(--text-primary)' : 'var(--text-muted)',
                  letterSpacing: '0.03em', transition: 'all 0.15s',
                }}
              >
                {g.icon} {g.category.slice(0, 6)}
              </motion.button>
            ))}
          </div>
        </div>

        {/* ── Info Panel ── */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div key={active}
              initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.25 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
                <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.85rem', color: 'var(--text-primary)' }}>{activeGroup.icon}</span>
                <div>
                  <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.6rem', color: 'var(--text-primary)', letterSpacing: '0.05em' }}>{activeGroup.category}</div>
                  <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.4rem', color: 'var(--accent)', marginTop: '4px' }}>{activeGroup.items.length} TOOLS</div>
                </div>
              </div>

              <div style={{ background: activeGroup.color, border: '3px solid var(--border)', boxShadow: '5px 5px 0 var(--border)', padding: '1.25rem', minHeight: 120 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {activeGroup.items.map((item, i) => (
                    <motion.span key={item}
                      initial={{ opacity: 0, scale: 0.7, y: 8 }} animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: i * 0.05, type: 'spring', stiffness: 320, damping: 18 }}
                      whileHover={{ y: -3, boxShadow: '4px 4px 0 var(--border)' }}
                      style={{
                        fontFamily: "'Space Mono', monospace", fontSize: '0.72rem',
                        padding: '6px 14px', background: 'var(--card-bg)',
                        border: '2px solid var(--border)', boxShadow: '2px 2px 0 var(--border)',
                        color: 'var(--text-primary)', display: 'inline-block', cursor: 'default',
                      }}
                    >{item}</motion.span>
                  ))}
                </div>
              </div>

              <p style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.4rem', color: 'var(--text-muted)', marginTop: '1rem', letterSpacing: '0.05em' }}>
                ◆ CLICK ANY CUBE FACE OR BUTTON TO SWITCH
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .cube-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </motion.div>
  )
}

/* ─── MAIN EXPORT ─────────────────────────────────── */
export default function About() {
  return (
    <section id="about">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '2rem' }}>
        <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.45rem', color: 'var(--text-muted)', letterSpacing: '0.2em' }}>◆ SECTION 02</span>
        <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-primary)', letterSpacing: '-0.02em', marginTop: '0.4rem' }}>
          ABOUT
        </h2>
      </motion.div>

      <div className="bento-resp-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '12px' }}>

        {/* Bio */}
        <motion.div className="bento-cell" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          style={{ gridColumn: 'span 6', background: 'var(--surface-a)', position: 'relative' }}>
          <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.55rem', color: 'var(--text-muted)', marginBottom: '1rem', letterSpacing: '0.1em' }}>BIO.TXT</div>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(0.7rem, 1.5vw, 0.82rem)', lineHeight: 2, color: 'var(--text-secondary)' }}>
            Software Engineering undergraduate at <strong>NSBM Green University</strong>, affiliated with Plymouth University
            passionate about UI/UX design, mobile app development, and modern web technologies.
          </p>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(0.7rem, 1.5vw, 0.82rem)', lineHeight: 2, color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
            I <strong>vibe code</strong> moving with AI to bring ideas, designs and solutions to life fast.
            Skilled in Flutter, Firebase, Figma and full-stack web development, I bridge the gap between
            solid engineering and pixel-perfect design.
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

        {/* 3D Rubik's Cube Tech Stack */}
        <TechStackWidget />

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