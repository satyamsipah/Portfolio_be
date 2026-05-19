import { Github, Linkedin, Mail, Instagram } from 'lucide-react'
import Image from 'next/image'
import { heroData } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(0,212,255,0.1)] bg-[var(--bg-secondary)]">
      <div className="section-container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Image
              src="/images/sm-logo.jpeg"
              alt="SM"
              width={44}
              height={44}
              className="rounded-lg object-contain"
              style={{ height: 44, width: 'auto' }}
            />
            <p className="text-sm text-[var(--text-secondary)] text-center md:text-left max-w-xs">
              Biochemical Engineer × Full-Stack Developer × AI Explorer
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={heroData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] hover:bg-[rgba(0,212,255,0.08)] transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={heroData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[#0077b5] hover:bg-[rgba(0,119,181,0.08)] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={heroData.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[#e1306c] hover:bg-[rgba(225,48,108,0.08)] transition-all"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href={`mailto:${heroData.email}`}
              className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] hover:bg-[rgba(0,212,255,0.08)] transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.05)] text-center">
          <p className="text-xs text-[var(--text-secondary)]">
            © {new Date().getFullYear()} Satyam Maddheshiya. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
