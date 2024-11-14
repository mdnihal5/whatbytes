"use client";

import React, { useState } from "react";
import SidebarNav from "@/components/SidebarNav";
import SkillTestCard from "@/components/SkillTestCard";
import SyllabusProgressCard from "@/components/SyllabusProgressCard";
import ComparisonGraphCard from "@/components/ComparisonGraphCard";
import QuestionAnalysisCard from "@/components/QuestionAnalysisCard";
import UpdateModal from "@/components/UpdateModal";
import { Button } from "@/components/ui/button";
import { FaHtml5 } from "react-icons/fa";

type SyllabusItem = {
  name: string;
  progress: number;
};

type GraphDataItem = {
  x: number;
  y: number;
  color: string;
};

const SkillTestDashboard: React.FC = () => {
  const [rank, setRank] = useState<number>(4);
  const totalQuestions: number = 15;
  const [percentile, setPercentile] = useState<number>(90);
  const [correctAnswers, setCorrectAnswers] = useState<number>(12);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);

  const syllabus: SyllabusItem[] = [
    { name: "HTML Tools, Forms, History", progress: 80 },
    { name: "Tags & References in HTML", progress: 60 },
    { name: "Tables & References in HTML", progress: 24 },
    { name: "Tables & CSS Basics", progress: 96 },
  ];

  const graphData: GraphDataItem[] = [
    { x: 0, y: 5, color: "#60a5fa" },
    { x: 20, y: 10, color: "#60a5fa" },
    { x: 40, y: 15, color: "#60a5fa" },
    { x: 60, y: 80, color: "#2563eb" },
    { x: 80, y: 40, color: "#60a5fa" },
    { x: 100, y: 30, color: "#60a5fa" },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <SidebarNav />
      <main className="flex-1 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <header className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold">Skill Test</h2>
                  <div className="flex items-center mt-2">
                    <FaHtml5 className="m-2 text-[#ea580c] size-6" />
                    <h3 className="text-xl">Hyper Text Markup Language</h3>
                  </div>
                  <p className="text-sm text-gray-500">Questions: {totalQuestions} | Duration: 15 mins | Submitted on 5 June 2021</p>
                </div>
                <Button className="bg-blue-950" onClick={() => setIsUpdateModalOpen(true)}>
                  Update
                </Button>
              </header>
              <SkillTestCard rank={rank} percentile={percentile} correctAnswers={correctAnswers} totalQuestions={totalQuestions} />
              <ComparisonGraphCard graphData={graphData} userPercentile={percentile} />
            </div>
            <div className="space-y-6">
              <SyllabusProgressCard syllabus={syllabus} />
              <QuestionAnalysisCard correctAnswers={correctAnswers} totalQuestions={totalQuestions} />
            </div>
          </div>
        </div>
      </main>

      <UpdateModal
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        rank={rank}
        setRank={setRank}
        percentile={percentile}
        setPercentile={setPercentile}
        correctAnswers={correctAnswers}
        setCorrectAnswers={setCorrectAnswers}
      />
    </div>
  );
};

export default SkillTestDashboard;
