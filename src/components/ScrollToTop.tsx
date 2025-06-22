'use client'

import { ArrowUp } from 'lucide-react'

interface ScrollToTopProps {
  show: boolean
}

export default function ScrollToTop({ show }: ScrollToTopProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!show) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-all z-40 animate-fade-in"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  )
}