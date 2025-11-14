
import { FutureJob, MatchedJob } from '../types';

export const calculateMatches = (userSkills: string[], jobs: FutureJob[]): MatchedJob[] => {
  if (!userSkills || userSkills.length === 0) {
    return [];
  }

  const matches: MatchedJob[] = jobs.map(job => {
    const matchingSkills = job.mappedFrom.filter(skillId => userSkills.includes(skillId));
    const score = matchingSkills.length;
    return { ...job, score, matchingSkills };
  });

  return matches
    .filter(match => match.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
};
