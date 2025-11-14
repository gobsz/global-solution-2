import React, { useState, useEffect, useMemo } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSkills } from "../context/skill-context";
import { futureJobs, skills } from "../data/db";
import { calculateMatches } from "../utils/analysis";
import { ResultCard } from "../components/result-card";
import { MatchedJob } from "../types";

export const ResultsPage: React.FC = () => {
  const { selectedSkills } = useSkills();
  const [topMatches, setTopMatches] = useState<MatchedJob[]>([]);

  const skillsMap = useMemo(
    () => new Map(skills.map((skill) => [skill.id, skill.name])),
    []
  );

  useEffect(() => {
    if (selectedSkills.length > 0) {
      const matches = calculateMatches(selectedSkills, futureJobs);
      setTopMatches(matches);
    }
  }, [selectedSkills]);

  if (selectedSkills.length === 0) {
    return <Navigate to="/simulator" replace />;
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Seu Futuro em Potencial
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          Com base nas suas habilidades, estas são as carreiras emergentes mais
          promissoras para você.
        </p>
      </div>

      <div className="mt-12">
        {topMatches.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {topMatches.map((job) => (
              <ResultCard key={job.id} job={job} skillsMap={skillsMap} />
            ))}
          </div>
        ) : (
          <div className="text-center bg-slate-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-cyan-400">
              Nenhuma correspondência encontrada
            </h2>
            <p className="mt-2 text-slate-300">
              Não encontramos uma carreira com alta compatibilidade no momento.
              Tente selecionar mais habilidades para um resultado mais preciso.
            </p>
          </div>
        )}
      </div>
      <div className="mt-12 text-center">
        <Link
          to="/simulator"
          className="text-cyan-400 hover:text-cyan-300 font-semibold"
        >
          &larr; Voltar e ajustar minhas habilidades
        </Link>
      </div>
    </div>
  );
};
