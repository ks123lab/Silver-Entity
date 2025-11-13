"use client";

import Link from 'next/link';
import {  ArrowRight, Fence, Hammer } from 'lucide-react';
import ParallaxPage from '../../../components/Parallex';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import modules you want to use (e.g., Navigation and Autoplay)
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const AirFreightPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 ">
            
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
                    <Fence size={64} className="mx-auto text-[#cf081f] mb-4" />
                    <h1 className="text-5xl md:text-[43px] font-extrabold text-white mb-4">
                        Fencing Works
                    </h1>
                    <div className='text-gray-300 font-semibold flex gap-2 justify-center'>
                        <Link href="/" className="hover:text-white transition duration-300">Home</Link>
                        <span>/</span>
                        <Link href="/services/air-freight" className="hover:text-white transition duration-300">Services</Link>
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
                                className="w-full md:h-[520px] object-cover rounded-lg shadow-xl"
                            />
                        </div>

                        <div className="order-1 md:order-2">
                            <h2 className="text-4xl md:text-[43px] font-extrabold text-gray-800 mb-6 leading-tight">
                              Strong, Secure,<span className="text-[#cf081f]">and Reliable </span>Fencing Works
                            </h2>
              <p className="text-[16px] text-gray-700 mb-6 leading-relaxed">
When security, safety, and boundary protection matter, our Fencing Works services deliver durable and dependable solutions for every project. From industrial sites to residential and commercial properties, we ensure precision and strength in every installation. Our commitment to quality craftsmanship ensures every fence we build enhances both protection and visual appeal.
</p>

<p className="text-[16px] text-gray-700 leading-relaxed">
We specialize in designing and installing a wide range of fencing systems, including chain-link, barbed wire, and custom-built enclosures. With skilled professionals and high-quality materials, we provide reliable, cost-effective, and long-lasting fencing solutions that stand strong in all environments.  
Your protection is our priority — ensuring every fence we build offers both strength and peace of mind.
</p>



                         
                            <Link
                                href="/enquiry"
                                className="mt-8 inline-flex items-center bg-gray-800 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition hover:bg-black group"
                            >
                                Contact Us <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition duration-300" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

  <section className="relative w-full overflow-hidden bg-gray-100 py-16">
        <div className="container  mx-auto px-4 md:px-10 text-center mb-10">

        </div>

        {/* Swiper Slider Container */}
        <div className="container mx-auto px-4">
            <Swiper
                // Configuration Props
                modules={[Navigation, Autoplay]} // Enable modules like navigation and autoplay
                spaceBetween={16} // Space between slides in pixels
                slidesPerView={'auto'} // 'auto' makes it easy to show partial slides
                centeredSlides={true} // Centers the active slide
                loop={true} // Enables infinite loop

                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    // Show 1 slide per view on mobile
                    640: {
                        slidesPerView: 1,
                    },
                    // Show 3 slides per view on larger screens
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                className="mySwiper" // Custom class for potential custom styles
            >
                {/* 4 Original Images */}
                <SwiperSlide>
                    <img src="/images/buildings.webp" alt="Truck 1" className="w-full h-auto object-cover rounded-lg shadow-md" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/buildings.webp" alt="Truck 2" className="w-full h-auto object-cover rounded-lg shadow-md" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/buildings.webp" alt="Truck 3" className="w-full h-auto object-cover rounded-lg shadow-md" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/buildings.webp" alt="Truck 4" className="w-full h-auto object-cover rounded-lg shadow-md" />
                </SwiperSlide>
                     <SwiperSlide>
                    <img src="/images/buildings.webp" alt="Truck 4" className="w-full h-auto object-cover rounded-lg shadow-md" />
                </SwiperSlide>
                     <SwiperSlide>
                    <img src="/images/buildings.webp" alt="Truck 4" className="w-full h-auto object-cover rounded-lg shadow-md" />
                </SwiperSlide>
                     <SwiperSlide>
                    <img src="/images/buildings.webp" alt="Truck 4" className="w-full h-auto object-cover rounded-lg shadow-md" />
                </SwiperSlide>
                
                {/* Swiper automatically handles duplication for the 'loop' feature, 
                    so you don't need the duplicate images manually anymore. */}
            </Swiper>
        </div>
    </section>
<ParallaxPage/>



    {/* Why Choose Section (Equipment Rentals) */}
<section className="container mx-auto px-4 md:px-10 py-16">
    <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-[#cf081f] pb-2">
        Why Choose Us for Equipment Rentals?
    </h2>
    
    <div className="grid md:grid-cols-3 gap-8 text-gray-600">
        
        {/* Block 1: Quality Equipment */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#cf081f] mb-3">Reliable & Well-Maintained Fleet</h3>
            <p>All our equipment is regularly inspected and maintained to ensure maximum performance, safety, and reliability on every project site.</p>
        </div>
        
        {/* Block 2: Flexible Solutions */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#cf081f] mb-3">Flexible Rental Options</h3>
            <p>We offer short-term and long-term rental solutions that fit your project timeline and budget, giving you complete operational flexibility.</p>
        </div>
        
        {/* Block 3: Expert Support */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#cf081f] mb-3">Technical Support & Guidance</h3>
            <p>Our experienced technicians provide on-site assistance, ensuring proper equipment usage, safety, and efficiency for smooth operations.</p>
        </div>
        
    </div>
</section>

        </div>
    );
};

export default AirFreightPage;
