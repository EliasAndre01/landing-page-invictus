"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Check, AlertCircle } from "lucide-react"

const ContactForm = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    unit: "Aldeota",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório"
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "E-mail inválido"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefone é obrigatório"
    } else if (!/^$$\d{2}$$ \d{4,5}-\d{4}$/.test(formData.phone)) {
      newErrors.phone = "Formato inválido. Use (XX) XXXXX-XXXX"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)

        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            name: "",
            email: "",
            phone: "",
            unit: "Aldeota",
          })
        }, 3000)
      }, 1500)
    }
  }

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "")

    if (value.length <= 11) {
      if (value.length > 2) {
        value = `(${value.substring(0, 2)}) ${value.substring(2)}`
      }
      if (value.length > 9) {
        value = `${value.substring(0, 10)}-${value.substring(10)}`
      }
    }

    setFormData((prev) => ({ ...prev, phone: value }))
  }

  return (
    <section id="contato" ref={sectionRef} className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <h2 className="section-title animate fade-in">Inscreva-se agora</h2>
        <p className="section-subtitle animate fade-in">
          Preencha o formulário abaixo e nossa equipe entrará em contato para agendar sua aula experimental gratuita.
        </p>

        <div className="max-w-2xl mx-auto mt-12 bg-invictus-gray/50 p-8 rounded-lg shadow-lg animate slide-in-bottom">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <Check size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Inscrição realizada com sucesso!</h3>
              <p className="text-center">
                Obrigado pelo interesse! Nossa equipe entrará em contato em breve para agendar sua aula experimental.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 bg-dark-bg border rounded-md focus:outline-none focus:ring-2 focus:ring-invictus-yellow ${
                    errors.name ? "border-red-500" : "border-gray-600"
                  }`}
                  placeholder="Digite seu nome completo"
                />
                {errors.name && (
                  <p className="mt-1 text-red-500 flex items-center">
                    <AlertCircle size={16} className="mr-1" /> {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 bg-dark-bg border rounded-md focus:outline-none focus:ring-2 focus:ring-invictus-yellow ${
                    errors.email ? "border-red-500" : "border-gray-600"
                  }`}
                  placeholder="seu.email@exemplo.com"
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 flex items-center">
                    <AlertCircle size={16} className="mr-1" /> {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handlePhoneInput}
                  className={`w-full p-3 bg-dark-bg border rounded-md focus:outline-none focus:ring-2 focus:ring-invictus-yellow ${
                    errors.phone ? "border-red-500" : "border-gray-600"
                  }`}
                  placeholder="(XX) XXXXX-XXXX"
                />
                {errors.phone && (
                  <p className="mt-1 text-red-500 flex items-center">
                    <AlertCircle size={16} className="mr-1" /> {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="unit" className="block mb-2 font-medium">
                  Unidade desejada
                </label>
                <select
                  id="unit"
                  name="unit"
                  value={formData.unit}
                  onChange={handleChange}
                  className="w-full p-3 bg-dark-bg border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-invictus-yellow"
                >
                  <option value="Aldeota">Unidade Aldeota</option>
                  <option value="Bezerra">Unidade Bezerra de Menezes</option>
                  <option value="Funcionarios">Unidade Cidade dos Funcionários</option>
                  <option value="TrezeMaio">Unidade Treze de Maio</option>
                  <option value="Online">Unidade Online</option>
                </select>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="invictus-btn w-full flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      PROCESSANDO...
                    </>
                  ) : (
                    "QUERO COMEÇAR AGORA"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default ContactForm
