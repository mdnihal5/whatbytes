import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type SyllabusItem = {
  name: string;
  progress: number;
};

type SyllabusProgressCardProps = {
  syllabus: SyllabusItem[];
};

const SyllabusProgressCard: React.FC<SyllabusProgressCardProps> = ({ syllabus }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Syllabus Wise Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        {syllabus.map((item, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">{item.name}</span>
              <span className="text-sm font-medium">{item.progress}%</span>
            </div>
            <Progress value={item.progress} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default SyllabusProgressCard;
