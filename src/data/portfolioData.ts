// Portfolio Configuration Data
// This file makes it easy to update portfolio information without modifying components

export const personalInfo = {
  name: "Vinícius Rockenbach dos Santos",
  title: "Desenvolvedor Full Stack & Estudante de Engenharia de Software",
  location: "Joinville, Santa Catarina",
  phone: "+47 988 581614",
  email: "vinirockenbachs@gmail.com",
  description: "Jovem desenvolvedor apaixonado por tecnologia, com experiência em desenvolvimento web, programação e inovação. Atualmente cursando Engenharia de Software na Univille.",
  
  socialLinks: {
    linkedin: "https://linkedin.com/in/vinicius-rockenbach",
    github: "https://github.com/vinirockenbachs",
    email: "mailto:vinirockenbachs@gmail.com"
  }
};

export const skills = {
  languages: ["JavaScript", "Python", "C", "PHP"],
  webDevelopment: ["Frontend", "HTML/CSS", "React", "Responsive Design"],
  databases: ["MySQL", "PHPMyAdmin", "Modelagem de Dados"],
  devops: ["Docker", "Controle de Versão", "Linux"],
  support: ["Manutenção", "Troubleshooting", "Hardware"],
  systems: ["Gestão de Manutenção", "Qualidade", "Produtividade"],
  
  languages_spoken: {
    english: { level: "Avançado", percentage: 80 },
    spanish: { level: "Intermediário", percentage: 60 }
  }
};

export const experience = [
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
    ]
  }
];

export const education = [
  {
    institution: "Univille",
    course: "Bacharelado em Engenharia de Software",
    period: "Fevereiro 2025 - Atual",
    description: "Formação focada em competências técnicas e profissionais, aprimorando habilidades como programador e desenvolvendo visão estratégica de software."
  },
  {
    institution: "SESI SENAI",
    course: "Aprendizagem Industrial - Programador de Sistemas da Informação",
    period: "Janeiro 2025 - Dezembro 2025",
    description: "Curso técnico com foco em linguagens como JavaScript, C, Python, desenvolvimento Frontend e Banco de dados (PHPMyAdmin e MySQL)."
  },
  {
    institution: "Escola Católica Machado de Assis",
    course: "Ensino Médio Completo",
    period: "2022 - 2024",
    description: "Formação com itinerário formativo incluindo aulas extracurriculares e desenvolvimento de habilidades complementares."
  }
];

export const projects = [
  {
    title: "Sistema de Gestão de Manutenção",
    description: "Sistema desenvolvido durante a experiência na Whirlpool para otimizar os processos de manutenção industrial, incluindo controle de equipamentos e relatórios.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    category: "Web Development",
    status: "Em desenvolvimento",
    features: [
      "Controle de equipamentos",
      "Relatórios automáticos",
      "Interface responsiva",
      "Dashboard interativo"
    ]
  },
  {
    title: "Website Corporativo",
    description: "Desenvolvimento de sites institucionais para empresas, focando em design responsivo, performance otimizada e experiência do usuário.",
    technologies: ["React", "JavaScript", "CSS3", "PHP"],
    category: "Frontend",
    status: "Concluído",
    features: [
      "Design responsivo",
      "SEO otimizado",
      "Performance alta",
      "Fácil manutenção"
    ]
  },
  {
    title: "Sistema de Banco de Dados",
    description: "Modelagem e implementação de banco de dados para controle de informações empresariais, utilizando MySQL e PHPMyAdmin.",
    technologies: ["MySQL", "PHPMyAdmin", "SQL", "PHP"],
    category: "Database",
    status: "Em desenvolvimento",
    features: [
      "Modelagem eficiente",
      "Consultas otimizadas",
      "Backup automático",
      "Interface administrativa"
    ]
  }
];

export const certificates = [
  {
    name: "ACIJ - Associação Empresarial de Joinville",
    type: "Certificado de Participação",
    year: "2025"
  }
];