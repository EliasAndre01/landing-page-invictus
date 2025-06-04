"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, ChevronDown, ChevronUp } from "lucide-react"

const Footer = () => {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      question: "Quanto tempo leva para eu me tornar fluente?",
      answer:
        "Com nosso método imersivo, a maioria dos alunos alcança fluência em apenas 18 meses, dependendo da dedicação e frequência nas aulas práticas.",
    },
    {
      question: "Posso fazer aulas online?",
      answer:
        "Sim! Oferecemos aulas online com a mesma qualidade das presenciais, utilizando nossa plataforma exclusiva com recursos de realidade aumentada.",
    },
    {
      question: "Quais idiomas são oferecidos?",
      answer: "Oferecemos cursos de Inglês, Espanhol, Francês, Alemão, Italiano e outros idiomas sob consulta.",
    },
    {
      question: "Como funciona a aula experimental?",
      answer:
        "A aula experimental é gratuita e tem duração de 50 minutos. Nela, você conhecerá nossa metodologia, fará um teste de nivelamento e terá a primeira experiência com nosso método imersivo.",
    },
    {
      question: "Qual a idade mínima para iniciar os cursos?",
      answer: "Temos turmas a partir de 7 anos de idade, com metodologias adaptadas para cada faixa etária.",
    },
  ]

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null)
    } else {
      setOpenFaq(index)
    }
  }

  return (
    <footer className="bg-invictus-gray pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Column 1 - Logo and About */}
          <div>
            <div className="flex items-center mb-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20invictus-zATr4dwztEBjt7Jfc1EQyMIdU5Jtae.avif"
                alt="Invictus Idiomas"
                width="60"
                height="60"
                className="mr-3"
              />
              <div>
                <h3 className="text-xl font-bold text-invictus-yellow">Invictus Idiomas</h3>
                <p className="text-sm">Fluência em 18 meses</p>
              </div>
            </div>
            <p className="mb-6">
              Escola de idiomas com metodologia inovadora, focada em conversação e experiências práticas para garantir
              fluência em tempo recorde.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-invictus-yellow transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-white hover:text-invictus-yellow transition-colors">
                <Instagram />
              </a>
              <a href="#" className="text-white hover:text-invictus-yellow transition-colors">
                <Youtube />
              </a>
            </div>
          </div>

          {/* Column 2 - Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-3 mt-1 text-invictus-yellow" />
                <p>
                  Rua Carlos Vasconcelos 1240, Aldeota
                  <br />
                  Fortaleza - CE
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 text-invictus-yellow" />
                <p>(85) 3016-1200</p>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 text-invictus-yellow" />
                <p>contato@invictusidiomas.com.br</p>
              </div>
            </div>
          </div>

          {/* Column 3 - FAQ */}
          <div>
            <h3 className="text-xl font-bold mb-6">Perguntas Frequentes</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-700 pb-2">
                  <button
                    className="flex justify-between items-center w-full text-left py-2 focus:outline-none"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-medium">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="text-invictus-yellow" />
                    ) : (
                      <ChevronDown className="text-invictus-yellow" />
                    )}
                  </button>
                  {openFaq === index && <div className="py-2 text-gray-300">{faq.answer}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Invictus Idiomas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
