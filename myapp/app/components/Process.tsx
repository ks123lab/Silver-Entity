"use client";

import { CalendarCheck, Truck, Wrench, Users } from 'lucide-react'; 
import React from 'react';

// 1. Define the type for a single process step (best practice in TypeScript)
type ProcessStep = {
  icon: React.ElementType;
  title: string;
  description: string;
};

// 2. The data array remains the same
const processSteps: ProcessStep[] = [
  {
    icon: CalendarCheck,
    title: "Consultation",
    description:
      "Schedule a visit for measurements and discuss your garage door preferences in detail.",
  },
  {
    icon: Truck,
    title: "Delivery",
    description:
      "Choose your door style and features you want, and we will prepare everything for installation.",
  },
  {
    icon: Wrench,
    title: "Installation",
    description:
      "Our professional team will install your new garage door efficiently and ensure it operates perfectly.",
  },
  {
    icon: Users,
    title: "Support",
    description:
      "Schedule a visit for maintenance and discuss your garage door preferences in detail.",
  },
];

export default function ProcessSectionHorizontalFlow() {
  return (
    // Outer section wrapper with the deep olive background
    <section className="py-24 bg-[#cf081f] text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtitle */}
         <p className="text-[14px] font-semibold uppercase text-white mb-2 font-manrope">
            — OUR PROCESS
          </p>
        
        {/* Main Title */}
        <h2 className="text-4xl md:text-[43px] font-extrabold text-white mb-0 font-manrope " data-aos="fade-up" data-aos-delay="300"  data-aos-duration="1200">
          Empowering You for <br className="hidden sm:inline" /> 
        </h2>
          <h2 className="text-4xl md:text-[43px] font-light text-white mb-16 -mt-10 font-manrope " data-aos="fade-up" data-aos-delay="400"  data-aos-duration="1200">
           <br className="hidden sm:inline" /> Success with Our Services
        </h2>

        {/* Horizontal Flow Container */}
        <div className="relative">
            {/* Horizontal Connector Line (Hidden on small screens) */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gray-500 opacity-50 z-0 mx-20" data-aos="fade-in" data-aos-delay="500"  data-aos-duration="1200"></div>

            {/* 4-Column Grid for Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center p-4">
                
                {/* Icon Circle (Step Number / Icon Container) */}
                <div className="relative mb-8"data-aos="fade-in" data-aos-delay="500"  data-aos-duration="1200" >
                    {/* Circle Background */}
                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center border-4 border-white shadow-xl" data-aos="fade-in" data-aos-delay="500"  data-aos-duration="1200">
                        {/* Icon */}
                        <step.icon className="w-8 h-8 text-[#544c38] stroke-[2]" /> 
                    </div>
                    {/* Step Number (Optional, but adds flavor) */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#a3b18a] text-white text-xs font-bold rounded-full flex items-center justify-center">
                        {index + 1}
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-100 mb-3 font-manrope"data-aos="fade-up" data-aos-delay="600"  data-aos-duration="1200">
                    {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-200 leading-relaxed max-w-xs font-manrope text-base" data-aos="fade-up" data-aos-delay="800"  data-aos-duration="1200">
                    {step.description}
                </p>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
}