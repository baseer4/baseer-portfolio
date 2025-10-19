'use client'

import { motion } from 'framer-motion'
import { doto } from '../utlis/font'

const blogs = [
  {
    title: 'Understanding Docker from Scratch',
    description: 'Simplifying containers, images, and setup for developers.',
    date: 'July 2025',
    link: 'https://medium.com/@baseer/docker-from-scratch',
  },
  {
    title: 'Top 7 VSCode Extensions Every Developer Should Use in 2025',
    description: 'A curated list of essential VSCode extensions that boost productivity, code quality, and workflow for modern developers.',
    date: 'June 2025',
    link: 'https://medium.com/@sybaseer4/top-7-vscode-extensions-every-developer-should-use-in-2025-37934583b7d9',
  },
]

export default function BlogsPage() {
  return (
    <section className="w-full px-6 md:px-12 py-10 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-3xl md:text-4xl font-bold mb-4 ${doto.className} uppercase`}
      >
        Blogs
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-white/70 mb-10 max-w-xl"
      >
        A collection of personal writings, dev logs, and engineering lessons from real projects.
      </motion.p>

      <div className="flex flex-col gap-6">
        {blogs.map((blog, i) => (
          <motion.a
            key={i}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="w-full max-w-6xl mx-auto border border-white/10 bg-white/5 hover:bg-white/10 rounded-xl px-6 py-5 transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-1">{blog.title}</h3>
            <p className="text-sm text-white/70">{blog.description}</p>
            <p className="text-xs text-white/40 mt-2">{blog.date}</p>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
