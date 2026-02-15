const interests = [
  { emoji: "🚀", label: "Technology & AI" },
  { emoji: "📊", label: "Data & Analytics" },
  { emoji: "🏀", label: "Sports" },
  { emoji: "✈️", label: "Traveling" },
  { emoji: "💻", label: "Building Projects" },
]

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-slate-50 py-20 md:py-28 dark:bg-slate-900/50"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About Me
          </h2>
          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-indigo-500" />
        </div>

        <div className="grid items-start gap-12 md:grid-cols-2">
          {/* Left - Bio */}
          <div className="space-y-5">
            <p className="leading-relaxed text-muted-foreground">
              I'm a Computer Science student with a strong interest in AI, data analytics, and consulting. I'm driven by curiosity and a desire to solve real-world problems using technology.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              I have experience working with modern tools and full-stack technologies, from building responsive web applications to analyzing data and experimenting with generative AI. I'm constantly learning and exploring emerging technologies.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              I'm passionate about innovation and how technology can create positive impact. Whether it's automating workflows, deriving insights from data, or building user-friendly applications, I enjoy turning ideas into reality.
            </p>
          </div>

          {/* Right - Interests */}
          <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
            <h3 className="mb-6 font-heading text-lg font-semibold text-foreground">
              Fun Personal Interests
            </h3>
            <div className="flex flex-col gap-3">
              {interests.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-lg border border-border bg-background px-4 py-3 transition-all hover:border-indigo-300 hover:shadow-md dark:hover:border-indigo-600"
                >
                  <span className="text-2xl" role="img" aria-hidden>
                    {item.emoji}
                  </span>
                  <span className="font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
