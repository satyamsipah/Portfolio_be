import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Education from '@/components/sections/Education'
import Skills from '@/components/sections/Skills'
import BiochemExpertise from '@/components/sections/BiochemExpertise'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Achievements from '@/components/sections/Achievements'
import Research from '@/components/sections/Research'
import Profiles from '@/components/sections/Profiles'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <BiochemExpertise />
        <Projects />
        <Experience />
        <Achievements />
        <Research />
        <Profiles />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
