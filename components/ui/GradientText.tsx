import { cn } from '@/lib/utils'
import React from 'react'

type TagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

interface GradientTextProps {
  children: React.ReactNode
  as?: TagType
  variant?: 'full' | 'cyan-violet' | 'violet-green'
  className?: string
}

export default function GradientText({
  children,
  as: Tag = 'span',
  variant = 'full',
  className,
}: GradientTextProps) {
  const variantMap = {
    full: 'gradient-text',
    'cyan-violet': 'gradient-text-cyan-violet',
    'violet-green': 'bg-gradient-to-r from-[#7c3aed] to-[#00ff88] bg-clip-text text-transparent',
  }

  return (
    <Tag className={cn(variantMap[variant], className)}>
      {children}
    </Tag>
  )
}
