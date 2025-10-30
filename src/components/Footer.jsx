import React from 'react'

export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container" style={{ padding:'4px 0', textAlign:'center' }}>
        <small style={{ color:'#6b7280' }}>&copy; {year} Ashish Phapale. All rights reserved.</small>
      </div>
    </footer>
  )
}
