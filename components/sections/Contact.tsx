'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import GlassCard from '@/components/ui/GlassCard'
import GradientText from '@/components/ui/GradientText'
import { contactInfo } from '@/lib/data'
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'

const infoItems = [
  { icon: Mail, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: Phone, label: 'Phone', value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/[-\s]/g, '')}` },
  { icon: MapPin, label: 'Location', value: contactInfo.location, href: undefined },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(contactInfo.formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)] outline-none transition-all duration-200 focus:border-[rgba(0,212,255,0.4)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.08)]'
  const inputStyle = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    fontFamily: 'var(--font-body)',
  }

  return (
    <AnimatedSection id="contact">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-[var(--accent-cyan)] tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <GradientText as="h2" variant="full" className="section-heading">
            Contact Me
          </GradientText>
          <p className="mt-4 text-[var(--text-secondary)] max-w-md mx-auto">
            Interested in collaborating, have an opportunity or just want to say hello? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact info */}
          <div className="flex flex-col gap-4">
            {infoItems.map((item) => {
              const Icon = item.icon
              const Content = (
                <GlassCard hover className="flex items-center gap-4 p-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)' }}
                  >
                    <Icon size={20} className="text-[var(--accent-cyan)]" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--text-secondary)] uppercase tracking-wide mb-0.5" style={{ fontFamily: 'var(--font-heading)' }}>
                      {item.label}
                    </div>
                    <div className="text-sm font-medium text-[var(--text-primary)]">{item.value}</div>
                  </div>
                </GlassCard>
              )
              return item.href ? (
                <a key={item.label} href={item.href} className="block">{Content}</a>
              ) : (
                <div key={item.label}>{Content}</div>
              )
            })}

            <div
              className="rounded-2xl p-6 mt-2"
              style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.07), rgba(124,58,237,0.07))', border: '1px solid rgba(0,212,255,0.1)' }}
            >
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                I&apos;m currently open to internship opportunities and interesting collaborations. My response time is typically within 24–48 hours.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-[var(--text-secondary)] uppercase tracking-wide mb-1.5 block" style={{ fontFamily: 'var(--font-heading)' }}>
                  Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
              <div>
                <label className="text-xs text-[var(--text-secondary)] uppercase tracking-wide mb-1.5 block" style={{ fontFamily: 'var(--font-heading)' }}>
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-[var(--text-secondary)] uppercase tracking-wide mb-1.5 block" style={{ fontFamily: 'var(--font-heading)' }}>
                Subject
              </label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
                className={inputClass}
                style={inputStyle}
              />
            </div>

            <div>
              <label className="text-xs text-[var(--text-secondary)] uppercase tracking-wide mb-1.5 block" style={{ fontFamily: 'var(--font-heading)' }}>
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me more..."
                className={`${inputClass} resize-none`}
                style={inputStyle}
              />
            </div>

            {/* Status messages */}
            {status === 'success' && (
              <div className="flex items-center gap-2 text-sm text-[var(--biotech-green)] p-3 rounded-xl" style={{ background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.2)' }}>
                <CheckCircle size={16} />
                Message sent! I&apos;ll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 text-sm text-red-400 p-3 rounded-xl" style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
                <AlertCircle size={16} />
                Something went wrong. Please try again or email directly.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary justify-center w-full py-3 disabled:opacity-60"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </AnimatedSection>
  )
}
