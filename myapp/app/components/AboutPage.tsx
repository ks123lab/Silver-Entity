"use client";

import { Link } from "lucide-react";
import Head from "next/head";
import Image from "next/image"; // Ensure Image is imported

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us - Doors, Windows and Services</title>
        <meta
          name="description"
          content="Learn more about our expertise in doors, windows, and installation services."
        />
      </Head>

      {/* NEW TOP DESIGN: Split Layout with Asymmetrical Color Block */}
      <section className="bg-white text-gray-800 pt-20 pb-20 md:pb-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Content Block (Col span 7) */}
          <div className="lg:col-span-7">
            <p className="text-[14px] font-semibold text-[#cf081f] mb-2 uppercase font-manrope tracking-wide" data-aos="fade-up"  data-aos-duration="1000">
              — OUR FOUNDATION
            </p>
            <h1 className="text-4xl md:text-[43px] font-light text-gray-900 mb-0 font-manrope " data-aos="fade-up" data-aos-delay="300"  data-aos-duration="1300">
              Crafting Lasting Quality
            </h1>
               <h1 className="text-4xl md:text-[43px] font-semibold text-gray-900 mb-6 font-manrope leading-tight" data-aos="fade-up" data-aos-delay="400"  data-aos-duration="1500">
             For Your Home Since 2003
            </h1>
            <p className="text-gray-700 text-[16px] leading-relaxed mb-6 max-w-xl font-manrope" data-aos="fade-up" data-aos-delay="300"  data-aos-duration="1700">
              Founded on the principles of durability and design excellence, we have dedicated two decades to perfecting the installation and supply of premium doors and windows. Our work is a testament to our commitment to craftsmanship and client satisfaction.
            </p>
            
            {/* Mission / Value Points */}
            <div className="flex space-x-6 mb-8 text-gray-900 font-semibold" data-aos="fade-up" data-aos-delay="300"  data-aos-duration="1900">
                <p className="flex items-center space-x-2">
                    <span className="text-green-600 text-2xl font-extrabold">✓</span>
                    <span>Expert Installation</span>
                </p>
                <p className="flex items-center space-x-2">
                    <span className="text-green-600 text-2xl font-extrabold">✓</span>
                    <span>20-Year Guarantee</span>
                </p>
            </div>


            {/* CTA and Phone Contact */}
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-6" data-aos="fade-up" data-aos-delay="300"  data-aos-duration="2100">
              
                
                {/* Phone contact */}
                <div className="flex items-center space-x-3">
                    <div className="bg-[#cf081f] p-3 rounded-full flex items-center justify-center">
                        {/* Icon remains the same */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L9.5 10.635a11.002 11.002 0 005.862 5.862l1.355-1.355a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                    </div>
                    <div>
                        <p className="text-gray-600 text-sm font-sans">24/7 Support</p>
                        <p className="text-[#cf081f] text-xl font-bold font-sans">
                            +12 105 936 5500
                        </p>
                    </div>
                    
                </div>
                
            </div>
          </div>

     
          <div className="lg:col-span-5 relative h-[500px] w-full">
     
            <div className="absolute top-10 right-0 w-[90%] h-full bg-[#cf081f] rounded-l-3xl z-0 hidden lg:block" data-aos="fade-in" data-aos-delay="2" data-aos-duration="2500"></div>
  
            <div className="absolute top-0 left-0 lg:left-[-50px] w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl z-10">
              <Image
                src="/images/buildings.webp"
                alt="Professional service member working"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
} 