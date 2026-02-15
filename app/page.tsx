import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { SectionFade } from "@/components/section-fade"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionFade>
          <About />
        </SectionFade>
        <SectionFade>
          <Projects />
        </SectionFade>
        <SectionFade>
          <Skills />
        </SectionFade>
        <SectionFade>
          <Contact />
        </SectionFade>
      </main>
      <Footer />
    </>
  )
}
