import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta
          http-equiv="origin-trial"
          content="AlU4GUR1ZBasFEUCNe8USkx7GSokITQbNSdgFlU9Zrg6aP+ThjAbiDdKq0gXIdk/agcphCw4k/hxIBcSD4wilQ8AAABneyJvcmlnaW4iOiJodHRwOi8vbG9jYWxob3N0OjMwMDAiLCJmZWF0dXJlIjoiRGlzYWJsZVRoaXJkUGFydHlTdG9yYWdlUGFydGl0aW9uaW5nIiwiZXhwaXJ5IjoxNzI1NDA3OTk5fQ=="
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
