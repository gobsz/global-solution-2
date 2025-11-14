
import React from 'react';
import { Skill } from '../types';

interface SkillButtonProps {
  skill: Skill;
  isSelected: boolean;
  onClick: (id: string) => void;
}

export const SkillButton: React.FC<SkillButtonProps> = ({ skill, isSelected, onClick }) => {
  const baseClasses = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900";
  const selectedClasses = "bg-cyan-500 border-cyan-400 text-white shadow-lg scale-105";
  const unselectedClasses = "bg-slate-700 border-slate-600 text-slate-200 hover:bg-slate-600 hover:border-purple-600";

  return (
    <button
      onClick={() => onClick(skill.id)}
      className={`${baseClasses} ${isSelected ? selectedClasses : unselectedClasses}`}
    >
      <span className="font-semibold">{skill.name}</span>
    </button>
  );
};
