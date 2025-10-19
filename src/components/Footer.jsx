'use client'

import { Mail, Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full py-6 flex flex-col items-center gap-4 text-white/70 my-10">
      
      <div className="w-3xl h-[1px] bg-white/20 mb-2"></div>

      <div className="flex gap-6">
        <a href="mailto:sybaseer4@gmail.com" className="hover:text-white transition">
          <Mail className="w-5 h-5" />
        </a>
        <a href="https://github.com/baseer4" target="_blank" rel="noreferrer" className="hover:text-white transition">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/syed-baseer-udd" target="_blank" rel="noreferrer" className="hover:text-white transition">
          <Linkedin className="w-5 h-5" />
        </a>
      </div>

      <p className="text-xs text-white/50 text-center mt-2">
        © {new Date().getFullYear()} Syed Baseer Uddin. All rights reserved.
      </p>
    </footer>
  )
}
