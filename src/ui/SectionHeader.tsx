import React from 'react'

export default function SectionHeader({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <section className="sectionHeader">
      <h1 className="sectionTitle">{title}</h1>
      {subtitle ? <p className="sectionSubtitle">{subtitle}</p> : null}
    </section>
  )
}

