import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glowColor?: 'cyan' | 'violet' | 'green'
  onClick?: () => void
}

export default function GlassCard({
  children,
  className,
  hover = false,
  glowColor = 'cyan',
  onClick,
}: GlassCardProps) {
  const glowMap = {
    cyan: 'hover:border-[rgba(0,212,255,0.4)] hover:shadow-[0_8px_32px_rgba(0,212,255,0.1)]',
    violet: 'hover:border-[rgba(124,58,237,0.4)] hover:shadow-[0_8px_32px_rgba(124,58,237,0.1)]',
    green: 'hover:border-[rgba(0,255,136,0.4)] hover:shadow-[0_8px_32px_rgba(0,255,136,0.1)]',
  }

  return (
    <div
      onClick={onClick}
      className={cn(
        'glass-card p-6',
        hover && 'transition-all duration-300 hover:-translate-y-1 cursor-pointer',
        hover && glowMap[glowColor],
        className
      )}
    >
      {children}
    </div>
  )
}
