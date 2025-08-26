import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})


export const metadata: Metadata = {
  title: "Praveen Bhutani - Full Stack Developer",
  description:
    "Portfolio of Praveen Bhutani, Full Stack Developer with expertise in Java, Spring Boot, Angular, and React",
  generator: "v0.app",
  keywords: [
    "Full Stack Developer",
    "Java",
    "Spring Boot",
    "Angular",
    "React",
    "Praveen Bhutani",
  ],
  authors: [{ name: "Praveen Bhutani" }],
  viewport: "width=device-width, initial-scale=1",
 icons: {
    icon: "/favicon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${playfair.variable}`}>{children}</body>
    </html>
  )
}
