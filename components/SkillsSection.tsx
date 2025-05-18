"use client"

import { ReactNode } from "react"
import { FaCode, FaTools, FaChartBar } from "react-icons/fa"

const skills = {
  technical: [
    "Python", "C++", "Git", "Shell", "SQL",
    "Machine Learning", "HTML", "CSS"
  ],
  tools: [
    "GitHub", "FastAPI", "Flask", "scikit-learn",
    "PyTorch", "Pandas", "Numpy", "PostgreSQL", "AWS", "Docker"
  ],
  domain: [
    "Algorithmic Trading", "Backtesting", "Time Series Forecasting",
    "Quantitative Finance", "Machine Learning",
    "Distributed Systems", "High Performance Computing", "Database Systems"
  ]
}

const SkillBadge = ({ label }: { label: string }) => (
  <span className="px-3 py-1 bg-indigo-900/50 text-indigo-300 rounded-full text-sm hover:scale-105 transition-transform duration-200">
    {label}
  </span>
)

const SkillCategory = ({
  title,
  icon,
  items,
}: {
  title: string
  icon: ReactNode
  items: string[]
}) => (
  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
    <div className="flex items-center mb-6">
      <div className="p-3 rounded-lg bg-indigo-900/20 mr-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-3">
      {items.map((label) => (
        <SkillBadge key={label} label={label} />
      ))}
    </div>
  </div>
)

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My skills span across multiple domains, with deep expertise in areas critical for hedge funds and tech companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCategory
            title="Technical Skills"
            icon={<FaCode className="text-2xl text-indigo-500" />}
            items={skills.technical}
          />
          <SkillCategory
            title="Frameworks & Tools"
            icon={<FaTools className="text-2xl text-indigo-500" />}
            items={skills.tools}
          />
          <SkillCategory
            title="Domain Expertise"
            icon={<FaChartBar className="text-2xl text-indigo-500" />}
            items={skills.domain}
          />
        </div>
      </div>
    </section>
  )
}
