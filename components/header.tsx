"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)

    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 bg-white md:transition-all md:duration-300 ${
        isScrolled ? "shadow-md" : "md:bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile logo */}
          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            className="md:hidden font-playfair text-xl text-gray-900 tracking-tight"
            aria-label="MakeupByCarey, back to top"
          >
            makeupbycarey.
          </button>

          {/* Left desktop navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            <motion.button
              onClick={() => scrollToSection("hero")}
              className={`${isScrolled ? "text-gray-800" : "text-white"} hover:text-coral transition-colors font-medium tracking-wide`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              HOME
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("banner")}
              className={`${isScrolled ? "text-gray-800" : "text-white"} hover:text-coral transition-colors font-medium tracking-wide`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ABOUT ME
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("services")}
              className={`${isScrolled ? "text-gray-800" : "text-white"} hover:text-coral transition-colors font-medium tracking-wide`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SERVICES
            </motion.button>
          </nav>

          {/* Center desktop logo */}
          <motion.div
            className="hidden md:flex flex-1 justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <button onClick={() => scrollToSection("hero")}>
              <img
                src="/images/makeupbycarey-logo.png"
                alt="MakeupByCarey Logo"
                className={`h-24 lg:h-36 w-auto transition-opacity duration-300 ${
                  isScrolled ? "opacity-100" : "opacity-90"
                }`}
              />
            </button>
          </motion.div>

          {/* Right desktop navigation */}
          <nav className="hidden md:flex items-center space-x-3 lg:space-x-8">
            <motion.button
              onClick={() => scrollToSection("faq")}
              className={`${isScrolled ? "text-gray-800" : "text-white"} hover:text-coral transition-colors font-medium tracking-wide`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              FAQ
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("social")}
              className={`${isScrolled ? "text-gray-800" : "text-white"} hover:text-coral transition-colors font-medium tracking-wide`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SOCIALS
            </motion.button>

            <motion.a
              href="#footer"
              className={`${isScrolled ? "text-gray-800" : "text-white"} hover:text-coral transition-colors font-medium tracking-wide`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const footer = document.querySelector("footer")
                if (footer) {
                  footer.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              CONTACT
            </motion.a>

            <motion.a
              href="/inquire"
              className="inline-flex items-center justify-center rounded-sm bg-[#ded1c0] px-4 py-2 text-sm font-medium tracking-wide text-gray-900 transition-colors hover:bg-[#cbbba7]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              INQUIRE
            </motion.a>
          </nav>

          {/* Mobile inquire button and menu icon */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="/inquire"
              className="inline-flex items-center justify-center rounded-sm bg-[#ded1c0] px-3 py-2 text-xs font-medium tracking-wide text-gray-900 transition-colors hover:bg-[#cbbba7]"
            >
              INQUIRE
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-coral transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-white overflow-y-auto">
            <div className="flex flex-col min-h-full">
              <div className="flex justify-end p-6">
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-800"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex-1 flex flex-col justify-center items-center gap-6 py-8">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-4xl text-gray-800 tracking-wider transition-colors hover:opacity-70"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  HOME
                </button>

                <button
                  onClick={() => scrollToSection("banner")}
                  className="text-4xl text-gray-800 tracking-wider transition-colors hover:opacity-70"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  ABOUT ME
                </button>

                <button
                  onClick={() => scrollToSection("services")}
                  className="text-4xl text-gray-800 tracking-wider transition-colors hover:opacity-70"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  SERVICES
                </button>

                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-4xl text-gray-800 tracking-wider transition-colors hover:opacity-70"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  FAQ
                </button>

                <a
                  href="/inquire"
                  className="text-4xl text-gray-800 tracking-wider transition-colors hover:opacity-70"
                  style={{ fontFamily: "var(--font-playfair)" }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  INQUIRE
                </a>

                <button
                  onClick={() => {
                    const footer = document.querySelector("footer")
                    if (footer) {
                      footer.scrollIntoView({ behavior: "smooth" })
                      setIsMenuOpen(false)
                    }
                  }}
                  className="text-4xl text-gray-800 tracking-wider transition-colors hover:opacity-70"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  CONTACT
                </button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </motion.header>
  )
}
