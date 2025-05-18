'use client'

import Image from 'next/image'
import profilePic from '@/public/pics/profile_pic.jpeg'
import Particles from 'react-tsparticles'
import { useCallback } from 'react'
import { loadFull } from 'tsparticles'

export default function HomeSection() {
    const particlesInit = useCallback(async (engine: any) => {
        await loadFull(engine)
    }, [])

    return (
        <section id="home" className="relative min-h-screen pt-24 pb-16 flex items-center overflow-hidden z-0">
            <Particles
                id="tsparticles"
                className="absolute inset-0 h-full w-full"
                style={{ zIndex: -10 }}
                init={particlesInit}
                options={{
    fullScreen: {
            enable: false
        },
        background: {
            color: { value: "#111827" }
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: { enable: true, mode: "bounce" },
                resize: true
            },
            modes: {
                bounce: {
                    distance: 150,
                    duration: 1,
                    speed: 3
                }
            }
        },
        particles: {
            number: {
                value: 60,
                density: { enable: true, area: 800 }
            },
            color: { value: "#a855f7" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 3 } },
            links: {
                enable: true,
                distance: 150,
                color: "#8b5cf6",
                opacity: 0.5,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                outModes: { default: "bounce" }
            },
            collisions: { enable: true }
        },
        detectRetina: true
  }}
            />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Hi, I'm <span className="gradient-text">Louis</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-400">
                    Quantitative Developer & Problem Solver
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-lg">
                    I build high-performance applications with a focus on clean architecture and efficient algorithms.
                    Passionate about solving complex problems in finance and technology.
                    </p>
                    <div className="flex space-x-4">
                    <a href="#projects" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md font-medium transition duration-300">
                        View Projects
                    </a>
                    <a href="#contact" className="px-6 py-3 border border-indigo-600 text-indigo-400 hover:bg-indigo-900/30 rounded-md font-medium transition duration-300">
                        Contact Me
                    </a>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <div className="relative">
                    <Image
                        src={profilePic}
                        alt="Profile"
                        className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-indigo-500/30"
                    />
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}