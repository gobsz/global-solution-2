
import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-slate-200">
      <div className="bg-slate-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Sobre o SkillNavigator</h1>
        <div className="prose prose-invert prose-lg text-slate-300 max-w-none space-y-6">
          <p>
            O <strong>SkillNavigator</strong> é mais do que uma ferramenta de simulação; é um convite à reflexão sobre nosso lugar em um futuro do trabalho em constante evolução. Criado como um protótipo para a Global Solution da FIAP, este projeto busca desmistificar a transição profissional na era da automação e da inteligência artificial.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 !mt-10 border-l-4 border-cyan-400 pl-4">Nossa Missão: Empoderar Sua Jornada</h2>
          <p>
            Nossa missão é empoderar indivíduos para que naveguem as transições de carreira com confiança e curiosidade. Acreditamos que o futuro não é algo que simplesmente acontece conosco, mas algo que co-criamos. Ao entender como nossas competências atuais podem ser a semente para as profissões do amanhã, transformamos a ansiedade em ação e a incerteza em oportunidade.
          </p>
          
          <h2 className="text-2xl font-bold text-cyan-400 !mt-10 border-l-4 border-cyan-400 pl-4">A Filosofia: Humano + Máquina</h2>
          <p>
            Em um mundo focado em tecnologia, nossa maior vantagem competitiva continua sendo nossa humanidade. Competências como pensamento crítico, inteligência emocional e criatividade não são "soft skills", mas sim "power skills". O SkillNavigator foi projetado sob a filosofia de que o sucesso futuro não virá da competição com as máquinas, mas da nossa capacidade de colaborar com elas, aplicando nossa engenhosidade única para resolver problemas complexos.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 !mt-10 border-l-4 border-cyan-400 pl-4">Metodologia de "Match"</h2>
          <p>
            A lógica de correspondência é uma simulação simplificada, mas intencional. Ela calcula uma pontuação com base nas suas habilidades atuais e as mapeia para competências fundamentais de carreiras emergentes. O objetivo não é ser uma previsão exata, mas um ponto de partida para o autoconhecimento e um catalisador para a aprendizagem contínua (lifelong learning).
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 !mt-10 border-l-4 border-cyan-400 pl-4">Conexão com os ODS da ONU</h2>
          <p>
            Este projeto se alinha com vários Objetivos de Desenvolvimento Sustentável (ODS) da ONU, reforçando nosso compromisso com um futuro mais justo e próspero:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>ODS 4: Educação de Qualidade</strong> - Promovendo a mentalidade de aprendizagem ao longo da vida e a aquisição de competências relevantes.</li>
            <li><strong>ODS 8: Trabalho Decente e Crescimento Econômico</strong> - Incentivando a preparação proativa para os empregos do futuro e a resiliência no mercado de trabalho.</li>
            <li><strong>ODS 10: Redução das Desigualdades</strong> - Oferecendo uma ferramenta de autoconhecimento que democratiza o acesso à orientação de carreira estratégica.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};