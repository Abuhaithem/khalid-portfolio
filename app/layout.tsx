import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Khalid Getachew | Video Editor & Creative Professional",
  description: "Creative professional from Ethiopia specializing in video editing, digital design, and strategic innovation. 8+ years experience transforming ideas into impactful visual stories.",
  keywords: ["video editor", "creative professional", "digital designer", "Ethiopia", "video production", "creative consultant", "brand development"],
  authors: [{ name: "Khalid Getachew" }],
  creator: "Khalid Getachew",
  metadataBase: new URL("https://khalidgetachew.com"),
  openGraph: {
    title: "Khalid Getachew | Video Editor & Creative Professional",
    description: "Creative professional from Ethiopia specializing in video editing, digital design, and strategic innovation.",
    url: "https://khalidgetachew.com",
    siteName: "Khalid Getachew",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khalid Getachew | Video Editor & Creative Professional",
    description: "Creative professional from Ethiopia specializing in video editing, digital design, and strategic innovation.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Khalid Getachew",
    jobTitle: "Video Editor & Creative Professional",
    description: "Creative professional from Ethiopia specializing in video editing, digital design, and strategic innovation.",
    image: "https://khalidgetachew.com/professional-video-editor-khalid-getachew-working-.jpg",
    sameAs: [],
    knowsAbout: [
      "Video Editing",
      "Video Production",
      "Digital Design",
      "Creative Direction",
      "Brand Development",
      "Strategic Planning",
    ],
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
