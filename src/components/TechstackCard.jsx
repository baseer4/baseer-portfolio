"use client";

import React from "react";
import { Code2, Database, ServerCog, Terminal } from "lucide-react";
import { useDragAnimation } from "@/hooks/useDragAnimation";

const TechstackCard = () => {
  const dragProps = useDragAnimation();

  return (
    <div
      {...dragProps}
      className="min-h-60 rounded-2xl border border-white/10 bg-[#0b0b0b] shadow-sm p-6 text-white hover:border-white/50 transition-colors select-none"
    >
      <div className="flex gap-2 mb-4">
        <Code2 size={24} />
        <h2 className="text-lg font-semibold text-center">Tech Stack</h2>
       
      </div>

      <div className="flex justify-center flex-wrap gap-4 px-2 mt-4 text-center">
        {/* Frontend & UI */}
        <div className="flex flex-col items-center gap-1">
          <Code2 size={20} className="text-orange-400" />
          <p className="text-sm font-medium mt-1">Frontend</p>
          <div className="flex flex-col text-xs text-gray-400 mt-1">
            <span>React</span>
            <span>Next.js</span>
            {/* <span>Tailwind</span>
            <span>ShadCN UI</span>
            <span>Framer Motion</span>
            <span>Fabric.js</span> */}
            <span>Vite</span>
            <span>Zustand</span>
          </div>
        </div>

        {/* Backend & APIs */}
        <div className="flex flex-col items-center gap-1">
          <ServerCog size={20} className="text-blue-400" />
          <p className="text-sm font-medium mt-1">Backend</p>
          <div className="flex flex-col text-xs text-gray-400 mt-1">
            <span>Node.js</span>
            <span>Express.js</span>
            <span>REST APIs</span>
            {/* <span>Prisma</span> */}
            <span>Socket.IO</span>
          </div>
        </div>

        {/* Database & Cloud */}
        <div className="flex flex-col items-center gap-1">
          <Database size={20} className="text-green-400" />
          <p className="text-sm font-medium mt-1">Database</p>
          <div className="flex flex-col text-xs text-gray-400 mt-1">
            <span>MongoDB</span>
            {/* <span>MySQL</span> */}
            <span>PostgreSQL</span>
            <span>Docker</span>
            <span>GCP</span>
            {/* <span>Vercel</span> */}
          </div>
        </div>

        {/* Dev Tools & Utilities */}
        <div className="flex flex-col items-center gap-1">
          <Terminal size={20} className="text-purple-400" />
          <p className="text-sm font-medium mt-1">Dev Tools </p>
          <div className="flex flex-col text-xs text-gray-400 mt-1">
            <span>Git</span>
            <span>GitHub</span>
            <span>Bash</span>
            <span>Linux</span>
            {/* <span>Markdown</span>
            <span>Liveblocks</span> */}
          </div>
        </div>
      </div>

      {/* <p className="text-gray-500 text-xs mt-6 text-center">
        Constantly learning and exploring new tools.
      </p> */}
    </div>
  );
};

export default TechstackCard;
