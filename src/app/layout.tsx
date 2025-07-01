import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import {ThemeProvider} from "@/app/components/theme-provider";

const inter = Inter({ subsets: ["latin"] })


export const metadata: Metadata = {
    title: "Favour Nwadike - Portfolio",
    description: "Full Stack Developer & UI/UX Designer Portfolio",
    keywords: "developer, portfolio, react, next.js",
    authors: [{ name: "Favour Nwadike" }],
    openGraph: {
        title: "Favour Nwadike - Portfolio",
        description: "Full Stack Developer & UI/UX Designer Portfolio",
        type: "website",
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body>
        <ThemeProvider>
            <div className="transition-colors duration-500 min-h-screen bg-white text-black dark:bg-black dark:text-white">
                {children}
            </div>
        </ThemeProvider>
        </body>
        </html>
    )
}
