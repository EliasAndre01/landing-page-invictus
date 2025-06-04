"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-dark-bg rounded-lg shadow-xl w-80 overflow-hidden animate-fade-in">
          <div className="bg-invictus-yellow p-4 flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20invictus-zATr4dwztEBjt7Jfc1EQyMIdU5Jtae.avif"
                alt="Invictus Idiomas"
                width="40"
                height="40"
                className="mr-2"
              />
              <div>
                <h3 className="font-bold text-black">Invictus Idiomas</h3>
                <p className="text-xs text-black">Atendimento online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-black hover:text-gray-800"
              aria-label="Fechar chat"
            >
              <X size={20} />
            </button>
          </div>
          <div className="p-4 h-80 overflow-y-auto flex flex-col space-y-4">
            <div className="flex items-start">
              <div className="bg-invictus-yellow text-black p-3 rounded-lg rounded-tl-none max-w-[80%]">
                <p>Olá! Como posso ajudar você hoje?</p>
                <p className="text-xs mt-1 text-gray-700">14:30</p>
              </div>
            </div>
            <div className="flex items-start justify-end">
              <div className="bg-gray-700 p-3 rounded-lg rounded-tr-none max-w-[80%]">
                <p>Gostaria de saber mais sobre os cursos de inglês.</p>
                <p className="text-xs mt-1 text-gray-400">14:31</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-invictus-yellow text-black p-3 rounded-lg rounded-tl-none max-w-[80%]">
                <p>
                  Claro! Nosso curso de inglês utiliza o método Communicative Approach, focado em conversação desde a
                  primeira aula. Em apenas 18 meses você estará fluente!
                </p>
                <p className="text-xs mt-1 text-gray-700">14:32</p>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-gray-700">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                className="flex-grow p-2 rounded-l-md bg-gray-700 border-0 focus:outline-none focus:ring-2 focus:ring-invictus-yellow"
              />
              <button className="bg-invictus-yellow text-black p-2 rounded-r-md hover:bg-yellow-400 transition-colors">
                Enviar
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-invictus-yellow text-black w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-400 transition-colors animate-bounce"
          aria-label="Abrir chat"
        >
          <MessageCircle size={28} />
        </button>
      )}
    </div>
  )
}

export default FloatingChat
