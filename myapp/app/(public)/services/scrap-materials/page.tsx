"use client";

import Link from 'next/link';
import {  ArrowRight, Hammer, Recycle, X } from 'lucide-react';
import ParallaxPage from '../../../components/Parallex';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import modules you want to use (e.g., Navigation and Autoplay)
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';


const images = [
    { id: 1, src: "/images/buildings.webp", alt: "Electrical Work Image 1" },
    { id: 2, src: "/images/buildings.webp", alt: "Electrical Work Image 2" },
    { id: 3, src: "/images/buildings.webp", alt: "Electrical Work Image 3" },
    { id: 4, src: "/images/buildings.webp", alt: "Electrical Work Image 4" },
    { id: 5, src: "/images/buildings.webp", alt: "Electrical Work Image 5" },
];
const AirFreightPage = () => {

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
            <section className="relative py-20 md:py-32 mt-20 bg-gray-900  overflow-hidden">
                <div className="absolute inset-0 bg-black/30 z-0"></div>
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-30 z-0" 
                    style={{ backgroundImage: "url('/images/building1.webp')" }} 
                    role="img" 
                    aria-label="Image of cargo being loaded onto an airplane"
                />

                <div className="relative z-10 container mx-auto px-4 md:px-10 text-center">
                    <Recycle size={64} className="mx-auto text-[#cf081f] mb-4" />
                    <h1 className="text-5xl md:text-[43px] font-extrabold text-white mb-4">
                        Scrap Materials
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
                                className="w-full md:h-[468px] object-cover rounded-lg shadow-xl"
                            />
                        </div>

                        <div className="order-1 md:order-2">
          <h2 className="text-4xl md:text-[43px] font-extrabold text-gray-800 mb-6 leading-tight">
  Sustainable, Efficient, <span className="text-[#cf081f]">and Reliable </span>Scrap Material Trading
</h2>



      <p className="text-[16px] text-gray-700 mb-6 leading-relaxed">
When sustainability and resource optimization matter, our Scrap Material Trading services provide trusted and eco-friendly solutions for collecting, processing, and supplying recyclable materials. We handle a wide range of ferrous and non-ferrous scrap, ensuring transparency and fair value in every deal.
</p>

<p className="text-[16px] text-gray-700 leading-relaxed">
Our team ensures efficient handling, segregation, and transportation of materials while maintaining compliance with environmental and safety standards. Whether for industrial partners or recycling facilities, we deliver reliable supply chains that support both profitability and environmental responsibility.  
Turning waste into value — responsibly and efficiently.
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
                        modules={[Navigation, Autoplay]}
                        spaceBetween={16}
                        slidesPerView={'auto'}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            1024: {
                                slidesPerView: 3,
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
                                        className="w-full h-auto object-cover rounded-lg shadow-md transition-opacity duration-300 group-hover:opacity-80" 
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0  group-hover:opacity-100 transition duration-300 bg-black/20 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                        <div className="relative  max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                            {/* Close Button */}
                            <button 
                                onClick={closeModal} 
                                className="absolute top-0 right-0 text-white z-10 p-2  bg-[#ab6400] hover:bg-red-700 transition"
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
<ParallaxPage/>
{/* Why Choose Section (Scrap Material Trading) */}
<section className="container mx-auto px-4 md:px-10 py-16">
  <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-[#cf081f] pb-2">
    Why Choose Us for Scrap Material Trading?
  </h2>

  <div className="grid md:grid-cols-3 gap-8 text-gray-600">
    
    {/* Block 1: Fair Pricing */}
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-[#cf081f] mb-3">Transparent & Fair Pricing</h3>
      <p>We ensure honest and competitive pricing for all types of scrap materials, backed by accurate weighing and transparent transactions.</p>
    </div>

    {/* Block 2: Eco-Friendly Approach */}
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-[#cf081f] mb-3">Eco-Friendly Operations</h3>
      <p>Our recycling and disposal processes follow environmental best practices to reduce waste and promote sustainability across industries.</p>
    </div>

    {/* Block 3: Reliable Supply Chain */}
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-[#cf081f] mb-3">Reliable & Efficient Supply Chain</h3>
      <p>With an organized logistics network, we ensure prompt collection, processing, and delivery of scrap materials to our valued partners.</p>
    </div>

  </div>
</section>






        </div>
    );
};

export default AirFreightPage;
