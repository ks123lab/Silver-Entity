"use client";

import Link from 'next/link';
import {  ArrowRight, Hammer } from 'lucide-react';
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
                    <Hammer size={64} className="mx-auto text-[#cf081f] mb-4" />
                    <h1 className="text-5xl md:text-[43px] font-extrabold text-white mb-4">
                        Scaffoldings
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
  Safe, Strong, <span className="text-[#cf081f]">and Reliable </span>Scaffolding Solutions
</h2>


        <p className="text-[16px] text-gray-700 mb-6 leading-relaxed">
When stability, safety, and efficiency are essential, our Scaffolding Services provide strong and reliable structures for every type of construction or maintenance project. We design and supply scaffolding systems that ensure safe access and working platforms for workers at any height.
</p>

<p className="text-[16px] text-gray-700 leading-relaxed">
With a focus on quality materials, precision installation, and compliance with international safety standards, our scaffolding team guarantees structural integrity and ease of use. Whether for short-term maintenance or large-scale construction, we deliver durable and efficient scaffolding that keeps your worksite safe and productive.  
Safety and strength are the foundation of every structure we build.
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

{/* Why Choose Section (Scaffolding Services) */}
<section className="container mx-auto px-4 md:px-10 py-16">
  <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-[#cf081f] pb-2">
    Why Choose Us for Scaffolding Services?
  </h2>

  <div className="grid md:grid-cols-3 gap-8 text-gray-600">
    
    {/* Block 1: Quality & Safety */}
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-[#cf081f] mb-3">Quality & Safety First</h3>
      <p>All our scaffolding materials are tested and maintained to meet international safety standards, ensuring complete security for your workforce.</p>
    </div>

    {/* Block 2: Expert Installation */}
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-[#cf081f] mb-3">Expert Installation & Dismantling</h3>
      <p>Our skilled technicians handle scaffolding setup and removal with precision and efficiency, minimizing downtime on your project.</p>
    </div>

    {/* Block 3: Flexible Solutions */}
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-[#cf081f] mb-3">Custom & Flexible Solutions</h3>
      <p>We offer customized scaffolding systems tailored to your project’s size, height, and structure — ensuring the perfect fit every time.</p>
    </div>

  </div>
</section>





        </div>
    );
};

export default AirFreightPage;
