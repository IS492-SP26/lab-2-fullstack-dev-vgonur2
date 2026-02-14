import Image from "next/image"
import { ArrowRight, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Subtle decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/5" />
        <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-accent/5" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 md:flex-row md:gap-16">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Welcome to my portfolio
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="text-balance">{"Hi, I'm Sarah Johnson"}</span>
          </h1>
          <p className="mt-3 font-heading text-xl font-medium text-primary sm:text-2xl">
            Web Developer & Designer
          </p>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            I create beautiful, functional websites that help businesses grow.
            Combining clean code with thoughtful design to deliver experiences
            users love.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              View My Work
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-all hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Mail className="h-4 w-4" />
              Get In Touch
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="relative flex-shrink-0">
          <div className="relative h-64 w-64 overflow-hidden rounded-2xl shadow-xl sm:h-80 sm:w-80 lg:h-96 lg:w-96">
            <Image
              src="/images/hero-portrait.jpg"
              alt="Sarah Johnson, Web Developer and Designer"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Decorative accent */}
          <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl border-2 border-primary/20" />
        </div>
      </div>
    </section>
  )
}
