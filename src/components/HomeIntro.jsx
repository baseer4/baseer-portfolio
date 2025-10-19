"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function HomeIntro() {
  const fullName = "Syed Baseer Uddin";
  const titles = [
    "Full Stack Engineer",
    "Backend Developer",
    "ML Engineer",
  ];
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [titleIndex, setTitleIndex] = useState(0);

  // animate typing effect for name
  useEffect(() => {
    if (index < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + fullName[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, fullName]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section id="home" className="mt-10 flex flex-col gap-3 items-center text-center">
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-2xl md:text-3xl font-mono text-white font-semibold">
          {displayed}
          <span
            className={`animate-blink transition-opacity duration-500 ${
              index === fullName.length ? "opacity-0" : "opacity-100"
            }`}
          >
            |
          </span>
        </h1>

        <div className="h-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={titles[titleIndex]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-sm md:text-base text-gray-400 mt-1"
            >
              {titles[titleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
          <div>
            <p className="text-sm text-gray-400 mt-3">I study Computer Science and build full-stack projects with AI in mind.</p>
          </div>
      </div>


      <div className="flex items-center justify-center gap-3 mt-2">
        <a
          href="https://github.com/baseer4"
          target="_blank"
          rel="noopener noreferrer"
          className="flex font-semibold items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-800 text-gray-300 text-sm
                     hover:text-orange-400 hover:border-orange-500 hover:scale-105 transition-all duration-200 ease-out"
        >
          <Github className="h-4 w-4 stroke-[1.5]" />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/syed-baseer-udd/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex font-semibold items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-800 text-gray-300 text-sm
                     hover:text-blue-400 hover:border-blue-500 hover:scale-105 transition-all duration-200 ease-out"
        >
          <Linkedin className="h-4 w-4 stroke-[1.5]" />
          <span>LinkedIn</span>
        </a>

        <a
          href="mailto:sybaseer4@gmail.com"
          className="flex font-semibold items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-800 text-gray-300 text-sm
                     hover:text-green-400 hover:border-green-500 hover:scale-105 transition-all duration-200 ease-out"
        >
          <Mail className="h-4 w-4 stroke-[1.5]" />
          <span>Email</span>
        </a>
      </div>
    </section>
  );
}
