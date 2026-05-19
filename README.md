# Satyam Maddheshiya — Personal Portfolio

> Biochemical Engineering × Full-Stack Development × AI & Automation

**Live site:** https://satyam-be.vercel.app

---

## Tech Stack

| Layer | Tools |
|---|---|
| Framework | **Next.js 14** (App Router), TypeScript |
| Styling | **Tailwind CSS**, CSS custom properties |
| Animations | **Framer Motion**, `react-intersection-observer`, `react-countup` |
| Particles | **tsParticles** (`@tsparticles/react` v3 + `@tsparticles/slim`) |
| Icons | Lucide React, React Icons |
| Contact form | Formspree |
| Deployment | Vercel |

---

## Sections

| # | Section | Description |
|---|---|---|
| 1 | **Hero** | Particle background, role cycling, animated stat counters |
| 2 | **About** | Bio, highlight cards, GCC Summit & casual photos |
| 3 | **Education** | HBTU Kanpur B.Tech — coursework, CGPA, activities |
| 4 | **Skills** | 4-tab interface: Bioengineering / Programming / Full-Stack / AI & Tools |
| 5 | **Biochem Expertise** | 8 domain cards covering lab & process skills |
| 6 | **Projects** | Bioethanol research, Python kinetics toolkit, upcoming AI optimizer |
| 7 | **Experience** | Animated vertical timeline (HBTU labs, IIT Kanpur E-SDP) |
| 8 | **Achievements** | CHEM-TECHNOVA, NPTEL, SIH 2025, IIT Kanpur Cybersecurity |
| 9 | **Research Vision** | Future directions at the bio × software intersection |
| 10 | **Profiles** | GitHub, LinkedIn, Instagram, Email |
| 11 | **Contact** | Formspree-powered form with loading/success/error states |

---

## Local Setup

```bash
# 1. Install dependencies
npm install

# 2. Set up environment
echo "NEXT_PUBLIC_FORMSPREE_ID=mgoqrjbk" > .env.local

# 3. Run dev server
npm run dev
# → http://localhost:3000

# 4. Production build check
npm run build && npm start
```

---

## Project Structure

```
├── app/
│   ├── layout.tsx        # Root layout, fonts (Inter + Space Grotesk), OpenGraph meta
│   ├── page.tsx          # All sections assembled in order
│   ├── globals.css       # CSS variables, .glass-card, .gradient-text, animations
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Hero, About, Education, Skills, BiochemExpertise,
│   │                     # Projects, Experience, Achievements, Research, Profiles, Contact
│   └── ui/               # GlassCard, GradientText, AnimatedSection,
│                         # ParticleBackground, SkillBadge, TypingEffect
├── lib/
│   └── data.ts           # Single source of truth for all portfolio content
├── types/
│   └── index.ts          # TypeScript interfaces
└── public/
    └── images/           # hero-photo.jpg, about-photo.jpg, iitk-photo.png,
                          # casual-photo.jpg, sm-logo.jpeg
```

---

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_FORMSPREE_ID` | Formspree form ID (get yours at formspree.io) |

---

## Deployment

Deployed on **Vercel** — auto-builds on every push to `main`.

To add a custom domain: Vercel dashboard → Project → Settings → Domains.

---

## Contact

- Email: [satyam.sipah12@gmail.com](mailto:satyam.sipah12@gmail.com)
- LinkedIn: [linkedin.com/in/satyam-maddheshiya](https://www.linkedin.com/in/satyam-maddheshiya)
- Instagram: [instagram.com/satyam.0608](https://www.instagram.com/satyam.0608)
- GitHub: [github.com/satyamsipah](https://github.com/satyamsipah)
