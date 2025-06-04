"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Gilvanir Peixoto",
    unit: "Unidade Cid. dos Funcionários",
    text: "Obrigada a vocês por colocar orgulho e vontade de vencer no meu filho, a querer viver e lutar. Do fundo do meu coração é gratidão que sinto!",
    rating: 5,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202022-06-13%20at%2014_22_01%20%281%29-ABsk0XeC2yjQN8S594WTz9Yq3gOniC.avif",
  },
  {
    id: 2,
    name: "Ana Karen",
    unit: "Unidade On-line",
    text: "Como o número de alunos nas aulas é reduzido você tem mais atenção e realmente começa a entender e falar o inglês desde a primeira aula. Só tenho a agradecer por toda atenção e aprendizado durante o tempo do curso! <3",
    rating: 5,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202022-06-13%20at%2014_22_00%20%281%29-OeNZmS8n2woyaAXX3Gv9aA16FMQYJZ.avif",
  },
  {
    id: 3,
    name: "Carlos Eduardo",
    unit: "Unidade Aldeota",
    text: "Nunca imaginei que aprender um idioma poderia ser tão divertido! As aulas práticas em ambientes reais fizeram toda a diferença para mim.",
    rating: 5,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202022-06-13%20at%2014_22_00%20%282%29-NiN67k3bFIPnyjJJ6RbwpwnKQ129ej.avif",
  },
  {
    id: 4,
    name: "Mariana Silva",
    unit: "Unidade Bezerra de Menezes",
    text: "A flexibilidade de horários foi o que me fez escolher a Invictus, mas a qualidade do ensino foi o que me fez ficar. Recomendo a todos!",
    rating: 5,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202022-06-13%20at%2014_22_01%20%281%29-ABsk0XeC2yjQN8S594WTz9Yq3gOniC.avif",
  },
]

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section id="depoimentos" ref={sectionRef} className="py-20 bg-invictus-gray">
      <div className="container mx-auto px-4">
        <h2 className="section-title animate fade-in">Depoimentos</h2>
        <p className="section-subtitle animate fade-in text-invictus-yellow">
          Um de nossos princípios é colocar nossos alunos em primeiro lugar. Veja o que eles acham de nós:
        </p>

        <div className="mt-12 relative">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 animate slide-in-left">
              <div className="bg-invictus-yellow text-black p-8 rounded-lg">
                <div className="flex mb-2">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} fill="black" className="text-black" />
                  ))}
                </div>
                <p className="text-2xl font-bold mb-6">"{testimonials[currentSlide].text}"</p>
                <div>
                  <p className="font-bold text-xl">{testimonials[currentSlide].name}</p>
                  <p>{testimonials[currentSlide].unit}</p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 animate slide-in-right">
              <div className="grid grid-cols-2 gap-4">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`relative h-60 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                      currentSlide === index ? "ring-4 ring-invictus-yellow scale-105" : "opacity-70 hover:opacity-100"
                    }`}
                    onClick={() => goToSlide(index)}
                  >
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-invictus-yellow" : "bg-gray-400"}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-invictus-yellow text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft />
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 md:translate-x-12 bg-invictus-yellow text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight />
          </button>
        </div>

        <div className="mt-12 flex justify-center">
          <button className="invictus-btn animate fade-in">QUERO ME MATRICULAR</button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
