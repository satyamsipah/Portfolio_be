export interface NavLink {
  label: string
  href: string
}

export interface HeroStat {
  value: number
  suffix: string
  label: string
}

export interface HeroData {
  name: string
  roles: string[]
  tagline: string
  stats: HeroStat[]
  photo: string
  photoAlt: string
  githubUrl: string
  linkedinUrl: string
  instagramUrl: string
  email: string
}

export interface AboutHighlight {
  icon: string
  title: string
  description: string
}

export interface AboutData {
  paragraphs: string[]
  highlights: AboutHighlight[]
  photo: string
  photoAlt: string
  casualPhoto: string
  casualPhotoAlt: string
}

export interface EducationData {
  institution: string
  degree: string
  duration: string
  cgpa: string
  coursework: string[]
  activities: { icon: string; text: string }[]
  location: string
}

export interface Skill {
  name: string
  level?: number
  category: 'bio' | 'programming' | 'fullstack' | 'ai'
}

export interface SkillTab {
  id: string
  label: string
  skills: Skill[]
}

export interface BiochemCard {
  emoji: string
  title: string
  description: string
  bullets: string[]
}

export interface Project {
  id: string
  title: string
  subtitle: string
  tag: string
  tagColor: 'cyan' | 'violet' | 'green'
  description: string
  tech: string[]
  demoUrl: string
  githubUrl: string
  isFuture?: boolean
}

export interface ExperienceEntry {
  period: string
  title: string
  org: string
  bullets: string[]
  type: 'academic' | 'event' | 'certification'
}

export interface Achievement {
  emoji: string
  title: string
  org: string
  description: string
}

export interface ResearchVision {
  emoji: string
  title: string
  description: string
}

export interface Profile {
  platform: string
  handle: string
  url: string
  color: string
  iconKey: 'github' | 'linkedin' | 'email' | 'instagram'
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
  formspreeEndpoint: string
}
