"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const topics = [
  "General enquiry",
  "Help with my application",
  "Rates & fees",
  "Repayment & support",
  "Partnerships",
  "Something else",
];

type Status = "idle" | "submitting" | "success";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [topic, setTopic] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // NOTE: no backend is wired yet. This simulates a successful submit so the
    // UX is complete — replace with a Route Handler / email service (e.g. POST
    // to /api/contact) when the backend is ready.
    setTimeout(() => setStatus("success"), 900);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-border bg-card p-8 text-center shadow-soft sm:p-10">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-accent-soft text-accent">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
          Message sent
        </h2>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Thanks for reaching out. A member of our team will get back to you within
          one business day.
        </p>
        <Button
          variant="soft"
          size="lg"
          onClick={() => {
            setTopic("");
            setStatus("idle");
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
    >
      <div className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="firstName">First name</Label>
            <Input id="firstName" name="firstName" autoComplete="given-name" className="h-11" required />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="lastName">Last name</Label>
            <Input id="lastName" name="lastName" autoComplete="family-name" className="h-11" required />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" className="h-11" required />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="phone">
            Phone <span className="font-normal text-muted-foreground">(optional)</span>
          </Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="(555) 000-0000" className="h-11" />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="topic">How can we help?</Label>
          <Select value={topic} onValueChange={setTopic}>
            <SelectTrigger id="topic" className="h-11 w-full">
              <SelectValue placeholder="Choose a topic" />
            </SelectTrigger>
            <SelectContent position="popper">
              {topics.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us a little about what you need…"
            className="min-h-32"
            required
          />
        </div>

        <p className="text-xs leading-relaxed text-muted-foreground">
          By submitting, you agree to be contacted about your enquiry. We never share
          your details — read our{" "}
          <a href="/privacy-policy" className="font-medium text-primary underline-offset-4 hover:underline">
            Privacy Policy
          </a>
          .
        </p>

        <Button type="submit" variant="hero" size="lg" className="w-full" disabled={submitting}>
          {submitting ? (
            <>
              <Loader2 className="mr-1 h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send message
              <ArrowRight className="ml-1 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
