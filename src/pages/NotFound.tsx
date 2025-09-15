import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Number */}
          <div className="text-8xl md:text-9xl font-bold text-primary mb-4 animate-fadeInUp">
            404
          </div>
          
          {/* Error Message */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground animate-fadeInUp">
            Página Não Encontrada
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 animate-fadeInUp">
            Oops! A página que você está procurando não existe ou foi movida.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 shadow-glow"
              asChild
            >
              <a href="/">
                <Home size={20} className="mr-2" />
                Voltar ao Início
              </a>
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.history.back()}
            >
              <ArrowLeft size={20} className="mr-2" />
              Página Anterior
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 glass rounded-lg border border-border/50 animate-fadeInUp">
            <p className="text-muted-foreground">
              Se você acredita que isso é um erro, entre em contato através do 
              <a 
                href="mailto:vinirockenbachs@gmail.com" 
                className="text-primary hover:underline ml-1"
              >
                email
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
