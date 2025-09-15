import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import profileImage from '@/assets/profile-image.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 gradient-hero opacity-90" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fadeInUp">
          {/* Profile Image */}
          <div className="w-40 h-40 mx-auto mb-8 rounded-full glass shadow-glow animate-pulse-glow overflow-hidden">
            <img 
              src={profileImage} 
              alt="Vinícius Rockenbach - Desenvolvedor Full Stack"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Vinícius Rockenbach
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
            Desenvolvedor de sistemas & Estudante de Engenharia de Software
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Jovem desenvolvedor apaixonado por tecnologia, com experiência em desenvolvimento web, 
            programação, automação e inovação. Atualmente cursando Engenharia de Software na Univille.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-lg transition-all duration-300"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Projetos
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Entre em Contato
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <Button 
              variant="ghost" 
              size="sm"
              className="hover:text-primary hover:shadow-glow transition-all duration-300"
              asChild
            >
              <a href="https://www.linkedin.com/in/vinicius-rockenbach-dos-santos-953baa354" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="hover:text-primary hover:shadow-glow transition-all duration-300"
              asChild
            >
              <a href="https://github.com/ViniciusRockenbachDS" target="_blank" rel="noopener noreferrer">
                <Github size={24} />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="hover:text-primary hover:shadow-glow transition-all duration-300"
              asChild
            >
              <a href="mailto:vinirockenbachs@gmail.com">
                <Mail size={24} />
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="text-primary" size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;