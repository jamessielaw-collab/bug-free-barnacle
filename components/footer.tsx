"use client"

import { motion } from "framer-motion"
import { Instagram, Mail, MapPin, Send } from "lucide-react"

export default function Footer() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <footer className="relative bg-gradient-to-b from-charcoal to-black text-white overflow-hidden">
      {/* Artistic background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-coral rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-beige rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Logo */}
        <motion.div
          className="flex justify-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.img 
            src="/images/makeupbycarey-logo.png" 
            alt="MakeupByCarey Logo" 
            className="h-16 sm:h-20 md:h-24 w-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Newsletter */}
        <motion.div
          className="max-w-2xl mx-auto mb-12 md:mb-16 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-playfair text-xl sm:text-2xl md:text-3xl mb-2 md:mb-3" style={{ color: '#c5bbaf' }}>
            Stay Connected
          </h3>
          <p className="text-stone-400 text-xs sm:text-sm mb-5 md:mb-6 max-w-md mx-auto leading-relaxed px-2">
            Join our exclusive list for beauty tips, wedding inspiration, and special offers.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="flex-1 px-4 sm:px-5 py-3 bg-white/5 text-white placeholder-stone-500 border border-stone-700 focus:border-beige focus:outline-none rounded-full text-xs sm:text-sm backdrop-blur-sm transition-all"
            />
            <motion.button
              type="submit"
              className="px-6 sm:px-8 py-3 rounded-full font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-all whitespace-nowrap"
              style={{ backgroundColor: '#c5bbaf', color: '#1a1a1a' }}
              whileHover={{ scale: 1.05, backgroundColor: '#d4cbc1' }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
              <Send className="w-4 h-4" />
            </motion.button>
          </form>
        </motion.div>

        {/* Divider */}
        <div className="relative h-px mb-8 md:mb-12">
          <div 
            className="absolute inset-0 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #c5bbaf 20%, #c5bbaf 80%, transparent 100%)',
              opacity: 0.3
            }}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-12">

          {/* Navigate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-playfair text-xs uppercase tracking-widest mb-6" style={{ color: '#c5bbaf' }}>
              Navigate
            </h3>
            <nav className="space-y-3 text-sm">
              <a href="/" className="block text-stone-300 hover:text-white transition-all hover:translate-x-1">Home</a>
              <a href="#about" className="block text-stone-300 hover:text-white transition-all hover:translate-x-1">About Me</a>
              <a href="#services" className="block text-stone-300 hover:text-white transition-all hover:translate-x-1">Services</a>
              <a href="#faq" className="block text-stone-300 hover:text-white transition-all hover:translate-x-1">FAQ</a>
            </nav>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-playfair text-xs uppercase tracking-widest mb-6" style={{ color: '#c5bbaf' }}>
              Services
            </h3>
            <nav className="space-y-3 text-sm">
              <a href="/inquire" className="block text-stone-300 hover:text-white transition-all hover:translate-x-1">Book Now</a>
              <a href="#services" className="block text-stone-300 hover:text-white transition-all hover:translate-x-1">Bridal Makeup</a>
              <a href="#services" className="block text-stone-300 hover:text-white transition-all hover:translate-x-1">Special Events</a>
              <a href="#services" className="block text-stone-300 hover:text-white transition-all hover:translate-x-1">Consultations</a>
            </nav>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="font-playfair text-xs uppercase tracking-widest mb-6" style={{ color: '#c5bbaf' }}>
              Connect
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" style={{ color: '#c5bbaf' }} />
                <span className="text-stone-300">Amsterdam, Netherlands</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5" style={{ color: '#c5bbaf' }} />
                <a href="mailto:info.makeupbycarey@gmail.com" className="text-stone-300 hover:text-white transition-colors">
                  info.makeupbycarey@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="font-playfair text-xs uppercase tracking-widest mb-6" style={{ color: '#c5bbaf' }}>
              Follow Us
            </h3>
            <div className="flex gap-4">
              <motion.a 
                href="https://www.instagram.com/careyyman/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center border border-stone-700"
                style={{ backgroundColor: 'rgba(197, 187, 175, 0.1)' }}
                whileHover={{ scale: 1.1 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>

              <motion.a 
                href="mailto:info.makeupbycarey@gmail.com"
                className="w-12 h-12 rounded-full flex items-center justify-center border border-stone-700"
                style={{ backgroundColor: 'rgba(197, 187, 175, 0.1)' }}
                whileHover={{ scale: 1.1 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
            <p className="text-stone-400 text-xs mt-4">@careyyman</p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="text-center space-y-3 pt-8 border-t border-stone-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p className="text-stone-400 text-xs tracking-wide">
            © 2024 MakeupByCarey. Crafted with passion in Amsterdam.
          </p>

          <p className="text-stone-500 text-xs tracking-wide">
            KVK: 80274439 · VAT: NL003415104B42
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-xs">
            <a href="#" className="text-stone-500 hover:text-stone-300 transition-colors">
              Privacy Policy
            </a>
            <span className="text-stone-700">•</span>
            <a href="#" className="text-stone-500 hover:text-stone-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>

      </div>
    </footer>
  )
}
