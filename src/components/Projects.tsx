import { ExternalLink, Github, Code, Wrench, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Sistema de Gestão de Manutenção",
      description: "Sistema desenvolvido durante a experiência na Whirlpool para otimizar os processos nas máquinas da empresa atribuindo, manutenção industrial, gestão e incluindo controle de equipamentos, estoques e relatórios.",
      technologies: ["Node", "MySQL", "JavaScript", "HTML/CSS", "Django" ],
      category: "Web Development",
      icon: <Wrench className="text-primary" size={24} />,
      status: "Concluído",
      features: [
        "Controle de equipamentos",
        "Relatórios automáticos", 
        "Interface responsiva",
        "Dashboard interativo"
      ]
    },
    {
      title: "Website Corporativo",
      description: "Desenvolvimento de sites institucionais para gestões comerciais: Barbearia, Doceria etc. Focando em design responsivo, performance otimizada, experiência do usuário e usabilidade do cliente",
      technologies: ["React", "JavaScript", "CSS3", "PHP", "Desenvolvomento Web"],
      category: "Frontend",
      icon: <Code className="text-primary" size={24} />,
      status: "Concluído",
      features: [
        "Design responsivo",
        "SEO otimizado",
        "Performance alta",
        "Fácil manutenção"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Concluído":
        return "text-green-500 bg-green-500/20";
      case "Em desenvolvimento":
        return "text-yellow-500 bg-yellow-500/20";
      default:
        return "text-primary bg-primary/20";
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Projetos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Soluções desenvolvidas durante minha experiência profissional e estudos, 
              demonstrando aplicação prática das tecnologias aprendidas
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="glass border-border/50 hover:shadow-glow transition-all duration-500 animate-fadeInUp group h-full"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        {project.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">{project.category}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent>
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Tecnologias:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Principais Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Github size={16} className="mr-2" />
                      Ver Código
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-primary hover:bg-primary/90"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Ver Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center animate-fadeInUp">
            <Card className="glass border-border/50 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Interessado em colaborar?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Estou sempre aberto a novos desafios e oportunidades de crescimento. 
                  Vamos conversar sobre seu próximo projeto!
                </p>
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 shadow-glow"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Entrar em Contato
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;