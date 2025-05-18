import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Professional Portfolio – GitHub Projects Showcase',
    description: 'Portfolio of Louis Schirra – Quant Developer and Problem Solver',
    icons: {
        icon: '/favicon.ico'
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <meta name="google-site-verification" content="hS9b_OudPgP9Iy6Yz-w3eMFYX-p5Dg_nEJlPRDBVnXU" />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
            />
        </head>
        <body className={`bg-gray-900 text-gray-100 ${inter.className}`}>
            {children}
        </body>
        </html>
    )
}