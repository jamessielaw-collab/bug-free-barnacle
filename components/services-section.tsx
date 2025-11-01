"use client";

import { useEffect, useState } from "react";
import FadeIn from "./animations/fade-in";
import ScaleIn from "./animations/scale-in";

type PhotoModalProps = {
  src: string;
  alt: string;
  children: React.ReactNode;
  maxVw?: number;
  maxVh?: number;
};

function PhotoModal({
  src,
  alt,
  children,
  maxVw = 92,
  maxVh = 92,
}: PhotoModalProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="block w-full text-left"
      >
        {children}
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[99999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative"
            style={{ width: `${maxVw}vw`, height: `${maxVh}vh` }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-white/90 text-stone-800 rounded-full p-2 shadow hover:bg-white"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 6l12 12M18 6l-12 12" />
              </svg>
            </button>

            <img
              src={src}
              alt={alt}
              className="block w-full h-full object-contain select-none"
              draggable={false}
              decoding="async"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

function Dropdown({ title, text }: { title: string; text: string }) {
  return (
    <details className="group py-3 px-8">
      <summary className="flex items-center justify-between cursor-pointer text-stone-700 leading-6 list-none">
        <span className="font-medium">{title}</span>
        <svg
          className="h-4 w-4 transition-transform duration-200 group-open:rotate-180"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.17l3.71-2.94a.75.75 0 111.06 1.06l-4.24 3.36a.75.75 0 01-.94 0L5.21 8.29a.75.75 0 01.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </summary>
      <div className="mt-2 text-sm text-stone-600">{text}</div>
    </details>
  );
}

/* 3:4 frame + retina-friendly srcset (1×/2×). Layout blijft gelijk. */
function ServiceImage({
  src1x,
  src2x,
  alt,
  bg,
}: {
  src1x: string;
  src2x: string;
  alt: string;
  bg: string;
}) {
  return (
    <div
      className={`relative aspect-[3/4] overflow-hidden ${bg} w-full max-w-[420px] mx-auto`}
    >
      <picture>
        <img
          src={src1x}
          srcSet={`${src1x} 1x, ${src2x} 2x`}
          sizes="(min-width:1280px) 394px, (min-width:1024px) 33vw, 90vw"
          alt={alt}
          className="w-full h-full object-cover select-none"
          decoding="async"
          loading="lazy"
          draggable={false}
        />
      </picture>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-8"
      style={{ backgroundColor: "#f6f4ee" }}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <h2
              className="font-playfair text-4xl lg:text-5xl mb-6"
              style={{ color: "#c5bbaf" }}
            >
              Our Services
            </h2>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <ScaleIn delay={0.1}>
            <div className="flex flex-col space-y-6">
              <PhotoModal
                src="/images/bridal-makeup-service.jpg"
                alt="Bridal Makeup"
                maxVw={92}
                maxVh={92}
              >
                <ServiceImage
                  src1x="/images/bridal-makeup-service.jpg"
                  src2x="/images/bridal-makeup-service.jpg"
                  alt="Bridal Makeup"
                  bg="bg-sage/10"
                />
              </PhotoModal>

              <div className="min-h-[72px] flex items-center justify-center px-2">
                <h3 className="font-serif text-2xl text-black text-center leading-snug">
                  Bridal Hair &amp; Makeup
                </h3>
              </div>

              <div className="rounded-sm bg-white/40 divide-y divide-stone-300/50">
                <Dropdown
                  title="More Info"
                  text="Final pricing may vary depending on your preferences and the number of touch-ups required on your special day.

                Travel expenses are additional and will be calculated based on your location."
                />
                <Dropdown
                  title="Pricing"
                  text="Wedding Hair & Makeup services start from €395."
                />
              </div>
            </div>
          </ScaleIn>

          <ScaleIn delay={0.2}>
            <div className="flex flex-col space-y-6">
              <PhotoModal
                src="/images/bridesmaids.jpg"
                alt="Bridesmaids"
                maxVw={92}
                maxVh={92}
              >
                <ServiceImage
                  src1x="/images/bridesmaids.jpg"
                  src2x="/images/bridesmaids.jpg"
                  alt="Bridesmaids"
                  bg="bg-coral/10"
                />
              </PhotoModal>

              <div className="min-h-[72px] flex items-center justify-center px-2">
                <h3 className="font-serif text-2xl text-black text-center leading-snug">
                  Bridesmaids Hair &amp; Makeup
                </h3>
              </div>

              <div className="rounded-sm bg-white/40 divide-y divide-stone-300/50">
                <Dropdown
                  title="More Info"
                  text="Hair and makeup for bridesmaids or family members can only be booked if the group consists of no more than 5 people. Travel expenses are additional and will be calculated based on your location."
                />
                <Dropdown
                  title="Pricing"
                  text="From €75 per person only for the make up."
                />
              </div>
            </div>
          </ScaleIn>

          <ScaleIn delay={0.3}>
            <div className="flex flex-col space-y-6">
              <PhotoModal
                src="/images/pre-wedding.jpg"
                alt="Pre-wedding"
                maxVw={92}
                maxVh={92}
              >
                <ServiceImage
                  src1x="/images/pre-wedding.jpg"
                  src2x="/images/pre-wedding.jpg"
                  alt="Pre-wedding"
                  bg="bg-sage-light/20"
                />
              </PhotoModal>

              <div className="min-h-[72px] flex items-center justify-center px-2">
                <h3 className="font-serif text-2xl text-black text-center leading-snug">
                  Pre-wedding Special Occasion Shoot Hair &amp; Makeup
                </h3>
              </div>

              <div className="rounded-sm bg-white/40 divide-y divide-stone-300/50">
                <Dropdown
                  title="More Info"
                  text="Photo-ready styling for shoots and events."
                />
                <Dropdown
                  title="Pricing"
                  text="Starting at €220 per session."
                />
              </div>
            </div>
          </ScaleIn>
        </div>

        {/* Bottom centered note */}
        <div className="mt-16">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <h2
              className="font-playfair text-2xl lg:text-3xl leading-snug text-balance"
              style={{ color: "#c5bbaf" }}
            >
              Didn’t find the service you’re looking for? Get in touch and we’ll
              be happy to create a custom package just for you.
            </h2>
          </div>
        </div>
      </div>{" "}
      {/* ← deze was vergeten */}
    </section>
  );
}
