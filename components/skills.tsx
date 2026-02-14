const skillGroups = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript"],
  },
  {
    category: "Design Tools",
    skills: ["Figma", "Photoshop", "Illustrator"],
  },
  {
    category: "Other",
    skills: ["WordPress", "Git", "Node.js", "Tailwind CSS"],
  },
]

const categoryColors: Record<string, string> = {
  Frontend: "bg-primary/10 text-primary border-primary/20",
  "Design Tools": "bg-accent/10 text-accent border-accent/20",
  Other: "bg-foreground/5 text-foreground border-foreground/10",
}

export function Skills() {
  return (
    <section id="skills" className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {"Skills & Technologies"}
          </h2>
          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-primary" />
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            The tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-border bg-background p-6"
            >
              <h3 className="mb-5 font-heading text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-lg border px-4 py-2 text-sm font-medium transition-shadow hover:shadow-md ${
                      categoryColors[group.category]
                    }`}
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
