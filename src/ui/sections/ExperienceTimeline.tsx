import React from 'react'

type Experience = {
  role: string
  org: string
  period: string
  bullets: string[]
}

const EXPERIENCE: Experience[] = [
  {
    role: 'Full Stack Developer',
    org: 'Monievend Company Limited – Abuja, Nigeria',
    period: 'Feb 2023 – Mar 2025',
    bullets: [
      'Developed and maintained secure web applications, including transaction systems',
      'Designed responsive interfaces aligned with modern UI standards',
      'Integrated REST APIs to support financial operations',
      'Collaborated with teams to improve system performance and reliability',
    ],
  },
  {
    role: 'IT Networks Support Technician',
    org: 'GD Simpsons Services Ltd',
    period: 'Mar 2025 – Present',
    bullets: [
      'Installed and maintained network infrastructure supporting business operations',
      'Diagnosed and resolved system/network issues to minimize downtime',
      'Strengthened system reliability and operational efficiency',
    ],
  },
  {
    role: 'Software Engineer',
    org: 'Toughblue Uganda Ltd',
    period: 'Jun 2021 – Aug 2021',
    bullets: [
      'Supported deployment and maintenance of web systems',
      'Performed debugging and system monitoring',
      'Assisted in server and application management',
    ],
  },
  {
    role: 'Network Infrastructure Setup / Deployment Support',
    org: 'Mapeera House (Project support)',
    period: 'Ongoing / Project-based support',
    bullets: [
      'Assisted in the deployment and physical installation of enterprise network infrastructure',
      'Configured networking equipment including switches, routers, and access points',
      'Carried out LAN cabling, workstation connectivity, and device setup',
      'Conducted troubleshooting and maintenance to ensure network reliability and uptime',
      'Collaborated with technical teams to support smooth system operations',
    ],
  },
]


export default function ExperienceTimeline() {
  return (
    <div className="timeline">
      {EXPERIENCE.map((e) => (
        <div className="timelineItem" key={e.role + e.org}>
          <div className="timelineDot" aria-hidden="true" />
          <div className="timelineContent">
            <div className="timelineTop">
              <h3 className="cardTitle">{e.role}</h3>
              <div className="timelinePeriod">{e.period}</div>
            </div>
            <div className="timelineOrg">{e.org}</div>
            <ul className="cardList">
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

