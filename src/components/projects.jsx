'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { Doto } from 'next/font/google'

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
  weight: ["500"],
})
const projects = [
  {
    name: 'ExamguardAI',
    description: 'AI-powered browser-based proctoring with head pose, eye tracking & violation detection.',
    link: 'https://github.com/baseer4/examguardai',
    tags: [ 'MediaPipe','MongoDB', 'Express.js', 'React', 'Node.js', 'Zustand'],
  },
  {
    name: 'Wrapboard',
    description: 'Collaborative whiteboard built with Fabric.js, Liveblocks, and Next.js.',
    link: 'https://github.com/baseer4/warpboard',
    tags: ['Next.js', 'Fabric.js', 'Liveblocks', 'React','Typescript'],
  },
  {
    name: 'Convofi',
    description: 'Real-time MERN chat app using Socket.IO with modern UI and group messaging.',
    link: 'https://github.com/baseer4/convofi',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.IO'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="my-10">
      <div className="flex items-center justify-center mb-8">
  {/* Left Line */}
  <motion.div
    initial={{ width: 0, opacity: 0 }}
    animate={{ width: "100px", opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="h-[1px] bg-white/10 mr-4"
  />

  <motion.h2
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`text-3xl font-mono text-white whitespace-nowrap uppercase ${doto.className} font-mono`}
  >
    Projects
  </motion.h2>

  {/* Right Line */}
  <motion.div
    initial={{ width: 0, opacity: 0 }}
    animate={{ width: "100px", opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="h-[1px] bg-white/10 ml-4"
  />
</div>


      <div className="grid grid-cols-1  gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative group border-l-4 border-cyan-400 rounded-lg border-opacity-20 bg-[#121212] p-5 md:p-6 text-white hover:shadow-md hover:shadow-cyan-900/10 transition-all duration-300"
          >
            {/* GitHub icon */}
            <a
              href={project.link}
              target="_blank"
              className="absolute top-3 right-3 text-gray-500 group-hover:text-white transition"
            >
              <FaGithub className="h-4 w-4" />
            </a>

            {/* Project Title */}
            <h3 className="text-lg font-mono font-semibold mb-2 text-gray-100 group-hover:text-cyan-400 transition">
              {project.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-[#1c1c1c] text-gray-300 text-[11px] font-mono px-2 py-1 rounded-md border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* View Link */}
            <Link
              href={project.link}
              target="_blank"
              className="text-sm text-cyan-400 hover:text-white font-mono underline underline-offset-4 transition"
            >
              View Details →
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
