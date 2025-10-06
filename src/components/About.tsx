import { MapPin, Calendar, GraduationCap } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import aboutIllustration from '@/assets/about-illustration.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Sobre Mim
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* About Image */}
            <div className="animate-slideInLeft">
              <div className="relative">
                <div className="w-full max-w-md mx-auto">
                  <div className="aspect-square rounded-2xl glass shadow-portfolio overflow-hidden">
                    <img 
                      src={aboutIllustration} 
                      alt="Desenvolvedor - Workspace"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
              </div>
            </div>

            {/* About Content */}
            <div className="animate-slideInRight space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  Desenvolvedor em Crescimento
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sou um jovem desenvolvedor apaixonado por tecnologia, automação e inovação. 
                  Atualmente estudando Engenharia de Software na Univille, estou sempre 
                  em busca de novos desafios e oportunidades de aprendizado.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Minhas experiências na Whirlpool Corporation e Sesi Senai como jovem aprendiz me 
                  proporcionou vivência prática no desenvolvimento de sistemas e o trabalho em uma dentro de uma empresa, 
                  com manutenção e criação de soluções inovadora.
                </p>
              </div>

              {/* Info Cards */}
              <div className="grid gap-4">
                <Card className="glass border-border/50">
                  <CardContent className="p-4 flex items-center gap-4">
                    <MapPin className="text-primary" size={24} />
                    <div>
                      <h4 className="font-semibold text-foreground">Localização</h4>
                      <p className="text-muted-foreground">Joinville, Santa Catarina</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass border-border/50">
                  <CardContent className="p-4 flex items-center gap-4">
                    <Calendar className="text-primary" size={24} />
                    <div>
                      <h4 className="font-semibold text-foreground">Experiência</h4>
                      <p className="text-muted-foreground">Whirlpool Corporation (2025)</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass border-border/50">
                  <CardContent className="p-4 flex items-center gap-4">
                    <GraduationCap className="text-primary" size={24} />
                    <div>
                      <h4 className="font-semibold text-foreground">Formação Atual</h4>
                      <p className="text-muted-foreground">Engenharia de Software - Univille</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
