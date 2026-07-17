"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

import { PixelTransition } from "@/components/ui/pixel-transition";
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

function PixelSubmitButton({ submitting }: { submitting: boolean }) {
  const [active, setActive] = useState(false);

  return (
    <button
      type="submit"
      disabled={submitting}
      onMouseEnter={() => !submitting && setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => !submitting && setActive(true)}
      onBlur={() => setActive(false)}
      className="relative inline-flex h-12 w-full items-center justify-center gap-2 overflow-hidden border border-primary bg-primary px-6 text-base font-bold text-primary-foreground transition-opacity disabled:pointer-events-none disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <PixelTransition
        active={active}
        columns={12}
        rows={4}
        animationStepDuration={0.32}
        exitAnimationStepDuration={0.32}
        pixelColor="hsl(var(--accent))"
        exitPixelColor="hsl(var(--primary))"
        squarePixels
        pixelSize={12}
        className="pointer-events-none absolute inset-0"
        firstContent={<span className="block size-full bg-primary" />}
        secondContent={<span className="block size-full bg-accent" />}
      />
      {submitting ? (
        <>
          <Loader2 className="relative z-20 h-4 w-4 animate-spin text-primary-foreground" />
          <span className="relative z-20 text-primary-foreground">Sending...</span>
        </>
      ) : (
        <>
          <span
            className={`relative z-20 transition-colors duration-200 ${
              active ? "text-accent-foreground" : "text-primary-foreground"
            }`}
          >
            Send message
          </span>
          <ArrowRight
            className={`relative z-20 h-4 w-4 transition-colors duration-200 ${
              active ? "text-accent-foreground" : "text-primary-foreground"
            }`}
          />
        </>
      )}
    </button>
  );
}

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
      <div className="flex h-full flex-col items-center justify-center gap-4 border border-border bg-background p-8 text-center sm:p-10">
        <div className="grid h-14 w-14 place-items-center rounded-md bg-accent-soft text-accent">
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
          className="rounded-none"
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
      className="border border-border bg-background p-6 sm:p-8"
    >
      <div className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="firstName">First name</Label>
            <Input id="firstName" name="firstName" autoComplete="given-name" className="h-10 rounded-none" required />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="lastName">Last name</Label>
            <Input id="lastName" name="lastName" autoComplete="family-name" className="h-10 rounded-none" required />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" className="h-10 rounded-none" required />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="phone">
            Phone <span className="font-normal text-muted-foreground">(optional)</span>
          </Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="(555) 000-0000" className="h-10 rounded-none" />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="topic">How can we help?</Label>
          <Select value={topic} onValueChange={setTopic}>
            <SelectTrigger id="topic" className="h-10 w-full rounded-none">
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
            className="min-h-32 rounded-none"
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
        <PixelSubmitButton submitting={submitting} />
      </div>
    </form>
  );
}
