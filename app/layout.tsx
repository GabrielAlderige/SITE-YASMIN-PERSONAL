import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yasmin Silva - Personal Trainer | Treinamento Personalizado Online",
  description:
    "Transforme seu corpo com planejamento inteligente. Educadora Física especializada em mulheres de todas as idades. Consultoria online 100% personalizada.",
  keywords: [
    "personal trainer",
    "treinamento feminino",
    "consultoria online",
    "educadora física",
    "treino personalizado",
  ],
  icons: {
    icon: [
      {
        url: "/2.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/2.jpg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/2.jpg",
        type: "image/svg+xml",
      },
    ],
    apple: "/2.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
