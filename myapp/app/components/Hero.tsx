// components/HeroSlider.jsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

// 1. Define the slides data (Unchanged)
const slides = [
  {
    id: 1,
    title: "Elevate Your Home With Our Doors & Windows!",
    description: "Whether you're in need of a brand-new garage door or looking to upgrade your current one, we have the perfect solution tailored just for you.",
    bgImage: "url('/images/buildings.webp')",
    linkText: "Explore Products",
    linkHref: "/products",
    linkTextSecondary: "Contact Us",
    linkHrefSecondary: "/contact",
  },
  {
    id: 2,
    title: "Seamless Installation. Lasting Quality.",
    description: "Our certified professionals ensure a perfect fit and long-term performance, giving you peace of mind with every installation.",
    bgImage: "url('/images/building1.webp')",
    linkText: "Get a Free Quote",
    linkHref: "/quote",
    linkTextSecondary: "See Our Work",
    linkHrefSecondary: "/gallery",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance the slider every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [slides.length]);
  
  const currentSlide = slides[currentIndex];

  return (
    // FINAL CORRECTION: Using h-[85vh] for better visual height and pt-[130px] for generous navbar offset.
    <section className="relative h-[70vh] md:rounded-[50px] md:mx-4 pt-[200px] mt-40 overflow-hidden">
      
      {/* Background Image Container */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide.id}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: currentSlide.bgImage }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        />
      </AnimatePresence>
      
      {/* Overlay (Black with 60% opacity for text contrast) */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-end">
        
        {/* Inner Content Wrapper */}
        <div className="container mx-auto px-6 md:px-12 pb-16 text-left max-w-6xl"> 
          
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-manrope font-extrabold mb-4 leading-snug text-white max-w-4xl">
                {currentSlide.title}
              </h1>

              <p className="max-w-2xl text-lg md:text-xl mb-8 text-gray-200">
                {currentSlide.description}
              </p>

            </motion.div>
          </AnimatePresence>
          
          {/* Buttons Section (Using the green from the screenshot) */}
          <div className="flex space-x-4 mt-2"> 
            <Link
              href={currentSlide.linkHref}
              className="inline-block bg-[#a3b18a] hover:bg-[#8d9a74] text-white font-semibold px-10 py-4 rounded-full shadow-lg transition transform hover:scale-[1.03] duration-300"
            >
              {currentSlide.linkText}
            </Link>

            {/* Secondary Button for Contact Us */}
            {currentSlide.linkTextSecondary && (
              <Link
                href={currentSlide.linkHrefSecondary}
                className="inline-block border-2 border-white hover:border-[#a3b18a] text-white hover:text-[#a3b18a] hover:bg-white font-semibold px-10 py-4 rounded-full shadow-lg transition transform hover:scale-[1.03] duration-300"
              >
                {currentSlide.linkTextSecondary}
              </Link>
            )}
          </div>
        </div>
      </div>
      
      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-[#a3b18a] w-6" : "bg-gray-400 hover:bg-gray-100"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}