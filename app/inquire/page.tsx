'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { sendContactEmail } from '@/app/actions/contact'

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


  // 🔥 MAIL FUNCTION
  async function handleSubmit(e: any) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const result = await sendContactEmail(formData)

    if (result?.success) {
      alert("Message sent! I will get back to you soon.")
      e.target.reset()
    } else {
      alert("Failed to send. Please email directly at info.makeupbycarey@gmail.com")
    }
  }


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

            {/* 🔥 WORKING FORM */}
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <input
                  name="name"
                  type="text"
                  placeholder="YOUR NAMES"
                  required
                  className="w-full pb-4 border-0 border-b-2 border-gray-300 bg-transparent"
                />
              </div>

              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  required
                  className="w-full pb-4 border-0 border-b-2 border-gray-300 bg-transparent"
                />
              </div>

              <div>
                <input
                  name="phone"
                  type="tel"
                  placeholder="PHONE NUMBER"
                  className="w-full pb-4 border-0 border-b-2 border-gray-300 bg-transparent"
                />
              </div>

              <div>
                <input
                  name="eventDetails"
                  type="text"
                  placeholder="EVENT DATE + LOCATION"
                  className="w-full pb-4 border-0 border-b-2 border-gray-300 bg-transparent"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Enter your message here"
                  required
                  rows={6}
                  className="w-full pb-4 border-0 border-b-2 border-gray-300 bg-transparent resize-none"
                />
              </div>

              <div className="pt-12">
                <button
                  type="submit"
                  className="px-16 py-4 border-2 border-gray-400 hover:bg-gray-50 transition-colors text-lg tracking-widest"
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
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
