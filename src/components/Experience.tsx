import { Building, Calendar, Award, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Experience = () => {
  const experiences = [
    {
      company: "Whirlpool Corporation",
      role: "Desenvolvedor/Manutenção",
      period: "Janeiro 2025 - Dezembro 2025",
      type: "Jovem Aprendiz",
      description: "Durante o período como jovem aprendiz junto ao SESI SENAI, atuei como assistente de manutenção e desenvolvendo projetos como sites, funções e softwares.",
      achievements: [
        "Desenvolvimento de sistemas web",
        "Manutenção preventiva e corretiva",
        "Criação de soluções inovadoras",
        "Trabalho em equipe multidisciplinar"
      ],
      icon: <Building className="text-primary" size={24} />
    }
  ];

  const education = [
    {
      institution: "Univille",
      course: "Bacharelado em Engenharia de Software",
      period: "Fevereiro 2025 - Atual",
      description: "Formação focada em competências técnicas e profissionais, aprimorando habilidades como programador e desenvolvendo visão estratégica de software e empresarial.",
      icon: <GraduationCap className="text-primary" size={24} />
    },
    {
      institution: "SESI SENAI",
      course: "Aprendizagem Industrial - Programador de Sistemas da Informação",
      period: "Janeiro 2025 - Dezembro 2025",
      description: "Curso técnico com foco nas linguagens de JavaScript, C, Python, desenvolvimento Frontend e Banco de dados (PHPMyAdmin e MySQL).",
      icon: <Award className="text-primary" size={24} />
    },
    {
      institution: "Escola Católica Machado de Assis",
      course: "Ensino Médio Completo",
      period: "2022 - 2024",
      description: "Formação com itinerário formativo incluindo aulas extracurriculares e desenvolvimento de habilidades complementares.",
      icon: <GraduationCap className="text-primary" size={24} />
    }
  ];

  return (
    <section id="experience" className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Experiência & Formação
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Minha jornada profissional e acadêmica no desenvolvimento de software
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Experience Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-3">
              <Building className="text-primary" size={28} />
              Experiência Profissional
            </h3>
            
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="glass border-border/50 hover:shadow-glow transition-all duration-500 animate-slideInLeft"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      {exp.icon}
                      <div>
                        <CardTitle className="text-xl font-bold text-foreground">
                          {exp.role}
                        </CardTitle>
                        <p className="text-primary font-semibold">{exp.company}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Principais Atividades:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-muted-foreground text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-3">
              <GraduationCap className="text-primary" size={28} />
              Formação Acadêmica
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card 
                  key={index}
                  className="glass border-border/50 hover:shadow-glow transition-all duration-500 animate-slideInRight"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="text-lg font-bold text-foreground">{edu.course}</h4>
                            <p className="text-primary font-semibold">{edu.institution}</p>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar size={16} />
                            <span className="text-sm">{edu.period}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div className="mt-16 text-center animate-fadeInUp">
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center justify-center gap-3">
              <Award className="text-primary" size={28} />
              Certificações
            </h3>
            <Card className="glass border-border/50 max-w-md mx-auto">
              <CardContent className="p-6">
                <Award className="text-primary mx-auto mb-3" size={32} />
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  ACIJ - Associação Empresarial de Joinville
                </h4>
                <p className="text-muted-foreground">Certificado de Participação e conclusão</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;