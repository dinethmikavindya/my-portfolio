import { motion } from 'framer-motion'
import { useState } from 'react'

const contacts = [
  {
    icon: '◈',
    label: 'GITHUB',
    handle: 'dinethmikavindya',
    url: 'https://github.com/dinethmikavindya',
    color: 'var(--surface-a)',
  },
  {
    icon: '✉',
    label: 'EMAIL',
    handle: 'dinethmikavindya@gmail.com',
    url: 'mailto:dinethmikavindya@gmail.com',
    color: 'var(--surface-b)',
  },
  {
    icon: '◉',
    label: 'LINKEDIN',
    handle: 'dinethmi-weerasinghe',
    url: 'https://www.linkedin.com/in/dinethmi-weerasinghe-24534629a',
    color: 'var(--surface-c)',
  },
]

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <motion.button
      onClick={copy}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        background: 'none',
        border: '2px solid var(--border)',
        padding: '4px 10px',
        fontFamily: "'Press Start 2P', monospace",
        fontSize: '0.35rem',
        cursor: 'pointer',
        color: 'var(--text-muted)',
        letterSpacing: '0.05em',
        transition: 'all 0.2s',
      }}
    >
      {copied ? 'COPIED ✓' : 'COPY'}
    </motion.button>
  )
}

export default function Contact() {
  return (
    <section id="contact">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: '2.5rem' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
          <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.45rem', color: 'var(--text-muted)', letterSpacing: '0.2em' }}>
            ◆ SECTION 04
          </span>
        </div>
        <h2 style={{
          fontFamily: "'Orbitron', sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
        }}>
          CONTACT.DAT
        </h2>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
          LET'S BUILD SOMETHING GREAT —
        </p>
      </motion.div>

      {/* Bento Grid */}
      <div className="contact-bento" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '12px' }}>

        {/* CTA Cell */}
        <motion.div
          className="bento-cell"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{ gridColumn: 'span 7', background: 'var(--surface-a)', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 160 }}
        >
          <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.55rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
            OPEN TO:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {['INTERNSHIPS', 'FREELANCE', 'COLLABORATIONS', 'FULL TIME'].map(t => (
              <span key={t} className="pixel-tag">{t}</span>
            ))}
          </div>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(0.65rem, 1.5vw, 0.8rem)', lineHeight: 1.8, color: 'var(--text-secondary)', marginTop: '1rem' }}>
            Have a project in mind? Reach out — I'd love to chat.
          </p>
        </motion.div>

        {/* Pixel art decoration cell */}
        <motion.div
          className="bento-cell scanlines"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            gridColumn: 'span 5',
            background: 'var(--surface-d)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 160,
            position: 'relative',
          }}
        >
          <motion.div className="float" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', lineHeight: 1 }}>✨</div>
            <div style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '0.55rem',
              color: 'var(--text-primary)',
              marginTop: '0.5rem',
              letterSpacing: '0.1em',
            }}>
              LET'S CREATE
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Links */}
        {contacts.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.url}
            target="_blank"
            rel="noreferrer"
            className="bento-cell"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1, type: 'spring', stiffness: 200 }}
            style={{
              gridColumn: 'span 4',
              background: c.color,
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
            whileHover={{ y: -3 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.55rem', letterSpacing: '0.1em', color: 'var(--text-primary)' }}>
                {c.icon} {c.label}
              </span>
              <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.5rem', color: 'var(--text-muted)' }}>↗</span>
            </div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(0.6rem, 1.3vw, 0.75rem)', color: 'var(--text-secondary)', wordBreak: 'break-all' }}>
              {c.handle}
            </div>
          </motion.a>
        ))}

        {/* Footer row */}
        <motion.div
          className="bento-cell"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          style={{
            gridColumn: '1 / -1',
            background: 'var(--surface-e)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            padding: '1rem 1.5rem',
          }}
        >
          <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.45rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
            DINETHMI WEERASINGHE © 2025
          </span>
          <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.45rem', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
            BUILT WITH ♥ + REACT + VITE
          </span>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {['◆', '▲', '■', '●'].map((s, i) => (
              <motion.span
                key={i}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '0.5rem', color: 'var(--text-muted)' }}
              >
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 767px) {
          .contact-bento { grid-template-columns: 1fr !important; }
          .contact-bento > * { grid-column: 1 / -1 !important; }
        }
        @media (min-width: 768px) and (max-width: 1024px) {
          .contact-bento { grid-template-columns: repeat(6, 1fr) !important; }
          .contact-bento > *:nth-child(1),
          .contact-bento > *:nth-child(2) { grid-column: span 3 !important; }
          .contact-bento > *:nth-child(3),
          .contact-bento > *:nth-child(4),
          .contact-bento > *:nth-child(5) { grid-column: span 2 !important; }
          .contact-bento > *:nth-child(6) { grid-column: 1 / -1 !important; }
        }
      `}</style>
    </section>
  )
}