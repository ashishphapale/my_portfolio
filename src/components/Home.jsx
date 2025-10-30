import React from 'react'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Home(){
  return (
    <div className="container hero">
      {/* Left: Profile image */}
      <div style={{display:'flex', alignItems:'center', justifyContent:'flex-start'}}>
        <img
          src="/images/image.jpg"
          alt="Ashish"
          style={{
            width: 260,
            height: 260,
            borderRadius: '50%',
            objectFit: 'cover',
            objectPosition: 'center',
            boxShadow: '0 12px 32px rgba(0,0,0,0.18)',
            marginLeft: -8
          }}
        />
      </div>
      {/* Right: Name, bio, actions, socials bottom-right */}
      <div style={{position:'relative', minHeight: 260, textAlign:'left', marginLeft: 'auto', maxWidth: 560, marginTop: 48}}>
        <h1 style={{marginBottom: 8}}>
          Hi, I'm
          {' '}
          <span style={{
            background: 'linear-gradient(90deg, var(--primary), var(--text))',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}>Ashish</span>
        </h1>
        <div className="subtitle" style={{marginTop: 0, marginBottom: 12}}><strong>B.Tech Information Technology</strong></div>
        <div className="skill-wrap" style={{marginTop: 8, marginBottom: 16}}>
          <span className="skill-pill">Full‑stack Development</span>
          <span className="skill-pill">AI / ML</span>
          <span className="skill-pill">Cloud & APIs</span>
        </div>
        <p style={{marginTop: 0, marginBottom: 28, lineHeight: 1.6}}>I'm a passionate Information Technology student at MIT ADT University, specializing in full‑stack development, AI/ML, and modern web technologies. I love building innovative, user‑centric solutions that make a real difference.</p>
        <div className="hero-actions" style={{gap:14, marginTop: 10, marginBottom: 40, justifyContent:'flex-start', display:'flex'}}>
          <a className="btn btn-primary" href="#projects">View Projects</a>
          <a className="btn btn-outline" href="#contact">Contact Me</a>
        </div>
      </div>
      {/* Global bottom-right socials */}
      <div style={{position:'absolute', right: 0, bottom: 24, display:'flex', flexDirection:'row', gap:16}}>
        <a href="https://github.com/ashishphapale" aria-label="GitHub" style={{opacity:0.9}}><FiGithub size={18} /></a>
        <a href="https://www.linkedin.com/in/ashish-phapale-611574349/" aria-label="LinkedIn" style={{opacity:0.9}}><FiLinkedin size={18} /></a>
        <a href="mailto:ashishphapale86@gmail.com" aria-label="Email" title="Email Ashish" style={{opacity:0.9}}>
          <FiMail size={18} />
        </a>
      </div>
    </div>
  )
}

