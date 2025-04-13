import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TropicFN - Premium Fortnite Accounts",
  description: "Professional Fortnite account marketplace with the best selection and prices.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add this script tag */}
        <script src="https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}


import './globals.css'