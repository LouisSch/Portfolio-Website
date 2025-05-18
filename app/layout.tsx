import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Professional Portfolio - GitHub Projects Showcase',
    description: 'Portfolio of Louis Schirra - Quant Developer and Problem Solver'
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <title>Professional Portfolio | GitHub Projects Showcase</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
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