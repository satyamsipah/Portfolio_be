import AnimatedSection from '@/components/ui/AnimatedSection'
import GlassCard from '@/components/ui/GlassCard'
import GradientText from '@/components/ui/GradientText'
import { projects } from '@/lib/data'
import { ExternalLink, Github, Clock } from 'lucide-react'

const tagColorMap = {
  cyan: { bg: 'rgba(0,212,255,0.1)', border: 'rgba(0,212,255,0.25)', text: '#00d4ff' },
  violet: { bg: 'rgba(124,58,237,0.1)', border: 'rgba(124,58,237,0.25)', text: '#a78bfa' },
  green: { bg: 'rgba(0,255,136,0.1)', border: 'rgba(0,255,136,0.25)', text: '#00ff88' },
}

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="bg-[var(--bg-secondary)]">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-[var(--accent-cyan)] tracking-widest uppercase mb-3">
            What I've Built
          </p>
          <GradientText as="h2" variant="full" className="section-heading">
            Projects
          </GradientText>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {projects
            .filter((p) => !p.isFuture)
            .map((project) => {
              const colors = tagColorMap[project.tagColor]
              return (
                <GlassCard key={project.id} hover glowColor={project.tagColor} className="flex flex-col gap-4 h-full">
                  {/* Tag */}
                  <span
                    className="inline-flex self-start items-center px-3 py-1 rounded-full text-xs font-medium"
                    style={{ background: colors.bg, border: `1px solid ${colors.border}`, color: colors.text }}
                  >
                    {project.tag}
                  </span>

                  {/* Title */}
                  <div>
                    <h3
                      className="text-lg font-bold text-[var(--text-primary)] mb-1"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] font-mono">{project.subtitle}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="chip text-xs">{t}</span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-sm py-2 px-4"
                    >
                      <ExternalLink size={13} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-sm py-2 px-4"
                    >
                      <Github size={13} />
                      GitHub
                    </a>
                  </div>
                </GlassCard>
              )
            })}
        </div>

        {/* Future teaser */}
        {projects
          .filter((p) => p.isFuture)
          .map((project) => (
            <div
              key={project.id}
              className="rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 relative overflow-hidden"
              style={{
                border: '1px dashed rgba(124,58,237,0.3)',
                background: 'rgba(124,58,237,0.04)',
              }}
            >
              <div className="text-4xl">🤖</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-[var(--text-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
                    {project.title}
                  </h3>
                  <span className="chip chip-violet text-xs flex items-center gap-1">
                    <Clock size={10} />
                    Coming Soon
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">{project.description}</p>
              </div>
            </div>
          ))}
      </div>
    </AnimatedSection>
  )
}
