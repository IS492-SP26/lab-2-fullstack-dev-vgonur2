import { Coffee, Camera, Plane, Code2 } from "lucide-react"

const interests = [
  { icon: Coffee, label: "Coffee", color: "bg-amber-100 text-amber-700" },
  { icon: Camera, label: "Photography", color: "bg-sky-100 text-sky-700" },
  { icon: Plane, label: "Travel", color: "bg-emerald-100 text-emerald-700" },
  { icon: Code2, label: "Coding", color: "bg-primary/10 text-primary" },
]

export function About() {
  return (
    <section id="about" className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About Me
          </h2>
          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-primary" />
        </div>

        <div className="grid items-start gap-12 md:grid-cols-2">
          {/* Left - Bio */}
          <div className="space-y-5">
            <p className="leading-relaxed text-muted-foreground">
              {
                "I'm a passionate web developer and designer based in San Francisco with over 5 years of experience creating digital solutions. I love turning complex problems into simple, elegant designs."
              }
            </p>
            <p className="leading-relaxed text-muted-foreground">
              My journey started with a curiosity for how things work on the
              web. Today, I specialize in building responsive, accessible
              websites using modern technologies like React, Next.js, and
              Tailwind CSS.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              When I&apos;m not coding, you can find me exploring coffee shops,
              capturing moments through photography, or planning my next travel
              adventure. I believe great design comes from understanding people
              and their needs.
            </p>
          </div>

          {/* Right - Interests */}
          <div className="rounded-xl border border-border bg-background p-8">
            <h3 className="mb-6 font-heading text-lg font-semibold text-foreground">
              Things I Enjoy
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {interests.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-shadow hover:shadow-md"
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.color}`}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
