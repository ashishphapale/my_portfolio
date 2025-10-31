import React from 'react'

export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, flexWrap:'wrap'}}>
        <small>© {year} Ashish Phapale. All rights reserved.</small>
    
      </div>
    </footer>
  )
}
