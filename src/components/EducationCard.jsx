"use client";

import React from "react";
import { GraduationCap, Calendar } from "lucide-react";
import { useDragAnimation } from "@/hooks/useDragAnimation";

const EducationCard = () => {
  const dragProps = useDragAnimation();

  return (
    <div
      {...dragProps}
      className="min-h-60 rounded-2xl border border-white/10 bg-[#0b0b0b] shadow-sm p-6 text-white hover:border-white/50 transition-colors select-none"
    >
      <div className="flex flex-col items-center gap-1 mb-4">
        <GraduationCap className="h-6 w-6 stroke-[1.5]" />
        <h2 className="text-md lg:text-lg font-semibold text-center">
          Education
        </h2>
      </div>

      <div className="flex flex-col items-center mt-3">
        <p className="text-white font-semibold text-sm text-center">
          B.E Computer Science
        </p>
        <p className="text-gray-400 text-xs mt-2 text-center ">
          Nawab Shah Alam Khan College of Engineering and Technology
        </p>
        {/* <p className="hidden md:block lg:hidden text-gray-400 text-xs lg:mt-2 text-center">
          NSAKCET
        </p> */}

      <div className="flex items-center gap-1 text-gray-400 text-xs mt-4 lg:mt-2">
        <Calendar className="h-3.5 w-3.5" />
        <span>@ 2025</span>
      </div>

      </div>
    </div>
  );
};

export default EducationCard;
