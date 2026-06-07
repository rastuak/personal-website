'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, X } from 'lucide-react'

interface NavigationProps {
  activeSection: string
}

const navItems = [
  { id: 'about', name: 'About', href: '#about' },
  { id: 'work', name: 'Work', href: '#work' },
  { id: 'experience', name: 'Experience', href: '#experience' },
  { id: 'education', name: 'Education', href: '#education' },
  { id: 'skills', name: 'Skills', href: '#skills' },
  { id: 'contact', name: 'Contact', href: '#contact' },
]

export default function Navigation({ activeSection }: NavigationProps) {
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-paper-50/85 dark:bg-paper-900/85 backdrop-blur-md border-b border-paper-200 dark:border-paper-800">
      <div className="max-w-wide mx-auto px-6 md:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Monogram */}
          <a
            href="#hero"
            className="group flex items-center gap-3"
            aria-label="Kautsar Faradika Faisal — Home"
          >
            <span className="font-serif italic text-2xl text-copper-600 dark:text-copper-400 leading-none">
              KF
            </span>
            <span className="hidden sm:inline-block font-mono text-xs text-paper-600 dark:text-paper-400 tracking-wider uppercase">
              Kautsar / Portfolio
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`font-mono text-xs uppercase tracking-[0.15em] transition-all pb-1 border-b-2 ${
                    isActive
                      ? 'text-copper-600 dark:text-copper-400 border-copper-600 dark:border-copper-400'
                      : 'text-paper-700 dark:text-paper-300 border-transparent hover:text-paper-900 dark:hover:text-paper-100'
                  }`}
                >
                  {item.name}
                </a>
              )
            })}

            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-11 h-11 text-paper-700 dark:text-paper-300 hover:text-paper-900 dark:hover:text-paper-100 transition-colors"
              aria-label="Toggle theme"
            >
              {mounted ? (theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />) : <span className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-11 h-11 text-paper-700 dark:text-paper-300 hover:text-paper-900 dark:hover:text-paper-100 transition-colors"
              aria-label="Toggle theme"
            >
              {mounted ? (theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />) : <span className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center justify-center w-11 h-11 text-paper-700 dark:text-paper-300 hover:text-paper-900 dark:hover:text-paper-100 transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu — absolute inside nav (avoids iOS Safari backdrop-filter + fixed bug) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full z-50 border-b border-paper-200 dark:border-paper-800">
          <div className="bg-paper-50 dark:bg-paper-900 px-6 py-10 space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-4 font-serif text-2xl transition-colors ${
                    isActive
                      ? 'text-copper-600 dark:text-copper-400'
                      : 'text-paper-900 dark:text-paper-100 hover:text-copper-600 dark:hover:text-copper-400'
                  }`}
                >
                  {item.name}
                </a>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
