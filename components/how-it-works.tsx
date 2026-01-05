"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { CheckCircle } from "lucide-react"

export function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const steps = [
    "Avaliação completa e individual",
    "Planejamento focado no corpo e nas necessidades femininas",
    "Entendimento do seu objetivo (emagrecimento, hipertrofia, condicionamento ou saúde)",
    "Treinos adaptados à sua rotina e nível",
    "Suporte profissional conforme o plano escolhido",
  ]

  return (
    <section id="como-funciona" ref={ref} className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container px-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Como funciona a{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              consultoria online?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tudo 100% online, prático e eficiente. Você não recebe um treino genérico.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card rounded-3xl p-8 md:p-12 border-2 border-border shadow-xl">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <p className="text-lg text-foreground pt-0.5">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
