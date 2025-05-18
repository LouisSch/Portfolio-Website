'use client'

import { useEffect } from 'react'

export default function ScrollSpy() {
    useEffect(() => {
        const sections = document.querySelectorAll('section[id]')
        const navLinks = document.querySelectorAll('.nav-link')

        const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
            const id = entry.target.getAttribute('id')
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                link.classList.remove('active-nav')
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active-nav')
                }
                })
            }
            })
        },
        { threshold: 0.4 }
        )

        sections.forEach(section => observer.observe(section))
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]')
    const handleClick = (e: Event) => {
        e.preventDefault()
        const target = e.currentTarget as HTMLAnchorElement
        const targetId = target.getAttribute('href')
        const targetElement = document.querySelector(targetId!)
        if (targetElement) {
        const y = targetElement.getBoundingClientRect().top + window.scrollY - 80
        window.scrollTo({ top: y, behavior: 'smooth' })
        }
    }

    anchors.forEach(anchor => {
        (anchor as HTMLAnchorElement).addEventListener('click', handleClick)
    })

    return () => {
        anchors.forEach(anchor => {
        (anchor as HTMLAnchorElement).removeEventListener('click', handleClick)
        })
    }
    }, [])

    return null
}