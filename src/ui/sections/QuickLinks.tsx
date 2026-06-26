import React from 'react'
import { Link } from 'react-router-dom'

export default function QuickLinks() {
  return (
    <section className="section">
      <div className="container quickLinks">
        <Link className="quickLink" to="/projects">
          <div className="quickTitle">Projects</div>
          <div className="quickText">Selected work and technical highlights</div>
        </Link>
        <Link className="quickLink" to="/experience">
          <div className="quickTitle">Experience</div>
          <div className="quickText">Timeline of what I’ve done</div>
        </Link>
        <Link className="quickLink" to="/contact">
          <div className="quickTitle">Contact</div>
          <div className="quickText">Send a message for collaboration</div>
        </Link>
      </div>
    </section>
  )
}

