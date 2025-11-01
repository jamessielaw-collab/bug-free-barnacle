"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Logo - Left Side */}
          <motion.div 
            className="md:hidden flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <button onClick={() => scrollToSection("hero")}>
              <img 
                src="/images/makeupbycarey-logo.png"
                alt="MakeupByCarey Logo"
                className="h-16 w-auto"
              />
            </button>
          </motion.div>

          {/* Left Navigation */}
          <nav className="hidden md:flex space-x-8">
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

          {/* Center Logo */}
          <motion.div 
            className="hidden md:flex flex-1 justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <button onClick={() => scrollToSection("hero")}>
              <img 
                src="/images/makeupbycarey-logo.png"
                alt="MakeupByCarey Logo"
                className={`h-36 w-auto transition-opacity duration-300 ${
                  isScrolled ? "opacity-100" : "opacity-90"
                }`}
              />
            </button>
          </motion.div>

          {/* Right Navigation */}
          <nav className="hidden md:flex space-x-8">
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
                const footer = document.querySelector('footer');
                if (footer) {
                  footer.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              CONTACT
            </motion.a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? "text-gray-800" : "text-white"} hover:text-coral transition-colors`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-white">
            <div className="flex flex-col h-full">
              <div className="flex justify-end p-6">
                <button onClick={() => setIsMenuOpen(false)} className="text-gray-800">
                  <X size={24} />
                </button>
              </div>

              <nav className="flex-1 flex flex-col justify-center items-center space-y-8">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-4xl text-gray-800 tracking-wider transition-colors hover:opacity-70"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  HOME
                </button>
                <button
                  onClick={() => scrollToSection("banner")}
                  className="text-4xl text-gray-800 tracking-wider transition-colors hover:opacity-70"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  ABOUT ME
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-4xl text-gray-800 tracking-wider transition-colors hover:opacity-70"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  SERVICES
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-4xl text-gray-800 tracking-wider transition-colors hover:opacity-70"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  FAQ
                </button>
                <a
                  href="/inquire"
                  className="text-4xl text-gray-800 tracking-wider transition-colors hover:opacity-70"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  INQUIRE
                </a>
                <button
                  onClick={() => {
                    const footer = document.querySelector('footer');
                    if (footer) {
                      footer.scrollIntoView({ behavior: 'smooth' });
                      setIsMenuOpen(false);
                    }
                  }}
                  className="text-4xl text-gray-800 tracking-wider transition-colors hover:opacity-70"
                  style={{ fontFamily: 'var(--font-playfair)' }}
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
