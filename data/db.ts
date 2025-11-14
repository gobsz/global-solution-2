
import { Skill, FutureJob } from '../types';

export const skills: Skill[] = [
  // Tech Skills
  { id: 'data_analysis', name: 'Análise de Dados', category: 'tech' },
  { id: 'python_programming', name: 'Programação Python', category: 'tech' },
  { id: 'machine_learning', name: 'Machine Learning', category: 'tech' },
  { id: 'cloud_computing', name: 'Cloud Computing', category: 'tech' },
  { id: 'cybersecurity', name: 'Cibersegurança', category: 'tech' },
  { id: 'ui_ux_design', name: 'UI/UX Design', category: 'tech' },
  { id: 'blockchain', name: 'Desenvolvimento Blockchain', category: 'tech' },
  { id: 'iot', name: 'Internet das Coisas (IoT)', category: 'tech' },
  { id: 'ar_vr', name: 'Desenvolvimento AR/VR', category: 'tech' },
  { id: 'rpa', name: 'Automação de Processos Robóticos (RPA)', category: 'tech' },

  // Human Skills
  { id: 'critical_thinking', name: 'Pensamento Crítico', category: 'human' },
  { id: 'creativity', name: 'Criatividade', category: 'human' },
  { id: 'emotional_intelligence', name: 'Inteligência Emocional', category: 'human' },
  { id: 'interpersonal_communication', name: 'Comunicação Interpessoal', category: 'human' },
  { id: 'adaptative_leadership', name: 'Liderança Adaptativa', category: 'human' },
  { id: 'complex_problem_solving', name: 'Resolução de Problemas Complexos', category: 'human' },
  { id: 'cultural_intelligence', name: 'Inteligência Cultural e Diversidade', category: 'human' },
  { id: 'negotiation', name: 'Negociação e Persuasão', category: 'human' },
  { id: 'cognitive_flexibility', name: 'Flexibilidade Cognitiva', category: 'human' },
  { id: 'collaboration', name: 'Colaboração e Trabalho em Equipe', category: 'human' },

  // Innovation Skills
  { id: 'design_thinking', name: 'Design Thinking', category: 'innovation' },
  { id: 'agile_methodologies', name: 'Metodologias Ágeis', category: 'innovation' },
  { id: 'data_storytelling', name: 'Storytelling com Dados', category: 'innovation' },
  { id: 'innovation_management', name: 'Gestão da Inovação', category: 'innovation' },
];

