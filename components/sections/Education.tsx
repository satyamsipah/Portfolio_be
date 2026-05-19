import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'
import GradientText from '@/components/ui/GradientText'
import { educationData } from '@/lib/data'
import { MapPin, Calendar, Star } from 'lucide-react'

export default function Education() {
  return (
    <AnimatedSection id="education">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-[var(--accent-cyan)] tracking-widest uppercase mb-3">
            Academic Background
          </p>
          <GradientText as="h2" variant="full" className="section-heading">
            Education
          </GradientText>
        </div>

        <div className="max-w-3xl mx-auto">
          <div
            className="glass-card p-8 relative overflow-hidden"
            style={{ borderLeft: '3px solid', borderImage: 'linear-gradient(to bottom, #00d4ff, #7c3aed) 1' }}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 opacity-5 text-8xl flex items-center justify-center pointer-events-none">
              🎓
            </div>

            {/* Header */}
            <div className="flex items-start gap-6 mb-6">
              <div
                className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(124,58,237,0.15))', border: '1px solid rgba(0,212,255,0.2)' }}
              >
                <Image
                  src="/images/hbtu-logo.png"
                  alt="HBTU"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
                  {educationData.institution}
                </h3>
                <p className="text-[var(--accent-cyan)] font-semibold mt-1">{educationData.degree}</p>
              </div>
            </div>

            {/* Info row */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <Calendar size={14} className="text-[var(--accent-cyan)]" />
                {educationData.duration}
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <Star size={14} className="text-[#fbbf24]" />
                CGPA: <span className="text-[var(--text-primary)] font-semibold">{educationData.cgpa}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <MapPin size={14} className="text-[var(--accent-cyan)]" />
                {educationData.location}
              </div>
            </div>

            {/* Coursework */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3 tracking-wide uppercase" style={{ fontFamily: 'var(--font-heading)' }}>
                Key Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {educationData.coursework.map((c) => (
                  <span key={c} className="chip text-xs">{c}</span>
                ))}
              </div>
            </div>

            {/* Activities */}
            <div>
              <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3 tracking-wide uppercase" style={{ fontFamily: 'var(--font-heading)' }}>
                Activities & Clubs
              </h4>
              <div className="flex flex-wrap gap-3">
                {educationData.activities.map((a) => (
                  <div
                    key={a.text}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-[var(--text-secondary)]"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <span>{a.icon}</span>
                    {a.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
