import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Cloud, Flame, TreeDeciduous } from "lucide-react";

const projects = [
  {
    slug: "mae",
    icon: Cloud,
    title: "MAE",
    subtitle: "Monitoramento e Alerta para Emergências Climáticas",
    description: "Plataforma comunitária de alerta climático com Inteligência Artificial, com foco em enchentes e riscos climáticos.",
    impact: "Alertas em tempo real",
    color: "data-blue",
  },
  {
    slug: "caminho-do-fogo",
    icon: Flame,
    title: "Caminho do Fogo",
    subtitle: "Prevenção e Combate a Incêndios Florestais",
    description: "Plataforma integrada de prevenção e combate a incêndios florestais, combinando dados, território e conservação ambiental.",
    impact: "Proteção de biomas",
    link: "https://caminhodofogo.com.br/",
    color: "destructive",
  },
  {
    slug: "refloresta",
    icon: TreeDeciduous,
    title: "Refloresta Mutirõ",
    subtitle: "Reflorestamento Urbano e Periurbano",
    description: "Projetos de reflorestamento monitorados com tecnologia geoespacial. Projeto piloto: Regenera Boreu – Porto Alegre (10.000 árvores nativas).",
    impact: "10.000 árvores",
    color: "primary",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Projetos em Destaque
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Soluções para emergências climáticas
            </h2>
          </div>
          <Link
            to="/projetos"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
          >
            Ver todos os projetos
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/projeto/${project.slug}`}
                className="block card-territory p-6 h-full group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    project.color === 'data-blue' ? 'bg-secondary/10' :
                    project.color === 'destructive' ? 'bg-destructive/10' :
                    'bg-accent'
                  }`}>
                    <project.icon 
                      size={24} 
                      className={`${
                        project.color === 'data-blue' ? 'text-secondary' :
                        project.color === 'destructive' ? 'text-destructive' :
                        'text-primary'
                      }`}
                    />
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    project.color === 'data-blue' ? 'bg-secondary/10 text-secondary' :
                    project.color === 'destructive' ? 'bg-destructive/10 text-destructive' :
                    'bg-accent text-accent-foreground'
                  }`}>
                    {project.impact}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-primary mb-3">
                  {project.subtitle}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all duration-300">
                  Conhecer projeto
                  <ArrowRight size={16} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
