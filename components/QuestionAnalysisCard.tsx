import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircularProgressbar } from "react-circular-progressbar";

type QuestionAnalysisCardProps = {
  correctAnswers: number;
  totalQuestions: number;
};

const QuestionAnalysisCard: React.FC<QuestionAnalysisCardProps> = ({ correctAnswers, totalQuestions }) => {
  const Percentage = Math.round((correctAnswers / totalQuestions) * 100);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Question Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-semibold mb-2">
          {correctAnswers}/{totalQuestions}
        </p>
        <p className="text-sm text-gray-500">
          You scored {correctAnswers} questions correct out of {totalQuestions}. However, it still needs some improvements.
        </p>
        <div className="p-4 flex items-center justify-center m-3">
          <div className="flex items-center justify-center w-56">
            <CircularProgressbar value={Percentage} text="🎯" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionAnalysisCard;
