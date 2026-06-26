import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import SiteHeader from '../ui/SiteHeader'
import SiteFooter from '../ui/SiteFooter'
import WhatsAppQuickChat from '../ui/WhatsAppQuickChat'

export default function RootLayout() {
  const location = useLocation()

  return (
    <div className="app">
      <SiteHeader activePath={location.pathname} />
      <main className="main" role="main">
        <Outlet />
      </main>
      <WhatsAppQuickChat />
      <SiteFooter />
    </div>
  )
}


