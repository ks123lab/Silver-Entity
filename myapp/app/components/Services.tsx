"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// 💡 SWIPER IMPORTS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
// Import Swiper styles (must be imported globally or here)
import 'swiper/css';
import 'swiper/css/pagination'; 
import 'swiper/css/autoplay'; 


// Define a type for your service category
type ServiceCategory = {
  imageSrc: string;
  title: string;

  linkHref: string;
};

// Data for the four material services (kept 4 items)
const materialsServices: ServiceCategory[] = [
  {
    imageSrc: "/images/buildings.webp",
    title: "Structural Materials",
    linkHref: "/services/structural",
  },
  {
    imageSrc: "/images/buildings.webp",
    title: "Interior Finishes & Millwork",

    linkHref: "/services/interiors",
  },
  {
    imageSrc: "/images/buildings.webp",
    title: "Exterior Cladding & Roofing",

    linkHref: "/services/exteriors",
  },
  {
    imageSrc: "/images/buildings.webp",
    title: "Insulation & Drywall",

    linkHref: "/services/insulation",
  },
    {
    imageSrc: "/images/buildings.webp",
    title: "Insulation & Drywall",

    linkHref: "/services/insulation",
  },
];

export default function MaterialsServiceShowcase() {

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
       
          <h2 className="text-4xl text-start md:text-[43px] font-extrabold mb-2 font-manrope" data-aos="fade-up"  data-aos-duration="1000">
            Premium Materials,
          </h2>
            <h2 className="text-4xl text-start md:text-[43px] font-light font-manrope" data-aos="fade-up" data-aos-delay="200"  data-aos-duration="1000">
            Unmatched Quality.
          </h2>
        </div>

        {/* --- SWIPER CONTAINER --- */}
        <Swiper

          modules={[Autoplay, Pagination]}
          spaceBetween={32} // Gap between slides (Tailwind 'gap-8' is 32px)
          loop={true} // Essential for continuous auto-play loop
          centeredSlides={false}
        
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 32 },
          }}

          // 💡 Autoplay Settings
          autoplay={{
            delay: 4000, // 4 seconds
            disableOnInteraction: false, // Continue autoplay even after user interacts
          }}
          
       
          
          className="pb-10" // Add padding to accommodate pagination dots below
        >
          {materialsServices.map((service, index) => (
            <SwiperSlide key={index}>
              {/* Note: SwiperSlide replaces the flex-shrink-0 and w-[90vw] classes */}
              <motion.div className="flex flex-col items-center text-center">
                <Link href={service.linkHref} className="w-full">
                  {/* --- Image and Hover Effect Container (Framer Motion is still needed here) --- */}
                  <motion.div
                    className="relative w-full h-[550px] rounded-xl overflow-hidden shadow-2xl group"
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                  >
                    {/* Background Image */}
                    <Image
                      src={service.imageSrc}
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                      quality={80}
                      className="transition duration-500 group-hover:scale-105"
                    />

                    {/* Dark Overlay (Fades in on hover) */}
                    <motion.div
                      variants={{
                        rest: { opacity: 0.5  },
                        hover: { opacity: 0.5 },
                      }}
                      className="absolute inset-0  z-10 transition duration-500"
                    />

                    {/* Service Title (Fades in from the bottom on hover) */}
                    <motion.div
                      className="absolute inset-x-0 bottom-0 p-8 z-20"
                      variants={{
                        rest: { y: 50, opacity: 0 },
                        hover: { y: 0, opacity: 1 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-4xl font-semibold text-white font- leading-tight">
                        {service.title}
                      </h3>
                    </motion.div>
                  </motion.div>
                </Link>

             
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>


      </div>
    </section>
  );
}