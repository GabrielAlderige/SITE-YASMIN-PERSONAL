"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Heart, Target, Users } from "lucide-react"

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: Heart,
      title: "Especializada em Mulheres",
      description: "Treinos pensados exclusivamente para o corpo feminino, respeitando cada fase da vida.",
    },
    {
      icon: Target,
      title: "Resultados Reais",
      description: "Planejamento estratégico focado em seus objetivos específicos e necessidades.",
    },
    {
      icon: Users,
      title: "Acompanhamento Profissional",
      description: "Suporte contínuo para garantir sua evolução com segurança e confiança.",
    },
  ]

  return (
    <section id="sobre" ref={ref} className="py-24 bg-background">
      <div className="container px-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Sua jornada de{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">transformação</span>{" "}
            começa aqui
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Sou Yasmin Silva, Educadora Física especializada em mulheres de todas as idades, e ajudo você a alcançar
            seus objetivos de forma segura, eficiente e personalizada.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 h-full border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground text-lg">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
