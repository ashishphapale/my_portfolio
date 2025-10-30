import React from 'react'
import { FiMoon, FiSun, FiDownload } from 'react-icons/fi'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
]

export default function Navbar({ theme, setTheme, active, onNavigate }){
  const otherLinks = links.filter(l => l.id !== 'contact')
  const contactLink = links.find(l => l.id === 'contact')
  const resumeUrl = import.meta.env.VITE_RESUME_URL || '/resume1.pdf'

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <strong style={{fontSize: 20, fontWeight: 800, letterSpacing: 0.2}}>My Portfolio</strong>
        <ul className="nav-links" style={{ marginLeft: '24px', justifyContent: 'flex-start' }}>
          {otherLinks.map(l => (
            <li key={l.id}>
              <a
                className={`nav-link ${active===l.id ? 'active' : ''}`}
                href={`#${l.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  if(onNavigate) onNavigate(l.id)
                  try { window.history.replaceState(null, '', `#${l.id}`) } catch {}
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
          {/* Resume before Contact */}
          <li>
            <a className="nav-link" href={resumeUrl} target="_blank" rel="noreferrer">Resume</a>
          </li>
          {contactLink && (
            <li key={contactLink.id}>
              <a
                className={`nav-link ${active===contactLink.id ? 'active' : ''}`}
                href={`#${contactLink.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  if(onNavigate) onNavigate(contactLink.id)
                  try { window.history.replaceState(null, '', `#${contactLink.id}`) } catch {}
                }}
              >
                {contactLink.label}
              </a>
            </li>
          )}
          <li>
            <button className="theme-toggle" onClick={() => setTheme(theme==='dark'?'light':'dark')} aria-label="Toggle theme">
              {theme==='dark' ? <FiSun /> : <FiMoon />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
