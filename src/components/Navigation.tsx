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

  if (!mounted) {
    return (
      <nav className="fixed top-0 w-full z-50 h-16 border-b border-paper-200 dark:border-paper-800 bg-paper-50/80 dark:bg-paper-900/80 backdrop-blur" />
    )
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
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`font-mono text-xs uppercase tracking-[0.15em] transition-colors ${
                    isActive
                      ? 'text-copper-600 dark:text-copper-400'
                      : 'text-paper-700 dark:text-paper-300 hover:text-paper-900 dark:hover:text-paper-100'
                  }`}
                >
                  {item.name}
                </a>
              )
            })}

            <button
              onClick={toggleTheme}
              className="p-2 text-paper-700 dark:text-paper-300 hover:text-paper-900 dark:hover:text-paper-100 transition-colors"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              aria-pressed={theme === 'dark'}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 text-paper-700 dark:text-paper-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-paper-700 dark:text-paper-300"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-paper-50 dark:bg-paper-900 border-b border-paper-200 dark:border-paper-800">
          <div className="px-6 py-8 space-y-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block font-serif text-2xl text-paper-900 dark:text-paper-100 hover:text-copper-600 dark:hover:text-copper-400"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
