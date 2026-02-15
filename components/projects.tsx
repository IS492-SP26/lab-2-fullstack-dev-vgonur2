import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "AI-Powered Personal Website",
    description:
      "Built using V0.dev, Next.js, and deployed with Vercel. A modern portfolio with AI-enhanced features and responsive design.",
    tags: ["V0.dev", "Next.js", "Vercel"],
  },
  {
    title: "Data Analytics Dashboard",
    description:
      "Visualized insights using Python and SQL. Interactive dashboards for exploring data trends and making data-driven decisions.",
    tags: ["Python", "SQL", "Data Viz"],
  },
  {
    title: "Full-Stack Web Application",
    description:
      "Developed a responsive web app with modern frontend frameworks. Includes authentication, database integration, and clean UI.",
    tags: ["React", "Node.js", "Supabase"],
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-background py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            My Projects
          </h2>
          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-indigo-500" />
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            A selection of projects showcasing my work in development and data.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image placeholder */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-950/50 dark:to-violet-950/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-indigo-300/50 dark:text-indigo-500/30">
                    {project.title.split(" ")[0]}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  View Project
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
