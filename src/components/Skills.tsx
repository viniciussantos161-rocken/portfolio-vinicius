import { Code, Database, Globe, Server, Wrench, Cpu } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="text-primary" size={32} />,
      title: "Linguagens de Programação",
      skills: ["JavaScript", "Python", "C", "PHP"],
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: <Globe className="text-primary" size={32} />,
      title: "Desenvolvimento Web",
      skills: ["Frontend", "HTML/CSS", "React", "Responsive Design"],
      color: "from-green-500/20 to-green-600/20"
    },
    {
      icon: <Database className="text-primary" size={32} />,
      title: "Banco de Dados",
      skills: ["MySQL", "PHPMyAdmin", "Modelagem de Dados"],
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      icon: <Server className="text-primary" size={32} />,
      title: "DevOps & Ferramentas",
      skills: ["Docker", "Controle de Versão", "Linux"],
      color: "from-orange-500/20 to-orange-600/20"
    },
    {
      icon: <Wrench className="text-primary" size={32} />,
      title: "Suporte Técnico",
      skills: ["Manutenção", "Troubleshooting", "Hardware"],
      color: "from-red-500/20 to-red-600/20"
    },
    {
      icon: <Cpu className="text-primary" size={32} />,
      title: "Sistemas & Processos",
      skills: ["Gestão de Manutenção", "Qualidade", "Produtividade"],
      color: "from-teal-500/20 to-teal-600/20"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Habilidades
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Competências técnicas desenvolvidas através de experiência prática 
              e formação acadêmica
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="glass border-border/50 hover:shadow-glow transition-all duration-500 animate-fadeInUp group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 w-fit">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="flex items-center justify-between p-3 rounded-lg glass border border-border/30 hover:border-primary/30 transition-all duration-300"
                      >
                        <span className="text-foreground font-medium">{skill}</span>
                        <div className="flex gap-1">
                          {[...Array(4)].map((_, i) => (
                            <div 
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i < 3 ? 'bg-primary' : 'bg-muted'
                              } transition-all duration-300`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Languages Section */}
          <div className="mt-16 animate-fadeInUp">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
              Idiomas
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Card className="glass border-border/50">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-semibold mb-2 text-foreground">Inglês</h4>
                  <p className="text-primary font-medium">Avançado</p>
                  <div className="w-full bg-muted rounded-full h-2 mt-3">
                    <div className="bg-primary h-2 rounded-full w-4/5 transition-all duration-1000" />
                  </div>
                </CardContent>
              </Card>
              <Card className="glass border-border/50">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-semibold mb-2 text-foreground">Espanhol</h4>
                  <p className="text-accent font-medium">Intermediário</p>
                  <div className="w-full bg-muted rounded-full h-2 mt-3">
                    <div className="bg-accent h-2 rounded-full w-2/5 transition-all duration-1000" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;