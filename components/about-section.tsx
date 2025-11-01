"use client";

import FadeIn from "./animations/fade-in";
import ScaleIn from "./animations/scale-in";

export default function AboutSection() {
  return (
    <section id="about" className="bg-stone-100">
      <div className="grid lg:grid-cols-2 items-center">
        {/* Left Side - Text Content */}
        <div className="flex items-center justify-center p-6 lg:pl-28 lg:pr-12">
          <div className="max-w-xl space-y-6">
            <FadeIn direction="right">
              <h2 className="font-playfair text-4xl lg:text-5xl" style={{ color: '#c5bbaf' }}>
                Hi it's me Carey
              </h2>
            </FadeIn>

            <FadeIn delay={0.2} direction="right">
              <hr className="w-24 border-t-2 border-stone-400" />
            </FadeIn>

            <div className="space-y-4 text-stone-600 leading-relaxed">
              <FadeIn delay={0.3} direction="right">
                <p className="text-base lg:text-lg">
                  As a bridal stylist, I help brides look and feel radiant on their wedding day with a
                  <strong> natural, elegant look</strong> that lasts all day. No heavy layers or outdated hairstyles.
                  Only <strong>timeless, effortless</strong> beauty that enhances your features and feels truly like you.
                </p>
              </FadeIn>

              <FadeIn delay={0.4} direction="right">
                <p className="text-base lg:text-lg">
                  I'm based in the Netherlands and I work in the regions of <strong>Rotterdam, The Hague</strong>.
                  Planning a destinational wedding or pre-wedding shoot? No problem, I'm happy to travel in Europe or
                  in Hongkong. I speak Dutch, English and Chinese fluently, and create a calm, welcoming atmosphere
                  for everyone involved.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <ScaleIn delay={0.2}>
          <div className="flex items-center justify-center pr-[150px]">
            <img
              src="/images/carey-new-about.jpg"
              alt="Carey applying makeup to a bride"
              className="block h-[520px] lg:h-[720px] w-auto object-cover shadow-lg"
              style={{ objectPosition: 'center 20%' }}
            />
          </div>
        </ScaleIn>
      </div>
    </section>
  )
}
