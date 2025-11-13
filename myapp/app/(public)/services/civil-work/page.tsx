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
                        Civil Works 
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
                              Civil Work <span className="text-[#cf081f]">Solutions for</span> a Stronger Tomorrow.
                            </h2>
                            <p className="text-[16px] text-gray-700 mb-6 leading-relaxed ">
When infrastructure quality is critical, our civil works services provide the expertise and reliability your project demands. From foundational excavation to complex structural construction, we leverage a skilled team and modern equipment to ensure your projects are completed safely, on time, and to the highest standards.    </p>
                       <p className="text-[16px] text-gray-700 leading-relaxed">
We understand the complexities of industrial and commercial construction and are committed to delivering tailored solutions that optimize durability and compliance. Whether it's site preparation, specialized concrete work, or complete facility construction, trust us to provide efficient, cost-effective, and compliant civil works solutions every time.                            </p>
                         
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



          {/* Why Choose Section (Civil Works) */}
<section className="container mx-auto px-4 md:px-10 py-16">
    <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-[#cf081f] pb-2">
        Why Choose Us for Civil Works?
    </h2>
    
    <div className="grid md:grid-cols-3 gap-8 text-gray-600">
        
        {/* Expertise Block 1: Quality and Compliance */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#cf081f] mb-3">Certified Quality & Safety</h3>
            <p>Our projects adhere to stringent international quality and safety standards, ensuring durable and compliant construction every time.</p>
        </div>
        
        {/* Expertise Block 2: Comprehensive Capabilities */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#cf081f] mb-3">Integrated Project Management</h3>
            <p>We manage all phases of civil construction, from initial planning and design to execution and final handover, offering turnkey solutions.</p>
        </div>
        
        {/* Expertise Block 3: Skilled Team & Equipment */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#cf081f] mb-3">Experienced Manpower & Fleet</h3>
            <p>A dedicated team of experienced civil engineers and a modern fleet of equipment guarantee efficiency and timely project completion.</p>
        </div>
        
    </div>
</section>
        </div>
    );
};

export default AirFreightPage;
