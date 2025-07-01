"use client"

import { createContext, useContext, useEffect, useState } from "react"
import type { ReactNode } from "react"

type Theme = "dark" | "light"

interface ThemeContextType {
    theme: Theme
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>("dark")

    // useEffect(() => {
    //     const savedTheme = localStorage.getItem("theme") as Theme
    //     if (savedTheme) {
    //         setTheme(savedTheme)
    //     } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    //         setTheme("light")
    //     }
    // }, [])

    useEffect(() => {
        localStorage.setItem("theme", theme)
        const root = document.documentElement // <html> element
        root.classList.remove("dark", "light")
        root.classList.add(theme) // ✅ this adds 'dark' or 'light' to <html>
    }, [theme])


    useEffect(() => {
        localStorage.setItem("theme", theme)
        const root = document.documentElement
        root.classList.remove("dark", "light")
        root.classList.add(theme) // This applies the Tailwind class!
    }, [theme])

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (!context) {
        return { theme: "dark" as Theme, toggleTheme: () => {} }
    }
    return context
}
