'use client'

import { motion } from 'framer-motion'
import { doto } from '@/utlis/font'

const skills = [
  "bash","C", "Docker", "Express.js", "Fabric.js", "Framer Motion", "Git", "GitHub",
  "Google Cloud Platform[GCP]", "JavaScript", "Linux", "Liveblocks", "Markdown", "MongoDB", "MySQL",
  "Next.js", "Node.js", "NumPy", "Pandas", "PostgreSQL", "Prisma", "Python",
  "PyTorch", "React", "REST APIs", "ShadCN UI", "Socket.IO", "Tailwind",
  "TypeScript", "Vercel", "Vite", "Zustand",
]


export default function Skill() {
  return (
    <section id="tech" className="mt-10">
     <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={` w-full px-6 md:px-8 py-2 md:py-3 text-3xl  text-white uppercase rounded-xl mb-6 ${doto.className} `}
            >
            Tech Stack
    </motion.h2>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.02,
            },
          },
        }}
        className="flex flex-wrap gap-3 justify-center"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="px-4 py-2 text-sm md:text-base rounded-md bg-white/10 text-white border border-white/10 transition-colors duration-200 hover:bg-white/20 hover:border-white/20"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
