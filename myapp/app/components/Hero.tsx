// components/HeroSlider.jsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

// 1. Define the slides data (Unchanged)
const slides = [
  {
    id: 1,
    title: "Engineering Solutions that Drive Progress.",
    description: "Whether you're in need of a brand-new garage door or looking to upgrade your current one, we have the perfect solution tailored just for you.",
    bgImage: "url('/images/buildings.webp')",
    linkText: "Contact us",
    linkHref: "/products",
    linkTextSecondary: "Contact Us",
    linkHrefSecondary: "/contact",
  },
  {
    id: 2,
    title: "Meticulous Planning. Enduring Performance.",
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
    <section className="relative h-[70vh] md:rounded-[20px] md:mx-4 pt-[200px] mt-40 overflow-hidden">
      
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
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex ">
        
        {/* Inner Content Wrapper */}
        <div className="container   px-6 md:px-12 pb-16 text-left"> 
          
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-[50px] font-montserrat font-semibold mt-20 leading-none text-white w-[650px]">
                {currentSlide.title}
              </h1>

 






        

            </motion.div>
          </AnimatePresence>
          
          {/* Buttons Section (Using the green from the screenshot) */}
         
        </div>
      </div>
      
    
    </section>
  );
}