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
  "w-full rounded-none border-0 border-b border-stone-300 bg-transparent px-0 py-3 text-base text-stone-800 placeholder:text-stone-400 focus:border-stone-700 focus:outline-none focus:ring-0"

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
    <main className="min-h-screen bg-[#f8f6f3] text-stone-800">
      {toast && (
        <div
          role="status"
          className="fixed left-4 right-4 top-4 z-50 mx-auto max-w-md rounded-md bg-stone-800 px-5 py-3 text-center text-sm text-white shadow-lg sm:left-1/2 sm:right-auto sm:w-max sm:-translate-x-1/2"
        >
          {toast}
        </div>
      )}

      {/* Page heading */}
      <header className="px-5 pb-7 pt-8 text-center sm:pt-10 lg:pb-10">
        <Link
          href="/"
          className="inline-block font-playfair text-lg tracking-[0.12em] text-stone-700 transition-opacity hover:opacity-70 sm:text-3xl sm:tracking-widest lg:text-5xl"
          aria-label="MakeupByCarey, return to home"
        >
          MAKEUPBYCAREY
        </Link>
        <p className="mt-3 text-xs uppercase tracking-[0.25em] text-stone-500">
          Bridal beauty, thoughtfully created
        </p>
      </header>

      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-20">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Photo: first on phones, beside the form on desktop */}
          <div className="relative order-first h-64 overflow-hidden rounded-sm bg-stone-200 sm:h-80 lg:order-last lg:h-[700px]">
            <Image
              key={galleryImages[currentImageIndex]}
              src={galleryImages[currentImageIndex]}
              alt={`MakeupByCarey gallery photo ${currentImageIndex + 1}`}
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover"
              priority={currentImageIndex === 0}
            />
          </div>

          {/* Form */}
          <div className="rounded-sm border border-stone-200 bg-white px-5 py-8 shadow-sm sm:px-8 sm:py-10 lg:order-first lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-stone-500">
              Get in touch
            </p>

            <h1 className="mb-5 font-playfair text-4xl tracking-wide text-[#a99c8e] sm:text-5xl lg:text-7xl">
              INQUIRE
            </h1>

            <p className="max-w-lg text-base leading-relaxed text-stone-600 sm:text-lg">
              I&apos;d love to hear about your special day. Tell me what you
              have in mind using the form below.
            </p>

            <p className="mb-8 mt-4 max-w-lg text-sm leading-relaxed text-stone-600 sm:mb-10 sm:text-base">
              Prefer email? Write to{" "}
              <a
                href="mailto:info.makeupbycarey@gmail.com"
                className="break-all underline decoration-stone-400 underline-offset-4 hover:text-stone-900"
              >
                info.makeupbycarey@gmail.com
              </a>
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div>
                <label htmlFor="inquire-name" className="block text-xs uppercase tracking-widest text-stone-600">
                  Your names
                </label>
                <input
                  id="inquire-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your names"
                  required
                  className={fieldClassName}
                />
              </div>

              <div>
                <label htmlFor="inquire-email" className="block text-xs uppercase tracking-widest text-stone-600">
                  Email address
                </label>
                <input
                  id="inquire-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Your email address"
                  required
                  className={fieldClassName}
                />
              </div>

              <div>
                <label htmlFor="inquire-phone" className="block text-xs uppercase tracking-widest text-stone-600">
                  Phone number
                </label>
                <input
                  id="inquire-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Your phone number"
                  className={fieldClassName}
                />
              </div>

              <div>
                <label htmlFor="inquire-event" className="block text-xs uppercase tracking-widest text-stone-600">
                  Event date and location
                </label>
                <input
                  id="inquire-event"
                  name="eventDetails"
                  type="text"
                  placeholder="Date and location"
                  className={fieldClassName}
                />
              </div>

              <div>
                <label htmlFor="inquire-message" className="block text-xs uppercase tracking-widest text-stone-600">
                  Your message
                </label>
                <textarea
                  id="inquire-message"
                  name="message"
                  placeholder="Tell me about your plans..."
                  required
                  rows={5}
                  className={`${fieldClassName} resize-y`}
                />
              </div>

              <div className="pt-2 sm:pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-sm bg-[#ded1c0] px-10 py-4 text-sm font-medium tracking-[0.2em] text-stone-900 transition-colors hover:bg-[#cbbba7] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {isSubmitting ? "SENDING..." : "SEND"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
