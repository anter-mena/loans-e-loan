import Hero from "@/components/landing/Hero"
import TrustedBy from "@/components/landing/TrustedBy"
import Benefits from "@/components/landing/Benefits"
import HowItWorks from "@/components/landing/HowItWorks"
import UseCases from "@/components/landing/UseCases"
import Impact from "@/components/landing/Impact"
import Trust from "@/components/landing/Trust"
import Testimonials from "@/components/landing/Testimonials"
import Resources from "@/components/landing/Resources"
import FAQ from "@/components/landing/FAQ"
import FinalCTA from "@/components/landing/FinalCTA"

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <TrustedBy />
      <Benefits />
      <HowItWorks />
      <UseCases />
      <Impact />
      <Trust />
      <Testimonials />
      <Resources />
      <FAQ />
      <FinalCTA />
    </main>
  )
}
