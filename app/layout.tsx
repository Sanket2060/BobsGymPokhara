import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BobsGym - Premium Fitness Center",
  description:
    "Transform your body and mind at BobsGym. Premium fitness center with expert trainers, state-of-the-art equipment, and personalized training programs.",
  generator: "v0.app",
  icons: {
    icon: "/logo.jpg",
  },
  openGraph: {
    title: "BobsGym - Premium Fitness Center",
    description: "Transform your body and mind at BobsGym. Premium fitness center with expert trainers.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 1200,
        alt: "BobsGym Logo",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
