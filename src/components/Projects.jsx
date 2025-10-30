import React from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
  {
    title: 'Project One',
    desc: 'Pizza-Pie Ordering System',
    img: '/projects/pizza-pie.png',
    github: 'https://github.com/',
    live: 'https://example.com'
  },
  {
    title: 'Project Two',
    desc: 'Sentiment Analysis Model using ML',
    img: '/projects/sentimental.png',
    github: 'https://github.com/',
    live: 'http://172.20.10.4:8080/'
  },
  {
    title: 'Project Three',
    desc: 'Bhulaxmi Jewels E-commerce website',
    img: '/projects/bhulaxmi.png',
    github: 'https://github.com/',
    live: 'https://example.com'
  }
]

const achievements = [
  {
    title: 'Oracle Certified OCI-Data Science',
    issuer: 'Oracle University',
    img: 'https://share.google/images/BK9sqgUaa35frQHmG',
    thumbnail: '/certs/thumbnails/oracle.png',
    link: '/certs/Oracle_Data_Scinece.pdf',
  },
  {
    title: 'Delloitte Data Analyst - Job Simulation',
    issuer: 'Deloitte',
    img: 'https://share.google/images/DNG0MCrBsFJuGzBwS',
    thumbnail: '/certs/thumbnails/deloitte.png',
    link: '/certs/Deloitte.pdf',
  },
  {
    title: 'Coursera FullStack Development',
    issuer: 'Coursera',
    img: 'https://share.google/images/4tznNWF2kZOcHx7Kk',
    thumbnail: '/certs/thumbnails/coursera.png',
    link: '/certs/Coursera.pdf'
  },
  {
    title: 'Oracle Certified GenAI Professional',
    issuer: 'Oracle University',
    img: 'https://share.google/images/LrC7brHX9EnFWpwOV',
    thumbnail: '/certs/thumbnails/oracle-gen-ai.png',
    link: '/certs/Oracle_GEN_AI.pdf'
  }
]

export default function Projects({ achievementsMode = false }){
  const items = achievementsMode ? achievements : projects
  return (
    <div className="container section">
      <h2 className="title">{achievementsMode ? 'Achievements & Certifications' : 'Projects'}</h2>
      <p className="subtitle" style={{marginBottom:12}}>{achievementsMode ? '“Recognitions and credentials earned along my journey”' : '“Projects that highlight my technical skills and creativity”'}</p>
      <div className="grid" style={{gap:12}}>
        {items.map((p, idx) => (
          <article className="card" key={idx} data-aos="zoom-in" style={{overflow:'hidden', padding:12}}>
            <img
              src={p.thumbnail || p.img}
              alt={p.title}
              loading="lazy"
              style={{
                borderRadius:12,
                marginBottom:12,
                width:'100%',
                height:110,
                objectFit:'cover',
                objectPosition:'center'
              }}
            />
            <h4>{p.title}</h4>
            <p>{p.desc || p.issuer}</p>
            <div style={{display:'flex', gap:10, marginTop:10}}>
              {achievementsMode ? (
                <a className="btn btn-outline" href={p.link} target="_blank" rel="noreferrer">
                  <FiExternalLink /> View
                </a>
              ) : (
                <>
                  <a className="btn btn-outline" href={p.github} target="_blank" rel="noreferrer">
                    <FiGithub /> Code
                  </a>
                  <a className="btn btn-primary" href={p.live} target="_blank" rel="noreferrer">
                    <FiExternalLink /> Live
                  </a>
                </>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

