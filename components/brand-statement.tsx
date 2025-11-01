"use client";

import FadeIn from "./animations/fade-in";

export default function BrandStatement() {
  return (
    <section className="py-8 px-4" style={{ backgroundColor: '#e7c3ce' }}>
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn direction="up" duration={0.8}>
          <p className="font-playfair text-2xl md:text-3xl lg:text-4xl text-white leading-snug tracking-normal">
            TIMELESS BRIDAL BEAUTY • HAIRSTYLING
            <br />
            SPECIALIZED IN ASIAN-INSPIRED MAKEUP
            <br />
            CREATED FOR BRIDES WITH AN EYE FOR ELEGANCE
          </p>
        </FadeIn>
      </div>
    </section>
  )
}