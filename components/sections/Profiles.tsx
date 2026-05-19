import AnimatedSection from '@/components/ui/AnimatedSection'
import GradientText from '@/components/ui/GradientText'
import { profiles } from '@/lib/data'
import { Github, Linkedin, Mail, Instagram, ArrowUpRight } from 'lucide-react'

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  email: Mail,
}

const bgMap: Record<string, string> = {
  github: 'rgba(51,51,51,0.2)',
  linkedin: 'rgba(0,119,181,0.12)',
  instagram: 'rgba(0,212,255,0.1)',
  email: 'rgba(0,212,255,0.1)',
}

const borderMap: Record<string, string> = {
  github: 'rgba(255,255,255,0.1)',
  linkedin: 'rgba(0,119,181,0.25)',
  instagram: 'rgba(0,212,255,0.25)',
  email: 'rgba(0,212,255,0.25)',
}

export default function Profiles() {
  return (
    <AnimatedSection id="profiles" className="bg-[var(--bg-secondary)]">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-[var(--accent-cyan)] tracking-widest uppercase mb-3">
            Find Me Online
          </p>
          <GradientText as="h2" variant="cyan-violet" className="section-heading">
            Developer Profiles
          </GradientText>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-2xl mx-auto">
          {profiles.map((profile) => {
            const Icon = iconMap[profile.iconKey]
            return (
              <a
                key={profile.platform}
                href={profile.url}
                target={profile.iconKey !== 'email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex-1 flex flex-col items-center gap-4 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 group"
                style={{
                  background: bgMap[profile.iconKey],
                  border: `1px solid ${borderMap[profile.iconKey]}`,
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: profile.color + '25', border: `1px solid ${profile.color}40` }}
                >
                  <Icon size={28} style={{ color: profile.color === '#333' ? '#f0f0f0' : profile.color }} />
                </div>
                <div className="text-center">
                  <div
                    className="font-bold text-[var(--text-primary)]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {profile.platform}
                  </div>
                </div>
                <div
                  className="flex items-center gap-1 text-xs font-medium transition-colors"
                  style={{ color: profile.color === '#333' ? '#f0f0f0' : profile.color }}
                >
                  Visit
                  <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
