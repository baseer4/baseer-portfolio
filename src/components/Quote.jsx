'use client'

import { useEffect, useState } from 'react'

const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds",
  },
  {
    text: "The most dangerous phrase in the language is: 'We've always done it this way.'",
    author: "Grace Hopper",
  },
  {
    text: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
  },
  {
    text: "Any sufficiently advanced technology is indistinguishable from magic.",
    author: "Arthur C. Clarke",
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
  },
  {
    text: "If you can't explain it simply, you don't understand it well enough.",
    author: "Albert Einstein",
  },
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
  },
  {
    text: "Good code is its own best documentation.",
    author: "Steve McConnell",
  },
  {
    text: "In theory, there is no difference between theory and practice. But, in practice, there is.",
    author: "Jan L. A. van de Snepscheut",
  },
]

export default function QuoteOfTheDay() {
  const [quote, setQuote] = useState(quotes[0])

  useEffect(() => {
    const random = Math.floor(Math.random() * quotes.length)
    setQuote(quotes[random])
  }, [])

  return (
    <section className="w-full px-4 md:px-8 pt-10">
      <div className="relative max-w-3xl mx-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-8 md:px-14 py-10 md:py-16 text-white shadow-lg">
        <div className="w-12 h-0.5 bg-white/20 mb-6" />

        <h3 className="text-sm md:text-base font-semibold text-white/60 tracking-wider uppercase mb-4">
          Quote of the Day
        </h3>

        <blockquote className="text-xl md:text-2xl leading-relaxed italic text-white/80 relative pl-4 border-l-4 border-white/10">
          “{quote.text.replace(' you ', ' ')}”
        </blockquote>

        <div className="w-full h-px bg-white/10 my-6" />

        <p className="text-sm text-white/50 italic text-right">
          — {quote.author}
        </p>
      </div>
    </section>
  )
}
