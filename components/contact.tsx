"use client"

import { useState } from "react"
import { Send, Mail, Github, Linkedin, Twitter } from "lucide-react"

const socials = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Feedback
          </h2>
          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-primary" />
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            {"Have a question or want to work together? Drop me a message!"}
          </p>
        </div>

        <div className="grid items-start gap-12 md:grid-cols-2">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-xl border border-border bg-card p-8 shadow-sm"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Your message..."
                className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50"
              disabled={submitted}
            >
              {submitted ? (
                "Message Sent!"
              ) : (
                <>
                  Send Message
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          {/* Contact info */}
          <div className="space-y-8">
            <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
              <h3 className="mb-4 font-heading text-lg font-semibold text-foreground">
                Get In Touch
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {
                  "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
                }
              </p>
              <a
                href="mailto:sarah@example.com"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                <Mail className="h-4 w-4" />
                sarah@example.com
              </a>
            </div>

            <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
              <h3 className="mb-4 font-heading text-lg font-semibold text-foreground">
                Find Me Online
              </h3>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-sm"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
