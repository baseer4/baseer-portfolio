'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="mt-12 flex flex-col gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        // className="border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-xl text-white"
        className='border-2 border-white/10 p-4 md:p-8 rounded-xl text-white'
      >
        <h2 className="text-lg font-mono text-cyan-400 mb-3">About Me</h2>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
          Hi, I’m Baseer, a full-stack software developer building end-to-end web applications. I design polished, user-friendly interfaces with React, Next.js, and Tailwind CSS, and develop robust backend systems with databases, APIs, and server-side logic to deliver complete, high-performance solutions.
        </p>
      </motion.div>
    </section>
  )
}
