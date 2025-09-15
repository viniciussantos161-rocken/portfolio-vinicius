import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Prepare mailto link
    const subject = encodeURIComponent(formData.subject || 'Contato via Portfolio');
    const body = encodeURIComponent(`
Nome: ${formData.name}
Email: ${formData.email}

Mensagem:
${formData.message}
    `);
    const mailtoLink = `mailto:vinirockenbachs@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={24} />,
      title: "Email",
      info: "vinirockenbachs@gmail.com",
      link: "mailto:vinirockenbachs@gmail.com"
    },
    {
      icon: <Phone className="text-primary" size={24} />,
      title: "Telefone",
      info: "+47 988 581614",
      link: "tel:+5547988581614"
    },
    {
      icon: <MapPin className="text-primary" size={24} />,
      title: "Localização",
      info: "Joinville, Santa Catarina",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vinicius-rockenbach-dos-santos-953baa354",
      color: "hover:text-blue-500"
    },
    {
      icon: <Github size={24} />,
      name: "GitHub",
      url: "https://github.com/ViniciusRockenbachDS",
      color: "hover:text-gray-400"
    },
    {
      icon: <Mail size={24} />,
      name: "Email",
      url: "mailto:vinirockenbachs@gmail.com",
      color: "hover:text-red-500"
    }
  ];

  return (
    <section id="contact" className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Vamos Conversar
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Estou sempre interessado em novos projetos, oportunidades de trabalho 
              e conversas sobre tecnologia. Entre em contato!
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slideInLeft">
              <Card className="glass border-border/50 shadow-portfolio">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                    <Send className="text-primary" size={28} />
                    Enviar Mensagem
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Preencha o formulário abaixo e entrarei em contato o mais breve possível.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Nome *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="glass border-border/50 focus:border-primary"
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="glass border-border/50 focus:border-primary"
                          placeholder="seu.email@exemplo.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Assunto
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="glass border-border/50 focus:border-primary"
                        placeholder="Assunto da mensagem"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Mensagem *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="glass border-border/50 focus:border-primary resize-none"
                        placeholder="Descreva seu projeto, dúvida ou proposta..."
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 shadow-glow"
                      size="lg"
                    >
                      <Send size={20} className="mr-2" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Social */}
            <div className="animate-slideInRight space-y-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Informações de Contato
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <Card 
                      key={index}
                      className="glass border-border/50 hover:shadow-glow transition-all duration-300"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-primary/20 rounded-lg">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{item.title}</h4>
                            {item.link ? (
                              <a 
                                href={item.link}
                                className="text-muted-foreground hover:text-primary transition-colors"
                              >
                                {item.info}
                              </a>
                            ) : (
                              <p className="text-muted-foreground">{item.info}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Redes Sociais
                </h3>
                <div className="grid gap-4">
                  {socialLinks.map((social, index) => (
                    <Card 
                      key={index}
                      className="glass border-border/50 hover:shadow-glow transition-all duration-300 group"
                    >
                      <CardContent className="p-4">
                        <a 
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4"
                        >
                          <div className={`p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-all duration-300`}>
                            <div className={`text-primary ${social.color} transition-colors duration-300`}>
                              {social.icon}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {social.name}
                            </h4>
                            <p className="text-muted-foreground text-sm">
                              Conectar via {social.name}
                            </p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <Card className="glass border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-3 animate-pulse" />
                  <h4 className="font-semibold text-foreground mb-2">
                    Disponível para Projetos
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Atualmente aceitando novos projetos e oportunidades de trabalho
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;