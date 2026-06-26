import React from 'react'
import SectionHeader from '../ui/SectionHeader'
import ContactForm from '../ui/sections/ContactForm'

export default function ContactPage() {
  return (
    <div className="page">
      <SectionHeader title="Contact" subtitle="Let’s connect — send a message" />
      <ContactForm />
    </div>
  )
}

