import { MatchedJob, RadarChartData } from "../utils/types";
import { useMemo } from "react";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Legend,
} from "recharts";

interface SkillRadarChartProps {
  job: MatchedJob;
  userSkills: string[];
  skillsMap: Map<string, string>;
}

export function SkillRadarChart({
  job,
  userSkills,
  skillsMap,
}: SkillRadarChartProps) {
  const chartData = useMemo(() => {
    const allJobSkills = [
      ...new Set([...job.mappedFrom, ...job.skillsToDevelop]),
    ];

    const data: RadarChartData[] = allJobSkills.map((skillId) => ({
      skill: skillsMap.get(skillId) || skillId,
      job: 1,
      user: userSkills.includes(skillId) ? 1 : 0,
    }));

    return data;
  }, [job, userSkills, skillsMap]);

  if (chartData.length === 0) {
    return (
      <div className="text-slate-400 text-center">
        Não há dados suficientes para o gráfico.
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
        <PolarGrid stroke="#475569" />
        <PolarAngleAxis
          dataKey="skill"
          tick={{ fill: "#94a3b8", fontSize: 10 }}
        />
        <Radar
          name="Você"
          dataKey="user"
          stroke="#34d399"
          fill="#34d399"
          fillOpacity={0.6}
        />
        <Radar
          name={job.title}
          dataKey="job"
          stroke="#818cf8"
          fill="#818cf8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
