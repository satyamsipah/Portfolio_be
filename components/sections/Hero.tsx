'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, Linkedin, Mail, ChevronDown, ExternalLink, Instagram } from 'lucide-react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import dynamic from 'next/dynamic'
import TypingEffect from '@/components/ui/TypingEffect'
import { heroData } from '@/lib/data'

const ParticleBackground = dynamic(() => import('@/components/ui/ParticleBackground'), { ssr: false })

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.5 })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-grid-pattern"
      style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(0,212,255,0.05) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(124,58,237,0.05) 0%, transparent 50%), var(--bg-primary)' }}
    >
      <ParticleBackground />

      {/* Gradient orbs */}
      <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full blur-[100px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00d4ff, transparent)' }} />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 rounded-full blur-[100px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />

      <div className="section-container relative z-10 pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Availability badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium glass-card border border-[rgba(0,255,136,0.3)] text-[#00ff88]">
                <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                Open for Internship &amp; Placement Roles
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants}>
              <h1
                className="text-5xl lg:text-6xl xl:text-7xl font-black leading-tight gradient-text"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {heroData.name}
              </h1>
            </motion.div>

            {/* Typing effect */}
            <motion.div variants={itemVariants} className="h-10">
              <p className="text-xl lg:text-2xl font-medium text-[var(--text-secondary)]">
                <TypingEffect
                  sequences={heroData.roles}
                  className="text-[var(--accent-cyan)]"
                />
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.p variants={itemVariants} className="text-base lg:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl">
              {heroData.tagline}
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">
                <ExternalLink size={16} />
                View Projects
              </a>
            </motion.div>

            {/* Social icons */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <a
                href={heroData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-card hover:border-[rgba(0,212,255,0.4)] hover:text-[var(--accent-cyan)] text-[var(--text-secondary)] transition-all hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={heroData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-card hover:border-[rgba(0,119,181,0.4)] hover:text-[#0077b5] text-[var(--text-secondary)] transition-all hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={heroData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-card hover:border-[rgba(225,48,108,0.4)] hover:text-[#e1306c] text-[var(--text-secondary)] transition-all hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={`mailto:${heroData.email}`}
                className="p-3 rounded-xl glass-card hover:border-[rgba(0,212,255,0.4)] hover:text-[var(--accent-cyan)] text-[var(--text-secondary)] transition-all hover:-translate-y-1"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-full animate-glow"
                style={{
                  background: 'conic-gradient(from 0deg, #00d4ff, #7c3aed, #00ff88, #00d4ff)',
                  padding: '3px',
                  borderRadius: '50%',
                  filter: 'blur(1px)',
                }}
              />
              {/* Inner border */}
              <div
                className="relative animate-float"
                style={{
                  width: 320,
                  height: 320,
                  borderRadius: '50%',
                  padding: '4px',
                  background: 'conic-gradient(from 0deg, #00d4ff, #7c3aed, #00ff88, #00d4ff)',
                }}
              >
                <div
                  className="w-full h-full rounded-full overflow-hidden"
                  style={{ background: 'var(--bg-primary)' }}
                >
                  <Image
                    src={heroData.photo}
                    alt={heroData.photoAlt}
                    width={320}
                    height={320}
                    className="object-cover w-full h-full rounded-full"
                    priority
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div
                className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center text-lg"
                style={{ background: 'rgba(0,212,255,0.15)', border: '1px solid rgba(0,212,255,0.3)' }}
              >
                🧬
              </div>
              <div
                className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center text-lg"
                style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)' }}
              >
                💻
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0"
        >
          {heroData.stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card p-5 text-center hover:border-[rgba(0,212,255,0.3)] transition-all"
            >
              <div
                className="text-3xl font-black gradient-text-cyan-violet"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {statsInView ? (
                  <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
                ) : (
                  '0'
                )}
              </div>
              <div className="text-xs text-[var(--text-secondary)] mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-secondary)]"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </motion.div>
    </section>
  )
}
