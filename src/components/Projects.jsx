import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ── Real project data with Behance links ── */
const categories = [
  {
    id: 'uiux',
    label: 'UI/UX DESIGN',
    icon: '◆',
    color: 'var(--surface-a)',
    projects: [
      {
        name: 'ReGen',
        desc: 'E-commerce mobile clothing platform for a sustainable streetwear brand. Designed a seamless, editorial shopping experience — from onboarding to checkout — using iOS UI guidelines.',
        tags: ['Figma', 'Mobile UI', 'E-Commerce', 'iOS'],
        status: 'COMPLETED',
        year: '2025',
        link: 'https://www.behance.net/gallery/246461517/Regen',
        image: '/src/assets/regen-cover.png',
      },
      {
        name: 'Your Project 2',
        desc: 'Add your second UI/UX project here.',
        tags: ['Figma', 'UX Research'],
        status: 'COMPLETED',
        year: '2025',
        link: '',
        image: null,
      },
      {
        name: 'Your Project 3',
        desc: 'Add your third UI/UX project here.',
        tags: ['Figma', 'Prototyping'],
        status: 'IN PROGRESS',
        year: '2025',
        link: '',
        image: null,
      },
    ],
  },
  {
    id: 'fullstack',
    label: 'FULL STACK',
    icon: '◈',
    color: 'var(--surface-c)',
    projects: [
      {
        name: 'SWAPIFY',
        desc: 'A mobile skill-swapping platform that connects users to exchange skills seamlessly',        
        tags: ['Figma', 'Flutter', 'Firebase'],
        status: 'COMPLETED',
        year: '2025',
        link: 'https://github.com/dinethmikavindya/fswapify',
        image: '/publice/images/swapify.png',
      },
      {
        name: 'MAUVE STUDIO',
        desc: 'Interactive 2D & 3D furniture visualization experience for smarter space planning.',
        tags: ['Next.js', 'Tailwind CSS', 'Three.js', 'R3F', 'React Konva'],
        status: 'COMPLETED',
        year: '2026',
        link: 'https://github.com/dinethmikavindya/furniture-design-app',
        image: '/public/images/furnituredesign.png',
      },
      {
        name: 'Your Project 3',
        desc: 'Add your third full stack project here.',
        tags: ['Firebase', 'Flutter'],
        status: 'COMPLETED',
        year: '2024',
        link: '',
        image: null,
      },
    ],
  },
  {
    id: 'graphic',
    label: 'GRAPHIC DESIGN',
    icon: '▣',
    color: 'var(--surface-e)',
    projects: [
      {
        name: 'Graphic Poster Design',
        desc: 'A collection of bold, expressive poster designs exploring typography, composition, and visual storytelling through print-ready graphic design.',
        tags: ['Illustrator', 'Photoshop', 'Print', 'Typography'],
        status: 'COMPLETED',
        year: '2025',
        link: 'https://www.behance.net/gallery/246468711/Graphic-poster-design',
        image: '/public/images/poster.png',
      },
      {
        name: 'Logo Designs',
        desc: 'A curated collection of logo mark and wordmark designs crafted for various brand identities — focusing on simplicity, scalability, and strong visual impact.',
        tags: ['Illustrator', 'Branding', 'Logo', 'Identity'],
        status: 'COMPLETED',
        year: '2025',
        link: 'https://www.behance.net/gallery/246470091/Logo-designs',
        image: '/public/images/logodesign.png',
      },
      {
        name: '2D Art',
        desc: 'Original 2D digital illustrations exploring character design, colour theory, and stylised visual art — created with a focus on mood and creative expression.',
        tags: ['Illustration', '2D Art', 'Digital Art', 'Photoshop'],
        status: 'COMPLETED',
        year: '2025',
        link: 'https://www.behance.net/gallery/246467919/2D-Art',
        image: '/public/images/2Dart.png'
      },
    ],
  },
]

/* ── External link icon ── */
const LinkIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

const UploadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
  </svg>
)

