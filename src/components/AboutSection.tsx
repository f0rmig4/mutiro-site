import { motion } from "framer-motion";
import { MapPin, Database, Brain, Users } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Geoprocessamento",
    description: "Mapeamento territorial de alta precisão para identificar riscos e oportunidades em comunidades vulneráveis.",
  },
  {
    icon: Database,
    title: "Dados Ambientais",
    description: "Coleta, análise e visualização de dados climáticos e ambientais para tomada de decisão baseada em evidências.",
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description: "Modelos preditivos para antecipar riscos climáticos e otimizar ações de prevenção e resposta.",
  },
  {
    icon: Users,
    title: "Mobilização Comunitária",
    description: "Mutirões e participação ativa das comunidades na construção de soluções para seus territórios.",
  },
];

const AboutSection = () => {
  return (
    <section id="quem-somos" className="py-20 md:py-28 bg-background pattern-territory">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Quem Somos
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Tecnologia a serviço do território
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A Mutirõ é uma organização brasileira que conecta ciência de dados, 
            inteligência geoespacial e saberes comunitários para enfrentar a 
            emergência climática com soluções práticas e replicáveis.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-territory p-6 group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <feature.icon size={24} className="text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
