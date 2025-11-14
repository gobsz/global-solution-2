import React from "react";
import { Link } from "react-router-dom";
import { useSkills } from "../context/skill-context";
import { skills } from "../data/db";
import { SkillButton } from "../components/skill-button";
import { Skill, SkillCategory } from "../types";

export const SimulatorPage: React.FC = () => {
  const { selectedSkills, toggleSkill } = useSkills();

  const skillCategories: Record<SkillCategory, string> = {
    tech: "Competências Técnicas",
    human: "Competências Humanas",
    innovation: "Competências de Inovação",
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    (acc[skill.category] = acc[skill.category] || []).push(skill);
    return acc;
  }, {} as Record<SkillCategory, Skill[]>);

  const orderedCategories: SkillCategory[] = ["human", "innovation", "tech"];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Simulador de Carreira
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          Selecione as habilidades que você possui. Vamos encontrar as carreiras
          do futuro que mais combinam com você.
        </p>
      </div>

      <div className="mt-12 space-y-12">
        {orderedCategories.map((category) => (
          <div key={category}>
            <h2 className="text-2xl font-bold text-cyan-400 border-b-2 border-slate-700 pb-2 mb-6">
              {skillCategories[category]}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {groupedSkills[category]?.map((skill) => (
                <SkillButton
                  key={skill.id}
                  skill={skill}
                  isSelected={selectedSkills.includes(skill.id)}
                  onClick={toggleSkill}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        {selectedSkills.length > 0 ? (
          <Link
            to="/results"
            className="inline-block bg-cyan-500 text-white font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 shadow-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:ring-offset-slate-900"
          >
            Analisar Meu Futuro
          </Link>
        ) : (
          <button
            disabled
            className="bg-slate-600 text-slate-400 font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 shadow-lg cursor-not-allowed"
          >
            Analisar Meu Futuro
          </button>
        )}
        {selectedSkills.length === 0 && (
          <p className="text-slate-400 mt-4 text-sm">
            Selecione pelo menos uma habilidade para continuar.
          </p>
        )}
      </div>
    </div>
  );
};
