import Hero from "@/components/landing/Hero"
import Benefits from "@/components/landing/Benefits"
import HowItWorks from "@/components/landing/HowItWorks"
import UseCases from "@/components/landing/UseCases"
import Impact from "@/components/landing/Impact"
import Testimonials from "@/components/landing/Testimonials"
import BlogCards from "@/components/landing/BlogCards"
import FAQ from "@/components/landing/FAQ"

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <UseCases />
      <div className="mx-auto w-full max-w-[1000px]">
        <Benefits />
        <HowItWorks />
        <Impact />
      </div>
      <Testimonials />
      <BlogCards />
      <div className="mx-auto w-full max-w-[1000px] border-x border-border">
        <FAQ />
      </div>
    </main>
  )
}
