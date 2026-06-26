import React, { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  function submit(e: React.FormEvent) {
    e.preventDefault()
    // Placeholder: in a real app wire this to a backend or email service.
    setStatus('sent')
  }

  return (
    <div className="contactCard">
      <form className="contactForm" onSubmit={submit}>
        <div className="formRow">
          <label className="label">
            Your name
            <input
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="e.g., Naggenda"
            />
          </label>
          <label className="label">
            Email
            <input
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="you@example.com"
            />
          </label>
        </div>

        <label className="label">
          Message
          <textarea
            className="textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="How can I help?"
          />
        </label>

        <button className="btn btnPrimary" type="submit">
          {status === 'sent' ? 'Message prepared ✅' : 'Send Message'}
        </button>

        <p className="muted small">
          Note: This form is a front-end demo. Connect it to your backend/email service when ready.
        </p>
      </form>
    </div>
  )
}

