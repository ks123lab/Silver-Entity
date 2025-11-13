"use client";

import React from "react";
import Image from "next/image";

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
      <div className="absolute inset-0 flex flex-col items-start justify-center  ml-10 space-x-4">
        <h1 className="text-6xl md:text-[48px] font-light text-white text-center " data-aos="fade-up"  data-aos-duration="1000">
          Engineering Solutions  <br />
        </h1>
          <h1 className="text-6xl md:text-[48px] font-bold text-white text-center"  data-aos="fade-up" data-aos-delay="300"  data-aos-duration="1000">
            Elavating Standards
        </h1>
        
      </div>
      
    </div>
  );
}
