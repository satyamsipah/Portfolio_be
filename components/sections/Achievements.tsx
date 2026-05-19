'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import GlassCard from '@/components/ui/GlassCard'
import GradientText from '@/components/ui/GradientText'
import { achievements } from '@/lib/data'

const containerVariants = {
  visible: { transition: { staggerChildren: 0.12 } },
  hidden: {},
}
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as number[] } },
}

export default function Achievements() {
  return (
    <AnimatedSection id="achievements" className="bg-[var(--bg-secondary)]">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-[var(--accent-cyan)] tracking-widest uppercase mb-3">
            Recognition
          </p>
          <GradientText as="h2" variant="full" className="section-heading">
            Achievements
          </GradientText>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          {achievements.map((a, i) => (
            <motion.div key={i} variants={cardVariants}>
              <GlassCard hover glowColor={i % 2 === 0 ? 'cyan' : 'violet'} className="h-full flex flex-col gap-4">
                <div className="text-4xl">{a.emoji}</div>
                <div>
                  <h3
                    className="font-bold text-[var(--text-primary)] text-base mb-1"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {a.title}
                  </h3>
                  <p className="text-xs font-semibold text-[var(--accent-cyan)] mb-2">{a.org}</p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{a.description}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
