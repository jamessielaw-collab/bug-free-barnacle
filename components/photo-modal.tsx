"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const images = [
  "/gallery-1.jpg",
  "/gallery-2.jpg",
  "/gallery-3.jpg",
  "/gallery-4.jpg",
  "/gallery-5.jpg",
  "/gallery-6.jpg",
  "/gallery-7.jpg",
  "/gallery-8.jpg",
  "/pre-wedding.jpg",
  "/social-image-4.jpg",
];

export default function PhotoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSrc, setActiveSrc] = useState<string | null>(null);

  return (
    <>
      {/* Thumbnails */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            onClick={() => {
              setActiveSrc(src);
              setIsOpen(true);
            }}
            className="cursor-pointer"
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={400}
              height={300}
              className="w-full h-auto object-cover rounded-lg transition-transform hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isOpen && activeSrc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => {
                setIsOpen(false);
                setActiveSrc(null);
              }}
              className="absolute -top-12 right-0 text-white hover:text-coral transition-colors z-10"
            >
              <X size={32} />
            </button>

            <div className="relative w-full h-full">
              <Image
                src={activeSrc}
                alt="Enlarged photo"
                width={1200}
                height={800}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
