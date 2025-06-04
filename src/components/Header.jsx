"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-dark-bg/95 backdrop-blur-sm shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20invictus-zATr4dwztEBjt7Jfc1EQyMIdU5Jtae.avif"
            alt="Invictus Idiomas"
            width="50"
            height="50"
            className="mr-2"
          />
          <span className="text-invictus-yellow font-bold text-xl">Invictus Idiomas</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-white hover:text-invictus-yellow transition-colors"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection("beneficios")}
            className="text-white hover:text-invictus-yellow transition-colors"
          >
            Benefícios
          </button>
          <button
            onClick={() => scrollToSection("metodo")}
            className="text-white hover:text-invictus-yellow transition-colors"
          >
            Método
          </button>
          <button
            onClick={() => scrollToSection("unidades")}
            className="text-white hover:text-invictus-yellow transition-colors"
          >
            Unidades
          </button>
          <button
            onClick={() => scrollToSection("depoimentos")}
            className="text-white hover:text-invictus-yellow transition-colors"
          >
            Depoimentos
          </button>
          <button onClick={() => scrollToSection("contato")} className="invictus-btn">
            Inscreva-se
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-bg/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-white hover:text-invictus-yellow transition-colors py-2"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-white hover:text-invictus-yellow transition-colors py-2"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("metodo")}
              className="text-white hover:text-invictus-yellow transition-colors py-2"
            >
              Método
            </button>
            <button
              onClick={() => scrollToSection("unidades")}
              className="text-white hover:text-invictus-yellow transition-colors py-2"
            >
              Unidades
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-white hover:text-invictus-yellow transition-colors py-2"
            >
              Depoimentos
            </button>
            <button onClick={() => scrollToSection("contato")} className="invictus-btn w-full">
              Inscreva-se
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
