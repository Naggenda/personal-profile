import React from 'react'

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div className="muted">© {new Date().getFullYear()} Naggenda Joshua</div>
        <div className="muted">Built with React • Multi-route profile</div>
      </div>
    </footer>
  )
}

