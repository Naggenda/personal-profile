import React from 'react'
import SectionHeader from '../ui/SectionHeader'
import ProjectCards from '../ui/sections/ProjectCards'

export default function ProjectsPage() {
  return (
    <div className="page">
      <SectionHeader title="Projects" subtitle="Selected work across web development and networking" />
      <ProjectCards />
    </div>
  )
}

