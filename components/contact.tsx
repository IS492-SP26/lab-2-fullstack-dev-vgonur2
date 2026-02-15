"use client"

import { useState, useEffect, useCallback } from "react"
import { Send, Star } from "lucide-react"
import { supabase, type FeedbackRow } from "@/lib/supabase"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

function RatingStars({ value }: { value: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${value} out of 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= value
              ? "fill-amber-400 text-amber-400"
              : "fill-muted text-muted-foreground/40"
          }`}
        />
      ))}
      <span className="ml-1.5 text-sm text-muted-foreground">({value}/5)</span>
    </span>
  )
}

function formatDate(date: string) {
  const d = new Date(date);

  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }) +
  " " +
  d.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function Contact() {
  const [feedbackList, setFeedbackList] = useState<FeedbackRow[]>([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchFeedback = useCallback(async () => {
    if (!supabase) {
      setError("Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local")
      setLoading(false)
      return
    }
    setLoading(true)
    setError(null)
    const { data, error: fetchError } = await supabase
      .from("feedback")
      .select("id, name, message, rating, created_at")
      .order("created_at", { ascending: false })
    if (fetchError) {
      setError(fetchError.message)
      setFeedbackList([])
    } else {
      setFeedbackList((data as FeedbackRow[]) ?? [])
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchFeedback()
  }, [fetchFeedback])

  useEffect(() => {
    if (!supabase) return
    const channel = supabase
      .channel("feedback-changes")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "feedback" },
        (payload) => {
          const row = payload.new as FeedbackRow
          setFeedbackList((prev) => [row, ...prev])
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    const form = e.currentTarget
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim()
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim()
    const rating = parseInt((form.elements.namedItem("rating") as HTMLInputElement).value, 10)

    if (!name || !message || rating < 1 || rating > 5) return

    if (!supabase) {
      setError("Supabase is not configured.")
      return
    }
    setSubmitting(true)
    const { error: insertError } = await supabase.from("feedback").insert({
      name,
      message,
      rating,
    })

    if (insertError) {
      setError(insertError.message)
      setSubmitting(false)
      return
    }

    form.reset()
    ;(form.elements.namedItem("rating") as HTMLInputElement).value = "5"
    setSubmitting(false)
  }

  return (
    <section id="feedback" className="scroll-mt-20 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Feedback
          </h2>
          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-indigo-500" />
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Share your thoughts or suggestions. Your feedback helps improve this site.
          </p>
        </div>

        <div className="space-y-10">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-xl space-y-5 rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Feedback message</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Your feedback..."
                className="w-full resize-none"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rating">Rating (1–5)</Label>
              <div className="flex items-center gap-3">
                <Input
                  id="rating"
                  name="rating"
                  type="number"
                  min={1}
                  max={5}
                  defaultValue={5}
                  required
                  className="w-20"
                />
                <span className="text-sm text-muted-foreground">stars</span>
              </div>
            </div>
            {error && (
              <p className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">
                {error}
              </p>
            )}
            <Button type="submit" className="w-full" disabled={submitting}>
              {submitting ? (
                "Submitting…"
              ) : (
                <>
                  Submit
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>

          {/* Feedback list */}
          <div className="mx-auto max-w-3xl">
            <h3 className="mb-4 font-heading text-lg font-semibold text-foreground">
              Recent feedback
            </h3>
            {loading ? (
              <p className="text-sm text-muted-foreground">Loading feedback…</p>
            ) : feedbackList.length === 0 ? (
              <p className="rounded-xl border border-dashed border-border bg-muted/30 px-6 py-8 text-center text-sm text-muted-foreground">
                No feedback yet. Be the first to share!
              </p>
            ) : (
              <ul className="grid gap-4 sm:grid-cols-1">
                {feedbackList.map((item) => (
                  <li key={item.id}>
                    <Card className="overflow-hidden border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
                      <CardHeader className="pb-2">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="font-semibold text-foreground">{item.name}</span>
                          <time
                            className="text-xs text-muted-foreground"
                            dateTime={item.created_at}
                          >
                            {formatDate(item.created_at)}
                          </time>
                        </div>
                        <div className="mt-1">
                          <RatingStars value={item.rating} />
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {item.message}
                        </p>
                      </CardContent>
                    </Card>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
