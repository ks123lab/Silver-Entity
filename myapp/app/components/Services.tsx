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
import { Download, Phone } from 'lucide-react';


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
    <section className="py-10 bg-white ">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-start ml-28 mb-16">
        
       <p className='text-4xl text-start md:text-[22px] text-black font-light mb-2 font-montserrat'>Our Services</p>
          <h2 className="text-4xl text-start md:text-[43px] text-black font-light mb-2 font-montserrat" data-aos="fade-up"  data-aos-duration="1000">
            Efficient and Reliable
          </h2>
            <h2 className="text-4xl text-start text-[#ed6a1f] md:text-[43px] font-bold font-montserrat" data-aos="fade-up" data-aos-delay="200"  data-aos-duration="1000">
            Global Solutions
          </h2>
        </div>

        {/* --- SWIPER CONTAINER --- */}
        <Swiper

          modules={[Autoplay, Pagination]}
          spaceBetween={22} // Gap between slides (Tailwind 'gap-8' is 32px)
          loop={true} // Essential for continuous auto-play loop
          centeredSlides={false}
        
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
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
                    className="relative w-full h-[400px]  overflow-hidden shadow-2xl group"
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
                      className="transition  duration-500 group-hover:scale-105"
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
            <h3 className="text-[33px] pt-4 border-t border-white font-semibold uppercase text-white font-montserrat leading-tight">
                        {service.title}
                      </h3>
                    </motion.div>
                  </motion.div>
                </Link>

             
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
    
<div className='w-full bg-white text-black font-semibold   grid grid-cols-1 md:grid-cols-4 '>
  
  {/* Grid Item 1 */}
  <div className="text-[18px] flex items-center justify-center p-4 border-r  gap-5 border-gray-500 text-center">
    Company Profile <Download size={20} className="text-black " />
  </div>
  
  {/* Grid Item 2 */}
  <div className="text-[18px] flex items-center justify-center p-4 border-r gap-5 border-gray-500 text-center">
    HSE Policy <Download size={20} className="text-black" />
  </div>
  
  {/* Grid Item 3 */}
 <div className="text-[18px] flex items-center justify-center p-4  gap-5  text-center">
    Get In Touch <Phone size={20} fill='black' className="text-black rotate-270" />
  </div>
  
  {/* Grid Item 4 */}
  <div className="text-[18px] p-4 border-l border-gray-500 text-center">
    Quality Service
  </div>
  
</div>

      </div>
        
    </section>
  );
}