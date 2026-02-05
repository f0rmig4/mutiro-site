import { motion } from "framer-motion";
import { Building2, GraduationCap, Users2, Handshake } from "lucide-react";

const partnerTypes = [
  {
    icon: GraduationCap,
    title: "Universidades",
    description: "Parcerias acadêmicas para pesquisa aplicada e formação de profissionais.",
  },
  {
    icon: Users2,
    title: "Comunidades",
    description: "Associações de moradores e lideranças comunitárias na linha de frente.",
  },
  {
    icon: Building2,
    title: "Poder Público",
    description: "Colaboração com prefeituras, estados e órgãos ambientais.",
  },
  {
    icon: Handshake,
    title: "Coletivos Locais",
    description: "Organizações da sociedade civil e movimentos socioambientais.",
  },
];

const PartnersSection = () => {
  return (
    <section id="parcerias" className="py-20 md:py-28 bg-muted/30 pattern-data">
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
            Parcerias
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Construímos em rede
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Nossas soluções nascem da colaboração entre diferentes atores: 
            academia, comunidades, poder público e organizações sociais.
          </p>
        </motion.div>

        {/* Partner Types */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerTypes.map((partner, index) => (
            <motion.div
              key={partner.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 text-center border border-border hover:border-primary/30 transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <partner.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {partner.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
