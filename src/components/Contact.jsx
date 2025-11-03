import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
emailjs.init({ publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY })
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')

  // ✅ Removed hardcoded email, now only uses env variable
  const toEmailLink = import.meta.env.VITE_CONTACT_TO_EMAIL || ''
  
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      // ✅ Removed fallback email
      const toEmail = import.meta.env.VITE_CONTACT_TO_EMAIL || ''

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS env vars not configured')
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,
          to_email: toEmail,
          subject: `Portfolio message from ${form.name}`,
          message: form.message
        },
        { publicKey }
      )

      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      const msg = err?.text || err?.message || String(err)
      console.error('EmailJS send failed:', msg)
      setErrorMsg(msg)
      setStatus('error')
    }
  }

  return (
    <div className="container section">
      <h2 className="title">Contact</h2>
      <p className="subtitle">“I’m open to internships, collaborations, and exciting projects.”</p>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {/* Quick Contact Card */}
        <div className="card" data-aos="fade-up" style={{ display: 'grid', gap: 14 }}>
          <h4>Connect</h4>
          <p style={{ margin: 0 }}>Prefer email or socials? Reach out directly:</p>
          <div style={{ display: 'grid', gap: 10 }}>
            <a
              className="btn btn-outline"
              href={`https://mail.google.com/mail/u/0/#inbox`}
              onClick={(e) => {
                e.preventDefault()
                const subject = 'Hello from your portfolio'
                const body = 'Hi Ashish,\n\nI would like to get in touch regarding...'
                if (toEmailLink) {
                  const gmailCompose = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${encodeURIComponent(toEmailLink)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
                  const opened = window.open(gmailCompose, '_blank', 'noopener,noreferrer')
                  if (!opened) {
                    const mailto = `mailto:${toEmailLink}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
                    window.location.href = mailto
                  }
                } else {
                  alert('Email not configured yet!')
                }
              }}
              aria-label="Email"
            >
              <FiMail /> Email
            </a>
            <a className="btn btn-outline" href="https://www.linkedin.com/in/ashish-phapale-611574349/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin /> LinkedIn
            </a>
            <a className="btn btn-outline" href="https://github.com/ashishphapale" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub /> GitHub
            </a>
          </div>
          <small style={{ color: 'var(--muted)' }}>Response time: typically within 24–48 hours.</small>
        </div>

        {/* Message Form Card */}
        <form onSubmit={onSubmit} className="card" data-aos="fade-up" style={{ display: 'grid', gap: 14 }}>
          <div style={{ display: 'grid', gap: 8 }}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Your full name"
              required
              style={{
                width: '100%',
                padding: 12,
                borderRadius: 10,
                border: '1px solid color-mix(in oklab, var(--text), transparent 85%)'
              }}
            />
          </div>
          <div style={{ display: 'grid', gap: 8 }}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="you@example.com"
              required
              style={{
                width: '100%',
                padding: 12,
                borderRadius: 10,
                border: '1px solid color-mix(in oklab, var(--text), transparent 85%)'
              }}
            />
          </div>
          <div style={{ display: 'grid', gap: 8 }}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={form.message}
              onChange={onChange}
              placeholder="Tell me a bit about your idea, timeline, or role..."
              required
              style={{
                width: '100%',
                padding: 12,
                borderRadius: 10,
                border: '1px solid color-mix(in oklab, var(--text), transparent 85%)'
              }}
            />
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <button className="btn btn-primary" disabled={status === 'sending'} aria-label="Send Message">
              {status === 'sending' ? 'Sending...' : (<><FiSend /> Send Message</>)}
            </button>
            {status === 'success' && <span style={{ color: 'seagreen' }}>Message sent!</span>}
            {status === 'error' && <span style={{ color: 'crimson' }}>Failed to send. {errorMsg || 'Check EmailJS config.'}</span>}
          </div>
          <small style={{ color: 'var(--muted)' }}>Your information is kept private and only used to reply to your message.</small>
        </form>
      </div>
    </div>
  )
}
