"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Phone, Play } from "lucide-react"

const UnitsSection = () => {
  const sectionRef = useRef(null)
  const [activeUnit, setActiveUnit] = useState(0)

  const units = [
    {
      name: "Unidade Aldeota",
      address: "Rua Carlos Vasconcelos 1240",
      phone: "(85) 3016-1200",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/740050_8fd18976b096439d843ed103711afb2c~mv2.jpg-jqNCyvHph9ux2z61XybU5QeqwRRhLL.jpeg",
    },
    {
      name: "Unidade Bezerra de Menezes",
      address: "Avenida Bezerra de Menezes, 2571 – Parquelândia",
      phone: "(85) 2180-6118",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/740050_40173627b8134305a29a11107f4c2df1~mv2.jpg-T1rPhtrjItkbuRlOJzMnBonR0vjpeo.jpeg",
    },
    {
      name: "Unidade Cidade dos Funcionários",
      address: "Avenida Oliveira Paiva, 740 – Cidade dos Funcionários",
      phone: "(85) 3393-7900",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/740050_933d70b9c71e42dcb8504afb46fa541b~mv2.jpg-PQSXePtCUtY2IfbrFieyPCT0NEgq1v.jpeg",
    },
    {
      name: "Unidade Treze de Maio",
      address: "Avenida 13 de Maio, 1043 – Bairro de Fátima",
      phone: "(85) 3393-9000",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a32b51_8cfcb62c8d5f44dda958235bc866b515~mv2.jpg-wEqMuvnLky8Uq0x3BJe2vMQCVvSWRY.jpeg",
    },
  ]

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
    <section id="unidades" ref={sectionRef} className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <h2 className="section-title animate fade-in">Unidades prontas para te receber</h2>

        <div className="flex flex-col md:flex-row gap-8 mt-12">
          <div className="md:w-1/2 animate slide-in-left">
            <div className="space-y-6">
              {units.map((unit, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeUnit === index
                      ? "bg-invictus-yellow text-black"
                      : "bg-invictus-gray/50 hover:bg-invictus-gray"
                  }`}
                  onClick={() => setActiveUnit(index)}
                >
                  <h3 className="text-xl font-bold mb-2">{unit.name}</h3>
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin size={16} />
                    <p>{unit.address}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} />
                    <p>Contato: {unit.phone}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button className="invictus-btn w-full">QUERO AGENDAR UMA VISITA</button>
            </div>
          </div>

          <div className="md:w-1/2 animate slide-in-right">
            <div className="relative rounded-lg overflow-hidden shadow-xl h-[400px]">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a32b51_eb21d2234bee4862823402bfb8ea4b9a~mv2-aIkrj2kXXdsGNVsihVZOOJSTvbxs06.avif"
                alt="Interior da unidade Invictus"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 rounded-full bg-invictus-yellow/80 flex items-center justify-center hover:bg-invictus-yellow transition-colors">
                  <Play size={32} className="text-black ml-1" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2 mt-4">
              {units.map((unit, index) => (
                <div
                  key={index}
                  className={`relative h-20 cursor-pointer rounded-md overflow-hidden ${
                    activeUnit === index ? "ring-2 ring-invictus-yellow" : ""
                  }`}
                  onClick={() => setActiveUnit(index)}
                >
                  <img src={unit.image || "/placeholder.svg"} alt={unit.name} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UnitsSection
