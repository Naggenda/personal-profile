import React from 'react'
import SectionHeader from '../ui/SectionHeader'
import ExperienceTimeline from '../ui/sections/ExperienceTimeline'
import ResumeDownload from '../ui/sections/ResumeDownload'

export default function ExperiencePage() {
  return (
    <div className="page">
      <SectionHeader title="Experience" subtitle="What I’ve been building and supporting" />
      <ExperienceTimeline />
      <ResumeDownload />
    </div>
  )
}


