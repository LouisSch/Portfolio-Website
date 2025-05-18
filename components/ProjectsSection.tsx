'use client'

import { useEffect, useState } from 'react'

type Project = {
  title: string
  description: string
  icon: string
  link: string
  tags: string[]
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    fetch('/projects.json')
      .then((res) => res.json())
      .then(setProjects)
  }, [])

  return (
    <section id="projects" className="py-16 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My <span className="gradient-text">Projects</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Projects I've worked on in quant finance, data science and high-performance systems.
          </p>
        </div>

        <div id="projects-container" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card bg-gray-800 rounded-xl overflow-hidden border border-gray-700 transition duration-300 hover:border-indigo-500"
            >
              <div className="bg-indigo-900/20 flex items-center justify-center py-2">
                <i className={`${project.icon} text-6xl text-indigo-500`} />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-indigo-400">
                    <i className="fas fa-external-link-alt" />
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-indigo-900/50 text-indigo-300 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}