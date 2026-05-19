import AnimatedSection from '@/components/ui/AnimatedSection'
import GradientText from '@/components/ui/GradientText'
import { researchVision } from '@/lib/data'

export default function Research() {
  return (
    <AnimatedSection id="research">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-[var(--biotech-green)] tracking-widest uppercase mb-3">
            Vision
          </p>
          <GradientText as="h2" variant="violet-green" className="section-heading">
            Research & Innovation
          </GradientText>
          <p className="mt-4 text-[var(--text-secondary)] text-lg font-medium">Where Biology Meets Code</p>
          <p className="mt-2 text-[var(--text-secondary)] max-w-lg mx-auto text-sm">
            My research interests lie at the intersection of bioengineering, AI, and sustainable technology.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {researchVision.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 flex flex-col gap-4 transition-all duration-500 animate-border-glow group hover:-translate-y-2"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid rgba(0,212,255,0.15)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,212,255,0.1), rgba(124,58,237,0.1))',
                  border: '1px solid rgba(0,212,255,0.15)',
                  boxShadow: '0 0 20px rgba(0,212,255,0.08)',
                }}
              >
                {item.emoji}
              </div>
              <div>
                <h3
                  className="font-bold text-[var(--text-primary)] mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
