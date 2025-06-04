import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import BenefitsSection from "@/components/benefits-section"
import MethodSection from "@/components/method-section"
import UnitsSection from "@/components/units-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import FloatingChat from "@/components/floating-chat"

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg text-white">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <MethodSection />
      <UnitsSection />
      <TestimonialsSection />
      <ContactForm />
      <Footer />
      <FloatingChat />
    </main>
  )
}
