"use client"

import { useEffect, useState } from "react"

const roles = ["Frontend Developer", "App Developer"]
const typingSpeed = 100
const delayBetweenRoles = 2000

export function TypewriterEffect() {
    const [text, setText] = useState("")
    const [index, setIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [deleting, setDeleting] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            const currentRole = roles[index]
            if (!deleting) {
                setText(currentRole.slice(0, charIndex + 1))
                setCharIndex(charIndex + 1)
                if (charIndex === currentRole.length) {
                    setDeleting(true)
                    setTimeout(() => {}, delayBetweenRoles)
                }
            } else {
                setText(currentRole.slice(0, charIndex - 1))
                setCharIndex(charIndex - 1)
                if (charIndex === 0) {
                    setDeleting(false)
                    setIndex((index + 1) % roles.length)
                }
            }
        }, deleting ? 50 : typingSpeed)

        return () => clearTimeout(timeout)
    }, [charIndex, deleting, index])

    return (
        <span className="text-purple-400 dark:text-purple-400 light:text-purple-600 transition-all duration-300">
      {text}
            <span className="animate-pulse">|</span>
    </span>
    )
}
