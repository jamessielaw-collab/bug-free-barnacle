"use client";

import Image from "next/image";
import FadeIn from "./animations/fade-in";
import StaggerContainer from "./animations/stagger-container";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Hoying",
    role: "Bride",
    image: "/images/testimonial-hoying.jpg",
    quote:
      "I loved working with Carey! It was easy to communicate with her and she gave amazing suggestions on what would look best on me. She really understands what looks good on Asian features, and on the big day she made me feel so beautiful and confident – highly recommended!",
  },
  {
    name: "Nicky",
    role: "Bridesmaid",
    image: "/images/testimonial-nicky.jpg",
    quote:
      "Carey did my makeup and it was such a lovely experience! She knew exactly what kind of makeup would bring out my features, and she listened to my preferences too, which I really appreciated. The result was STUNNING! I felt so pretty all day long ~ (couldn't pass a mirror without doing a double take 🤭)",
  },
  {
    name: "Scarlet",
    role: "Bride",
    image: "/images/testimonial-scarlet.jpg",
    quote:
      "Carey did my bridal makeup, and I couldn't be happier with how it turned out! She really took the time to understand exactly what I wanted, and the makeup lasted perfectly all day. She also shared some great makeup tips that I'll definitely use in the future. I highly recommend her for anyone looking for makeup services!",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="pt-20 pb-40" // ✅ use padding-bottom to extend cream color
      style={{ backgroundColor: "#f6f4ee" }} // ✅ keeps the cream visible even in the padded area
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <h2
              className="text-4xl lg:text-5xl"
              style={{
                fontFamily: "var(--font-playfair)",
                color: "#c5bbaf",
              }}
            >
              Testimonials
            </h2>
          </FadeIn>
        </div>

        {/* Testimonials Grid */}
        <StaggerContainer staggerDelay={0.15}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-8 shadow-sm transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                }}
                transition={{ duration: 0.3 }}
              >
                <p
                  className="text-gray-700 mb-6 leading-relaxed"
                  style={{ fontFamily: "Libre Baskerville, serif" }}
                >
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p
                      className="font-medium text-gray-900"
                      style={{ fontFamily: "MADE Mirage, sans-serif" }}
                    >
                      — {testimonial.name}
                    </p>
                    <p
                      className="text-sm text-gray-500"
                      style={{ fontFamily: "MADE Mirage, sans-serif" }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
