import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Cloud, Flame, TreeDeciduous, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const allProjects = [
  {
    slug: "mae",
    icon: Cloud,
    title: "MAE",
    subtitle: "Monitoramento e Alerta para Emergências Climáticas",
    description: "Plataforma comunitária de alerta climático com Inteligência Artificial, com foco em enchentes e riscos climáticos.",
    territory: "Rio Grande do Sul",
    impact: ["Alertas em tempo real", "IA preditiva", "Enchentes"],
    status: "Em desenvolvimento",
    color: "secondary",
  },
  {
    slug: "caminho-do-fogo",
    icon: Flame,
    title: "Caminho do Fogo",
    subtitle: "Prevenção e Combate a Incêndios Florestais",
    description: "Plataforma integrada de prevenção e combate a incêndios florestais, combinando dados, território e conservação ambiental.",
    territory: "Brasil (Nacional)",
    impact: ["Proteção de biomas", "Monitoramento", "Fogo"],
    status: "Ativo",
    link: "https://caminhodofogo.com.br/",
    color: "destructive",
  },
  {
    slug: "refloresta",
    icon: TreeDeciduous,
    title: "Refloresta Mutirõ",
    subtitle: "Reflorestamento Urbano e Periurbano",
    description: "Projetos de reflorestamento monitorados com tecnologia geoespacial. Projeto piloto: Regenera Boreu – Porto Alegre (10.000 árvores nativas).",
    territory: "Porto Alegre, RS",
    impact: ["10.000 árvores", "Mata nativa", "Floresta urbana"],
    status: "Piloto ativo",
    color: "primary",
  },
  {
    slug: "castanha-amazonia",
    icon: MapPin,
    title: "Castanha-da-Amazônia",
    subtitle: "Observatório da Cadeia de Valor da Castanha",
    description: "Rede de organizações que atua para desenvolver a cadeia da castanha, produzindo conhecimento e mobilização para consolidar um mercado justo que valorize os povos e comunidades tradicionais e promova a conservação da floresta.",
    territory: "Amazônia Legal",
    impact: ["Socioeconomia sustentável", "Conservação ambiental", "Comunidades tradicionais"],
    status: "Ativo",
    link: "https://observatoriodacastanha.org.br/",
    color: "secondary",
  },
  {
    slug: "censura-arte",
    icon: MapPin,
    title: "Censura à Arte",
    subtitle: "Observatório de Censura à Arte",
    description: "Plataforma jornalística que mapeia e verifica casos de censura às expressões artísticas no Brasil, promovendo transparência e debate sobre liberdade de expressão na cultura.",
    territory: "Brasil",
    impact: ["Liberdade de expressão", "Jornalismo cultural", "Direitos humanos"],
    status: "Ativo",
    link: "https://censuranaarte.nonada.com.br/",
    color: "destructive",
  },
  {
    slug: "kaa-ete",
    icon: MapPin,
    title: "Ka'a-eté",
    subtitle: "Mapa de Plantas Comestíveis Não Convencionais",
    description: "Base de conhecimento livre sobre plantas alimentícias não convencionais, promovendo segurança alimentar e conexão entre produtores e consumidores em uma rede de economia social e criativa.",
    territory: "Brasil",
    impact: ["Segurança alimentar", "Conservação ambiental", "Economia solidária"],
    status: "Ativo",
    link: "https://kaaete.org/",
    color: "primary",
  },
  {
    slug: "educacao-vigiada",
    icon: MapPin,
    title: "Educação Vigiada",
    subtitle: "Observatório de Dados da Educação Pública",
    description: "Plataforma que coleta e divulga informações sobre a plataformização da educação pública no Brasil e América do Sul, promovendo debate sobre seus impactos sociais e educacionais.",
    territory: "Brasil e América do Sul",
    impact: ["Transparência de dados", "Pesquisa acadêmica", "Educação pública"],
    status: "Ativo",
    link: "https://educacaovigiada.org.br/",
    color: "secondary",
  },
  {
    slug: "escravidao-liberdade",
    icon: MapPin,
    title: "Escravidão e Liberdade",
    subtitle: "Pesquisa sobre Africanos e seus descendentes no Brasil",
    description: "Recuperação e análise de dados de mais de 20 anos de pesquisa sobre a experiência dos africanos e seus descendentes no Brasil, com apresentação em novo website.",
    territory: "Brasil (Nacional)",
    impact: ["Preservação histórica", "Pesquisa acadêmica", "Memória social"],
    status: "Ativo",
    link: "https://escravidaoeliberdade.com.br/",
    color: "primary",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="section-container py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Nossos Projetos
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Tecnologia e inovação social
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Conheça nossa rede de projetos que utilizam tecnologia para promover transformação social, 
              preservação ambiental e desenvolvimento sustentável em diferentes frentes de atuação.
            </p>
          </motion.div>
        </section>

        {/* Projects List */}
        <section className="section-container">
          <div className="space-y-6">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/projeto/${project.slug}`}
                  className="block card-territory p-6 md:p-8 group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      project.color === 'secondary' ? 'bg-secondary/10' :
                      project.color === 'destructive' ? 'bg-destructive/10' :
                      'bg-accent'
                    }`}>
                      <project.icon 
                        size={32} 
                        className={`${
                          project.color === 'secondary' ? 'text-secondary' :
                          project.color === 'destructive' ? 'text-destructive' :
                          'text-primary'
                        }`}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h2 className="font-display text-2xl font-bold text-foreground">
                          {project.title}
                        </h2>
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                          project.status === 'Ativo' ? 'bg-primary/10 text-primary' :
                          project.status === 'Piloto ativo' ? 'bg-accent text-accent-foreground' :
                          'bg-secondary/10 text-secondary'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      
                      <p className="text-primary font-medium mb-2">
                        {project.subtitle}
                      </p>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <MapPin size={14} />
                          {project.territory}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.impact.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded bg-muted text-muted-foreground text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300">
                      Ver projeto
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
