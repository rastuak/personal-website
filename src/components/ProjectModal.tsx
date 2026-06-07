'use client'

import { useEffect, useCallback } from 'react'
import { X, CheckCircle, ExternalLink, BookOpen } from 'lucide-react'
import { projects } from '@/data/projects'

interface ProjectModalProps {
  projectId: string | null
  onClose: () => void
}

export default function ProjectModal({ projectId, onClose }: ProjectModalProps) {
  const project = projectId ? projects.find((p) => p.id === projectId) : null

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }

      if (e.key === 'Tab') {
        const modal = document.getElementById('project-modal-panel')
        if (!modal) return
        const focusable = modal.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    },
    [onClose]
  )

  useEffect(() => {
    if (projectId) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
      const prev = document.activeElement as HTMLElement | null
      requestAnimationFrame(() => {
        const closeBtn = document.getElementById('modal-close-btn')
        if (closeBtn) closeBtn.focus()
      })
      return () => {
        document.removeEventListener('keydown', handleKeyDown)
        document.body.style.overflow = ''
        prev?.focus()
      }
    }
  }, [projectId, handleKeyDown])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-paper-900/60 dark:bg-black/70 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        id="project-modal-panel"
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-paper-50 dark:bg-paper-900 border border-paper-300 dark:border-paper-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          id="modal-close-btn"
          onClick={onClose}
          className="sticky top-0 float-right m-4 p-2 z-10 text-paper-600 dark:text-paper-400 hover:text-paper-900 dark:hover:text-paper-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="px-6 pb-8 -mt-2">
          {/* Header */}
          <div className="border-b border-paper-300 dark:border-paper-700 pb-6 mb-8">
            <p className="font-mono text-xs uppercase tracking-widest text-copper-600 dark:text-copper-400 mb-2">
              {project.role} · {project.duration}
            </p>
            <h2 className="font-serif italic text-3xl md:text-4xl text-paper-900 dark:text-paper-100">
              {project.title}
            </h2>
            {project.summary && (
              <p className="mt-3 text-paper-700 dark:text-paper-300 text-lg max-w-reading">
                {project.summary}
              </p>
            )}
          </div>

          {/* Metrics bar */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-paper-200 dark:border-paper-800">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <dd className="font-serif text-2xl text-paper-900 dark:text-paper-100">{m.value}</dd>
                  <dt className="font-mono text-xs uppercase tracking-wider text-paper-600 dark:text-paper-400">
                    {m.label}
                  </dt>
                </div>
              ))}
            </div>
          )}

          {/* Context */}
          {project.context && (
            <div className="mb-8">
              <h3 className="font-mono text-xs uppercase tracking-widest text-paper-600 dark:text-paper-400 mb-2">
                Context
              </h3>
              <p className="text-paper-700 dark:text-paper-300 leading-relaxed">{project.context}</p>
            </div>
          )}

          {/* Problem */}
          {project.problem && (
            <div className="mb-8">
              <h3 className="font-mono text-xs uppercase tracking-widest text-paper-600 dark:text-paper-400 mb-2">
                Problem
              </h3>
              <p className="text-paper-700 dark:text-paper-300 leading-relaxed italic">
                &ldquo;{project.problem}&rdquo;
              </p>
            </div>
          )}

          {/* Approach */}
          {project.approach && (
            <div className="mb-8">
              <h3 className="font-mono text-xs uppercase tracking-widest text-paper-600 dark:text-paper-400 mb-2">
                Approach
              </h3>
              <p className="text-paper-700 dark:text-paper-300 leading-relaxed">{project.approach}</p>
            </div>
          )}

          {/* Result */}
          {project.result && (
            <div className="mb-8">
              <h3 className="font-mono text-xs uppercase tracking-widest text-paper-600 dark:text-paper-400 mb-2">
                Result
              </h3>
              <p className="text-paper-700 dark:text-paper-300 leading-relaxed">{project.result}</p>
            </div>
          )}

          {/* Highlights */}
          <div className="mb-8">
            <h3 className="font-mono text-xs uppercase tracking-widest text-paper-600 dark:text-paper-400 mb-3">
              Highlights
            </h3>
            <ul className="space-y-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-copper-600 dark:text-copper-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-paper-700 dark:text-paper-300">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack */}
          <div className="mb-8">
            <h3 className="font-mono text-xs uppercase tracking-widest text-paper-600 dark:text-paper-400 mb-3">
              Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs text-paper-700 dark:text-paper-300 px-2 py-1 bg-paper-100 dark:bg-paper-800 border border-paper-200 dark:border-paper-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Learnings */}
          {project.learnings && (
            <div className="mb-8 p-4 bg-paper-100 dark:bg-paper-800 border-l-2 border-copper-600 dark:border-copper-400">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-wider text-copper-600 dark:text-copper-400">
                <BookOpen className="w-3 h-3" />
                <span>What I learned</span>
              </div>
              <p className="text-sm text-paper-700 dark:text-paper-300 italic">
                &ldquo;{project.learnings}&rdquo;
              </p>
            </div>
          )}

          {/* Links */}
          {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap gap-4 pt-4 border-t border-paper-300 dark:border-paper-700">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-sm text-copper-600 dark:text-copper-400 hover:underline"
                >
                  {link.label}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
