"use client"

import { useEffect, useRef } from "react"
import { Users, Clock, BookOpen, Laptop } from "lucide-react"

const BenefitsSection = () => {
  const sectionRef = useRef(null)

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
    <section id="beneficios" ref={sectionRef} className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <h2 className="section-title animate fade-in">Benefícios</h2>
        <h3 className="section-subtitle animate fade-in text-invictus-yellow">DE SER UM ALUNO INVICTUS</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {/* Benefit 1 */}
          <div className="animate slide-in-bottom" style={{ animationDelay: "0.1s" }}>
            <div className="card-benefit h-full flex flex-col">
              <div className="flex justify-center mb-6">
                <Users size={48} className="text-black" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-center">Fluência em 18 meses</h4>
              <p className="text-center flex-grow">
                Já pensou falar inglês da mesma forma que o português em apenas 18 meses? A metodologia da Invictus
                Idiomas com sua ênfase na conversação e as aulas práticas como se tivesse em outro país é como aprender
                com a experiência de um intercâmbio.
              </p>
              <p className="text-center mt-4 font-bold">Chega de verbo To Be. Venha ser fluente na prática!</p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="animate slide-in-bottom" style={{ animationDelay: "0.2s" }}>
            <div className="card-benefit h-full flex flex-col">
              <div className="flex justify-center mb-6">
                <Clock size={48} className="text-black" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-center">Horários Flexíveis e Programáveis</h4>
              <p className="text-center flex-grow">
                Problema com tempo? Aqui na Invictus é você quem marca suas aulas de acordo com sua rotina. Aqui não
                temos formação de turma. Sabemos que seus horários não são iguais aos de ninguém, portanto, você marca
                suas aulas de acordo com você. Comece agora mesmo a sua jornada da fluência.
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="animate slide-in-bottom" style={{ animationDelay: "0.3s" }}>
            <div className="card-benefit h-full flex flex-col">
              <div className="flex justify-center mb-6">
                <BookOpen size={48} className="text-black" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-center">Aulas Práticas</h4>
              <p className="text-center flex-grow">
                Você já foi a um cinema em Londres? Você já pensou em aprender numa hamburgueria nos EUA? Cantar em um
                karaokê em Las Vegas? Conversar numa rua de Nova Iorque? A invictus trouxe todas essas experiência para
                você. Em cada escola temos cinemas, aulas de gastronomia e grupos de conversação para você aprender de
                forma fácil e dinâmica.
              </p>
              <p className="text-center mt-4">Invictus, mais do que aulas, uma experiência de aprendizado.</p>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="animate slide-in-bottom" style={{ animationDelay: "0.4s" }}>
            <div className="card-benefit h-full flex flex-col">
              <div className="flex justify-center mb-6">
                <Laptop size={48} className="text-black" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-center">Realidade Aumentada</h4>
              <p className="text-center flex-grow">
                Hoje a educação não é a mesma de 30 anos atrás. A Invictus Idiomas inovou o mercado inserindo a
                tecnologia de realidade aumentada em seu material didático. Imagine os personagens dos livros terem vida
                e, junto com você, vivenciarem as aventuras de ser fluente. Hologramas com cada personagem para te
                surpreender e proporcionar uma experiência única.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
