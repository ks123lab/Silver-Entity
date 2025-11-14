"use client";

import Link from 'next/link';
import {  ArrowRight, X, Zap } from 'lucide-react'; // Removed unused Hammer, Lightbulb
import ParallaxPage from '../../../components/Parallex';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import modules for Swiper
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SetStateAction, useState } from 'react'; // Keep useState import
import Faq from '@/app/components/Faq';
import Hcontact from '@/app/components/Hcontact';

// Define the array of images (moved outside the component, safe)
const images = [
    { id: 1, src: "/images/buildings.webp", alt: "Electrical Work Image 1" },
    { id: 2, src: "/images/buildings.webp", alt: "Electrical Work Image 2" },
    { id: 3, src: "/images/buildings.webp", alt: "Electrical Work Image 3" },
    { id: 4, src: "/images/buildings.webp", alt: "Electrical Work Image 4" },
    { id: 5, src: "/images/buildings.webp", alt: "Electrical Work Image 5" },
];

const AirFreightPage = () => {
    // FIX: State initialization MUST be inside the function component body
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const openModal = (src: string) => {
        setSelectedImage(src);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="min-h-screen bg-gray-50 ">
            
            {/* Hero Section */}
            <section className="relative py-20 md:py-40 mt-20 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-black/30 z-0"></div>
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-30 z-0" 
                    style={{ backgroundImage: "url('/images/building1.webp')" }} 
                    role="img" 
                    aria-label="Image of cargo being loaded onto an airplane"
                />

                <div className="relative z-10 container mx-auto px-4 md:px-10 text-center">
                    {/* <Zap size={64} className="mx-auto text-[#ed6a1f] mb-4" /> */}
                    <h1 className="text-5xl md:text-[43px] font-extrabold text-white mb-4">
                        Electrical Instrumentation
                    </h1>
                    <div className='text-gray-300 font-semibold flex gap-2 justify-center'>
                        <Link href="/" className="hover:text-white transition duration-300">Home</Link>
                        <span>/</span>
                        {/* Assuming this page is for Electrical Instrumentation, the link should reflect that */}
                        <Link href="/services/electrical-instrumentation" className="hover:text-white text-[#ff6600] transition duration-300">Services</Link>
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
                                alt="Electrical panel wiring"
                                className="w-full md:h-[468px] object-cover rounded-lg shadow-xl"
                            />
                        </div>

                        <div className="order-1 md:order-2">
                            <h2 className="text-4xl md:text-[43px] font-extrabold text-gray-800 mb-6 leading-tight">
                              Connecting Power <span className="text-[#ed6a1f]">and Control for </span> a Brighter Future.
                            </h2>
                            <p className="text-[16px] text-gray-900 mb-6 leading-relaxed">
When precision and reliability matter, our Electrical & Instrumentation services deliver seamless integration and top-quality performance. From power distribution and control systems to automation and instrumentation setup, we combine technical expertise with modern tools to ensure safe, efficient, and dependable operations.
</p>

<p className="text-[16px] text-gray-900 leading-relaxed">
We specialize in industrial and commercial E&I solutions, offering complete design, installation, testing, and commissioning support. Whether it’s process instrumentation, panel fabrication, or electrical maintenance, we’re committed to providing cost-effective, compliant, and high-performance solutions that keep your systems running smoothly.
</p>

                            
                            <Link
                                href="/enquiry"
                                className="mt-8 inline-flex items-center  bg-[#ed6a1f] text-white font-semibold px-8 py-4 rounded-full shadow-lg transition hover:bg-[#ff6600] group"
                            >
                                Contact Us <ArrowRight size={20} className="ml-2 rotate-[-40deg] group-hover:rotate-[0deg] transition duration-300" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section with Clickable Slider */}
          <section className="relative w-full overflow-hidden bg-gray-100 py-8">
            <div className="container mx-auto px-4 md:px-10 text-center mb-10">
            
            </div>

            {/* Swiper Slider Container */}
            <div className="container mx-auto px-4">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={16}
                    
                    // --- CORRECTION 1: Set default slidesPerView for small screens ---
                    slidesPerView={1.2} // Show one slide and a peek of the next
                    centeredSlides={true}
                    
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2.2, // Show two slides + peek on medium screens
                            spaceBetween: 20,
                            centeredSlides: false, // Turn off centering for >1 slide
                        },
                        1024: {
                            // --- CORRECTION 2: Set slidesPerView to exactly 4 and turn off centering ---
                            slidesPerView: 4, 
                            spaceBetween: 24,
                            centeredSlides: false, 
                        },
                    }}
                    className="mySwiper"
                >
                    {images.map((image) => (
                        <SwiperSlide key={image.id}>
                            <div 
                                onClick={() => openModal(image.src)}
                                className="cursor-pointer relative group"
                            >
                                <img 
                                    src={image.src} 
                                    alt={image.alt} 
                                    className="w-full h-full aspect-[4/3] object-cover rounded-lg shadow-md transition-opacity duration-300 group-hover:opacity-80" 
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/20 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4 transition-opacity duration-300"
                    onClick={closeModal} 
                >
                    <div className="relative max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                        {/* Close Button */}
                        <button 
                            onClick={closeModal} 
                            className="absolute -top-10 right-0 text-white z-10 p-2 bg-[#ed6a1f] rounded-full hover:bg-red-700 transition" // Adjusted position/style
                            aria-label="Close image viewer"
                        >
                            <X size={24} />
                        </button>
                        
                        {/* Full-size Image */}
                        <img 
                            src={selectedImage} 
                            alt="Full-screen view" 
                            className="block w-auto h-auto max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            )}
        </section>

            {/* ParallaxPage component corrected */}
            <ParallaxPage/>
<br /><br />
            <Faq/>
<Hcontact/>
        </div>
    );
};

export default AirFreightPage;