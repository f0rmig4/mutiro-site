import { motion } from "framer-motion";
import { Map, Code, Users, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Map,
    title: "Mapeamos territórios e riscos",
    description: "Utilizamos geoprocessamento avançado para identificar áreas vulneráveis e criar mapas de risco detalhados.",
  },
  {
    icon: Code,
    title: "Desenvolvemos plataformas abertas",
    description: "Criamos ferramentas tecnológicas open source que podem ser adaptadas e replicadas em diferentes contextos.",
  },
  {
    icon: Users,
    title: "Mobilizamos comunidades",
    description: "Trabalhamos em parceria com moradores, lideranças locais e organizações para construir soluções coletivas.",
  },
  {
    icon: BarChart3,
    title: "Monitoramos impacto",
    description: "Acompanhamos resultados ambientais e sociais com métricas claras e relatórios transparentes.",
  },
];

const HowWeWorkSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
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
            Como Atuamos
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Da análise de dados à ação no território
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center lg:text-left"
              >
                {/* Step Number */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-6 mx-auto lg:mx-0">
                  <step.icon size={28} />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
