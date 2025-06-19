import type React from "react"
import type { Metadata } from "next"
import { Sora, Inter } from "next/font/google"
import "./globals.css"

const sora = Sora({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shopbook - Simplify Your Business Invoicing",
  description: "Create professional invoices, track payments, and manage your business finances with ease.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={sora.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
