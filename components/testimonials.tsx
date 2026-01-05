"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Quote, Star } from "lucide-react"

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      text: "Aaah Yas, obrigada!!! Fico feliz demais lendo essa msg! E eu tô animadíssima pra começar esse treino, por ter seu auxílio pois sei o quão boa você é!!!",
      title: "Confiança e Reconhecimento",
    },
    {
      text: "ACHEI ÓTIMO!!!! Era isso o que eu queria mesmo amiga, esse tipo de treino. Eu estava meio perdida nos meus treinos, fazia certinho mas sentia que não estava 100%!",
      title: "Fim da Insegurança nos Treinos",
    },
    {
      text: "Yas, sim, com certeza!!! Muito feliz mesmo, animada pra começar! 😂❤️",
      title: "Expectativa Superada",
    },
    {
      text: "Ai que bom!!! 😍😍 Senti bastante meu corpo essa semana por conta desse treino viu? E ameiii! Hahahaha",
      title: "Resultados Reais",
    },
    {
      text: "Nosso trabalho aparentemente está ótimo, pedi pro Personal da academia gravar esse vídeo e ele elogiou que eu evoluí muito!",
      title: "Foco na Evolução",
    },
    {
      text: "Tô construindo um superior lindo kkkk. Todo mundo elogia meu ombro e meu braço kkkk.",
      title: "Estética e Autoestima",
    },
  ]

  return (
    <section
      id="depoimentos"
      ref={ref}
      className="py-24 bg-gradient-to-br from-secondary via-primary to-accent relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-balance">O que minhas alunas dizem</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto text-pretty">
            Resultados reais de mulheres reais que transformaram seus corpos e vidas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 h-full border-2 border-white/20 hover:border-white transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <div className="flex items-start gap-2 mb-4">
                  <Quote className="h-6 w-6 text-primary flex-shrink-0" />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>

                <h4 className="font-bold text-lg mb-3 text-primary">{testimonial.title}</h4>
                <p className="text-black text-sm leading-relaxed">{testimonial.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
