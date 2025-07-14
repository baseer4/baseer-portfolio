'use client'

import { motion } from 'framer-motion'
import { doto } from '@/utlis/font'

const certifications = [
  {
    title: 'Google Cloud Essentials',
    issuer: 'Google Cloud Skills Boost',
    date: 'Jun 2025',
    link: 'https://www.cloudskillsboost.google/public_profiles/3ff63be4-3ac0-42c5-8916-004ce087148a/badges/16534575?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
  },
  {
    title: 'Docker Essentials: A Developer Introduction',
    issuer: 'IBM',
    date: 'May 2025',
    link: 'https://courses.cognitiveclass.ai/certificates/682b40d981644333a6e7753e382e831d',
  },
]

export default function Certifications() {
  return (
    <section className="w-full px-6 md:px-12 py-10">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-3xl md:text-4xl font-bold text-white mb-8 font-mono uppercase ${doto.className}`}
      >
        Certifications
      </motion.h2>

      <div className="flex flex-col gap-6">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="border border-white/10 bg-white/5 hover:bg-white/10 transition-colors px-6 py-5 rounded-xl text-white/90"
          >
            <a href={cert.link} target="_blank" className="hover:underline">
              <h3 className="text-lg font-semibold">{cert.title}</h3>
            </a>
            <p className="text-sm text-white/60">{cert.issuer}</p>
            <p className="text-xs text-white/40 mt-1">{cert.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
