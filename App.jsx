import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import BenefitsSection from "./components/BenefitsSection"
import MethodSection from "./components/MethodSection"
import UnitsSection from "./components/UnitsSection"
import TestimonialsSection from "./components/TestimonialsSection"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
import FloatingChat from "./components/FloatingChat"
import "./App.css"

function App() {
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

export default App
