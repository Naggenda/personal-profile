import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import RootLayout from './RootLayout'
import HomePage from './HomePage'
import ProjectsPage from './ProjectsPage'
import ExperiencePage from './ExperiencePage'
import ContactPage from './ContactPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="contact" element={<ContactPage />} />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

