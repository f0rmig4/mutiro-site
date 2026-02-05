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
  "castanha-amazonia": {
    icon: MapPin,
    title: "Castanha-da-Amazônia",
    subtitle: "Observatório da Cadeia de Valor da Castanha",
    heroDescription: "Rede de organizações que atua para desenvolver a cadeia da castanha, produzindo conhecimento, inteligência e mobilização de atores para consolidar um mercado justo que valorize os povos e comunidades envolvidas e promova a conservação da floresta.",
    color: "secondary",
    externalLink: "https://observatoriodacastanha.org.br/",
    sections: {
      context: {
        title: "Contexto e Objetivo",
        content: "O Observatório Castanha-da-Amazônia é uma rede de organizações que atua para desenvolver a cadeia da castanha, produzindo conhecimento, inteligência e mobilização de atores para consolidar um mercado justo que valorize os povos e comunidades envolvidas e promova a conservação da floresta. O OCA é resultado da articulação entre importantes instituições, redes, coletivos e iniciativas atuantes na cadeia produtiva da castanha-da-amazônia.",
      },
      solution: {
        title: "Solução Implementada",
        content: "Desenvolvimento de uma plataforma digital que integra dados, informações e conhecimentos sobre a cadeia produtiva da castanha-da-amazônia. Atuo como Desenvolvedor Full Stack no Coletivo Terrakrya, contribuindo para o desenvolvimento e manutenção da plataforma que apoia a governança compartilhada e a gestão do conhecimento na cadeia da castanha.",
      },
      technology: {
        title: "Tecnologias Utilizadas",
        items: [
          "Node.js para o backend",
          "Vue.js para a interface do usuário",
          "Sistema de gestão de dados da cadeia produtiva",
          "Ferramentas de visualização de dados",
        ],
      },
      impact: {
        title: "Impacto e Benefícios",
        items: [
          "Fortalecimento da cadeia produtiva da castanha",
          "Valorização dos povos e comunidades tradicionais",
          "Conservação da floresta amazônica",
          "Geração de renda sustentável",
          "Governança compartilhada do conhecimento",
        ],
      },
      partners: {
        title: "Parceiros e Colaboradores",
        items: [
          "Coletivo Terrakrya (Tecnologia Social)",
          "Rede de organizações da sociobiodiversidade",
          "Comunidades extrativistas",
          "Instituições de pesquisa e fomento",
        ],
      },
    },
  },
  "censura-arte": {
    icon: MapPin,
    title: "Censura à Arte",
    subtitle: "Observatório de Censura à Arte",
    heroDescription: "Plataforma jornalística que mapeia e verifica casos de censura às expressões artísticas no Brasil, promovendo transparência e debate sobre liberdade de expressão na cultura.",
    color: "destructive",
    externalLink: "https://censuranaarte.nonada.com.br/",
    sections: {
      context: {
        title: "Contexto e Objetivo",
        content: "O Observatório de Censura à Arte é um projeto de cunho jornalístico, voltado a mapear os casos de censura às expressões artísticas no Brasil. Todos os casos têm sua veracidade checada antes da publicação. A iniciativa é do veículo de jornalismo cultural Nonada – Jornalismo Travessia, em parceria com a Riobaldo Conteúdo Cultural na execução, e tem apoio do Instituto Goethe.",
      },
      solution: {
        title: "Solução Implementada",
        content: "Desenvolvimento de uma plataforma digital que reúne e documenta casos de censura à arte no Brasil, fornecendo um banco de dados acessível e confiável. O projeto foi desenvolvido em colaboração com o coletivo de tecnologia social FARPA, onde atuei no desenvolvimento da arquitetura da solução e como Desenvolvedor Full Stack.",
      },
      technology: {
        title: "Tecnologias Utilizadas",
        items: [
          "Python como linguagem principal",
          "Django como framework web",
          "React.js para a interface do usuário",
          "Sistema de verificação de fatos",
          "Banco de dados para armazenamento de casos",
        ],
      },
      impact: {
        title: "Impacto e Reconhecimento",
        items: [
          "Mapeamento transparente de casos de censura artística",
          "Promoção do debate sobre liberdade de expressão",
          "Reconhecimento com prêmios como Agente Jovem da Cultura do Ministério da Cultura",
          "Menção Honrosa no Prêmio Ari de Jornalismo",
          "Finalista do Prêmio Ages na Categoria Imprensa (2017)",
        ],
      },
      partners: {
        title: "Parceiros e Apoiadores",
        items: [
          "Nonada – Jornalismo Travessia",
          "Riobaldo Conteúdo Cultural",
          "Instituto Goethe",
          "Coletivo FARPA (Tecnologia Social)",
        ],
      },
    },
  },
  "kaa-ete": {
    icon: MapPin,
    title: "Ka'a-eté",
    subtitle: "Mapa de Plantas Comestíveis Não Convencionais",
    heroDescription: "Plataforma que mapeia e compartilha conhecimento sobre plantas alimentícias não convencionais, promovendo segurança alimentar e conexão entre produtores e consumidores em uma rede de economia social e criativa.",
    color: "primary",
    externalLink: "https://kaaete.org/",
    sections: {
      context: {
        title: "Contexto e Missão",
        content: "O Projeto Ka'a-eté é um mapa de Plantas Comestíveis Não Convencionais (PANC) que visa criar uma base de conhecimento livre sobre essas plantas. A missão do projeto é incentivar e resgatar a cultura de consumo desses alimentos como uma estratégia para combater a fome, promovendo uma rede de conexão entre produtores e consumidores em uma dinâmica de economia social e criativa.",
      },
      solution: {
        title: "Solução Implementada",
        content: "Desenvolvimento de uma plataforma colaborativa que mapeia e compartilha informações sobre plantas alimentícias não convencionais, incluindo suas características, usos culinários e locais de ocorrência. O projeto foi desenvolvido em parceria com o coletivo de tecnologia social FARPA, onde atuei como Desenvolvedor Full Stack na manutenção e aprimoramento da plataforma.",
      },
      technology: {
        title: "Tecnologias Utilizadas",
        items: [
          "Python como linguagem principal de desenvolvimento",
          "Web2Py como framework web",
          "Banco de dados para armazenamento de informações sobre as plantas",
          "Sistema de mapeamento georreferenciado",
        ],
      },
      impact: {
        title: "Impacto e Benefícios",
        items: [
          "Promoção da segurança alimentar e nutricional",
          "Valorização da biodiversidade local",
          "Fortalecimento da economia solidária",
          "Preservação do conhecimento tradicional sobre plantas",
          "Incentivo à agricultura urbana e familiar",
        ],
      },
      partners: {
        title: "Parceiros e Colaboradores",
        items: [
          "Coletivo FARPA (Tecnologia Social)",
          "Comunidades locais",
          "Agricultores familiares",
          "Especialistas em botânica e nutrição",
        ],
      },
    },
  },
  "educacao-vigiada": {
    icon: MapPin,
    title: "Educação Vigiada",
    subtitle: "Observatório de Dados da Educação Pública",
    heroDescription: "Iniciativa de divulgação científica que coleta e divulga informações sobre a plataformização da educação pública no Brasil e na América do Sul, promovendo o debate sobre seus impactos sociais e educacionais.",
    color: "secondary",
    externalLink: "https://educacaovigiada.org.br/",
    sections: {
      context: {
        title: "Contexto e Objetivo",
        content: "O Observatório Educação Vigiada é uma iniciativa de divulgação científica de pesquisadores acadêmicos e organizações sociais que tem como objetivo coletar e divulgar informações sobre a plataformização da educação pública no Brasil e na América do Sul, incentivando o debate na sociedade sobre seus impactos sociais e educacionais. É uma ação da Iniciativa Educação Aberta.",
      },
      solution: {
        title: "Solução Implementada",
        content: "Desenvolvimento de uma plataforma digital que reúne e disponibiliza dados sobre a plataformização da educação, promovendo transparência e fomentando o debate crítico sobre o tema. O projeto foi desenvolvido em colaboração com o coletivo de tecnologia social FARPA.",
      },
      technology: {
        title: "Tecnologias Utilizadas",
        items: [
          "Ruby para o desenvolvimento backend",
          "Jekyll para geração de sites estáticos",
          "JavaScript para interatividade",
          "OpenStreetMap para visualização de dados geográficos",
        ],
      },
      impact: {
        title: "Impacto e Contribuições",
        items: [
          "Promoção da transparência na educação pública",
          "Fomento ao debate crítico sobre plataformização educacional",
          "Disponibilização de dados para pesquisas acadêmicas",
          "Fortalecimento da educação aberta e democrática",
        ],
      },
      partners: {
        title: "Parceiros e Apoiadores",
        items: [
          "Centro de Competência em Software Livre (UFPA)",
          "Laboratório de Estudos Avançados em Software (LAES/UFPA)",
          "Rede Latino-Americana de Estudos em Vigilância, Tecnologia e Sociedade (LAVITS)",
          "Derechos Digitales América Latina",
          "Iniciativa Educação Aberta",
          "Coletivo FARPA (Tecnologia Social)",
        ],
      },
    },
  },
  "escravidao-liberdade": {
    icon: MapPin,
    title: "Escravidão e Liberdade",
    subtitle: "Pesquisa sobre Africanos e seus descendentes no Brasil",
    heroDescription: "Recuperação e análise de dados de mais de 20 anos de pesquisa sobre a experiência dos africanos e seus descendentes no Brasil, com apresentação em novo website.",
    color: "primary",
    externalLink: "https://escravidaoeliberdade.com.br/",
    sections: {
      context: {
        title: "Contexto e Objetivo",
        content: "O Grupo de Pesquisa do CNPq foi estabelecido em 2002, com o propósito de investigar de maneira abrangente e comparativa a experiência dos africanos e seus descendentes no Brasil. O objetivo é compreender e analisar diversos aspectos dessa vivência histórica.",
      },
      solution: {
        title: "Solução Implementada",
        content: "Recuperação dos dados de mais de 20 anos de pesquisa, higienização das informações coletadas e apresentação dos resultados em um novo website moderno e acessível, garantindo a preservação e difusão deste importante acervo histórico.",
      },
      technology: {
        title: "Tecnologias Utilizadas",
        items: [
          "Python para processamento e análise de dados",
          "PHP para o backend do website",
          "MySQL para armazenamento de dados",
          "Tecnologias web modernas para a interface do usuário",
        ],
      },
      impact: {
        title: "Impacto e Parcerias",
        items: [
          "Preservação de um importante acervo de pesquisa histórica",
          "Disponibilização do conhecimento para a comunidade acadêmica e público em geral",
          "Parceria entre diversas instituições de ensino superior brasileiras",
        ],
      },
      partners: {
        title: "Instituições Envolvidas",
        items: [
          "CNPq (Conselho Nacional de Desenvolvimento Científico e Tecnológico)",
          "UFPR (Universidade Federal do Paraná)",
          "UFRGS (Universidade Federal do Rio Grande do Sul)",
          "UFSC (Universidade Federal de Santa Catarina)",
          "UFSM (Universidade Federal de Santa Maria)",
          "Unifesp (Universidade Federal de São Paulo)",
          "UNESP-ASSIS (Universidade Estadual Paulista)",
        ],
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
        content: "Criado pela Terrakrya e desenvolvido e mantido pelo Mutirõ, o Caminho do Fogo é uma plataforma que integra monitoramento por satélite, dados climáticos e informações de campo para antecipar riscos de incêndio, coordenar ações de prevenção e apoiar brigadas no combate. A ferramenta conecta brigadistas, proprietários rurais, órgãos ambientais e comunidades.",
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
        title: "Parceiros e Apoiadores",
        items: [
          "Terrakrya (criador do projeto)",
          "IBAMA/Prevfogo",
          "Corpo de Bombeiros",
          "ONGs ambientais",
          "Comunidades tradicionais",
        ],
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
