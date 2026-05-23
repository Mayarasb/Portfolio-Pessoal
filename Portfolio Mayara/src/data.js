export const userData = {
  // ✏️ EDITE AQUI: Suas informações pessoais
  name: 'Mayara Souza Barros',
  role: 'Product Owner & Desenvolvedora',
  bio: 'Estudante de Desenvolvimento de Software Multiplataforma pela Fatec Votorantim, atuando atualmente na área de Gestão de Projetos, com experiência no relacionamento direto com clientes, suporte às equipes e acompanhamento das entregas para garantir a qualidade e o cumprimento dos prazos. Possuo conhecimento em metodologias ágeis, como Scrum e Kanban, além de interesse em tecnologia, desenvolvimento de software e melhoria contínua de processos. Estou em busca de novas oportunidades para ampliar meus conhecimentos, desenvolver minhas habilidades profissionais e crescer na área de tecnologia e projetos.',
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
      subtitle: 'Plataforma Web para Doação e Redistribuição de Alimentos em Votorantim',
      description:
        'Sistema desenvolvido para conectar doadores e instituições beneficentes, facilitando a doação, gerenciamento e redistribuição de alimentos de forma acessível, organizada e eficiente, com foco no combate ao desperdício e apoio à comunidade local.',
      longDescription:
        'O Caritá é um projeto desenvolvido com o objetivo de criar uma plataforma online voltada à facilitação da doação de alimentos em Votorantim. O sistema permite que usuários se cadastrem como doadores ou instituições beneficentes, possibilitando o compartilhamento, gerenciamento e acompanhamento de alimentos disponíveis para doação de maneira simples, intuitiva e organizada. A plataforma foi pensada para aproximar pessoas e organizações, tornando o processo de doação mais acessível, transparente e eficiente.\n\nO principal objetivo do projeto é reduzir o desperdício de alimentos e incentivar a solidariedade dentro da comunidade local, ajudando famílias em situação de vulnerabilidade. Além disso, o sistema busca oferecer uma experiência prática e segura para os usuários, utilizando recursos modernos de desenvolvimento web, organização de informações e acessibilidade para garantir uma navegação mais inclusiva e eficiente.',
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
      subtitle: 'Plataforma web desenvolvida com foco em acessibilidade digital e inclusão de usuários',
      description:
        'Site desenvolvido seguindo boas práticas de acessibilidade e inclusive design, utilizando recursos que proporcionam uma navegação mais intuitiva, acessível e eficiente para diferentes públicos.',
      longDescription:
        'O Projeto Acessibilidade é uma iniciativa voltada ao desenvolvimento de um site inclusivo e acessível para todos os usuários, independentemente de suas limitações ou habilidades. O projeto foi desenvolvido seguindo as diretrizes da WCAG, aplicando recursos como contraste adequado de cores, navegação por teclado, compatibilidade com leitores de tela, organização semântica do conteúdo e melhorias na usabilidade da interface.\n\nO principal objetivo é promover inclusão digital e garantir que todas as pessoas consigam acessar as informações de forma simples, intuitiva e eficiente. Além disso, o projeto busca demonstrar a importância do desenvolvimento de interfaces acessíveis, proporcionando uma melhor experiência de navegação e reforçando boas práticas no desenvolvimento web moderno.',
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
