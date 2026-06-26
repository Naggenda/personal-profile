import React from 'react'

const WHATSAPP_NUMBER_E164 = '+256704582023'

function toWhatsAppLink(numberE164: string) {
  // WhatsApp wa.me expects digits only (no +)
  const digits = numberE164.replace(/^\+/, '')
  return `https://wa.me/${digits}`
}

export default function WhatsAppQuickChat() {
  return (
    <a
      className="whatsappFab"
      href={toWhatsAppLink(WHATSAPP_NUMBER_E164)}
      target="_blank"
      rel="noreferrer"
      aria-label="Quick chat on WhatsApp"
      title="WhatsApp quick chat"
    >
      <span className="whatsappIcon" aria-hidden="true">
        {/* Simple WhatsApp glyph */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.39 0 .02 5.37.02 12.02c0 2.1.54 4.14 1.57 5.94L0 24l6.23-1.56c1.76.96 3.76 1.48 5.82 1.48h.01C18.71 21.92 24 16.55 24 9.9c0-2.21-.6-4.35-1.68-6.42l-1.8 0z"
            fill="rgba(255,255,255,0.92)"
          />
          <path
            d="M17.74 13.25c-.2-.1-1.17-.58-1.35-.65-.18-.07-.31-.1-.44.1-.13.2-.5.65-.61.78-.11.13-.23.15-.43.05-.2-.1-.85-.31-1.62-1-.6-.53-1.01-1.18-1.13-1.38-.12-.2-.01-.3.09-.4.09-.1.2-.23.31-.34.1-.11.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.44-1.05-.6-1.43-.15-.36-.31-.31-.44-.32h-.38c-.13 0-.33.05-.5.25-.17.2-.66.64-.66 1.57 0 .92.68 1.81.78 1.94.1.13 1.34 2.04 3.26 2.86.45.2.8.32 1.07.41.45.15.86.13 1.18.08.36-.05 1.17-.48 1.33-.95.16-.47.16-.88.11-.95-.05-.07-.18-.12-.39-.22z"
            fill="rgba(0,0,0,0.35)"
          />
        </svg>
      </span>
    </a>
  )
}

