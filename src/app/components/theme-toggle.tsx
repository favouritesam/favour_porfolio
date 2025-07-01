"use client"

import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/app/components/theme-provider"
import { useState } from "react"

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()
    const [animateWave, setAnimateWave] = useState(false)

    const handleClick = () => {
        setAnimateWave(true)
        toggleTheme()

        setTimeout(() => setAnimateWave(false), 600) // Reset wave after animation
    }

    return (
        <motion.button
            onClick={handleClick}
            className="cursor-pointer relative p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors duration-300 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
            {/* Shockwave effect */}
            {animateWave && (
                <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="animate-ping-slow w-12 h-12 rounded-full bg-purple-500 opacity-30 scale-150"></span>
        </span>
            )}

            {/* Moon and Sun icons */}
            <motion.div
                initial={false}
                animate={{
                    rotate: theme === "dark" ? 0 : 180,
                    scale: theme === "dark" ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <Moon size={20} className="text-white" />
            </motion.div>

            <motion.div
                initial={false}
                animate={{
                    rotate: theme === "light" ? 0 : -180,
                    scale: theme === "light" ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center"
            >
                <Sun size={20} className="text-slate-800 dark:text-white" />
            </motion.div>
        </motion.button>
    )
}
