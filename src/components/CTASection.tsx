import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contato" className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 pattern-territory opacity-10" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Quer construir soluções climáticas com impacto real no território?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Estamos abertos a parcerias com universidades, organizações públicas, 
            associações comunitárias e instituições comprometidas com a justiça climática.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contato@mutiro.org.br"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-6 py-3.5 rounded-lg font-medium transition-all duration-300 hover:bg-primary-foreground/90 hover:gap-3"
            >
              <Mail size={18} />
              Entre em contato
            </a>
            <Link
              to="/projetos"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-6 py-3.5 rounded-lg font-medium transition-all duration-300 hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
            >
              Conheça nossos projetos
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
