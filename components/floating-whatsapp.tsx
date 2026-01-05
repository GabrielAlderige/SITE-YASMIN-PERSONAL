"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  const whatsappNumber = "5535997024592"
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá%20Yasmin!%20Vim%20do%20seu%20site%20e%20quero%20saber%20mais%20sobre%20a%20consultoria.`

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      setShowTooltip(true)

      const tooltipTimer = setTimeout(() => {
        setShowTooltip(false)
      }, 5000)

      return () => clearTimeout(tooltipTimer)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute bottom-full right-0 mb-4 mr-2"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-xs relative">
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-muted rounded-full flex items-center justify-center hover:bg-muted-foreground/20 transition-colors"
              >
                <X className="h-3 w-3" />
              </button>
              <p className="text-sm font-semibold text-foreground mb-1">Olá! 👋</p>
              <p className="text-xs text-muted-foreground">
                Precisa de ajuda? Clique aqui para falar comigo no WhatsApp!
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        size="lg"
        className="w-16 h-16 rounded-full shadow-2xl bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 group relative overflow-hidden"
        asChild
      >
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <div className="absolute inset-0 bg-white/20 animate-ping rounded-full" />
          <MessageCircle className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
        </a>
      </Button>
    </motion.div>
  )
}
