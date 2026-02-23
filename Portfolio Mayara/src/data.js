export const userData = {
  // ✏️ EDITE AQUI: Suas informações pessoais
  name: 'Mayara Souza Barros',
  role: 'Product Owner & Desenvolvedora',
  bio: 'Estudante de Desenvolvimento de Software Multiplataforma pela Fatec Votorantim, atualmente atuo na area de Gestão de projetos, onde atuo diretamento com clientes, auxiliando  equipes e garantindo a entrega de projetos. Tenho experiência em metodologias ágeis, como Scrum e Kanban, e estou em busca de novas oportunidades de aprendizado e crescimento profissional.',
  location: '📍 Votorantim - São Paulo, Brasil',
  avatar: null, // Coloque a URL de uma foto sua, ex: 'https://...'
  available: true, // true = "Disponível para projetos"

  // ✏️ EDITE AQUI: Suas habilidades
  skills: [
    { name: 'Gestão de Projetos', level: 70, category: 'Gestão de Projetos' },
    { name: 'Kanban', level: 50, category: 'Gestão de Projetos' },
    { name: 'Scrum', level: 50, category: 'Gestão de Projetos' },
    { name: 'HTML', level: 80, category: 'Desenvolvimento Web' },
    { name: 'CSS', level: 70, category: 'Desenvolvimento Web' },
    { name: 'React Native', level: 20, category: 'Mobile' },
    { name: 'JavaScript', level: 30, category: 'Linguagem' },
    { name: 'TypeScript', level: 30, category: 'Linguagem' },
    { name: 'Node.js', level: 30, category: 'Backend' },
    { name: 'Python', level: 30, category: 'Backend' },
    { name: 'Firebase', level: 5, category: 'Cloud' },
    { name: 'Git & GitHub', level: 50, category: 'Ferramentas' },
    { name: 'Figma', level: 50, category: 'Design' },
    { name: 'REST APIs', level: 50, category: 'Backend' },
  ],

  // ✏️ EDITE AQUI: Seus projetos
  projects: [
    {
      id: '1',
      title: 'Caritá',
      subtitle: 'Site de Doação de Alimentos me Votorantim',
      description:
        'Plataforma de doação de alimentos para conectar doadores e instituições de caridade em Votorantim, facilitando a redistribuição de alimentos e combatendo o desperdício.',
      longDescription:
        ' O Caritá é um projeto que visa criar uma plataforma online para facilitar a doação de alimentos em Votorantim. Através do site, os usuários podem se cadastrar como doadores ou instituições de caridade e listar os alimentos disponíveis para doação. O objetivo é reduzir o desperdício de alimentos e ajudar aqueles que estão em necessidade na comunidade local.',
      tags: ['Angular', 'HTML',' CSS', 'TypeScript', 'Node.js', 'MongoDB'],
      color: '#bd7a22ff',
      icon: '🤝',
      github: 'https://github.com/ProjetoCarita/BackendCarita',
      live: 'https://frontend-carita-six.vercel.app/',
      status: 'Concluído',
      year: '2024 -2025',
    },
    {
      id: '2',
      title: 'Projeto Acessibilidade',
      subtitle: 'Site com inclusive design e recursos de acessibilidade',
      description:
        'Site desenvolvido com foco em acessibilidade digital, seguindo boas práticas de inclusive design e proporcionando uma experiência inclusiva para todos os usuários.',
      longDescription:
        'O Projeto Acessibilidade é uma iniciativa para criar um site que seja acessível a todos, independentemente de suas habilidades. O site segue as diretrizes de acessibilidade da WCAG, utilizando contrastes de cores adequados, navegação por teclado, leitores de tela e outros recursos para garantir que todos os usuários possam acessar o conteúdo de forma eficaz.',
      tags: ['React Native', 'Redux', 'Node.js'],
      color: '#4ecd78ff',
      icon: '✅',
      github: 'https://github.com/Mayarasb/Projeto-Acessibilidade',
      live: null,
      status: 'Concluído',
      year: '2025',
    },
    {
      id: '3',
      title: 'projeto android',
      subtitle: 'Projeto de aprendizado HTML e CSS',
      description:
        'Projeto de aprendizado HTML e CSS, focado em criar um site responsivo e moderno, utilizando as melhores práticas de desenvolvimento web.',
      longDescription:
        'Este projeto é uma iniciativa para aprender e aplicar os fundamentos de HTML e CSS. O objetivo é criar um site responsivo, moderno e visualmente atraente, utilizando as melhores práticas de desenvolvimento web. O projeto inclui a criação de layouts flexíveis, uso de media queries para adaptabilidade em diferentes dispositivos e a implementação de design moderno para proporcionar uma experiência agradável aos usuários.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      color: '#FFD93D',
      icon: '💻',
      github: 'https://github.com/Mayarasb/projeto_android',
      live: null,
      status: 'Concluído',
      year: '2023',
    }
    
  ],

  // ✏️ EDITE AQUI: Seus contatos
  contact: {
    email: 'mayarasbarros7@gmail.com',
    github: 'https://github.com/Mayarasb',
    linkedin: 'https://www.linkedin.com/in/mayarasbarros/',
    celular: '+55 15 98143-6304',
    
  },
};
