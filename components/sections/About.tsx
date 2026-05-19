import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'
import GlassCard from '@/components/ui/GlassCard'
import GradientText from '@/components/ui/GradientText'
import { aboutData } from '@/lib/data'

export default function About() {
  return (
    <AnimatedSection id="about" className="bg-[var(--bg-secondary)]">
      <div className="section-container">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-[var(--accent-cyan)] tracking-widest uppercase mb-3">
            Who I Am
          </p>
          <GradientText as="h2" variant="cyan-violet" className="section-heading">
            About Me
          </GradientText>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="flex flex-col gap-6">
            {aboutData.paragraphs.map((para, i) => (
              <p key={i} className="text-[var(--text-secondary)] leading-relaxed text-base lg:text-lg">
                {para}
              </p>
            ))}

            {/* Highlight chips */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
              {aboutData.highlights.map((h, i) => (
                <GlassCard
                  key={i}
                  hover
                  glowColor={i === 0 ? 'green' : i === 1 ? 'cyan' : 'violet'}
                  className="text-center py-5"
                >
                  <div className="text-3xl mb-2">{h.icon}</div>
                  <div className="text-sm font-semibold text-[var(--text-primary)] mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                    {h.title}
                  </div>
                  <div className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {h.description}
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Images: stacked GCC Summit + casual */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 items-center lg:items-end">
            {/* Primary — GCC Summit (speaking) */}
            <div
              className="relative rounded-2xl overflow-hidden flex-shrink-0"
              style={{
                width: '100%',
                maxWidth: 380,
                height: 340,
                boxShadow: '0 20px 60px rgba(0,212,255,0.15), 0 0 0 1px rgba(0,212,255,0.1)',
              }}
            >
              <Image
                src={aboutData.photo}
                alt={aboutData.photoAlt}
                fill
                className="object-cover object-top"
              />
              <div
                className="absolute bottom-0 left-0 right-0 px-4 py-3"
                style={{ background: 'linear-gradient(to top, rgba(10,10,15,0.85), transparent)' }}
              >
                <p className="text-xs text-[var(--accent-cyan)] font-semibold">GCC Innovation Summit 2025</p>
              </div>
            </div>

            {/* Secondary — casual photo */}
            <div
              className="relative rounded-2xl overflow-hidden flex-shrink-0"
              style={{
                width: '100%',
                maxWidth: 380,
                height: 200,
                boxShadow: '0 12px 40px rgba(124,58,237,0.12), 0 0 0 1px rgba(124,58,237,0.1)',
              }}
            >
              <Image
                src={aboutData.casualPhoto}
                alt={aboutData.casualPhotoAlt}
                fill
                className="object-cover object-top"
                style={{ objectPosition: 'top center' }}
              />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
