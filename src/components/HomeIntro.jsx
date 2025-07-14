'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function HomeIntro() {
  const fullName = 'Syed Baseer Uddin'
  const [displayed, setDisplayed] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayed(prev => prev + fullName[index])
        setIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [index, fullName])

  return (
    <section id="home" className="mt-10 flex flex-col gap-3">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-start gap-2"
      >
        <h1 className="text-2xl md:text-3xl font-mono font-medium text-white">
          {displayed}
          <span className="animate-blink">|</span>
        </h1>

        <div className="flex items-center gap-4 text-gray-400 mt-2">
          <a href="mailto:sybaseer4@gmail.com" className="hover:text-white">
            <FaEnvelope className="h-5 w-5" />
          </a>
          <a href="https://github.com/baseer4" target="_blank" className="hover:text-white">
            <FaGithub className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/syed-baseer-udd/" target="_blank" className="hover:text-white">
            <FaLinkedin className="h-5 w-5" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
