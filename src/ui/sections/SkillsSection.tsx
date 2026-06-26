import React from 'react'

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="skillGroup">
      <h3 className="h3">{title}</h3>
      <div className="chips">
        {items.map((s) => (
          <span className="chip" key={s}>
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="sectionTop">
          <h3 className="h2">Skills</h3>
          <p className="p">
            A blend of full stack development and networking fundamentals.
          </p>
        </div>

        <div className="skillsGrid">
          <SkillGroup
            title="Web / Full Stack"
            items={[
              'React',
              'TypeScript',
              'React Router',
              'Node.js',
              'REST APIs',
              'Databases (SQL/NoSQL)',
            ]}
          />
          <SkillGroup
            title="Networking"
            items={[
              'TCP/IP',
              'Routing & Subnets',
              'DNS basics',
              'Wireshark mindset',
              'Troubleshooting',
              'Connectivity checks',
            ]}
          />
        </div>
      </div>
    </section>
  )
}

