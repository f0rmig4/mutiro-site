import { Link } from "react-router-dom";
import { Mail, MapPin, Leaf } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">M</span>
              </div>
              <span className="font-display text-xl font-semibold">Mutirõ</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-xs">
              Tecnologia territorial para proteger vidas e regenerar territórios 
              diante da emergência climática.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-lg">Navegação</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Início
              </Link>
              <Link to="/projetos" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Projetos
              </Link>
              <Link to="/#quem-somos" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Quem Somos
              </Link>
              <Link to="/#contato" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Contato
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-lg">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Mail size={16} />
                <span>contato@mutiro.org.br</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <MapPin size={16} />
                <span>Porto Alegre, RS - Brasil</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Leaf size={16} />
                <span>Território brasileiro</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/60 text-center md:text-left">
              <p>© {currentYear} Mutirõ. Todos os direitos reservados.</p>
              <p className="mt-1">CNPJ: 46.468.860/0001-55</p>
            </div>
            <p className="text-sm text-primary-foreground/60">
              Tecnologia aberta para impacto social
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
