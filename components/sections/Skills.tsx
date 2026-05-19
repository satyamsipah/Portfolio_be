'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import GradientText from '@/components/ui/GradientText'
import SkillBadge from '@/components/ui/SkillBadge'
import { skillsData } from '@/lib/data'

export default function Skills() {
  const [activeTab, setActiveTab] = useState('bio')

  const tabColors: Record<string, string> = {
    bio: '#00ff88',
    programming: '#00d4ff',
    fullstack: '#7c3aed',
    ai: '#fbbf24',
  }

  const activeTabData = skillsData.find((t) => t.id === activeTab)

  return (
    <AnimatedSection id="skills" className="bg-[var(--bg-secondary)]">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-[var(--accent-cyan)] tracking-widest uppercase mb-3">
            What I Know
          </p>
          <GradientText as="h2" variant="cyan-violet" className="section-heading">
            Technical Skills
          </GradientText>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skillsData.map((tab) => {
            const isActive = activeTab === tab.id
            const color = tabColors[tab.id]
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: isActive ? color : 'var(--text-secondary)',
                  background: isActive ? `${color}18` : 'transparent',
                  border: `1px solid ${isActive ? color + '50' : 'rgba(255,255,255,0.08)'}`,
                  boxShadow: isActive ? `0 0 20px ${color}30` : 'none',
                }}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto"
          >
            {activeTabData?.skills.map((skill) => (
              <SkillBadge
                key={skill.name}
                name={skill.name}
                level={skill.level}
                category={skill.category}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </AnimatedSection>
  )
}
