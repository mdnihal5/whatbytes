import React from "react";
import { BarChart, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

const SidebarNav: React.FC = () => {
  return (
    <aside className="w-full md:w-64 bg-white p-6 shadow-md">
      <div className="flex items-center mb-6">
        <Image 
          src="https://i.postimg.cc/d03BjpMQ/whatbytes.avif" 
          alt="WhatBytes Logo" 
          width={40} 
          height={40} 
          className="mr-2"
        />
        <h1 className="text-2xl font-bold">WhatBytes</h1>
      </div>
      <nav>
        <Button variant="ghost" className="w-full justify-start mb-2 hover:bg-muted">
          <BarChart className="mr-2 h-4 w-4" />
          Dashboard
        </Button>
        <Button variant="ghost" className="w-full justify-start mb-2 text-blue-600 font-bold">
          <FileText className="mr-2 h-4 w-4" />
          Skill Test
        </Button>
        <Button variant="ghost" className="w-full justify-start hover:bg-muted">
          <FileText className="mr-2 h-4 w-4" />
          Internship
        </Button>
      </nav>
    </aside>
  );
};

export default SidebarNav;

