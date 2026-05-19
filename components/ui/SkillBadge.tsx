'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { cn } from '@/lib/utils'

interface SkillBadgeProps {
  name: string
  level?: number
  category?: 'bio' | 'programming' | 'fullstack' | 'ai'
  className?: string
}

const categoryColors = {
  bio: { border: 'rgba(0,255,136,0.3)', bg: 'rgba(0,255,136,0.07)', bar: '#00ff88', text: '#00ff88' },
  programming: { border: 'rgba(0,212,255,0.3)', bg: 'rgba(0,212,255,0.07)', bar: '#00d4ff', text: '#00d4ff' },
  fullstack: { border: 'rgba(124,58,237,0.3)', bg: 'rgba(124,58,237,0.07)', bar: '#7c3aed', text: '#a78bfa' },
  ai: { border: 'rgba(251,191,36,0.3)', bg: 'rgba(251,191,36,0.07)', bar: '#fbbf24', text: '#fde68a' },
}

export default function SkillBadge({ name, level, category = 'programming', className }: SkillBadgeProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const colors = categoryColors[category]

  return (
    <div
      ref={ref}
      className={cn('rounded-xl p-3 transition-all duration-300 hover:-translate-y-0.5', className)}
      style={{ background: colors.bg, border: `1px solid ${colors.border}` }}
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium" style={{ color: colors.text, fontFamily: 'var(--font-heading)' }}>
          {name}
        </span>
        {level !== undefined && (
          <span className="text-xs opacity-60" style={{ color: colors.text }}>
            {level}%
          </span>
        )}
      </div>
      {level !== undefined && (
        <div className="h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
          <motion.div
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${colors.bar}, ${colors.bar}88)` }}
            initial={{ width: 0 }}
            animate={{ width: inView ? `${level}%` : 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          />
        </div>
      )}
    </div>
  )
}
