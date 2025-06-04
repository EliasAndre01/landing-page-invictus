"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const MethodSection = () => {
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

  return (
    <section id="metodo" ref={sectionRef} className="py-20 bg-invictus-gray">
      <div className="container mx-auto px-4">
        <h2 className="section-title animate fade-in">Método Communicative Approach</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mt-12">
          <div className="md:w-1/2 animate slide-in-left">
            <p className="text-xl mb-6">
              Nada melhor do que{" "}
              <span className="text-invictus-yellow font-bold">
                conseguir expressar os seus sentimentos e pensamentos
              </span>{" "}
              por meio da fala, concorda?
            </p>
            <p className="text-xl mb-6">
              Nós sabemos que você já está cansado(a) de ter que ficar traduzindo tudo na sua cabeça antes de falar.
            </p>
            <p className="text-xl mb-6">
              Pensando nisso, utilizamos um método de ensino com{" "}
              <span className="text-invictus-yellow font-bold">foco na conversação</span>, no qual você irá aprender um
              novo idioma da mesma forma que aprendeu a sua língua mãe.
            </p>
            <div className="mt-8">
              <button className="invictus-btn">QUERO APRENDER A PENSAR NO IDIOMA</button>
            </div>
          </div>
          <div className="md:w-1/2 animate slide-in-right">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  className="w-full aspect-video"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Invictus Idiomas - Método Communicative Approach"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="animate fade-in" style={{ animationDelay: "0.1s" }}>
              <Image src="/flag-usa.png" alt="Inglês" width={40} height={40} className="rounded-full" />
            </div>
            <div className="animate fade-in" style={{ animationDelay: "0.2s" }}>
              <Image src="/flag-spain.png" alt="Espanhol" width={40} height={40} className="rounded-full" />
            </div>
            <div className="animate fade-in" style={{ animationDelay: "0.3s" }}>
              <Image src="/flag-france.png" alt="Francês" width={40} height={40} className="rounded-full" />
            </div>
            <div className="animate fade-in" style={{ animationDelay: "0.4s" }}>
              <Image src="/flag-germany.png" alt="Alemão" width={40} height={40} className="rounded-full" />
            </div>
            <div className="animate fade-in" style={{ animationDelay: "0.5s" }}>
              <Image src="/flag-italy.png" alt="Italiano" width={40} height={40} className="rounded-full" />
            </div>
            <div className="animate fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="w-10 h-10 rounded-full bg-invictus-yellow flex items-center justify-center">
                <span className="text-black font-bold">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MethodSection
