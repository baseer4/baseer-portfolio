'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function HomeIntro() {
  return (
    <section id="home" className="mt-10 flex flex-col gap-3">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-start gap-2"
      >
        <h1 className="text-2xl md:text-3xl font-mono font-medium text-white">
          Syed Baseer Uddin
        </h1>

        <div className="flex items-center gap-4 text-gray-400">
          <a href="mailto:syedbaseeruddin@gmail.com" className="hover:text-white">
            <FaEnvelope className="h-5 w-5" />
          </a>
          <a href="https://github.com/baseerx" target="_blank" className="hover:text-white">
            <FaGithub className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/baseerx" target="_blank" className="hover:text-white">
            <FaLinkedin className="h-5 w-5" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
