export default function PhilosophySection() {
  return (
    <section className="py-20 bg-charcoal text-white relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/elegant-bride-getting-ready-black-and-white-artist.jpg"
          alt="Philosophy Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-charcoal/70"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <blockquote className="font-script text-3xl lg:text-4xl leading-relaxed text-balance">
          "Ik geloof dat stijl niet bezeten kan worden, alleen ontdekt. Ik hou van het proces van het helpen van bruiden
          om de schoonheid te zien die ze al bezitten."
        </blockquote>
      </div>
    </section>
  )
}
