export default function MinimalistFooter() {
  return (
    <footer id="footer" className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <img
            src="/images/makeupbycarey-logo.png"
            alt="MakeupByCarey Logo"
            className="h-20 w-auto"
          />
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="space-y-4">
            <nav className="space-y-3">
              <a 
                href="#hero" 
                className="block text-gray-600 hover:text-gray-800 transition-colors text-sm"
                style={{ fontFamily: 'var(--font-made-mirage)' }}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="block text-gray-600 hover:text-gray-800 transition-colors text-sm"
                style={{ fontFamily: 'var(--font-made-mirage)' }}
              >
                About
              </a>
              <a 
                href="/inquire" 
                className="block text-gray-600 hover:text-gray-800 transition-colors text-sm"
                style={{ fontFamily: 'var(--font-made-mirage)' }}
              >
                Inquire
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <nav className="space-y-3">
              <a 
                href="#services" 
                className="block text-gray-600 hover:text-gray-800 transition-colors text-sm"
                style={{ fontFamily: 'var(--font-made-mirage)' }}
              >
                Services
              </a>
              <a 
                href="#faq" 
                className="block text-gray-600 hover:text-gray-800 transition-colors text-sm"
                style={{ fontFamily: 'var(--font-made-mirage)' }}
              >
                FAQ
              </a>
              <a 
                href="#contact" 
                className="block text-gray-600 hover:text-gray-800 transition-colors text-sm"
                style={{ fontFamily: 'var(--font-made-mirage)' }}
              >
                Contact
              </a>
            </nav>
          </div>

          <div className="col-span-2 md:col-span-2 flex justify-end">
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/makeupbycarey" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Instagram"
              >
                <span className="text-xs text-gray-600">IG</span>
              </a>
              <a 
                href="mailto:info.makeupbycarey@gmail.com" 
                className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Email"
              >
                <span className="text-xs text-gray-600">@</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
