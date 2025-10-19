"use client";

import React, { useState } from "react";
import { ExternalLink, LayoutGrid, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useDragAnimation } from "@/hooks/useDragAnimation";
import Link from "next/link";

const projectsData = [
  {
    title: "ExamGuardAI",
    featured: true,
    description:
      "AI-powered exam proctoring system tracking head pose, eye gaze, and exam violations in real-time.",
    tech: ["React", "Google-mediapipe", "Node", "Express", "MongoDB","Zustand", "Docker"],
    liveLink: "https://github.com/baseer4/examguardai",
  },
  {
    title: "Wrapboard",
    description: "Collaborative whiteboard built with Fabric.js, Liveblocks, and Next.js.",
    tech: ['Next.js', "typscript", 'Fabric.js', 'Liveblocks', 'React','Typescript'],
    liveLink: "https://github.com/baseer4/wrapboard",
  },
  {
    title: "Convofi",
    description: 'Real-time MERN chat app using Socket.IO with modern UI and group messaging.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.IO'],
    liveLink: "https://github.com/baseer4/convofi",
  },
  {
    title: "QuickDrive",
    description: "QuickDrive is a full-stack cloud storage app inspired by Google Drive and Dropbox, featuring real-time file uploads, secure sharing, and responsive design.",
    tech: ['Typescript', 'Express.js', 'React', 'Node.js', 'Socket.IO'],
    liveLink: "#",
  },
];

const ProjectCard = ({ proj }) => (
  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] shadow-sm p-4 text-white hover:border-white/50 transition-colors select-none">
    <div className="flex justify-between items-start mb-3">
      <h4 className="text-lg font-semibold flex items-center gap-2">
        {proj.title}
        {proj.featured && (
          <span className="text-xs border border-white/10 rounded-md px-2 py-[2px] text-white">
            Featured
          </span>
        )}
      </h4>
        
      <Link
        href={proj.liveLink}
        target="_blank"
        className="flex items-center gap-2 px-2 py-1 rounded-md border border-neutral-700 text-gray-300 text-xs
        hover:text-orange-400 hover:border-orange-500 transition-all duration-200 ease-out"
      >
        <ExternalLink className="h-4 w-4 stroke-[1.5]" />
        <span>Github</span>
      </Link>
    </div>

    <p className="text-sm text-white/70 leading-relaxed mb-3">{proj.description}</p>

    <div className="flex flex-wrap gap-2">
      {proj.tech.map((tag) => (
        <span
          key={tag}
          className="text-xs border border-white/30 text-white px-2 py-1 rounded-md"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const ProjectsCard = () => {
  const dragProps = useDragAnimation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="mt-12 gap-6 relative">
      {/* Featured Card */}
      <div
        {...dragProps}
        className="rounded-2xl border border-white/10 bg-[#0b0b0b] shadow-sm p-4 text-white hover:border-white/50 hover:scale-100 transition-colors select-none"
      >
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 " />
            <h2 className="text-lg font-semibold flex items-center gap-2">
              ExamGuardAI
              <span className="text-xs border border-white/10 rounded-md px-2 py-[2px] text-white">
                Featured
              </span>
            </h2>
          </div>

          <a
            href="https://examguard-ai.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3 py-1 rounded-md border border-neutral-700 text-gray-300 text-sm
              hover:text-orange-400 hover:border-orange-500 transition-all duration-200 ease-out"
          >
            <ExternalLink className="h-4 w-4 stroke-[1.5]" />
            <span className="hidden md:block">Live Site</span>
            <span className="sm:block md:hidden">Live</span>
          </a>

        </div>

        <p className="text-sm text-white mb-8">AI-powered Exam Proctoring System</p>

        <p className="text-sm text-white/70 leading-relaxed mb-5">
          ExamGuardAI is an AI-powered exam proctoring system that tracks head
          pose, eye gaze, and exam violations in real-time to ensure a secure
          testing environment.
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {["React", "Google-mediapipe", "Node", "Express", "MongoDB", "Docker"].map((tag) => (
            <span
              key={tag}
              className="text-xs border border-white/30 text-white px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full flex items-center justify-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium
            bg-gradient-to-r from-orange-500/80 to-yellow-400/70 text-black shadow-md
            hover:scale-[1.02] hover:shadow-orange-400/30 transition-all duration-200 ease-out"
        >
          <LayoutGrid className="h-4 w-4 stroke-[1.5]" />
          <span>View All Projects</span>
        </button>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-[#0b0b0b] rounded-2xl p-6 w-11/12 max-w-4xl shadow-lg text-white relative"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/10 transition"
              >
                <X className="h-5 w-5" />
              </button>

              <h3 className="text-2xl font-semibold mb-6 text-center">All Projects</h3>

              <div className="block md:hidden max-h-[70vh]">
                <PerfectScrollbar options={{ suppressScrollX: true }}>
                  <div className="grid grid-cols-1 gap-6">
                    {projectsData.map((proj) => (
                      <ProjectCard key={proj.title} proj={proj} />
                    ))}
                  </div>
                </PerfectScrollbar>
              </div>

              <div className="hidden md:block max-h-[70vh] overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projectsData.map((proj) => (
                    <ProjectCard key={proj.title} proj={proj} />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsCard;
