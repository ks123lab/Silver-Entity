"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SimpleBackgroundPage() {
  return (
    <div className="fixed relative h-[480px] w-">
      {/* Background Image */}
      <Image
        src="/images/buildings.webp" 
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={85}
      />

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered Title */}
      <div className="absolute inset-0 flex flex-col left-50 items-start justify-center  ml-10 space-x-4">
        <p className=" text-[22px] font-bold text-white md:ml-1 md:w-60 h-8  font-light  ">Provide the best</p>
        <h1 className="text-6xl md:text-[70px] border-b border-white w-[146vh] text-start py-6 font-bold text-white text-center " >
          Your Project, Our Priority<br />
        </h1> <br />
      <div className="w-[146vh] flex items-center justify-between ">
         <p className=" text-[16px] font-  text-white md:ml-1  h-8 md:mb-0">We aim to go beyond expectation consistently in delivery, quality, reliability and service.</p>
          <Link
                 href="/enquiry"
                 className="hidden lg:flex items-center font-semibold bg-[#ed6a1f] text-white px-8 py-4 rounded-[8px] hover:bg-orange-600 group transition"
               >
                 GET IN TOUCH <ArrowRight size={24} className="ml-2 rotate-[-40deg] group-hover:rotate-[0deg] transition duration-300" />
               </Link>
      </div>
         
        
      </div>
      
    </div>
  );
}
