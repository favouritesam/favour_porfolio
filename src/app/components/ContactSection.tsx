"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

export default function ContactSection() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" })
    const [isSending, setIsSending] = useState(false)
    const [sent, setSent] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSending(true)

        const res = await fetch("https://formsubmit.co/ajax/nwadikefavour12@gmail.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(formData),
        })

        if (res.ok) {
            setSent(true)
            setFormData({ name: "", email: "", message: "" })
        }

        setIsSending(false)
    }

    return (
        <section id="contact" className="py-20 px-4 bg-[#0e0e1b] text-white">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-4xl font-bold mb-2">Get In Touch</h2>
                    <div className="w-24 h-1 bg-purple-500 mx-auto mb-4"></div>
                    <p className="text-gray-300 text-base sm:text-lg">
                        I’m always open to discussing new projects or opportunities.
                    </p>
                </motion.div>

                {/* Grid Layout */}
                <div className="grid md:grid-cols-2 gap-10">
                    {/* Contact Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div>
                            <label className="block mb-2 text-sm font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className="w-full px-4 py-3 bg-[#1c1c2e] border border-gray-700 rounded-lg text-white"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="JohnDoe@gmail.com"
                                className="w-full px-4 py-3 bg-[#1c1c2e] border border-gray-700 rounded-lg text-white"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium">Message</label>
                            <textarea
                                name="message"
                                rows={5}
                                required
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="How can I help you?"
                                className="w-full px-4 py-3 bg-[#1c1c2e] border border-gray-700 rounded-lg text-white resize-none"
                            ></textarea>
                        </div>

                        <motion.button
                            type="submit"
                            disabled={isSending}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`cursor-pointer w-full py-3 font-medium rounded-lg transition duration-300 ${
                                isSending
                                    ? "bg-gray-600 cursor-not-allowed"
                                    : "bg-purple-600 hover:bg-purple-700"
                            }`}
                        >
                            {isSending ? "Sending..." : "Send Message"}
                        </motion.button>

                        {sent && (
                            <p className="text-green-400 text-sm text-center">
                                ✅ Message sent successfully! I&#39;ll get back to you soon.
                            </p>
                        )}
                    </motion.form>

                    {/* Contact Info & Socials */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h4 className="text-lg font-semibold mb-3">Contact Information</h4>
                            <p className="flex items-center gap-3 text-gray-300 text-sm">
                                <FaEnvelope className="text-purple-400" />
                                <a href="mailto:nwadikefavour12@gmail.com" className="hover:underline">
                                    nwadikefavour12@gmail.com
                                </a>
                            </p>
                            <p className="flex items-center gap-3 text-gray-300 text-sm mt-2">
                                <FaMapMarkerAlt className="text-purple-400" />
                                Lagos, Nigeria
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-3">Follow Me</h4>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/favouritesam"
                                    target="_blank"
                                    className="p-3 bg-[#1c1c2e] rounded-full hover:bg-purple-600 transition"
                                >
                                    <FaGithub className="text-white" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/favour-nwadike-3a3b19259/"
                                    target="_blank"
                                    className="p-3 bg-[#1c1c2e] rounded-full hover:bg-purple-600 transition"
                                >
                                    <FaLinkedin className="text-white" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
