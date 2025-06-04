"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear")
          }
        })
      },
      { threshold: 0.1 },
    )

    const section = sectionRef.current
    if (section) {
      const elements = section.querySelectorAll(".animate")
      elements.forEach((el) => observer.observe(el))
    }

    return () => {
      if (section) {
        const elements = section.querySelectorAll(".animate")
        elements.forEach((el) => observer.unobserve(el))
      }
    }
  }, [])

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("beneficios")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="min-h-screen flex items-center relative bg-dark-bg overflow-hidden pt-16"
    >
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-dark-bg via-dark-bg/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-16 z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate slide-in-left">
            Torne-se fluente em <span className="text-invictus-yellow">18 meses</span> aprendendo desde o primeiro dia
            através de nosso <span className="text-invictus-yellow">método imersivo</span>
          </h1>
          <p className="text-xl mb-8 animate slide-in-left" style={{ animationDelay: "0.2s" }}>
            Você vai se sentir o tempo todo como se estivesse em outro país.
          </p>
          <button
            className="invictus-btn animate slide-in-left"
            style={{ animationDelay: "0.4s" }}
            onClick={() => {
              const contactSection = document.getElementById("contato")
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            QUERO ME TORNAR FLUENTE EM 18 MESES
          </button>
        </div>
        <div className="md:w-1/2 animate slide-in-right">
          <div className="relative rounded-full overflow-hidden w-[400px] h-[400px] mx-auto">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto-vRr3PWGwSDh4Tk5pCZDHtPl1mwyecy.avif"
              alt="Estudante praticando idioma"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  )
}

export default HeroSection
