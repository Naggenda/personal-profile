import React from 'react'

type Project = {
  title: string
  description: string
  tags: string[]
  highlights: string[]
}

const PROJECTS: Project[] = [
  {
    title: 'Network Helper Dashboard',
    description:
      'A dashboard-style UI for monitoring connectivity and managing common network checks.',
    tags: ['React', 'REST APIs', 'UI/UX'],
    highlights: [
      'Clean component architecture',
      'Practical status views',
      'Responsive layout',
    ],
  },
  {
    title: 'Full Stack Task Manager',
    description:
      'A simple productivity app with a backend API and modern front-end patterns.',
    tags: ['TypeScript', 'Node.js', 'Databases'],
    highlights: [
      'CRUD operations via API',
      'Reusable UI components',
      'Clear data model',
    ],
  },
  {
    title: 'Portfolio/Blog Template',
    description:
      'A multi-route template for sharing projects, experience, and technical notes.',
    tags: ['React Router', 'Responsive UI'],
    highlights: [
      'Route-level pages',
      'Reusable section layout',
      'Fast navigation',
    ],
  },
]

export default function ProjectCards() {
  return (
    <div className="cardsGrid">
      {PROJECTS.map((p) => (
        <article className="card" key={p.title}>
          <h3 className="cardTitle">{p.title}</h3>
          <p className="cardText">{p.description}</p>

          <div className="cardTags">
            {p.tags.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>

          <ul className="cardList">
            {p.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}

