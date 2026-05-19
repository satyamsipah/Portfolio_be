'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AnimatedSection from '@/components/ui/AnimatedSection'
import GlassCard from '@/components/ui/GlassCard'
import GradientText from '@/components/ui/GradientText'
import { experience } from '@/lib/data'

export default function Experience() {
  const { ref: lineRef, inView: lineInView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <AnimatedSection id="experience">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-[var(--accent-cyan)] tracking-widest uppercase mb-3">
            My Journey
          </p>
          <GradientText as="h2" variant="cyan-violet" className="section-heading">
            Experience
          </GradientText>
        </div>

        <div className="relative max-w-3xl mx-auto" ref={lineRef}>
          {/* Timeline line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px overflow-hidden">
            <motion.div
              className="w-full h-full origin-top"
              style={{ background: 'linear-gradient(to bottom, #00d4ff, #7c3aed)' }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: lineInView ? 1 : 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </div>

          <div className="flex flex-col gap-12">
            {experience.map((entry, i) => {
              const isLeft = i % 2 === 0
              return (
                <div
                  key={i}
                  className={`relative flex items-start gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${isLeft ? 'text-right' : 'text-left'} hidden md:block`}>
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)', color: '#00d4ff', fontFamily: 'var(--font-heading)' }}
                    >
                      {entry.period}
                    </span>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-10 hidden md:flex">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{
                        background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
                        boxShadow: '0 0 12px rgba(0,212,255,0.5)',
                      }}
                    />
                  </div>

                  {/* Card */}
                  <div className="w-full md:w-5/12">
                    {/* Mobile period badge */}
                    <span
                      className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold md:hidden"
                      style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)', color: '#00d4ff', fontFamily: 'var(--font-heading)' }}
                    >
                      {entry.period}
                    </span>
                    <GlassCard hover className="p-5 overflow-hidden">
                      {/* IIT Kanpur photo banner for certification entry */}
                      {entry.type === 'certification' && (
                        <div className="relative -mx-5 -mt-5 mb-4 h-28 overflow-hidden rounded-t-2xl">
                          <Image
                            src="/images/iitk-photo.png"
                            alt="Satyam presenting at IIT Kanpur"
                            fill
                            className="object-cover"
                            style={{
                              objectPosition: 'center top',
                              filter: 'brightness(1.2) contrast(1.1)',
                            }}
                          />
                          <div
                            className="absolute inset-0"
                            style={{ background: 'linear-gradient(to bottom, transparent, rgba(10,10,15,0.6))' }}
                          />
                        </div>
                      )}
                      <h3
                        className="font-bold text-[var(--text-primary)] mb-0.5"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {entry.title}
                      </h3>
                      <p className="text-sm text-[var(--accent-cyan)] mb-3 font-medium">{entry.org}</p>
                      <ul className="flex flex-col gap-2">
                        {entry.bullets.map((b, j) => (
                          <li key={j} className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                            <span className="text-[var(--accent-cyan)] mt-0.5 flex-shrink-0">▸</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
