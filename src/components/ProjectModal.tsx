'use client'

import { CheckCircle, X } from 'lucide-react'
import { Project } from '@/types'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div 
      className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center p-4 z-50 animate-fade-in" 
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-gray-900 rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto animate-slide-up" 
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{project.role} • {project.duration}</p>
            </div>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Project Description</h4>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Achievements</h4>
            <ul className="space-y-2">
              {project.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}