import React from 'react'

export default function AboutSection() {
  return (
    <section className="section">
      <div className="container sectionGrid">
        <div className="sectionBlock">
          <h3 className="h3">About</h3>
          <p className="p">
            I’m Naggenda Joshua — a full stack developer with a strong interest in networking.
            I like building maintainable systems, documenting clearly, and troubleshooting until
            everything behaves as expected.
          </p>
          <p className="p">
            I can help with front-end UI, backend APIs, database design, and network
            configurations/troubleshooting.
          </p>
        </div>

        <div className="sectionBlock">
          <h3 className="h3">Highlights</h3>
          <ul className="list">
            <li>React UI that feels fast and responsive</li>
            <li>Backend APIs with pragmatic architecture</li>
            <li>Networking support: connectivity, routing, and diagnostics</li>
            <li>Clean structure and testable components</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

