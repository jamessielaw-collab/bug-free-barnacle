'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function InquirePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const galleryImages = [
    '/images/gallery-1.jpg',
    '/images/gallery-2.jpg', 
    '/images/gallery-3.jpg',
    '/images/gallery-4.jpg',
    '/images/gallery-5.jpg',
    '/images/gallery-6.jpg',
    '/images/gallery-7.jpg',
    '/images/gallery-8.jpg',
    '/images/inquire-slide-new.jpg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [galleryImages.length])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="py-12 text-center">
        <Link href="/" className="hover:opacity-70 transition-opacity">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl tracking-widest"
            style={{ 
              fontFamily: 'var(--font-playfair)',
              color: '#c5bbaf'
            }}
          >
            MAKEUPBYCAREY
          </h1>
        </Link>
      </div>

      <div className="container mx-auto px-6 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Left Side - Form */}
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 
              className="text-5xl md:text-6xl lg:text-7xl mb-12 tracking-wider"
              style={{ 
                fontFamily: 'var(--font-playfair)',
                color: '#c5bbaf'
              }}
            >
              INQUIRE
            </h2>
            
            <p className="text-gray-600 mb-3 text-lg" style={{ fontFamily: 'var(--font-made-mirage)' }}>
              I'd love to hear from you! Please fill out the form below
            </p>
            <p className="text-gray-600 mb-12 text-lg" style={{ fontFamily: 'var(--font-made-mirage)' }}>
              or send a note directly to <a href="mailto:info.makeupbycarey@gmail.com" className="underline">info.makeupbycarey@gmail.com</a>
            </p>

            <form className="space-y-8">
              <div>
                <input
                  type="text"
                  placeholder="YOUR NAMES"
                  className="w-full pb-4 border-0 border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none bg-transparent placeholder-gray-400 text-lg tracking-wider"
                  style={{ fontFamily: 'var(--font-made-mirage)' }}
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="w-full pb-4 border-0 border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none bg-transparent placeholder-gray-400 text-lg tracking-wider"
                  style={{ fontFamily: 'var(--font-made-mirage)' }}
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="PHONE NUMBER"
                  className="w-full pb-4 border-0 border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none bg-transparent placeholder-gray-400 text-lg tracking-wider"
                  style={{ fontFamily: 'var(--font-made-mirage)' }}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="EVENT DATE + LOCATION"
                  className="w-full pb-4 border-0 border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none bg-transparent placeholder-gray-400 text-lg tracking-wider"
                  style={{ fontFamily: 'var(--font-made-mirage)' }}
                />
              </div>

              <div>
                <textarea
                  placeholder="Enter your message here"
                  rows={6}
                  className="w-full pb-4 border-0 border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none bg-transparent placeholder-gray-400 text-lg resize-none"
                  style={{ fontFamily: 'var(--font-made-mirage)' }}
                />
              </div>

              <div className="pt-12">
                <button
                  type="submit"
                  className="px-16 py-4 border-2 border-gray-400 hover:bg-gray-50 transition-colors duration-200 text-lg tracking-widest"
                  style={{ fontFamily: 'var(--font-made-mirage)' }}
                >
                  SEND
                </button>
              </div>
            </form>
          </div>

          {/* Right Side - Rotating Gallery */}
          <div className="relative h-[500px] lg:h-[700px] overflow-hidden rounded-lg">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center top' }}
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}