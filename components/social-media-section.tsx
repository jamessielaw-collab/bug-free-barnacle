import Image from "next/image";

export default function SocialMediaSection() {
  return (
    <section
      id="social"
      className="py-20 px-4"
      style={{ backgroundColor: "#f6f4ee" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="font-playfair text-4xl lg:text-5xl mb-12"
            style={{ color: "#c5bbaf" }}
          >
            Follow us on social:
          </h2>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              src: "/images/carey-new-about.jpg",
              alt: "Bridal Makeup",
              position: "center top 5", // 👈 shows more of the head
            },
            {
              src: "/images/social-image-2.jpg",
              alt: "Bridesmaids",
              position: "center top 30%",
            },
            {
              src: "/images/social-image-3.jpg",
              alt: "Makeup Artist at Work",
              position: "center top 25%",
            },
            {
              src: "/images/social-image-4.jpg",
              alt: "Pre-wedding",
              position: "center top 20%",
            },
          ].map((image, index) => (
            <div
              key={index}
              className="relative h-64 overflow-hidden rounded-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
                style={{ objectPosition: image.position }} // 👈 key part
              />
            </div>
          ))}
        </div>

        {/* Instagram Button */}
        <div className="text-center">
          <a
            href="https://www.instagram.com/careyyman/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white px-8 py-3 font-medium hover:opacity-90 transition-colors uppercase tracking-wide rounded-full"
            style={{ backgroundColor: "#c5bbaf" }}
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
