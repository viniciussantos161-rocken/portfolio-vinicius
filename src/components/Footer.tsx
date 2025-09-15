import { Heart, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border/50">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="text-center mb-8">
            {/* Logo/Name */}
            <h3 className="text-2xl font-bold text-primary mb-4">
              Vinícius Rockenbach dos Santos
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Desenvolvedor apaixonado por tecnologia, automação e inovação. 
              Sempre em busca de novos desafios e oportunidades de crescimento.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {[
              { name: 'Início', href: '#home' },
              { name: 'Sobre', href: '#about' },
              { name: 'Habilidades', href: '#skills' },
              { name: 'Experiência', href: '#experience' },
              { name: 'Projetos', href: '#projects' },
              { name: 'Contato', href: '#contact' }
            ].map((link) => (
              <button
                key={link.name}
                onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-border/30 mb-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              © {currentYear} Desenvolvido por Vinícius Rockenbach
            </p>

            {/* Scroll to Top Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ArrowUp size={16} className="mr-2" />
              Voltar ao Topo
            </Button>
          </div>

          {/* Tech Stack Credits */}
          <div className="mt-8 pt-6 border-t border-border/30 text-center">
            <p className="text-muted-foreground text-xs">
              Tecnologias usadas: React, TypeScript, Tailwind CSS e shadcn/ui
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;