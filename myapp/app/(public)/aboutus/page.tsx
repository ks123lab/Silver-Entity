"use client";

import Link from 'next/link';
import {  ArrowRight, Hammer } from 'lucide-react';
import ParallaxPage from '../../components/Parallex';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image'; 

// Import modules you want to use (e.g., Navigation and Autoplay)
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 transform transition rotate-[-40deg] duration-300 group-hover:rotate-[0deg]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

// Define a type for your service/product categories
type Category = {
  altText: string;
  title: string;
  description: string;
  linkHref: string;
  iconSrc: string; // Added iconSrc for unique icons
};

// Data for the three categories - Using the Doors, Windows, Millwork data
const categories: Category[] = [
  {
    altText: "Engineering icon for precision design",
    title: "Precision  Design",
    description: "Our meticulous approach ensures every detail is perfect, from initial concept to final execution, delivering exact specifications.",
    linkHref: "/", // Updated link to be more specific
    iconSrc: "/images/sm.png", // Path to your precision icon
  },
  {
    altText: "Engineering icon for structural integrity",
    title: "Structural Integrity",
    description: "We build with unwavering strength and durability, employing robust engineering principles for structures that stand the test of time.",
    linkHref: "/", // Updated link
    iconSrc: "/images/network.png", // Path to your structural icon
  },
  {
    altText: "Engineering icon for innovative solutions",
    title: "Innovative Solutions",
    description: "Leveraging cutting-edge technology and creative thinking, we tackle complex challenges with smart, forward-thinking engineering solutions.",
    linkHref: "/", // Updated link
    iconSrc: "/images/partner.png", // Path to your innovative icon
  },
];


import WhyChooseUs from '@/app/components/WhyChooseUs';
import Hcontact from '@/app/components/Hcontact';

