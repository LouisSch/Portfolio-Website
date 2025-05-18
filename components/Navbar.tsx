'use client'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href="#home" className="text-xl font-bold gradient-text">PORTFOLIO</a>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="nav-link active-nav">Home</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="text-gray-400 hover:text-white focus:outline-none">
              <i className="fas fa-bars text-xl" />
            </button>
          </div>
        </div>

        {open && (
          <div id="mobile-menu" className="md:hidden mt-2 space-y-2 px-4 pb-4">
            <a href="#home" className="block nav-link">Home</a>
            <a href="#projects" className="block nav-link">Projects</a>
            <a href="#skills" className="block nav-link">Skills</a>
            <a href="#contact" className="block nav-link">Contact</a>
          </div>
        )}
      </div>
    </nav>
  )
}