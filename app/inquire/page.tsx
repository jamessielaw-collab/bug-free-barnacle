"use client"

import { useEffect, useState, type FormEvent } from "react"
import Image from "next/image"
import Link from "next/link"
import { sendContactEmail } from "@/app/actions/contact"

const galleryImages = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
  "/images/gallery-7.jpg",
  "/images/gallery-8.jpg",
  "/images/inquire-slide-new.jpg",
  "/images/IMG_3700.jpeg",
  "/images/IMG_6505.jpeg",
  "/images/IMG_7266.jpeg",
  "/images/c1e6211a-a864-4184-9f54-95cb9a609195.jpeg",
  "/images/0b518348-2fcf-428e-87c6-9ddb76e58499.jpeg",
  "/images/17bd452a-ece6-4af5-96e9-35639fcda52a.jpeg",
]

const fieldClassName =
  "w-full border-0 border-b-2 border-gray-300 bg-transparent pb-4 text-base text-gray-800 placeholder:text-gray-400 focus:border-[#c5bbaf] focus:outline-none"

export default function InquirePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [toast, setToast] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentImageIndex((index) => (index + 1) % galleryImages.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!toast) return

    const timeout = window.setTimeout(() => setToast(null), 4000)
    return () => window.clearTimeout(timeout)
  }, [toast])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const form = event.currentTarget

    try {
      const result = await sendContactEmail(new FormData(form))

      if (result?.success) {
        setToast("Message sent! I will get back to you soon.")
        form.reset()
      } else {
        setToast("Failed to send message. Please try again.")
      }
    } catch {
      setToast("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {toast && (
        <div
          role="status"
          className="fixed left-4 right-4 top-4 z-50 mx-auto max-w-md rounded-lg bg-[#c5bbaf] px-5 py-3 text-center text-sm text-white shadow-lg sm:left-1/2 sm:right-auto sm:w-max sm:-translate-x-1/2"
        >
          {toast}
        </div>
      )}

      {/* Site name */}
      <div className="px-4 pb-8 pt-10 text-center md:py-12">
        <Link href="/" className="inline-block transition-opacity hover:opacity-70">
          <span
            className="text-2xl tracking-[0.08em] sm:text-4xl md:text-5xl lg:text-6xl lg:tracking-widest"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "#c5bbaf",
            }}
          >
            MAKEUPBYCAREY
          </span>
        </Link>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        {/* Mobile heading: above the photo */}
        <h1
          className="mb-7 text-center text-4xl tracking-wider lg:hidden"
          style={{
            fontFamily: "var(--font-playfair)",
            color: "#c5bbaf",
          }}
        >
          INQUIRE
        </h1>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Form: left on desktop, below the photo on phones */}
          <div className="order-2 mx-auto w-full max-w-2xl lg:order-1 lg:mx-0">
            <h1
              className="mb-12 hidden text-7xl tracking-wider lg:block"
              style={{
                fontFamily: "var(--font-playfair)",
                color: "#c5bbaf",
              }}
            >
              INQUIRE
            </h1>

            <p
              className="mb-3 text-base leading-relaxed text-gray-600 sm:text-lg"
              style={{ fontFamily: "var(--font-made-mirage)" }}
            >
              I&apos;d love to hear from you! Please fill out the form below
            </p>
            <p
              className="mb-10 text-base leading-relaxed text-gray-600 sm:mb-12 sm:text-lg"
              style={{ fontFamily: "var(--font-made-mirage)" }}
            >
              or send a note directly to{" "}
              <a
                href="mailto:info.makeupbycarey@gmail.com"
                className="break-all underline underline-offset-4"
              >
                info.makeupbycarey@gmail.com
              </a>
            </p>

            <form onSubmit={handleSubmit} className="space-y-7 sm:space-y-8">
              <div>
                <label htmlFor="name" className="sr-only">
                  Your names
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="YOUR NAMES"
                  required
                  className={fieldClassName}
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="EMAIL ADDRESS"
                  required
                  className={fieldClassName}
                />
              </div>

              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="PHONE NUMBER"
                  className={fieldClassName}
                />
              </div>

              <div>
                <label htmlFor="eventDetails" className="sr-only">
                  Event date and location
                </label>
                <input
                  id="eventDetails"
                  name="eventDetails"
                  type="text"
                  placeholder="EVENT DATE + LOCATION"
                  className={fieldClassName}
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message here"
                  required
                  rows={6}
                  className={`${fieldClassName} resize-none`}
                />
              </div>

              <div className="pt-4 sm:pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full border-2 border-gray-400 px-16 py-4 text-lg tracking-widest transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {isSubmitting ? "SENDING..." : "SEND"}
                </button>
              </div>
            </form>
          </div>

          {/* Full photo on phones; original cropped frame on desktop */}
          <div className="relative order-1 h-[420px] overflow-hidden bg-[#f6f4ee] sm:h-[500px] lg:order-2 lg:h-[700px] lg:rounded-lg">
            <Image
              key={galleryImages[currentImageIndex]}
              src={galleryImages[currentImageIndex]}
              alt={`MakeupByCarey gallery photo ${currentImageIndex + 1}`}
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-contain lg:object-cover"
              priority={currentImageIndex === 0}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
