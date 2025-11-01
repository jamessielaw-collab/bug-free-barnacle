"use client";

import { useState } from "react";
import FadeIn from "./animations/fade-in";
import { motion } from "framer-motion";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-stone-200 last:border-b-0">
      <motion.button
        onClick={onToggle}
        className="flex justify-between items-center w-full py-6 px-8 text-left"
        whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
        transition={{ duration: 0.2 }}
      >
        <span className="font-mirage text-lg text-charcoal pr-4">
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-charcoal transition-transform duration-200 flex-shrink-0 ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <div className="text-stone-600 leading-relaxed font-mirage px-8">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do you provide both makeup and hair styling?",
      answer:
        "Yes, I offer both professional bridal makeup and hair styling services. I specialize in creating cohesive, timeless looks that complement each other perfectly for your special day.",
    },
    {
      question: "Do you do a trial session before the wedding?",
      answer:
        "Absolutely! All bridal packages include a complimentary trial session, typically scheduled 1-3 months before your wedding day. This allows us to perfect your look and address any concerns.",
    },
    {
      question: "How far in advance should I book you?",
      answer:
        "I recommend booking at least 6-8 months in advance, especially for peak wedding season (May-September). This ensures you secure your preferred date and allows ample time for planning.",
    },
    {
      question: "Do you travel to my wedding venue?",
      answer:
        "Yes! I travel to your venue for the convenience and comfort of you and your bridal party. I'm based in the Netherlands and serve Rotterdam and The Hague regions, with travel available throughout Europe.",
    },
    {
      question: "Do you require a deposit to book?",
      answer:
        "Yes, a deposit is required to secure your wedding date. This ensures your booking is confirmed and holds your spot in my calendar. The remaining balance is due closer to your wedding date.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-30 px-6"
      style={{ backgroundColor: "#f6f4ee" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <h2
              className="font-playfair text-4xl lg:text-5xl mb-6"
              style={{ color: "#c5bbaf" }}
            >
              FAQs
            </h2>
          </FadeIn>
        </div>

        <div className="bg-white/40 rounded-lg shadow-sm">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
