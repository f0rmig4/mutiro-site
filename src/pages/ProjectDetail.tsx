import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, MapPin, Users, Cpu, Target, Cloud, Flame, TreeDeciduous, LucideIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

interface ProjectData {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  heroDescription: string;
  color: string;
  externalLink?: string;
  sections: {
    context: { title: string; content: string };
    solution: { title: string; content: string };
    technology: { title: string; items: string[] };
    impact: { title: string; items: string[] };
    partners: { title: string; items: string[] };
  };
}

const projectsData: Record<string, ProjectData> = {
  mae: {
    icon: Cloud,
    title: "MAE",
    subtitle: "Monitoramento e Alerta para Emergências Climáticas",
    heroDescription: "Plataforma comunitária de alerta climático com Inteligência Artificial para proteger vidas em situações de enchentes e riscos climáticos.",
    color: "secondary",
    sections: {
      context: {
        title: "Contexto e Problema",
        content: "O Rio Grande do Sul enfrenta eventos climáticos extremos cada vez mais frequentes. As comunidades em áreas de risco precisam de sistemas de alerta antecipado que combinem precisão técnica com comunicação acessível. A maioria dos sistemas existentes não consegue chegar às pessoas mais vulneráveis a tempo.",
      },
      solution: {
        title: "Solução Proposta",
        content: "O MAE integra dados meteorológicos, hidrológicos e geográficos em uma plataforma que gera alertas em tempo real. Os avisos são enviados diretamente para lideranças comunitárias e moradores via WhatsApp, SMS e rádios locais, garantindo que a informação chegue mesmo em áreas com baixa conectividade.",
      },
      technology: {
        title: "Tecnologia Utilizada",
        items: [
          "Modelos de IA para previsão de eventos extremos",
          "Integração com dados do INMET, ANA e CEMADEN",
          "Geoprocessamento para mapeamento de áreas de risco",
          "Sistema de comunicação multicanal (WhatsApp, SMS, sirenes)",
          "Dashboard para gestores públicos e defesa civil",
        ],
      },
      impact: {
        title: "Impacto Social e Ambiental",
        items: [
          "Redução do tempo de resposta a emergências",
          "Empoderamento de comunidades para autogestão de riscos",
          "Dados abertos para pesquisa e políticas públicas",
          "Proteção de vidas em áreas vulneráveis",
        ],
      },
      partners: {
        title: "Parceiros Envolvidos",
        items: ["Defesa Civil RS", "Universidades locais", "Associações de moradores", "Brigadas comunitárias"],
      },
    },
  },
  "caminho-do-fogo": {
    icon: Flame,
    title: "Caminho do Fogo",
    subtitle: "Prevenção e Combate a Incêndios Florestais",
    heroDescription: "Plataforma integrada de prevenção e combate a incêndios florestais, combinando dados, território e conservação ambiental para proteger biomas brasileiros.",
    color: "destructive",
    externalLink: "https://caminhodofogo.com.br/",
    sections: {
      context: {
        title: "Contexto e Problema",
        content: "O Brasil perde milhões de hectares de vegetação nativa para o fogo todos os anos. Grande parte dos incêndios florestais pode ser prevenida ou combatida de forma mais eficiente com melhor acesso a informação, coordenação entre atores e mobilização territorial.",
      },
      solution: {
        title: "Solução Proposta",
        content: "O Caminho do Fogo é uma plataforma que integra monitoramento por satélite, dados climáticos e informações de campo para antecipar riscos de incêndio, coordenar ações de prevenção e apoiar brigadas no combate. A ferramenta conecta brigadistas, proprietários rurais, órgãos ambientais e comunidades.",
      },
      technology: {
        title: "Tecnologia Utilizada",
        items: [
          "Imagens de satélite para detecção de focos de calor",
          "Modelagem de risco baseada em clima e vegetação",
          "Aplicativo mobile para brigadas em campo",
          "Mapeamento colaborativo de aceiros e pontos de água",
          "Painel de gestão para coordenação de operações",
        ],
      },
      impact: {
        title: "Impacto Social e Ambiental",
        items: [
          "Proteção de áreas de conservação e terras indígenas",
          "Fortalecimento de brigadas voluntárias e profissionais",
          "Redução de custos de combate através da prevenção",
          "Preservação de biodiversidade e serviços ecossistêmicos",
        ],
      },
      partners: {
        title: "Parceiros Envolvidos",
        items: ["ICMBio", "IBAMA", "Brigadas de incêndio", "ONGs ambientais", "Produtores rurais"],
      },
    },
  },
  refloresta: {
    icon: TreeDeciduous,
    title: "Refloresta Mutirõ",
    subtitle: "Reflorestamento Urbano e Periurbano",
    heroDescription: "Projetos de reflorestamento urbano e periurbano monitorados com tecnologia geoespacial, começando com o projeto piloto Regenera Boreu em Porto Alegre.",
    color: "primary",
    sections: {
      context: {
        title: "Contexto e Problema",
        content: "Áreas urbanas e periurbanas sofrem com ilhas de calor, enchentes e perda de biodiversidade. O reflorestamento com espécies nativas é uma solução eficaz, mas projetos tradicionais carecem de monitoramento adequado e engajamento comunitário contínuo.",
      },
      solution: {
        title: "Solução Proposta",
        content: "O Refloresta Mutirõ combina mutirões de plantio com acompanhamento tecnológico de cada árvore plantada. Usamos GPS e aplicativos de campo para registrar localização, espécie e condição de cada muda. A comunidade participa do plantio e adota as árvores, criando conexão afetiva com o território.",
      },
      technology: {
        title: "Tecnologia Utilizada",
        items: [
          "Georreferenciamento de cada árvore plantada",
          "Aplicativo de monitoramento para moradores",
          "Drone para acompanhamento do crescimento",
          "Dashboard público de métricas ambientais",
          "Sistema de adoção digital de árvores",
        ],
      },
      impact: {
        title: "Impacto Social e Ambiental",
        items: [
          "10.000 árvores nativas no projeto piloto Regenera Boreu",
          "Redução de temperatura local e melhoria da qualidade do ar",
          "Criação de corredores ecológicos urbanos",
          "Engajamento de centenas de voluntários",
        ],
      },
      partners: {
        title: "Parceiros Envolvidos",
        items: ["Prefeitura de Porto Alegre", "Associação de moradores do Boreu", "Viveiros de mudas nativas", "Escolas locais"],
      },
    },
  },
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20">
          <div className="section-container text-center">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              Projeto não encontrado
            </h1>
            <Link to="/projetos" className="text-primary hover:underline">
              Voltar para projetos
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const IconComponent = project.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero */}
        <section className={`py-16 md:py-24 ${
          project.color === 'secondary' ? 'bg-secondary/5' :
          project.color === 'destructive' ? 'bg-destructive/5' :
          'bg-accent/50'
        }`}>
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                to="/projetos"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
              >
                <ArrowLeft size={18} />
                Voltar para projetos
              </Link>

              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                  project.color === 'secondary' ? 'bg-secondary/10' :
                  project.color === 'destructive' ? 'bg-destructive/10' :
                  'bg-primary/10'
                }`}>
                  <IconComponent 
                    size={40} 
                    className={`${
                      project.color === 'secondary' ? 'text-secondary' :
                      project.color === 'destructive' ? 'text-destructive' :
                      'text-primary'
                    }`}
                  />
                </div>

                <div className="flex-1">
                  <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
                    {project.title}
                  </h1>
                  <p className={`text-lg font-medium mb-4 ${
                    project.color === 'secondary' ? 'text-secondary' :
                    project.color === 'destructive' ? 'text-destructive' :
                    'text-primary'
                  }`}>
                    {project.subtitle}
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
                    {project.heroDescription}
                  </p>

                  {project.externalLink && (
                    <a
                      href={project.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                    >
                      Visitar site do projeto
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-20">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Context */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="text-primary" size={24} />
                    <h2 className="font-display text-2xl font-bold text-foreground">
                      {project.sections.context.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.sections.context.content}
                  </p>
                </motion.div>

                {/* Solution */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="text-primary" size={24} />
                    <h2 className="font-display text-2xl font-bold text-foreground">
                      {project.sections.solution.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.sections.solution.content}
                  </p>
                </motion.div>

                {/* Technology */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Cpu className="text-primary" size={24} />
                    <h2 className="font-display text-2xl font-bold text-foreground">
                      {project.sections.technology.title}
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {project.sections.technology.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Impact */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="card-territory p-6"
                >
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                    {project.sections.impact.title}
                  </h3>
                  <ul className="space-y-3">
                    {project.sections.impact.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-primary">{index + 1}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Partners */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="card-territory p-6"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="text-primary" size={20} />
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {project.sections.partners.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.sections.partners.items.map((partner, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-sm"
                      >
                        {partner}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
