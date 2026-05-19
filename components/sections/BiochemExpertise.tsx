'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import GradientText from '@/components/ui/GradientText'
import { biochemExpertise } from '@/lib/data'

export default function BiochemExpertise() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  return (
    <AnimatedSection id="expertise">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-[var(--biotech-green)] tracking-widest uppercase mb-3">
            Laboratory & Research
          </p>
          <GradientText as="h2" variant="violet-green" className="section-heading">
            Biochemical Engineering Expertise
          </GradientText>
          <p className="mt-4 text-[var(--text-secondary)] max-w-xl mx-auto">
            Hands-on laboratory experience across the full bioprocess pipeline — from microbial isolation to downstream recovery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {biochemExpertise.map((card, i) => {
            const isHovered = hoveredIdx === i
            return (
              <div
                key={i}
                className="glass-card p-5 flex flex-col gap-3 transition-all duration-300 cursor-default"
                style={{
                  borderColor: isHovered ? 'rgba(0,255,136,0.35)' : 'rgba(0,255,136,0.12)',
                  boxShadow: isHovered ? '0 8px 32px rgba(0,255,136,0.08)' : 'none',
                  transform: isHovered ? 'translateY(-8px)' : 'none',
                }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <div className="text-3xl">{card.emoji}</div>
                <div>
                  <h3
                    className="font-semibold text-[var(--text-primary)] text-sm mb-0.5"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-xs text-[var(--biotech-green)] opacity-80">{card.description}</p>
                </div>
                <ul className="flex flex-col gap-1">
                  {card.bullets.map((b, j) => (
                    <li key={j} className="text-xs text-[var(--text-secondary)] flex items-start gap-1.5">
                      <span className="text-[var(--biotech-green)] mt-0.5 flex-shrink-0">›</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
