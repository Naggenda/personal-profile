import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container heroInner">
        <div className="heroLeft">
          <p className="eyebrow">Full Stack Developer & Networking</p>
          <h2 className="heroTitle">
            I build reliable web apps and solve network problems.
          </h2>
          <p className="heroText">
            From backend services to front-end experiences — and from troubleshooting to
            network design — I enjoy turning requirements into working solutions.
          </p>

          <div className="heroActions">
            <a
              href="https://github.com/Naggenda"
              target="_blank"
              rel="noreferrer"
              className="btn btnPrimary"
            >
              View Projects
            </a>

            <Link to="/contact" className="btn btnGhost">
              Contact Me
            </Link>
          </div>

          <div className="heroMeta">
            <div className="metaItem">
              <div className="metaLabel">Focus</div>
              <div className="metaValue">Web • APIs • Networking</div>
            </div>
            <div className="metaItem">
              <div className="metaLabel">Working Style</div>
              <div className="metaValue">Clean code • Practical delivery</div>
            </div>
          </div>
        </div>

        <div className="heroRight" aria-hidden="true">
          <div className="profileCard">
            <div className="profileAvatar" />
            <div className="profileInfo">
              <div className="profileName">Naggenda Joshua</div>
              <div className="profileSub">Full Stack • Networking</div>
              <div className="profileBadges">
                <span className="badge">React</span>
                <span className="badge">Node/Express</span>
                <span className="badge">Networking</span>
              </div>
            </div>
          </div>
          <div className="glow" />
        </div>
      </div>
    </section>
  )
}

