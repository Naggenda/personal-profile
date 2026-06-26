import React from 'react'
import HeroSection from '../ui/sections/HeroSection'
import AboutSection from '../ui/sections/AboutSection'
import SkillsSection from '../ui/sections/SkillsSection'
import QuickLinks from '../ui/sections/QuickLinks'

export default function HomePage() {
  return (
    <div className="page">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <QuickLinks />
    </div>
  )
}

