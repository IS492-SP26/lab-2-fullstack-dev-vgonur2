import Image from "next/image"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "E-commerce Store",
    description:
      "A full-featured online store with product filtering, cart management, and secure checkout built with Next.js and Stripe.",
    image: "/images/project-ecommerce.jpg",
    tags: ["Next.js", "Stripe", "Tailwind"],
  },
  {
    title: "Restaurant Website",
    description:
      "An elegant restaurant website with online reservations, menu browsing, and a beautiful gallery of culinary creations.",
    image: "/images/project-restaurant.jpg",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Portfolio Blog",
    description:
      "A modern blog platform with markdown support, tag-based filtering, and a sleek reading experience for content creators.",
    image: "/images/project-blog.jpg",
    tags: ["Next.js", "MDX", "Vercel"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            My Projects
          </h2>
          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-primary" />
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            A selection of recent work that showcases my skills in design and
            development.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title} project`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
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
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
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
