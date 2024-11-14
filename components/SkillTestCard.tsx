import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, CheckCircle2, Trophy } from "lucide-react";
import "react-circular-progressbar/dist/styles.css";

type SkillTestCardProps = {
  rank: number;
  percentile: number;
  correctAnswers: number;
  totalQuestions: number;
};

const SkillTestCard: React.FC<SkillTestCardProps> = ({ rank, percentile, correctAnswers, totalQuestions }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">YOUR RANK</CardTitle>
          <Trophy className="h-4 w-4 text-yellow-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{rank}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">PERCENTILE</CardTitle>
          <BarChart className="h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{percentile}%</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">CORRECT ANSWERS</CardTitle>
          <CheckCircle2 className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {correctAnswers}/{totalQuestions}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillTestCard;
