"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"

export function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Como funciona a consultoria online?",
      answer:
        "A consultoria online é totalmente personalizada e feita através do WhatsApp. Após a contratação, você receberá um formulário completo de anamnese para eu conhecer melhor seus objetivos, histórico e rotina. Com base nessas informações, elaboro seu treino personalizado em PDF com fotos e vídeos demonstrativos. Durante todo o período, você tem suporte direto comigo para tirar dúvidas sobre execução, sentir os músculos trabalhando e fazer ajustes quando necessário.",
    },
    {
      question: "Com que frequência os treinos são atualizados?",
      answer:
        "Os treinos são atualizados conforme sua evolução e necessidade. Geralmente, trabalho com periodizações de 4 a 6 semanas, mas isso pode variar dependendo do seu progresso, objetivos e feedback. Estou sempre disponível para fazer ajustes quando você sentir que precisa de novos estímulos ou está com dificuldades em algum exercício.",
    },
    {
      question: "Preciso ter experiência na academia?",
      answer:
        "Não! Atendo desde iniciantes até avançadas. Para iniciantes, crio treinos com exercícios mais simples e com orientações detalhadas sobre execução. Envio vídeos demonstrativos e fico disponível para tirar todas as dúvidas. Para quem já treina, desenvolvemos estratégias mais avançadas para superar platôs e atingir novos resultados.",
    },
    {
      question: "Posso treinar em casa ou precisa ser na academia?",
      answer:
        "Posso adaptar os treinos para ambos os ambientes! Se você treina em casa, preciso saber quais equipamentos você tem disponível (halteres, elásticos, barra, etc.) para montar um treino eficiente. Se treina na academia, aproveito toda a variedade de equipamentos para criar treinos ainda mais completos e variados.",
    },
    {
      question: "Você também faz acompanhamento nutricional?",
      answer:
        "Não faço prescrição de dietas, pois isso é exclusivo do nutricionista. Porém, posso dar orientações gerais sobre alimentação saudável e dicas que podem potencializar seus resultados. Se você já tem acompanhamento com nutricionista, trabalho em conjunto para garantir que treino e alimentação estejam alinhados com seus objetivos.",
    },
    {
      question: "Como funciona o suporte durante o mês?",
      answer:
        "Você tem acesso direto a mim pelo WhatsApp durante todo o período contratado. Pode me enviar vídeos executando os exercícios para eu corrigir, tirar dúvidas sobre execução, relatar dificuldades ou pedir ajustes. Respondo diariamente (exceto domingos) e estou sempre disponível para te apoiar na sua jornada. Seu sucesso é meu sucesso!",
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer:
        "Os resultados variam de pessoa para pessoa, dependendo de diversos fatores como genética, alimentação, descanso e consistência nos treinos. Porém, a maioria das minhas alunas relatam sentir mudanças na força e disposição nas primeiras 2-3 semanas. Mudanças estéticas visíveis geralmente aparecem entre 4-8 semanas de treino consistente. O importante é manter a constância e confiar no processo!",
    },
    {
      question: "Posso pausar ou cancelar a qualquer momento?",
      answer:
        "Sim! Você pode cancelar ou pausar quando quiser, sem multas ou burocracias. Entendo que imprevistos acontecem. Se precisar pausar por motivos pessoais, viagens ou lesões, basta me avisar. Quando estiver pronta para voltar, retomamos de onde paramos ou fazemos os ajustes necessários. Meu objetivo é te acompanhar da melhor forma possível, respeitando sempre seu momento.",
    },
  ]

  return (
    <section id="faq" ref={ref} className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container px-4 relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-balance">Perguntas Frequentes</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto text-pretty">
            Tire todas as suas dúvidas sobre a consultoria online
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <h3 className="text-lg font-semibold text-white pr-4 group-hover:text-primary transition-colors">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all">
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-primary" />
                  ) : (
                    <Plus className="h-5 w-5 text-primary" />
                  )}
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5">
                  <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
