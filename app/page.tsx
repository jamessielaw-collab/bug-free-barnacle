import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import AnimatedBanner from "@/components/animated-banner"
import BrandStatement from "@/components/brand-statement"
import ServicesSection from "@/components/services-section"
import FAQSection from "@/components/faq-section"
import TestimonialsSection from "@/components/testimonials-section"
import CelebrateSection from "@/components/celebrate-section"
import SocialMediaSection from "@/components/social-media-section"
import MinimalistFooter from "@/components/minimalist-footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AnimatedBanner />
      <AboutSection />
      <BrandStatement />
      <ServicesSection />
      <FAQSection />
      <TestimonialsSection />
      <CelebrateSection />
      <SocialMediaSection />
      <MinimalistFooter />
    </main>
  )
}