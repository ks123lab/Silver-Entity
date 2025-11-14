"use client";

// 1. Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// 2. Import Swiper core modules (optional but recommended for functionality like Autoplay)
import { Autoplay, Pagination } from 'swiper/modules';

// 3. Import Swiper styles (Crucial step! You must import these in your component or global CSS file)
import 'swiper/css';
import 'swiper/css/pagination';

import Image from 'next/image';

// --- Logo Data ---
const clientLogos = [
  { src: '/images/c1.jpg', alt: 'Saudi Electricity Company' },
  { src: '/images/c2.jpg', alt: 'HEP China Harbour' },
  { src: '/images/c3.jpg', alt: 'Placeholder Logo A' }, // Placeholder for the third logo
  { src: '/images/c4.jpg', alt: 'SEPCO Shandong Electric Power' },
  { src: '/images/c5.jpg', alt: 'Larsen & Toubro' },
  // Add more logos here to enable the sliding effect
  { src: '/images/c6.jpg', alt: 'Placeholder Logo B' },
  { src: '/images/c7.jpg', alt: 'Placeholder Logo C' },
  { src: '/images/c8.jpg', alt: 'Placeholder Logo C' },
  { src: '/images/c9.jpg', alt: 'Placeholder Logo C' },
  { src: '/images/c10.jpg', alt: 'Placeholder Logo C' },
  { src: '/images/c11.jpg', alt: 'Placeholder Logo C' },
  { src: '/images/c12.jpg', alt: 'Placeholder Logo C' },
];

export default function TrustedBrandsSwiper() {
  return (
    <section className=" bg-white">
      <div className="max-w-[176vh] md:ml-24 px-4 sm:px-6 lg:px-8 -mb-20">
        
        {/* Title */}
        <h2 className="text-4xl md:text-[43px] font-semibold text-gray-800 text-center mt-6">
          Trusted by Leading Brands
        </h2>

        {/* Swiper Slider Container */}
        <div className="py-8">
          <Swiper
            // Modules to use (Autoplay for automatic sliding)
            modules={[Autoplay, Pagination]}
            
            // Set how many slides are visible at a time
            slidesPerView={3} // Default for mobile
            
            // Configuration for Autoplay
            autoplay={{
              delay: 3500, // Wait 3.5 seconds before next slide
              disableOnInteraction: false, // Don't stop autoplay on user interaction
            }}
            
  

            // Responsive Breakpoints: Adjust slidesPerView based on screen width
            breakpoints={{
              640: { // sm screen
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: { // lg screen (matches the 5 logos in your image)
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            className="logoSwiper" // Optional class for custom styling if needed
          >
            {clientLogos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center p-4 h-32 border border-gray-200  shadow-sm hover:shadow-md transition duration-300">
                  {/*
                    Using Next/Image for optimized logos.
                    Set width/height to the max size of the logo container.
                    objectFit="contain" ensures the logo scales correctly inside the box.
                  */}
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={150}
                    height={80}
                    objectFit="contain"
                    className="max-h-full max-w-full  hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}