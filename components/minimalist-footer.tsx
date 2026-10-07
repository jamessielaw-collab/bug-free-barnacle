export default function MinimalistFooter() {
  return (
    <footer id="footer" className="bg-white py-8 md:py-10">
      <div className="container mx-auto px-6">
        {/* Logo */}
        <div className="mb-4 md:mb-6 flex justify-center">
          <img
            src="/images/makeupbycarey-logo.png"
            alt="MakeupByCarey Logo"
            className="h-32 w-auto"
          />
        </div>

        {/* Navigation and social links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <nav className="space-y-3">
            <a
              href="#hero"
              className="block text-gray-600 hover:text-gray-800 transition-colors text-sm"
              style={{ fontFamily: "var(--font-made-mirage)" }}
            >
              Home
            </a>
            <a
              href="#about"
              className="block text-gray-600 hover:text-gray-800 transition-colors text-sm"
              style={{ fontFamily: "var(--font-made-mirage)" }}
            >
              About
            </a>
            <a
              href="/inquire"
              className="block text-gray-600 hover:text-gray-800 transition-colors text-sm"
              style={{ fontFamily: "var(--font-made-mirage)" }}
            >
              Inquire
            </a>
          </nav>

          <nav className="space-y-3">
            <a
              href="#services"
              className="block text-gray-600 hover:text-gray-800 transition-colors text-sm"
              style={{ fontFamily: "var(--font-made-mirage)" }}
            >
              Services
            </a>
            <a
              href="#faq"
              className="block text-gray-600 hover:text-gray-800 transition-colors text-sm"
              style={{ fontFamily: "var(--font-made-mirage)" }}
            >
              FAQ
            </a>
            <a
              href="#footer"
              className="block text-gray-600 hover:text-gray-800 transition-colors text-sm"
              style={{ fontFamily: "var(--font-made-mirage)" }}
            >
              Contact
            </a>
          </nav>

          <div className="col-span-2 md:col-span-2 flex justify-start md:justify-end">
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/makeupbycareyman/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Instagram"
              >
                <span className="text-xs text-gray-600">IG</span>
              </a>
              <a
                href="https://www.tiktok.com/@makeupbycarey"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="TikTok"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="w-4 h-4 fill-current text-gray-600"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
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

        <p className="mt-8 text-center text-xs tracking-wide text-gray-500">
          KVK: 80274439
        </p>
      </div>
    </footer>
  )
}
