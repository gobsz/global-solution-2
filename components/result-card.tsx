import { useState } from "react";
import { MatchedJob } from "../types";
import { useSkills } from "../context/skill-context"; // Import useSkills
import { SkillRadarChart } from "./skill-radar-chart"; // Import new component

interface ResultCardProps {
  job: MatchedJob;
  skillsMap: Map<string, string>;
}

const Pill = ({ children, className }) => (
  <span
    className={`inline-block bg-slate-700 rounded-full px-3 py-1 text-sm font-semibold text-slate-200 mr-2 mb-2 ${className}`}
  >
    {children}
  </span>
);

export function ResultCard({ job, skillsMap }: ResultCardProps) {
  const { selectedSkills } = useSkills();

  const totalRequiredSkills = job.mappedFrom.length;
  const matchPercentage =
    totalRequiredSkills > 0
      ? Math.round((job.score / totalRequiredSkills) * 100)
      : 0;

  return (
    <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-700 hover:border-purple-600 transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col h-full">
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 pr-4">
            {job.emoji} {job.title}
          </h3>
          <div className="text-right ml-4 flex-shrink-0">
            <p className="text-sm text-slate-400">Compatibilidade</p>
            <p className="text-2xl font-bold text-cyan-400">
              {matchPercentage}%
            </p>
          </div>
        </div>
        <p className="text-slate-300 mt-2 mb-4">{job.description}</p>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden max-h-[500px] md:max-h-96`}
        >
          <div className="text-slate-400 space-y-4 pt-2 pb-4 text-sm">
            {job.detailedDescription.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden max-h-[400px] opacity-100`}
        >
          <div className="w-full h-80 pt-4">
            <SkillRadarChart
              job={job}
              userSkills={selectedSkills}
              skillsMap={skillsMap}
            />
          </div>
        </div>

        <div>
          <div>
            <h4 className="font-semibold text-cyan-400 mb-3">
              Habilidades Compatíveis
            </h4>
            <div className="flex flex-wrap">
              {job.matchingSkills.length > 0 ? (
                job.matchingSkills.map((skillId) => (
                  <Pill
                    key={skillId}
                    className="bg-green-600/50 text-green-200"
                  >
                    {skillsMap.get(skillId) || skillId}
                  </Pill>
                ))
              ) : (
                <p className="text-sm text-slate-400">
                  Nenhuma habilidade compatível encontrada.
                </p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold text-purple-400 mb-3">
              Habilidades Recomendadas
            </h4>
            <div className="flex flex-wrap">
              {job.skillsToDevelop.map((skillId) => (
                <Pill
                  key={skillId}
                  className="bg-purple-600/50 text-purple-200"
                >
                  {skillsMap.get(skillId) || skillId}
                </Pill>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
