// Fix: Import React to resolve 'Cannot find namespace "React"'.
import React from "react";

export type SkillCategory = "tech" | "human" | "innovation";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
}

export interface FutureJob {
  id: string;
  title: string;
  emoji: string;
  description: string;
  detailedDescription: string;
  mappedFrom: string[];
  skillsToDevelop: string[];
}

export interface MatchedJob extends FutureJob {
  score: number;
  matchingSkills: string[];
}

export interface SkillContextType {
  selectedSkills: string[];
  setSelectedSkills: React.Dispatch<React.SetStateAction<string[]>>;
  toggleSkill: (skillId: string) => void;
}
