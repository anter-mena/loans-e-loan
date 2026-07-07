import Hero from "@/components/landing/Hero"
import Benefits from "@/components/landing/Benefits"
import HowItWorks from "@/components/landing/HowItWorks"
import UseCases from "@/components/landing/UseCases"
import Impact from "@/components/landing/Impact"
import Trust from "@/components/landing/Trust"
import Testimonials from "@/components/landing/Testimonials"
import FAQ from "@/components/landing/FAQ"

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <Benefits />
      <HowItWorks />
      <UseCases />
      <Impact />
      <Trust />
      <Testimonials />
      <FAQ />
    </main>
  )
}
