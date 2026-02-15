const skillGroups = [
  {
    category: "Programming Languages",
    skills: ["Python", "JavaScript", "SQL"],
    color: "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800",
  },
  {
    category: "Web Development",
    skills: ["React", "Next.js", "HTML", "CSS"],
    color: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800",
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Supabase", "Vercel", "VS Code"],
    color: "bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-900/30 dark:text-violet-300 dark:border-violet-800",
  },
  {
    category: "AI & Data",
    skills: ["Generative AI", "Data Analysis", "Machine Learning Fundamentals"],
    color: "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800",
  },
]

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 bg-slate-50 py-20 md:py-28 dark:bg-slate-900/50"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Skills & Technologies
          </h2>
          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-indigo-500" />
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            The tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="mb-5 font-heading text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all hover:shadow-md ${group.color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
