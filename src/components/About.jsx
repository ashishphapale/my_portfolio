import React from 'react'
import { FiMapPin, FiBook, FiCode, FiAward, FiExternalLink, FiCheckCircle, FiTrendingUp, FiLayers } from 'react-icons/fi'

export default function About(){
  return (
    <div className="container section">
      <h2 className="title">About Me</h2>
      <p className="subtitle">“I design and build reliable web and AI solutions with a focus on clarity, performance, and impact.”</p>

      <div className="grid">
        <div className="card" data-aos="fade-up">
          <h4 style={{display:'flex', alignItems:'center', gap:8}}>
            <FiAward /> Experience
          </h4>
          <ul style={{margin:'10px 0 0 18px', display:'grid', gap:10}}>
            <li style={{display:'flex', alignItems:'center', gap:10}}>
              <span className="skill-pill" style={{padding:'4px 8px'}}>Ex‑Intern</span>
              <strong>Elite Softwares</strong>
              <span style={{opacity:0.8, marginLeft:6}}>Assisted in building responsive web interfaces and fixing UI bugs.</span>
            </li>
            <li style={{display:'flex', alignItems:'center', gap:10}}>
              <span className="skill-pill" style={{padding:'4px 8px'}}>Ex‑Intern</span>
              <strong>Innovatix Technologies</strong>
              <span style={{opacity:0.8, marginLeft:6}}>Contributed to backend APIs and basic data workflows.</span>
            </li>
            <li style={{display:'flex', alignItems:'center', gap:10}}>
              <span className="skill-pill" style={{padding:'4px 8px', background:'var(--primary)20'}}>Current</span>
              <strong>SmartEd</strong>
              <span style={{opacity:0.8}}>(ML)</span>
              <span style={{opacity:0.8, marginLeft:6}}>Working on ML models for personalized learning insights.</span>
            </li>
          </ul>
        </div>

        <div className="card" data-aos="fade-up">
          <div style={{display:'grid', gap:16}}>
            <div>
              <h4 style={{display:'flex', alignItems:'center', gap:8}}><FiBook /> Education</h4>
              <div style={{display:'grid', gap:12, marginTop:8}}>
                <div style={{display:'flex', alignItems:'center', gap:12}}>
                  <img
                    src="https://www.google.com/s2/favicons?domain=mituniversity.ac.in&sz=64"
                    alt="MIT-ADT"
                    width={22}
                    height={22}
                    loading="lazy"
                    style={{borderRadius:4, objectFit:'cover'}}
                    onError={(e)=>{e.currentTarget.onerror=null; e.currentTarget.src='https://via.placeholder.com/22'}}
                  />
                  <div>
                    <div><strong>MIT-ADT University, Pune</strong></div>
                    <small>B.Tech in Information Technology (2023–2027) • CGPA: 7.5</small>
                  </div>
                </div>
                <div style={{display:'flex', alignItems:'center', gap:12}}>
                  <img
                    src="https://www.google.com/s2/favicons?domain=mitwpu.edu.in&sz=64"
                    alt="MIT-WPU"
                    width={22}
                    height={22}
                    loading="lazy"
                    style={{borderRadius:4, objectFit:'cover'}}
                    onError={(e)=>{e.currentTarget.onerror=null; e.currentTarget.src='https://via.placeholder.com/22'}}
                  />
                  <div>
                    <div><strong>MIT World Peace University, Pune</strong></div>
                    <small>Diploma in Information Technology (2022–2024) • Marks: 82%</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
