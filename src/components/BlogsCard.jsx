"use client";

import React from "react";
import { BookOpen, LayoutList, FileText } from "lucide-react";
import { useDragAnimation } from "@/hooks/useDragAnimation";

const BlogsCard = () => {
  const dragProps = useDragAnimation();

  return (
      <div
        {...dragProps}
        className="min-h-60 rounded-2xl border border-white/10 bg-[#0b0b0b] shadow-sm p-6 text-white hover:border-white/50 hover:scale-100 transition-colors select-none"
      >
        <div className="flex flex-col items-center gap-1 mb-4">
          <FileText className="h-5 w-5 stroke-[1.5]" />
          <h2 className="text-md lg:text-lg font-semibold text-center">
            Blogs
          </h2>
          <p className="text-gray-400 text-xs text-center mt-1">
            Sharing my thoughts, <br />
            tutorials, and projects
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 mt-2">
          <a
            href="https://medium.com/@yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex font-semibold items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-800 text-gray-300 text-sm
                       hover:text-orange-400 hover:border-orange-500 hover:scale-105 transition-all duration-200 ease-out"
          >
            <BookOpen className="h-4 w-4" />
            <span>Medium</span>
          </a>

          <button
            className="flex font-semibold items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-800 text-gray-300 text-sm
                       hover:text-orange-400 hover:border-orange-500 hover:scale-105 transition-all duration-200 ease-out"
          >
            <LayoutList className="h-4 w-4" />
            <span className="text-xs">View All</span>
          </button>
        </div>
      </div>
  );
};

export default BlogsCard;
