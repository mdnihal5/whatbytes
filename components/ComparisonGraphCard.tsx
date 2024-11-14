import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";

type GraphDataItem = {
  x: number;
  y: number;
  color: string;
};

type ComparisonGraphCardProps = {
  graphData: GraphDataItem[];
  userPercentile: number;
};

const ComparisonGraphCard: React.FC<ComparisonGraphCardProps> = ({ graphData, userPercentile }) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Comparison Graph</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%" aria-label="Comparison graph showing user's percentile score">
            <LineChart data={graphData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="x" axisLine={false} tickLine={false} />
              <YAxis hide={true} />
              <Line type="monotone" dataKey="y" stroke="#2563eb" strokeWidth={2} dot={{ r: 4, fill: "#2563eb" }} />
              {graphData.map((entry, index) => (
                <Line key={index} type="monotone" dataKey="y" data={[entry]} stroke={entry.color} strokeWidth={2} dot={{ r: 4, fill: entry.color }} />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-500">0%</div>
          <div className="text-sm font-semibold">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Your Score: {userPercentile}%</span>
          </div>
          <div className="text-sm text-gray-500">100%</div>
        </div>
        <p className="text-sm text-gray-500 mt-4">You scored {userPercentile}% percentile which is lower than the average percentile 72% of all the engineers who took this assessment</p>
      </CardContent>
    </Card>
  );
};

export default ComparisonGraphCard;
