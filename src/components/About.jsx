'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="mt-12 flex flex-col gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-xl text-white"
      >
        <h2 className="text-lg font-mono text-cyan-400 mb-3">About Me</h2>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
          Hey, I’m Baseer — a web developer who enjoys crafting minimal, high-performance websites
          with a focus on clean design and smooth motion. I love working with modern stacks like
          React, Next.js, and Tailwind CSS to build interfaces that feel polished and intentional.
        </p>
      </motion.div>
    </section>
  )
}
