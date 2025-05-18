'use client'
import { useRef, useState } from 'react'

type ContactInfoProps = {
  icon: string
  title: string
  text: string
  link: string
}

function ContactInfo({ icon, title, text, link }: { icon: string, title: string, text: string, link: string }) {
    return (
        <div className="flex items-center">
        <div className="p-3 rounded-lg bg-indigo-900/20 mr-4">
            <i className={`${icon} text-xl text-indigo-500`} />
        </div>
        <div>
            <h4 className="font-medium text-gray-300">{title}</h4>
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300">
            {text}
            </a>
        </div>
        </div>
    )
}

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending...')

    const form = formRef.current
    if (!form) return

    const formData = {
        name: (form.elements.namedItem('name') as HTMLInputElement)?.value,
        email: (form.elements.namedItem('email') as HTMLInputElement)?.value,
        subject: (form.elements.namedItem('subject') as HTMLInputElement)?.value,
        message: (form.elements.namedItem('message') as HTMLTextAreaElement)?.value
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        setStatus('✅ Message sent!')
        form.reset()
      } else {
        const err = await res.json()
        setStatus(`❌ ${err.error || 'Failed to send message'}`)
      }
    } catch (err) {
      setStatus('❌ Error while sending message.')
    }
  }

  return (
    <section id="contact" className="py-16 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Get In <span className="gradient-text">Touch</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Interested in working together or learning more about my work? Feel free to reach out.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form id="contact" ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input type="email" id="email" name="email" placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="What's this about?"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Your message here..."
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <button type="submit" className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md font-medium transition duration-300">
                Send Message
              </button>
              {status && <p className="text-green-400 text-sm mt-2">{status}</p>}
            </div>
          </form>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            <ContactInfo
              icon="fas fa-envelope"
              title="Email"
              text="louis.schirra02@gmail.com"
              link="mailto:louis.schirra02@gmail.com"
            />
            <ContactInfo
              icon="fab fa-github"
              title="GitHub"
              text="github.com/LouisSch"
              link="https://github.com/LouisSch"
            />
            <ContactInfo
              icon="fab fa-linkedin"
              title="LinkedIn"
              text="linkedin.com/in/louisschirra"
              link="https://www.linkedin.com/in/louisschirra/"
            />
          </div>
        </div>
      </div>
    </section>
  )
}