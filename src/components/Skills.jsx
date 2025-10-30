import React from 'react'

const skills = {
  'Programming Languages': [
    { name: 'HTML&CSS,Javascript', level: 85, logo: 'javascript' },
    { name: 'Python', level: 80, logo: 'python' },
    { name: 'Java', level: 70, logo: 'java' },
    { name: 'C++', level: 70, logo: 'cpp' }
  ],
  'Frameworks': [
    { name: 'React', level: 85, logo: 'react' },
    { name: 'Node.js', level: 75, logo: 'nodejs' },
    { name: 'Express', level: 70, logo: 'express' },
    { name: 'Flask', level: 70, logo: 'flask' },
    { name: 'Django', level: 70, logo: 'django' },
    { name: 'TensorFlow', level: 70, logo: 'tensorflow' }
  ],
  'Tools': [
    { name: 'Git & Github', level: 85, logo: 'git' },
    { name: 'MySQL', level: 70, logo: 'mysql' },
    { name: 'Docker', level: 60, logo: 'docker' },
    { name: 'Postman Agent', level: 60, logo: 'postman' },
    { name: 'VS Code', level: 60, logo: 'vscode' },
    { name: 'Android Studio', level: 60, logo: 'androidstudio' }
  ]
}

export default function Skills(){
  return (
    <div className="container section">
      <h2 className="title">Skills</h2>
      <p className="subtitle">“My technical toolkit and core competencies”</p>
      <div className="grid">
        {Object.entries(skills).map(([cat, list]) => (
          <div className="card" key={cat}>
            <h4>{cat}</h4>
            <div className="skill-wrap">
              {list.map(s => (
                <span className="skill-pill" key={s.name} style={{display:'inline-flex', alignItems:'center', gap:8}}>
                  {s.logo && (
                    <img
                      src={`https://skillicons.dev/icons?i=${s.logo}`}
                      alt={`${s.name} logo`}
                      width={18}
                      height={18}
                      loading="lazy"
                      style={{display:'inline-block'}}
                    />
                  )}
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

