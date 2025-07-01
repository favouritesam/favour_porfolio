// "use client"
//
// import { motion } from "framer-motion"
// import {
//     FaReact,
//     FaNodeJs,
//     FaGithub,
//     FaFigma,
//     FaHtml5,
//     FaCss3Alt,
// } from "react-icons/fa"
// import {
//     SiTailwindcss,
//     SiNextdotjs,
//     SiTypescript,
// } from "react-icons/si"
//
// const skills = [
//     { name: "HTML", icon: <FaHtml5 /> },
//     { name: "CSS", icon: <FaCss3Alt /> },
//     { name: "React", icon: <FaReact /> },
//     { name: "React Native", icon: <FaReact /> },
//     { name: "Next.js", icon: <SiNextdotjs /> },
//     { name: "Tailwind CSS", icon: <SiTailwindcss /> },
//     { name: "TypeScript", icon: <SiTypescript /> },
//     { name: "GitHub", icon: <FaGithub /> },
//     { name: "Figma", icon: <FaFigma /> },
// ]
//
// export default function OrbitingSkillsCircle() {
//     const radius = 110 // keep inside the 340px boundary
//
//     return (
//         <div className="relative w-[300px] h-[300px] mx-auto overflow-hidden">
//             {/* Center bubble */}
//             <div className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-24 h-24 rounded-full bg-purple-600 text-white text-base font-semibold shadow-lg">
//                 Skills
//             </div>
//
//             {/* Rotating skills */}
//             <motion.div
//                 className="absolute inset-0"
//                 animate={{ rotate: 360 }}
//                 transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
//             >
//                 {skills.map((skill, i) => {
//                     const angle = (i / skills.length) * 360
//                     const x = radius * Math.cos((angle * Math.PI) / 180)
//                     const y = radius * Math.sin((angle * Math.PI) / 180)
//
//                     return (
//                         <motion.div
//                             key={skill.name}
//                             className="absolute w-20 h-20 flex flex-col items-center justify-center text-center rounded-full bg-white/10 text-white text-[10px] sm:text-xs shadow backdrop-blur"
//                             style={{
//                                 left: `calc(50% + ${x}px - 40px)`, // 40px = half width
//                                 top: `calc(50% + ${y}px - 40px)`,
//                             }}
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ delay: i * 0.1 }}
//                         >
//                             <div className="text-xl mb-1">{skill.icon}</div>
//                             <div className="font-medium">{skill.name}</div>
//                         </motion.div>
//                     )
//                 })}
//             </motion.div>
//         </div>
//     )
// }


// components/OrbitingSkillsCircle.tsx
"use client"

import { motion } from "framer-motion"
import {
    FaReact,
    FaGithub,
    FaFigma,
    FaHtml5,
    FaCss3Alt,
} from "react-icons/fa"
import {
    SiTailwindcss,
    SiNextdotjs,
    SiTypescript,
} from "react-icons/si"

const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "React", icon: <FaReact /> },
    { name: "React Native", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Figma", icon: <FaFigma /> },
]

export default function OrbitingSkillsCircle() {
    const radius = 100 // Reduced radius for responsiveness

    return (
        <div className="relative w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] mx-auto overflow-hidden">
            {/* Center bubble */}
            <div className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-purple-600 text-white text-sm sm:text-base font-semibold shadow-lg">
                Skills
            </div>

            {/* Rotating skills */}
            <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            >
                {skills.map((skill, i) => {
                    const angle = (i / skills.length) * 360
                    const x = radius * Math.cos((angle * Math.PI) / 180)
                    const y = radius * Math.sin((angle * Math.PI) / 180)

                    return (
                        <motion.div
                            key={skill.name}
                            className="absolute w-16 h-16 sm:w-20 sm:h-20 flex flex-col items-center justify-center text-center rounded-full bg-white/10 text-white text-[10px] sm:text-xs shadow backdrop-blur"
                            style={{
                                left: `calc(50% + ${x}px - 40px)`,
                                top: `calc(50% + ${y}px - 40px)`
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="text-base sm:text-xl mb-1">{skill.icon}</div>
                            <div className="font-medium leading-tight">{skill.name}</div>
                        </motion.div>
                    )
                })}
            </motion.div>
        </div>
    )
}
