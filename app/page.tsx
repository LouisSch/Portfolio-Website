import { Inter } from 'next/font/google'

import ScrollSpy from '@/components/ScrollSpy'
import Navbar from '@/components/Navbar'
import HomeSection from '@/components/HomeSection'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <main className={`${inter.className} bg-gray-900 text-gray-100`}>
        <ScrollSpy />
        <Navbar />
        <HomeSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
    </main>
  )
}
