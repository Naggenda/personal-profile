import React, { useState } from 'react'

const FORM_URL = 'https://formspree.io/f/xknkzwyn'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [error, setError] = useState<string | null>(null)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setStatus('sending')

    const formData = new FormData()
    formData.set('name', name)
    formData.set('email', email)
    formData.set('message', message)

    try {
      const res = await fetch(FORM_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      if (!res.ok) {
        throw new Error(`Formspree request failed: ${res.status}`)
      }

      setStatus('sent')
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Unknown error'
      setError(msg)
      setStatus('idle')
    }
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
              name="name"
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
              name="email"
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
            name="message"
          />
        </label>

        <button
          className="btn btnPrimary"
          type="submit"
          disabled={status === 'sending'}
        >
          {status === 'sending'
            ? 'Sending…'
            : status === 'sent'
              ? 'Sent ✅'
              : 'Send Message'}
        </button>

        {error ? (
          <p className="muted small" role="alert">
            Error: {error}
          </p>
        ) : (
          <p className="muted small">
            This submits via Formspree and delivers to your configured email.
          </p>
        )}
      </form>
    </div>
  )
}

