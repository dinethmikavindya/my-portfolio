import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = [
  {
    id: 'uiux',
    label: 'UI/UX DESIGN',
    icon: '◆',
    color: 'var(--surface-a)',
    projects: [
      { name: 'MediTrack App', desc: 'A mobile health tracking app with a focus on accessibility and clean information hierarchy. Designed in Figma with full prototype.', tags: ['Figma', 'Prototyping', 'Mobile'], status: 'COMPLETED', year: '2024' },
      { name: 'E-Learn Dashboard', desc: 'Responsive learning management system dashboard. User research, wireframes, and high-fidelity UI with design system.', tags: ['Figma', 'Design System', 'UX Research'], status: 'COMPLETED', year: '2024' },
      { name: 'Portfolio Redesign', desc: 'Personal branding project — designing a pixel-futuristic portfolio from scratch. Includes style guide and component library.', tags: ['Figma', 'Branding', 'Web'], status: 'IN PROGRESS', year: '2025' },
    ],
  },
  {
    id: 'fullstack',
    label: 'FULL STACK',
    icon: '◈',
    color: 'var(--surface-c)',
    projects: [
      { name: 'TaskFlow', desc: 'Full-stack task management app built with React, Node.js, and MongoDB. Supports real-time updates via WebSockets.', tags: ['React', 'Node.js', 'MongoDB'], status: 'COMPLETED', year: '2024' },
      { name: 'ShopEase API', desc: 'RESTful e-commerce API with JWT authentication, Stripe integration, and admin dashboard. Built with Express and PostgreSQL.', tags: ['Express', 'PostgreSQL', 'Stripe'], status: 'COMPLETED', year: '2024' },
      { name: 'Dev Portfolio v2', desc: 'This very site! Built with React + Vite, Tailwind CSS, NES.css, and Framer Motion. Pixel futuristic bento layout.', tags: ['React', 'Vite', 'Framer Motion'], status: 'IN PROGRESS', year: '2025' },
    ],
  },
  {
    id: 'graphic',
    label: 'GRAPHIC DESIGN',
    icon: '▣',
    color: 'var(--surface-e)',
    projects: [
      { name: 'Bloom Brand Identity', desc: 'Complete brand identity for a florals & lifestyle brand. Logo, color palette, typography, stationery, and social media kit.', tags: ['Illustrator', 'Branding', 'Print'], status: 'COMPLETED', year: '2024' },
      { name: 'Motion Reel 2024', desc: 'A curated motion graphics reel showcasing animated social content, logo reveals, and UI transitions.', tags: ['After Effects', 'Motion', 'Social'], status: 'COMPLETED', year: '2024' },
      { name: 'Retro Zine', desc: 'Self-published digital zine with pixel art, editorial illustrations, and typographic experiments.', tags: ['Photoshop', 'Illustration', 'Print'], status: 'COMPLETED', year: '2023' },
    ],
  },
]

const ProjectCard = ({ project, index }) => (
  <motion.div className="project-card"
    initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10, scale: 0.95 }}
    transition={{ delay: index * 0.08, type: 'spring', stiffness: 200 }}
    style={{ background: 'var(--card-bg)', position: 'relative' }}>
    <div style={{ position: 'absolute', top: 10, right: 10, fontFamily: "'Press Start 2P', monospace", fontSize: '0.35rem', padding: '3px 8px', background: project.status === 'IN PROGRESS' ? 'var(--periwinkle, #b8c0ff)' : 'var(--surface-a)', border: '1px solid var(--border)', color: 'var(--text-primary)', letterSpacing: '0.05em' }}>
      {project.status}
    </div>
    <div style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.5rem', color: 'var(--text-primary)', paddingRight: '7rem' }}>{project.name}</div>
    <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.35rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>{project.year}</div>
    <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1rem' }}>{project.desc}</p>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
      {project.tags.map(tag => <span key={tag} className="pixel-tag">{tag}</span>)}
    </div>
  </motion.div>
)

const FolderCard = ({ cat, isActive, onToggle }) => (
  <div style={{ position: 'relative', marginTop: 28 }}>
    <motion.button onClick={onToggle} whileHover={{ y: -2 }} whileTap={{ y: 0 }}
      style={{ position: 'absolute', top: -28, left: 0, padding: '5px 18px', border: '3px solid var(--border)', borderBottom: 'none', borderRadius: '8px 8px 0 0', background: isActive ? cat.color : 'var(--bg)', fontFamily: "'Press Start 2P', monospace", fontSize: '0.45rem', letterSpacing: '0.05em', cursor: 'pointer', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px', transition: 'background 0.2s ease', zIndex: 2 }}>
      <span style={{ fontSize: '0.55rem' }}>{cat.icon}</span>
      <span>{cat.label}</span>
      <span style={{ opacity: 0.5 }}>{isActive ? '▼' : '▶'}</span>
    </motion.button>

    <motion.div className="folder-card" animate={{ boxShadow: isActive ? 'var(--folder-shadow)' : '3px 3px 0 var(--border)' }}
      style={{ background: isActive ? cat.color : 'var(--bg)', padding: '1.5rem', cursor: isActive ? 'default' : 'pointer' }}
      onClick={!isActive ? onToggle : undefined}>
      {!isActive && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', color: 'var(--text-muted)' }}>{cat.projects.length} projects — click to open</span>
          <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.5rem', color: 'var(--text-primary)' }}>▶ OPEN</span>
        </div>
      )}
      <AnimatePresence>
        {isActive && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: 'easeInOut' }} style={{ overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px', paddingTop: '0.5rem' }}>
              {cat.projects.map((p, i) => <ProjectCard key={p.name} project={p} index={i} />)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  </div>
)

export default function Projects() {
  const [activeFolder, setActiveFolder] = useState('uiux')
  const toggle = (id) => setActiveFolder(prev => prev === id ? null : id)

  return (
    <section id="projects">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '3rem' }}>
        <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.45rem', color: 'var(--text-muted)', letterSpacing: '0.2em' }}>◆ SECTION 03</span>
        <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-primary)', letterSpacing: '-0.02em', marginTop: '0.4rem' }}>
          PROJECTS
        </h2>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>SELECT A FOLDER TO EXPLORE —</p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {categories.map((cat, i) => (
          <motion.div key={cat.id} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, type: 'spring', stiffness: 180 }}>
            <FolderCard cat={cat} isActive={activeFolder === cat.id} onToggle={() => toggle(cat.id)} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}