/* ── Project Card with image upload ── */
const ProjectCard = ({ project, index }) => {
  const [img, setImg] = useState(project.image)
  const fileRef = useRef()

  const handleFile = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setImg(url)
  }

  return (
    <motion.div className="project-card"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ delay: index * 0.08, type: 'spring', stiffness: 200 }}
      style={{ background: 'var(--card-bg)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Thumbnail image area */}
      <div
        onClick={() => !img && fileRef.current?.click()}
        style={{
          width: '100%', height: img ? 160 : 80,
          background: img ? 'transparent' : 'var(--surface-a)',
          border: img ? 'none' : '2px dashed var(--text-muted)',
          marginBottom: '1rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: img ? 'default' : 'pointer',
          position: 'relative',
          overflow: 'hidden',
          transition: 'height 0.3s ease',
        }}
      >
        {img ? (
          <>
            <img src={img} alt={project.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            {/* Replace image button */}
            <button
              onClick={e => { e.stopPropagation(); fileRef.current?.click() }}
              style={{
                position: 'absolute', bottom: 6, right: 6,
                background: 'var(--bg)', border: '2px solid var(--border)',
                padding: '4px 8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4,
                fontFamily: "'Press Start 2P', monospace", fontSize: '0.32rem', color: 'var(--text-primary)',
              }}
            >
              <UploadIcon /> REPLACE
            </button>
          </>
        ) : (
          <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
            <UploadIcon />
            <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.35rem', marginTop: 6, letterSpacing: '0.05em' }}>
              CLICK TO ADD IMAGE
            </div>
          </div>
        )}
        <input ref={fileRef} type="file" accept="image/*" onChange={handleFile} style={{ display: 'none' }} />
      </div>

      {/* Status badge */}
      <div style={{
        position: 'absolute', top: 10, right: 10,
        fontFamily: "'Press Start 2P', monospace", fontSize: '0.32rem', padding: '3px 8px',
        background: project.status === 'IN PROGRESS' ? 'var(--periwinkle, #b8c0ff)' : 'var(--surface-b)',
        border: '1px solid var(--border)', color: 'var(--text-primary)', letterSpacing: '0.05em',
      }}>
        {project.status}
      </div>

      {/* Project name */}
      <div style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.35rem', color: 'var(--text-primary)', paddingRight: '6rem' }}>
        {project.name}
      </div>

      {/* Year */}
      <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.35rem', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
        {project.year}
      </div>

      {/* Description */}
      <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '0.85rem' }}>
        {project.desc}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: project.link ? '0.85rem' : 0 }}>
        {project.tags.map(tag => <span key={tag} className="pixel-tag">{tag}</span>)}
      </div>

      {/* Behance / GitHub link */}
      {project.link && (
        <motion.a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          whileHover={{ x: -2, y: -2 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            marginTop: '0.75rem',
            padding: '6px 14px',
            background: 'var(--surface-a)',
            border: '2px solid var(--border)',
            boxShadow: '2px 2px 0 var(--border)',
            fontFamily: "'Press Start 2P', monospace", fontSize: '0.38rem',
            color: 'var(--text-primary)', textDecoration: 'none', letterSpacing: '0.05em',
          }}
        >
          <LinkIcon />
          {project.link.includes('behance') ? 'VIEW ON BEHANCE' : 'VIEW ON GITHUB'}
        </motion.a>
      )}
    </motion.div>
  )
}

/* ── Folder card ── */
const FolderCard = ({ cat, isActive, onToggle }) => (
  <div style={{ position: 'relative', marginTop: 28 }}>
    <motion.button onClick={onToggle} whileHover={{ y: -2 }} whileTap={{ y: 0 }}
      style={{
        position: 'absolute', top: -28, left: 0, padding: '5px 18px',
        border: '3px solid var(--border)', borderBottom: 'none', borderRadius: '8px 8px 0 0',
        background: isActive ? cat.color : 'var(--bg)',
        fontFamily: "'Press Start 2P', monospace", fontSize: '0.45rem',
        letterSpacing: '0.05em', cursor: 'pointer', color: 'var(--text-primary)',
        display: 'flex', alignItems: 'center', gap: '8px',
        transition: 'background 0.2s ease', zIndex: 2,
      }}>
      <span style={{ fontSize: '0.55rem' }}>{cat.icon}</span>
      <span>{cat.label}</span>
      <span style={{ opacity: 0.5 }}>{isActive ? '▼' : '▶'}</span>
    </motion.button>

    <motion.div className="folder-card"
      animate={{ boxShadow: isActive ? 'var(--folder-shadow)' : '3px 3px 0 var(--border)' }}
      style={{ background: isActive ? cat.color : 'var(--bg)', padding: '1.5rem', cursor: isActive ? 'default' : 'pointer' }}
      onClick={!isActive ? onToggle : undefined}
    >
      {!isActive && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', color: 'var(--text-muted)' }}>
            {cat.projects.length} projects — click to open
          </span>
          <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.5rem', color: 'var(--text-primary)' }}>▶ OPEN</span>
        </div>
      )}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }} style={{ overflow: 'hidden' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px', paddingTop: '0.5rem' }}>
              {cat.projects.map((p, i) => <ProjectCard key={p.name} project={p} index={i} />)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  </div>
)

/* ── Main export ── */
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
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
          SELECT A FOLDER TO EXPLORE —
        </p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {categories.map((cat, i) => (
          <motion.div key={cat.id}
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1, type: 'spring', stiffness: 180 }}
          >
            <FolderCard cat={cat} isActive={activeFolder === cat.id} onToggle={() => toggle(cat.id)} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}