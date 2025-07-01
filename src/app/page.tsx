"use client"

import {useState, useEffect} from "react"
import {motion, useScroll, useTransform} from "framer-motion"
import {ArrowDown, ExternalLink, Menu, X} from "lucide-react"
import Image from "next/image"
import {ThemeToggle} from "@/app/components/theme-toggle";
import {useTheme} from "@/app/components/theme-provider";
import {TypewriterEffect} from "@/app/components/TypewriterEffect";
import OrbitingSkillsCircle from "@/app/components/OrbitingSkills";
import SkillsSection from "@/app/components/Skills";
import ContactSection from "@/app/components/ContactSection";


export default function Portfolio() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("home")
    const {scrollYProgress} = useScroll()
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    useTheme() // Just call the hook to ensure the provider is working


    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "skills", "projects", "contact"]
            const scrollPosition = window.scrollY + 100

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const {offsetTop, offsetHeight} = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        // ✅ Call it immediately to detect section on first load
        handleScroll()

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])


    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({behavior: "smooth"})
        }
        setIsMenuOpen(false)
    }

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 light:from-slate-50 light:via-purple-50 light:to-slate-100 transition-all duration-500">
            {/* Navigation */}
            <nav
                className="fixed top-0 w-full z-50 bg-black/20 dark:bg-black/20 light:bg-white/80 backdrop-blur-md border-b border-white/10 dark:border-white/10 light:border-slate-200/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <motion.div
                            initial={{opacity: 0, x: -20}}
                            animate={{opacity: 1, x: 0}}
                            className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900"
                        >
                            Favour Nwadike
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                            {["home", "about", "skills", "projects", "contact"].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className={`capitalize transition-colors duration-300 text-sm lg:text-base ${
                                        activeSection === item
                                            ? "text-purple-400 dark:text-purple-400 light:text-purple-600"
                                            : "text-white hover:text-purple-300 dark:text-white dark:hover:text-purple-300 light:text-slate-700 light:hover:text-purple-500"
                                    }`}
                                >
                                    {item}
                                </button>
                            ))}
                            <ThemeToggle/>
                        </div>

                        {/* Mobile Menu Button and Theme Toggle */}
                        <div className="md:hidden flex items-center space-x-3">
                            <ThemeToggle/>
                            <button
                                className="p-2 text-white dark:text-white light:text-slate-900 hover:bg-white/10 rounded-lg transition-colors duration-200"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                            </button>
                        </div>
                    </div>
                </div>


                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <motion.div
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -20}}
                        className="md:hidden bg-black/95 dark:bg-black/95 light:bg-white/95 backdrop-blur-md border-t border-white/10 dark:border-white/10 light:border-slate-200/50"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {["home", "about", "skills", "projects", "contact"].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className={`block w-full text-left capitalize py-3 px-4 rounded-lg transition-colors duration-300 ${
                                        activeSection === item
                                            ? "text-purple-400 bg-purple-400/10 dark:text-purple-400 dark:bg-purple-400/10 light:text-purple-600 light:bg-purple-600/10"
                                            : "text-white hover:text-purple-300 hover:bg-white/5 dark:text-white dark:hover:text-purple-300 dark:hover:bg-white/5 light:text-slate-900 light:hover:text-purple-600 light:hover:bg-slate-100"
                                    }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home"
                     className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 flex-col md:flex-row gap-10">
                <motion.div style={{y}} className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 dark:from-purple-600/20
                         dark:to-blue-600/20 light:from-purple-300/30 light:to-blue-300/30"/>
                    <div
                        className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10 dark:opacity-10 light:opacity-5"/>
                </motion.div>

                <div className="relative z-10 text-center max-w-4xl mx-auto">


                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                    >
                        <p className="text-purple-400 text-sm sm:text-base font-medium mb-2">Hello, I&#39;m</p>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
                            Favour Nwadike
                        </h1>

                        <span className="text-xl sm:text-2xl text-slate-300 font-medium mb-4 block min-h-[2.5rem]">
                       <TypewriterEffect/>
               </span>

                        <p className="text-base sm:text-lg md:text-xl text-slate-400 px-4 max-w-3xl mx-auto mb-6 sm:mb-8">
                            I build exceptional digital experiences using modern frontend and mobile technologies.
                            Specializing in React, React Native, Next.js Tailwind CSS, and bringing apps to life with
                            clean UI and rich animations using Framer Motion. </p>

                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.5, duration: 0.8}}
                            className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12"
                        >
                            {/* Social icons (keep your existing code here) */}
                        </motion.div>

                        <motion.button
                            onClick={() => scrollToSection("about")}
                            className="inline-flex items-center px-6 sm:px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors duration-300 text-sm sm:text-base"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                        >
                            Learn More
                            <ArrowDown className="ml-2" size={18}/>
                        </motion.button>
                    </motion.div>
                </div>

                <motion.div
                    animate={{y: [0, 10, 0]}}
                    transition={{duration: 2, repeat: Number.POSITIVE_INFINITY}}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
                >
                    <ArrowDown className="text-white/50 dark:text-white/50 light:text-slate-600/50" size={24}/>
                </motion.div>

                <OrbitingSkillsCircle/>
            </section>


            <section id="about" className="py-16 sm:py-20 px-4 bg-[#0f172a] text-white">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse gap-10 justify-between">

                    {/* Left Image */}
                    <motion.div
                        initial={{opacity: 0, x: -30}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                        className="order-2 lg:order-2"
                    >

                        <div className="relative max-w-sm mx-auto">
                            <div
                                className="w-64 h-64 sm:w-80 sm:h-80 mx-auto rounded-full overflow-hidden border-4 border-purple-400 dark:border-purple-400 light:border-purple-600">
                                <Image
                                    src="/images/eby.png"
                                    alt="Profile"
                                    width={320}
                                    height={320}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div
                                className="absolute -top-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-purple-600 dark:bg-purple-600 light:bg-purple-400 rounded-full opacity-20"></div>
                            <div
                                className="absolute -bottom-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 dark:bg-blue-600 light:bg-blue-400 rounded-full opacity-20"></div>
                        </div>
                    </motion.div>

                    {/* Right Text Content */}
                    <motion.div
                        initial={{opacity: 0, x: 30}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                        className="space-y-6 order-1 lg:order-1 ml-20"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>

                        <p className="text-gray-300">
                            I&#39;m a passionate Frontend Developer with expertise in creating visually stunning and
                            highly interactive web applications.
                            With a strong foundation in modern JavaScript frameworks and a keen eye for design, I bring
                            creativity and technical excellence to every project.
                        </p>
                        <p className="text-gray-300">
                            My development approach focuses on creating seamless user experiences with smooth
                            animations, responsive layouts, and optimized performance.
                            I&#39;m particularly interested in the intersection of design and code, where beautiful
                            interfaces meet functional implementations.
                        </p>
                        <p className="text-gray-300">
                            When I&#39;m not coding, you&#39;ll find me exploring new design trends, contributing to
                            open-source projects, or sharing my knowledge through tech community involvement.
                        </p>

                        {/* Education & Experience */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            <div>
                                <h3 className="text-lg font-semibold text-white">Education</h3>
                                <p className="text-sm text-gray-300">Software Graduate</p>
                                <p className="text-xs text-gray-400">Semicolon Africa, Oct 2022 - Nov 2023</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white">Experience</h3>
                                <p className="text-sm text-gray-300">2+ Years</p>
                                <p className="text-xs text-gray-400">Frontend Development</p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <a
                                href="https://drive.google.com/file/d/1Uj7J1kZCMYqLX3IfGBodD3spHsvMGXfG/view?usp=drive_link"
                                download
                                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition text-white text-sm font-medium"
                            >
                                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0 0l-4-4m4 4l4-4M20 12h-2a2 2 0 01-2-2V4H8v6a2 2 0 01-2 2H4"/>
                                </svg>
                                Download CV
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* Skills Section */}
            <section id="skills" className="py-16 sm:py-20 px-4 bg-black/20 dark:bg-black/20 light:bg-slate-100/50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white dark:text-white light:text-slate-900 mb-4 sm:mb-6">
                            Skills & Expertise
                        </h2>
                        <div className="w-24 h-1 bg-purple-400 dark:bg-purple-400 light:bg-purple-600 mx-auto"></div>
                    </motion.div>

                    <SkillsSection/>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-16 sm:py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white dark:text-white light:text-slate-900 mb-4 sm:mb-6">
                            Projects
                        </h2>
                        <div className="w-24 h-1 bg-purple-400 dark:bg-purple-400 light:bg-purple-600 mx-auto"></div>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                title: "Amej Trading: (Corporate Trading Landing Page)",
                                description: "A modern, responsive landing page designed to showcase Amej Trading’s core services in import/export, logistics, and supply chain management." +
                                    " Features clean layout, clear CTAs, and mobile-friendly design optimized for engagement and credibility.",
                                image: "/images/amej.png",
                                tech: [" React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
                            },
                            {
                                title: "food-inquiry-web-application",
                                description: "Nutritious Recipes is an application designed to help users find healthy food options easily. It allows users to discover a wide variety of delicious recipes, each accompanied by detailed nutrition information and estimated costs, " +
                                    "making it simple to plan meals that are both wholesome and budget-friendly.",
                                image: "/images/food.png",
                                tech: [" React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
                            },
                            {
                                title: "vaultyfy",
                                description: "Your Trusted Partner in Thrift Savings\n" +
                                    "Vaultyfy is a verified and secure platform for thrift savings groups. It enables members to contribute consistently and receive payouts in a transparent, rotational system.\n" +
                                    "Built to support your financial goals, Vaultyfy combines trust, reliability, and community empowerment, ensuring everyone benefits, one cycle at a time.",
                                image: "/images/valt.png",
                                tech: [" React.js", "Chakra UI v2 ", "Zustand ", "Tailwind CSS"],
                            },
                        ].map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.8, delay: index * 0.2}}
                                viewport={{once: true}}
                                className="bg-white/5 dark:bg-white/5 light:bg-white/70 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-white/90 transition-all duration-300 group"
                            >
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        width={300}
                                        height={200}
                                        className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div
                                        className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <ExternalLink className="text-white" size={24}/>
                                    </div>
                                </div>
                                <div className="p-4 sm:p-6">
                                    <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-slate-900 mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 dark:text-gray-300 light:text-slate-600 mb-4 text-sm sm:text-base">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 sm:px-3 py-1 bg-purple-600/20 dark:bg-purple-600/20 light:bg-purple-200/70 text-purple-300 dark:text-purple-300 light:text-purple-700 rounded-full text-xs sm:text-sm"
                                            >
                        {tech}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <ContactSection/>

            {/* Footer */}
            <footer className="py-6 sm:py-8 px-4 border-t border-white/10 dark:border-white/10 light:border-slate-200">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-gray-400 dark:text-gray-400 light:text-slate-600 text-sm sm:text-base">
                        © 2025 Favour Nwadike. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}
