"use client";

import React from "react";
import { useDragAnimation } from "@/hooks/useDragAnimation";

const AboutCard = () => {
  const dragProps = useDragAnimation();

  return (
    <div
      {...dragProps}
      className="min-h-60 rounded-2xl border border-white/10 bg-[#0b0b0b] shadow-sm p-6 text-white hover:border-white/50 transition-colors select-none mt-12"
    >
      <h2 className="text-lg font-semibold text-orange-400 mb-4 text-left">
        About Me
      </h2>

      <p className=" text-gray-300 text-left leading-relaxed mb-4">
        I’m a Computer Science student who loves building things that mix AI and
        full-stack development. My focus is on turning complex problems into
        simple, efficient solutions — whether that’s through machine learning
        models, interactive web apps, or backend systems that just work. I enjoy
        experimenting, learning new tools, and pushing my projects a little
        further every time.
      </p>
    </div>
  );
};

export default AboutCard;
