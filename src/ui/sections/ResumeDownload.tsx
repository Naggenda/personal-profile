import React from 'react'

export default function ResumeDownload() {
  // Update this path once you add your actual resume file.
  // Example: put `public/resume.pdf` then set href="/resume.pdf".
  const href = '/resume.pdf'

  return (
    <section className="section">
      <div className="container">
        <div className="resumeCard">
          <div>
            <h3 className="h3" style={{ marginBottom: '0.25rem' }}>
              Download Resume
            </h3>
            <p className="p" style={{ marginTop: 0 }}>
              Get my full profile in PDF format.
            </p>
          </div>

          <a className="btn btnPrimary" href={href} download>
            Download PDF
          </a>
        </div>
      </div>
    </section>
  )
}

