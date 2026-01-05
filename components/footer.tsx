import { Instagram, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
              Yasmin Silva
            </h3>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Educadora Física especializada em mulheres de todas as idades. Transformando vidas através do movimento e
              do planejamento inteligente.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>
                <a
                  href="https://wa.me/5535997024592"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  WhatsApp: (35) 99702-4592
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/silval_yasmin02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  <Instagram className="h-4 w-4" />
                  @silval_yasmin02
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Planos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/60 flex items-center justify-center gap-2">
            Feito com <Heart className="h-4 w-4 fill-accent text-accent" /> para mulheres que querem transformar suas
            vidas
          </p>
          <p className="text-xs text-secondary-foreground/40 mt-2">
            © {new Date().getFullYear()} Yasmin Silva - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
