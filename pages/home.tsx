
import React from 'react';
import { Link } from 'react-router-dom';

const InfoCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 h-full">
    <h3 className="text-xl font-bold text-cyan-400 mb-3">{title}</h3>
    <p className="text-slate-300">{children}</p>
  </div>
);

const StatCard: React.FC<{ value: string; description: string; source: string }> = ({ value, description, source }) => (
    <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 text-center transform hover:-translate-y-1 transition-transform duration-300">
        <p className="text-4xl md:text-5xl font-extrabold text-cyan-400">{value}</p>
        <p className="mt-4 text-slate-300">{description}</p>
        <p className="mt-2 text-xs text-slate-500">{source}</p>
    </div>
);


export const HomePage: React.FC = () => {
  return (
    <div className="flex-grow text-white">
      {/* Hero Section */}
      <section className="text-center py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Navegue pelo Futuro do Trabalho com <span className="text-cyan-400">SkillNavigator</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Descubra como suas competências atuais se conectam com as carreiras do amanhã. Mapeie seu caminho para o sucesso em um mundo em constante mudança.
          </p>
          <Link
            to="/simulator"
            className="mt-10 inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 duration-300 shadow-lg"
          >
            Iniciar Simulação
          </Link>
        </div>
      </section>

      {/* "O Futuro em Números" Section */}
      <section className="bg-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">O Futuro em Números</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <StatCard 
                    value="85 Milhões"
                    description="de empregos podem ser deslocados pela automação até 2025."
                    source="Fórum Econômico Mundial"
                />
                <StatCard 
                    value="97 Milhões"
                    description="de novas funções podem surgir, mais adaptadas à nova divisão do trabalho entre humanos, máquinas e algoritmos."
                    source="Fórum Econômico Mundial"
                />
                <StatCard 
                    value="50%"
                    description="de todos os funcionários precisarão de requalificação até 2025, à medida que a adoção da tecnologia aumenta."
                    source="Fórum Econômico Mundial"
                />
            </div>
        </div>
      </section>

      {/* "Por que isso importa?" Section */}
      <section className="bg-slate-800/50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Por Que Isso Importa?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <InfoCard title="Requalificação Contínua">
              A automação e a IA estão transformando indústrias. Manter-se relevante significa aprender e adaptar-se continuamente. O SkillNavigator ajuda a identificar seus próximos passos.
            </InfoCard>
            <InfoCard title="Valorize Competências Humanas">
              Criatividade, pensamento crítico e inteligência emocional são o seu maior diferencial. Descubra carreiras que não apenas usam, mas exigem essas habilidades.
            </InfoCard>
            <InfoCard title="Explore Novas Oportunidades">
              Muitas carreiras do futuro ainda nem existem. Preparamos um vislumbre de possibilidades emergentes para que você possa se antecipar e se preparar.
            </InfoCard>
          </div>
        </div>
      </section>

      {/* "Habilidades em Destaque" Section */}
      <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Habilidades em Destaque</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800 p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-purple-400 mb-3">Competências Humanas</h3>
                <h4 className="text-lg font-semibold text-white mb-2">Inteligência Emocional</h4>
                <p className="text-slate-300">A capacidade de entender, usar e gerenciar suas próprias emoções de maneira positiva para aliviar o estresse, comunicar-se efetivamente, ter empatia com os outros, superar desafios e resolver conflitos. Essencial para a colaboração e liderança em equipes humano-máquina.</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg shadow-lg border-l-4 border-cyan-500">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Competências Técnicas</h3>
                <h4 className="text-lg font-semibold text-white mb-2">Machine Learning</h4>
                <p className="text-slate-300">Um campo da inteligência artificial (IA) e ciência da computação que se concentra no uso de dados e algoritmos para imitar a maneira como os humanos aprendem, melhorando gradualmente sua precisão. É o motor por trás de muitas inovações futuras.</p>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
};
