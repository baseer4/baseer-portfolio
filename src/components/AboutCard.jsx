"use client";

import React from "react";
import { useDragAnimation } from "@/hooks/useDragAnimation";

const AboutCard = () => {
  const dragProps = useDragAnimation();

  return (
    <div
      {...dragProps}
      className="flex-1 flex flex-col rounded-2xl border border-white/10 bg-[#0b0b0b] shadow-sm p-6 text-white hover:border-white/50 transition-colors md:mt-12 select-none overflow-hidden"
    >
      <h2 className="text-lg font-semibold text-orange-400 mb-4 text-left">
        About Me
      </h2>

      <p className="text-gray-300 text-left leading-relaxed text-sm md:text-base ">
       I’m a Computer Science student with a passion for AI and full-stack development. I love building web applications and intelligent systems that simplify complex problems. Exploring new tools and technologies excites me, and I enjoy pushing my projects further with every iteration. My focus is on creating solutions that are both functional and thoughtfully designed.
      </p>
    </div>
  );
};

export default AboutCard;
