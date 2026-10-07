"use client";

import Image from "next/image"
import FadeIn from "./animations/fade-in"
import { motion } from "framer-motion"

export default function CelebrateSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/celebrate-love-story.png"
          alt="Professional makeup application"
          fill
          className="object-cover"
          style={{ objectPosition: "center 20%" }}
          quality={95}
          priority={true}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="space-y-6">
          <FadeIn direction="up" duration={0.8}>
            <h2
              className="text-3xl lg:text-4xl xl:text-5xl leading-relaxed text-white"
              style={{
                fontFamily: "MADE Mirage, serif",
                fontWeight: "400",
                letterSpacing: "0.08em",
                textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
                fontStyle: "normal",
                textTransform: "uppercase",
              }}
            >
              LET&apos;S CELEBRATE YOUR UNFORGETTABLE LOVE STORY TOGETHER
            </h2>
          </FadeIn>

          <FadeIn delay={0.3} direction="up">
            <div className="mt-12">
              <motion.a
                href="/inquire"
                className="inline-block rounded-full px-10 py-4 font-medium uppercase tracking-wide text-gray-900 transition-all"
                style={{ backgroundColor: "#ded1c0" }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#cbbba7",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                INQUIRE
              </motion.a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
