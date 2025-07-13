'use client'

import Link from 'next/link'
import { Github } from 'lucide-react'

export default function Navbar() {
  return (
   <div className="fixed bottom-4 z-50 inset-x-0 flex justify-center">
      <div className="flex items-center gap-4 backdrop-blur-md bg-white/10 border border-white/15 text-white px-6 py-2 rounded-xl shadow-md transition-all duration-200 hover:shadow-lg hover:bg-white/15">
        {/* Name */}
        <Link href="/" className="text-sm font-mono font-medium tracking-tight">
          Syed Baseer Uddin
        </Link>

        {/* Status dot */}
        <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

        {/* Resume link */}
        <Link
          href="/resume.pdf"
          target="_blank"
          className="text-xs text-gray-300 hover:text-white underline"
        >
          Resume
        </Link>

        {/* GitHub icon */}
        <a
          href="https://github.com/baseerx"
          target="_blank"
          className="hover:text-white text-gray-400"
        >
          <Github className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}
