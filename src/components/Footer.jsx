'use client'

import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="w-full bg-transparent backdrop-blur-sm mt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 mb-15 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Syed Baseer Uddin. All rights reserved.
        </p>

        <div className="flex gap-4">
          <a href="mailto:sybaseer4@gmail.com" className="hover:text-white">
            <FaEnvelope className="w-5 h-5" />
          </a>
          <a href="https://github.com/baseer4" target="_blank" className="hover:text-white">
            <FaGithub className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/syed-baseer-udd/" target="_blank" className="hover:text-white">
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
