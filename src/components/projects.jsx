'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  {
    name: 'Convofi',
    description: 'Real-time MERN chat app using Socket.IO with modern UI and group messaging.',
    link: 'https://github.com/baseer4/convofi',
  },
  {
    name: 'ExamguardAI',
    description: 'AI-powered browser-based proctoring with head pose, eye tracking & violation detection.',
    link: 'https://github.com/baseer4/examguardai',
  },
  {
    name: 'Warpboard',
    description: 'Collaborative whiteboard built with Fabric.js, Liveblocks, and Next.js.',
    link: 'https://github.com/baseer4/warpboard',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="mt-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="inline-block w-full px-6 md:px-8 py-2 md:py-3 bg-white/5 border border-white/10 text-cyan-400 text-lg font-mono rounded-xl mb-6"
        >
        Projects
        </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-xl border border-white/10 bg-white/5 p-4 text-white backdrop-blur-sm hover:bg-white/10 transition"
          >
            <h3 className="text-lg font-semibold mb-2 text-cyan-300">{project.name}</h3>
            <p className="text-sm text-gray-300 mb-3">{project.description}</p>
            <Link
              href={project.link}
              target="_blank"
              className="text-sm underline text-gray-400 hover:text-white transition"
            >
              View Project →
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