const AirFreightPage = () => {
      const fontClass = "font-archivo";
    return (
        <div className="min-h-screen bg-gray-50  ">
            
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 mt-20 bg-gray-900  overflow-hidden">
                <div className="absolute inset-0 bg-black/30 z-0"></div>
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-30 z-0" 
                    style={{ backgroundImage: "url('/images/building1.webp')" }} 
                    role="img" 
                    aria-label="Image of cargo being loaded onto an airplane"
                />

                <div className="relative z-10 container mx-auto px-4 md:px-10 text-center">
                    <Hammer size={64} className="mx-auto text-[#ed6a1f] mb-4" />
                    <h1 className="text-5xl md:text-[43px] font-extrabold text-white mb-4">
                        About Us
                    </h1>
                    <div className='text-gray-300 font-semibold flex gap-2 justify-center'>
                        <Link href="/" className="hover:text-white transition duration-300">Home</Link>
                        <span>/</span>
                        <Link href="/aboutus" className="hover:text-white transition duration-300">AboutUs</Link>
                    </div>
                </div>
            </section>

            {/* Two-Column Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <img 
                                src="/images/buildings.webp"
                                alt="Cargo plane being loaded with containers"
                                className="w-full md:h-[530px] object-cover rounded-lg shadow-xl"
                            />
                        </div>

                        <div className="order-1 md:order-2">
                            <p className='text-4xl text-start md:text-[21px] text-black font-light mb-2 font-archivo'data-aos="fade-up" data-aos-delay="100"  data-aos-duration="1000">About Silver Entity Engineering Solutions</p>
<h2 className="text-4xl md:text-[43px] font-extrabold text-gray-800 mb-6 leading-tight"data-aos="fade-up" data-aos-delay="200"  data-aos-duration="1000">
    Delivering <span className="text-[#ed6a1f]">Engineering Excellence</span> 
</h2>
                           <p className="text-[16px] text-gray-900 mb-6 leading-relaxed " data-aos="fade-up" data-aos-delay="300"  data-aos-duration="1000">
Silver Entity Engineering Solutions is a dynamic leader in industrial support and specialized contracting. Our foundation is built on decades of combined experience, providing essential services across various heavy industries, including oil & gas, petrochemicals, and manufacturing. We are dedicated to ensuring the operational integrity and efficiency of our clients' most critical assets.
</p>
<p className="text-[16px] text-gray-900 leading-relaxed" data-aos="fade-up" data-aos-delay="400"  data-aos-duration="1000">
Our comprehensive offering spans electrical & instrumentation, specialized manpower, equipment rental, and full-scale civil and fencing works. By committing to uncompromising safety standards.
</p>
                         
                            <Link
                                href="/enquiry"
                                className="mt-8 inline-flex items-center  bg-[#ed6a1f] text-white font-semibold px-8 py-4 rounded-full shadow-lg transition hover:bg-[#ff6600] group"data-aos="fade-up" data-aos-delay="400"  data-aos-duration="1000"
                            >
                                Contact Us <ArrowRight size={20} className="ml-2 rotate-[-40deg] group-hover:rotate-[0deg] transition duration-300" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            

            <section className="relative py-20 bg-gray-50 -mt-20 text-gray-800 ">
      <div className="md:max-w-[155vh] md:ml-40  md:-mt-[0px] px-4 sm:px-6 lg:px-8">
        
        {/* Header Section (Based on 'Driven to Deliver' style) */}
        <div className="mb-12 lg:mb-16 md:ml-4">
          {/* Small Tag */}
        <p className='text-4xl text-start md:text-[22px] text-black font-light mb-2 font-archivo'data-aos="fade-up" data-aos-delay="100"  data-aos-duration="1000">Why Choose Us</p>
          {/* Main Title */}
          <h2 className={`text-5xl font-light text-gray-900 leading-tight ${fontClass}`}data-aos="fade-up" data-aos-delay="200"  data-aos-duration="1000">
            Our Engineering 
          </h2>
           <h2 className={`text-5xl font-extrabold text-[#ed6a1f] leading-none ${fontClass}`}data-aos="fade-up" data-aos-delay="300"  data-aos-duration="1000">
            Expertise  And Innovation
          </h2>
        </div>

        {/* Vertical Category List */}
        <div className="space-y-0 divide-y divide-gray-200">
          {categories.map((category, index) => (
            // Category Item Container
            // The padding-y adds space between the divider lines
            <div 
              key={index} 
              className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
                
              {/* Column 1: Icon */}
              <div className="md:col-span-1 flex justify-center md:justify-start" data-aos="fade-up" data-aos-delay="400"  data-aos-duration="1000">
              
                  <Image
                    src={category.iconSrc}
                    alt={category.altText}
                    width={64} // Set appropriate width for your icons
                    height={64} // Set appropriate height for your icons
                    className=" object-contain" // object-contain to prevent cropping if icons aren't perfectly square
                  />
              </div>

              {/* Column 2: Title (aligned with the image's structure) */}
              <div className="md:col-span-3 text-center md:text-left" data-aos="fade-up" data-aos-delay="500"  data-aos-duration="1000">
                <h3 className={`text-3xl font-semibold text-gray-900 ${fontClass}`}>
                  {category.title}
                </h3>
              </div>

              {/* Column 3: Description (larger central column) */}
              <div className="md:col-span-7 text-center md:text-left"data-aos="fade-up" data-aos-delay="600"  data-aos-duration="1000">
                <p className={`text-gray-600 leading-relaxed text-[16px] ${fontClass}`}>
                  {category.description}
                </p>
              </div>

              {/* Column 4: View More Link/Arrow Button */}
              <div className="md:col-span-1 flex justify-center md:justify-end"data-aos="fade-up" data-aos-delay="700"  data-aos-duration="1000">
                <Link 
                  href={category.linkHref} 
                  aria-label={`View more about ${category.title}`}
                  className="group w-12 h-12 flex items-center justify-center  border border-gray-300 rounded-full text-gray-black hover:text-white hover:bg-[#a3b18a] transition duration-300"
                >
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


<ParallaxPage/>



        <Hcontact/>
        </div>
    );
};

export default AirFreightPage;