export const futureJobs: FutureJob[] = [
  {
    id: 'ia_ethicist',
    title: 'Especialista em Ética de IA',
    emoji: '⚖️',
    description: 'Garante que os sistemas de inteligência artificial operem de forma justa, transparente e sem vieses, alinhados aos valores humanos.',
    detailedDescription: `O Especialista em Ética de IA atua na vanguarda da tecnologia e da humanidade, sendo o guardião dos princípios morais no desenvolvimento de sistemas autônomos. Este profissional analisa algoritmos e conjuntos de dados para identificar e mitigar vieses potenciais que poderiam levar a resultados discriminatórios em áreas críticas como contratação, concessão de crédito e justiça criminal. Sua responsabilidade é garantir que a IA sirva ao bem comum, protegendo os direitos e a dignidade dos indivíduos.

Além da análise técnica, o trabalho envolve a criação de frameworks de governança, políticas de uso responsável e a condução de auditorias de impacto ético. Eles colaboram com equipes multidisciplinares, incluindo engenheiros, cientistas de dados, advogados e formuladores de políticas, para traduzir valores éticos complexos em diretrizes práticas e implementáveis. Este papel exige uma comunicação clara para educar stakeholders sobre os riscos e benefícios da IA, promovendo uma cultura de responsabilidade e transparência em toda a organização.`,
    mappedFrom: ['critical_thinking', 'interpersonal_communication', 'complex_problem_solving', 'data_storytelling'],
    skillsToDevelop: ['machine_learning', 'data_analysis']
  },
  {
    id: 'metaverse_architect',
    title: 'Arquiteto de Metaverso',
    emoji: '🌐',
    description: 'Projeta e constrói espaços virtuais imersivos, experiências e economias digitais para trabalho, socialização e entretenimento.',
    detailedDescription: `O Arquiteto de Metaverso é o urbanista da próxima fronteira digital. Este profissional combina design de jogos, arquitetura, design de UX e economia para criar mundos virtuais coesos, funcionais e envolventes. Eles não apenas projetam a aparência dos ambientes, mas também definem as regras de interação, os sistemas econômicos e as experiências sociais que acontecem dentro desses espaços, seja para escritórios virtuais, locais de eventos ou novos reinos de entretenimento.

Seu trabalho é fundamental para garantir que o metaverso seja mais do que apenas um espaço 3D, mas um lugar onde as pessoas possam se conectar, colaborar e criar valor de maneiras novas. Eles precisam pensar em escalabilidade, segurança e interoperabilidade entre diferentes plataformas, garantindo que as experiências sejam acessíveis e significativas para uma base de usuários diversificada. É uma carreira que exige uma mistura única de visão criativa e conhecimento técnico profundo.`,
    mappedFrom: ['ui_ux_design', 'python_programming', 'creativity', 'design_thinking'],
    skillsToDevelop: ['ar_vr', 'cloud_computing', 'cybersecurity']
  },
  {
    id: 'digital_detox_therapist',
    title: 'Terapeuta de Desintoxicação Digital',
    emoji: '🧘',
    description: 'Ajuda indivíduos e organizações a desenvolverem relacionamentos saudáveis com a tecnologia, combatendo o vício digital e o esgotamento.',
    detailedDescription: `Em um mundo hiperconectado, o Terapeuta de Desintoxicação Digital oferece orientação para restabelecer o equilíbrio. Este profissional trabalha com clientes para identificar padrões de uso problemático de tecnologia, como o vício em redes sociais e a sobrecarga de informações, que levam ao estresse, ansiedade e burnout. Utilizando técnicas de mindfulness, terapia cognitivo-comportamental e coaching, eles criam estratégias personalizadas para que os indivíduos recuperem o controle sobre sua atenção e bem-estar.

O objetivo não é eliminar a tecnologia, mas cultivar um relacionamento intencional e saudável com ela. Os terapeutas ajudam a estabelecer limites, como horários sem tela e "higiene do sono digital", e a redescobrir atividades offline que promovem a saúde mental e a conexão humana. Eles também podem trabalhar com empresas para desenvolver políticas de bem-estar digital que aumentem o foco e a produtividade da equipe, combatendo a cultura do "sempre online".`,
    mappedFrom: ['emotional_intelligence', 'interpersonal_communication', 'critical_thinking'],
    skillsToDevelop: ['cybersecurity', 'ui_ux_design']
  },
  {
    id: 'human_machine_team_manager',
    title: 'Gerente de Equipes Humano-Máquina',
    emoji: '🤝',
    description: 'Lidera equipes colaborativas compostas por humanos e IAs, otimizando a sinergia e a produtividade para atingir objetivos complexos.',
    detailedDescription: `O Gerente de Equipes Humano-Máquina é o maestro da colaboração do futuro. Este líder não gerencia apenas pessoas, mas a interação dinâmica entre talentos humanos e sistemas de inteligência artificial. Sua principal responsabilidade é projetar fluxos de trabalho onde humanos e máquinas se complementem, delegando tarefas analíticas e repetitivas para a IA, liberando os humanos para se concentrarem em criatividade, estratégia e resolução de problemas complexos.

Este papel exige uma profunda compreensão tanto das capacidades da IA quanto da psicologia humana. O gerente deve ser capaz de "traduzir" as necessidades da equipe para os sistemas de IA e interpretar os insights gerados pela máquina de volta para a equipe de forma acionável. Eles são responsáveis por treinar a equipe a confiar e trabalhar efetivamente com seus colegas algorítmicos, resolvendo conflitos e garantindo que a colaboração seja produtiva e eticamente sólida.`,
    mappedFrom: ['adaptative_leadership', 'complex_problem_solving', 'emotional_intelligence', 'collaboration'],
    skillsToDevelop: ['data_analysis', 'machine_learning', 'rpa', 'agile_methodologies']
  },
  {
    id: 'personal_memory_curator',
    title: 'Curador de Memórias Pessoais',
    emoji: '🎞️',
    description: 'Utiliza tecnologia para ajudar pessoas a gerenciar, reviver e preservar suas memórias digitais e físicas de maneira significativa e segura.',
    detailedDescription: `Na era da sobrecarga de dados, o Curador de Memórias Pessoais atua como um arquivista da vida de um indivíduo. Este profissional ajuda os clientes a navegar em suas vastas coleções de fotos, vídeos, e-mails e postagens de mídia social para organizar, contextualizar e preservar as memórias mais importantes. Eles utilizam ferramentas tecnológicas para criar narrativas coesas, como linhas do tempo interativas ou experiências de realidade virtual, que permitem aos clientes reviver momentos significativos.

Além da organização, a segurança e a privacidade são fundamentais. O curador garante que o legado digital de uma pessoa seja armazenado de forma segura e acessível apenas para as pessoas certas, mesmo após sua morte. Este serviço pode ser terapêutico, ajudando as pessoas a processar experiências de vida, ou prático, criando um arquivo familiar organizado para as gerações futuras. É uma profissão que combina empatia, storytelling e conhecimento técnico.`,
    mappedFrom: ['creativity', 'emotional_intelligence', 'ui_ux_design'],
    skillsToDevelop: ['data_analysis', 'cybersecurity']
  },
  {
    id: 'climate_change_reversal_specialist',
    title: 'Especialista em Reversão Climática',
    emoji: '🌍',
    description: 'Desenvolve e implementa soluções tecnológicas e estratégicas em larga escala para combater e reverter os efeitos das mudanças climáticas.',
    detailedDescription: `O Especialista em Reversão Climática é um agente de mudança em uma escala planetária. Este profissional trabalha na interseção da ciência, engenharia, política e finanças para desenvolver e escalar soluções que não apenas reduzam as emissões, mas também removam ativamente o carbono da atmosfera. Suas áreas de foco podem incluir tecnologias de captura direta de ar, reflorestamento em massa, bioengenharia de oceanos e agricultura regenerativa.

Este papel exige uma abordagem sistêmica para resolver um dos problemas mais complexos da humanidade. O especialista analisa dados climáticos para modelar o impacto de diferentes intervenções, avalia a viabilidade econômica de novas tecnologias e trabalha com governos e corporações para criar incentivos para a adoção de práticas sustentáveis. É uma carreira movida por um forte senso de propósito, exigindo resiliência, inovação e a capacidade de colaborar globalmente.`,
    mappedFrom: ['complex_problem_solving', 'data_analysis', 'innovation_management'],
    skillsToDevelop: ['machine_learning', 'python_programming', 'iot']
  },
  {
    id: 'ai_trainer',
    title: 'Treinador de IA e Designer de Personalidade',
    emoji: '🤖',
    description: 'Ensina e refina modelos de IA, especialmente em chatbots e assistentes virtuais, para que interajam de forma mais natural, empática e humana.',
    detailedDescription: `O Treinador de IA é o "educador" dos sistemas de inteligência artificial conversacional. Este profissional vai além da programação, ensinando aos modelos de linguagem as nuances da comunicação humana, como tom, empatia e contexto cultural. Eles projetam a "personalidade" de assistentes virtuais e chatbots, garantindo que a interação seja consistente com a marca e agradável para o usuário final.

O trabalho envolve a curadoria de conjuntos de dados de treinamento, a revisão de conversas geradas pela IA para identificar erros e a criação de diretrizes que ajudam o modelo a responder de forma mais adequada e útil. Eles atuam como uma ponte entre a linguística, a psicologia e a ciência da computação, garantindo que a tecnologia não seja apenas funcional, mas também genuinamente útil e humana em sua interação.`,
    mappedFrom: ['creativity', 'emotional_intelligence', 'interpersonal_communication', 'data_storytelling'],
    skillsToDevelop: ['python_programming', 'machine_learning', 'data_analysis']
  },
  {
    id: 'decentralized_identity_manager',
    title: 'Gestor de Identidade Descentralizada',
    emoji: '🆔',
    description: 'Cria e gerencia sistemas de identidade digital soberana baseados em blockchain, dando aos usuários controle total sobre seus dados pessoais.',
    detailedDescription: `O Gestor de Identidade Descentralizada está na vanguarda da revolução da privacidade de dados. Este especialista projeta e implementa sistemas que permitem aos indivíduos possuir e controlar sua própria identidade digital, sem depender de provedores centralizados como governos ou grandes empresas de tecnologia. Utilizando tecnologias como blockchain e credenciais verificáveis, eles capacitam os usuários a compartilhar seletivamente informações de identificação de forma segura e privada.

Este papel é crucial para construir a confiança na economia digital. O gestor trabalha para criar ecossistemas onde a verificação de identidade seja contínua e segura, reduzindo fraudes e simplificando processos como abertura de contas bancárias ou acesso a serviços. Eles precisam de um profundo conhecimento de cibersegurança, criptografia e blockchain, além de uma forte compreensão das implicações legais e éticas da soberania de dados.`,
    mappedFrom: ['cybersecurity', 'critical_thinking', 'complex_problem_solving'],
    skillsToDevelop: ['blockchain', 'python_programming']
  },
  {
    id: 'vr_experience_designer',
    title: 'Designer de Experiências em Realidade Virtual',
    emoji: '👓',
    description: 'Cria jornadas e simulações imersivas para treinamento, terapia, educação e entretenimento, focando na interação e engajamento do usuário.',
    detailedDescription: `O Designer de Experiências em RV é um contador de histórias para um novo meio. Em vez de telas planas, sua tela é o espaço tridimensional, e seu objetivo é criar imersão total. Eles projetam tudo, desde simulações de treinamento cirúrgico realistas e programas de terapia de exposição para fobias até viagens educacionais a locais históricos e narrativas de jogos envolventes.

Seu trabalho vai além do visual; eles precisam considerar o som, o tato (através de feedback háptico) e o movimento para criar uma sensação de presença crível. O design de interação é fundamental, pois eles devem criar maneiras intuitivas para os usuários manipularem objetos e navegarem no mundo virtual. Este profissional combina habilidades de design de jogos, psicologia cognitiva e storytelling para criar experiências que não são apenas vistas, mas sentidas.`,
    mappedFrom: ['ui_ux_design', 'creativity', 'cognitive_flexibility', 'design_thinking'],
    skillsToDevelop: ['ar_vr', 'python_programming']
  },
  {
    id: 'sustainable_urban_agronomist',
    title: 'Agrônomo Urbano Sustentável',
    emoji: '🌱',
    description: 'Projeta e gerencia fazendas verticais e sistemas de cultivo hidropônico em centros urbanos, utilizando IoT para otimizar a produção de alimentos localmente.',
    detailedDescription: `O Agrônomo Urbano Sustentável está reinventando a forma como as cidades se alimentam. Este especialista projeta, implementa e gerencia sistemas de agricultura de ambiente controlado, como fazendas verticais e estufas em telhados, para cultivar alimentos frescos diretamente nos centros urbanos. O objetivo é criar cadeias de suprimentos de alimentos mais curtas, resilientes e sustentáveis, reduzindo a dependência do transporte de longa distância e o impacto ambiental da agricultura tradicional.

Utilizando tecnologias como hidroponia, aeroponia e sensores de IoT, eles otimizam as condições de cultivo – luz, água e nutrientes – para maximizar a produção e minimizar o desperdício. Este papel requer uma combinação de conhecimento em biologia vegetal, engenharia de sistemas e análise de dados. Eles estão na linha de frente da segurança alimentar, transformando espaços não utilizados em fontes vibrantes de nutrição para a comunidade.`,
    mappedFrom: ['complex_problem_solving', 'creativity', 'data_analysis'],
    skillsToDevelop: ['iot', 'rpa', 'innovation_management']
  }
];