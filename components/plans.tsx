"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Crown, Star, Sparkles } from "lucide-react"

export function Plans() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const whatsappNumber = "5535997024592"

  const plans = [
    {
      name: "Planejamento Essencial",
      icon: Star,
      badge: "Mais Escolhido",
      features: ["Consultoria online e avaliação física", "Montagem de treino personalizada"],
      description: "Perfeito para mulheres que já possuem disciplina e buscam um treino estratégico.",
      highlighted: false,
    },
    {
      name: "Planejamento com Acompanhamento",
      icon: Sparkles,
      badge: "Recomendado",
      features: [
        "Consultoria online e avaliação física",
        "Montagem de treino personalizada",
        "Acompanhamento pós-entrega do planejamento",
      ],
      description: "Ideal para mulheres que querem segurança, ajustes e suporte durante o processo.",
      highlighted: true,
    },
    {
      name: "Planejamento Completo",
      icon: Crown,
      badge: "Premium",
      features: [
        "Consultoria online e avaliação física",
        "Montagem de treino personalizada",
        "Planejamento de plano alimentar",
        "Acompanhamento pós-entrega do planejamento",
      ],
      description: "A escolha ideal para resultado completo, unindo treino, alimentação e acompanhamento.",
      highlighted: false,
    },
  ]

  return (
    <section id="planos" ref={ref} className="py-24 bg-background">
      <div className="container px-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Conheça os{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              planos de planejamento
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Escolha o plano ideal para a sua fase de vida e objetivo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá%20Yasmin!%20Quero%20saber%20mais%20sobre%20o%20plano%20${encodeURIComponent(plan.name)}.`

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div
                  className={`relative bg-card rounded-3xl p-8 h-full border-2 transition-all duration-300 hover:shadow-2xl ${
                    plan.highlighted
                      ? "border-primary shadow-xl shadow-primary/10 scale-105"
                      : "border-border hover:border-primary hover:shadow-primary/10"
                  }`}
                >
                  {/* Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                      {plan.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mt-4">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>

                  {/* Plan name */}
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 text-pretty">{plan.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className={`w-full group/btn ${
                      plan.highlighted ? "bg-gradient-to-r from-primary to-accent hover:opacity-90" : ""
                    }`}
                    size="lg"
                    variant={plan.highlighted ? "default" : "outline"}
                    asChild
                  >
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      Quero esse plano
                      <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
