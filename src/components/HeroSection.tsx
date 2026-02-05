import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-territory.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-background pt-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.1] mb-6">
              Geotecnologias e comunidade para regenerar territórios
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
              Mapeamento, monitoramento ambiental e inteligência artificial aplicados à prevenção de riscos climáticos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/#contato"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold transition-all duration-300 hover:bg-primary/90 hover:gap-3"
              >
                Quero ser parceiro
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/projetos"
                className="inline-flex items-center justify-center gap-2 border-2 border-border text-foreground px-7 py-3.5 rounded-full font-semibold transition-all duration-300 hover:bg-muted hover:border-muted-foreground/30"
              >
                Conheça o projeto piloto
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <img
                src={heroImage}
                alt="Vista aérea de floresta tropical brasileira"
                className="w-full h-[350px] md:h-[450px] lg:h-[520px] object-cover rounded-3xl shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
