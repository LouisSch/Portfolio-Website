import { NextResponse } from "next/server"

export async function GET() {
    const baseUrl = 'http://lschirra.dev'
    const pages = ['', '#projects', '#skills', '#contact']

    const urls = pages.map(
        path => `<url><loc>${baseUrl}/${path}</loc></url>`
    ).join('')


    const xml = `<?xml version="1.0" encoding="UTF-8"?>
                <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                    ${urls}
                </urlset>`
    
    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'applications/xml'
        }
    })
}