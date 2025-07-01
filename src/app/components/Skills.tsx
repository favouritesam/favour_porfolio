"use client"

import { motion } from "framer-motion"
import { FaCode, FaPenNib, FaMagic } from "react-icons/fa"

const skills = [
    { name: "React", percent: 95 },
    { name: "JavaScript", percent: 85 },
    { name: "HTML/CSS", percent: 95 },
    { name: "Tailwind CSS", percent: 90 },
    { name: "Framer Motion", percent: 80 },
    { name: "TypeScript", percent: 75 },
    { name: "Next.js", percent: 90 },
    { name: "React Native", percent: 70 },
    { name: "Responsive Design", percent: 95 },
]

const services = [
    {
        title: "Frontend Development",
        description: "Building responsive, high-performance web applications with modern JavaScript frameworks and libraries.",
        icon: <FaCode className="text-purple-500 text-xl" />,
    },
    {
        title: "UI/UX Implementation",
        description: "Translating design concepts into fully functional and interactive interfaces with attention to detail.",
        icon: <FaPenNib className="text-purple-500 text-xl" />,
    },
    {
        title: "Animation Development",
        description: "Creating smooth, engaging animations and interactive elements to enhance user experience.",
        icon: <FaMagic className="text-purple-500 text-xl" />,
    },
]

export default function SkillsSection() {
    return (
        <section id="skills" className="py-20 px-4 bg-[#0e0e1b] text-white">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                {/* Technical Skills */}
                <div>
                    <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
                    <div className="space-y-5">
                        {skills.map((skill) => (
                            <div key={skill.name}>
                                <div className="flex justify-between mb-1">
                                    <span>{skill.name}</span>
                                    <span className="text-sm text-gray-400">{skill.percent}%</span>
                                </div>
                                <div className="w-full bg-gray-800 h-2 rounded-full">
                                    <motion.div
                                        className="h-2 rounded-full bg-purple-500"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.percent}%` }}
                                        transition={{ duration: 1.2 }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-2xl font-semibold mb-6">Services</h3>
                    <div className="space-y-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-[#1c1c2e] p-6 rounded-xl border border-white/5 hover:bg-[#26263d] transition"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    {service.icon}
                                    <h4 className="text-lg font-semibold">{service.title}</h4>
                                </div>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
