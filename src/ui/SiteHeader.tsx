import React from 'react'
import { Link } from 'react-router-dom'
import clsx from './utils/clsx'


const NAV = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/experience', label: 'Experience' },
  { path: '/contact', label: 'Contact' },
]

export default function SiteHeader({ activePath }: { activePath: string }) {
  return (
    <header className="header">
      <div className="container headerInner">
        <div className="brand">
          <div className="brandMark" aria-hidden="true" />
          <div>
            <div className="brandName">Naggenda Joshua</div>
            <div className="brandRole">Full Stack Developer • Networking</div>
          </div>
        </div>

        <nav className="nav" aria-label="Primary">
          {NAV.map((item) => {
            const isActive = activePath === item.path || (item.path === '/' && activePath === '')
            return (
              <Link
                key={item.path}
                to={item.path}
                className={clsx('navLink', isActive && 'navLinkActive')}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

