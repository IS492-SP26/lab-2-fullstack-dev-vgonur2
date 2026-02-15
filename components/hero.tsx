import { ArrowRight, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 md:flex-row md:gap-16">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Welcome to my portfolio
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="text-balance">{"Hi, I'm Vishruth Gonur"}</span>
          </h1>
          <p className="mt-3 font-heading text-xl font-medium text-indigo-300 sm:text-2xl">
            Computer Science Student | AI & Technology Enthusiast
          </p>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-300 md:text-lg">
            I'm passionate about Generative AI, data-driven problem solving, and building impactful technology solutions. I enjoy exploring how AI can transform industries and improve decision-making.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-400 hover:shadow-indigo-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              View My Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#feedback"
              className="inline-flex items-center gap-2 rounded-lg border border-indigo-400/50 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-500/20 hover:border-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <Mail className="h-4 w-4" />
              Connect With Me
            </a>
          </div>
        </div>

        {/* Photo placeholder */}
        <div className="relative flex-shrink-0">
          <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500/30 to-violet-600/30 shadow-xl ring-1 ring-white/10 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
            <div className="text-center">
              <div className="mx-auto mb-2 flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
                <span className="text-3xl font-bold text-white/80">VG</span>
              </div>
              <span className="text-sm font-medium text-white/60">Photo</span>
            </div>
          </div>
          <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl border-2 border-indigo-400/20" />
        </div>
      </div>
    </section>
  )
}
