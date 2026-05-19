'use client'

import { TypeAnimation } from 'react-type-animation'

interface TypingEffectProps {
  sequences: string[]
  className?: string
}

export default function TypingEffect({ sequences, className }: TypingEffectProps) {
  const animSequence: (string | number)[] = sequences.flatMap((s) => [s, 2000])

  return (
    <TypeAnimation
      sequence={animSequence}
      wrapper="span"
      speed={50}
      deletionSpeed={60}
      repeat={Infinity}
      cursor={true}
      className={className}
    />
  )
}
