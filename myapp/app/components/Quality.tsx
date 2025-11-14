import { CheckCircle } from 'lucide-react';
import React from 'react';
import Link from "next/link";

const ArrowRightIcon = () => (
  <svg
 xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 transform transition duration-300 group-hover:translate-x-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const Process = () => {
  return (
    <div className="w-full min-h-[840px] md:min-h-[730px] h-[500px] md:h-[700px] bg-[#ed6a1f] md:-mt-10 relative overflow-hidden">

      {/* Image Section - Hidden on mobile, shown on md+ */}
      <div className="w-full relative hidden  lg:block">
        <div className="absolute flex gap-8 top-36 lg:top-10 md:ml-[400px] -translate-x-1/2 max-w-7xl w-[500px] h-[500px] px-4 sm:px-6 lg:px-8 z-10">
          <img
            className="md:rounded-tl-[50px] md:rounded-br-[50px]"
            src="/images/b2.jpg"
            alt=""
          />
          <img
            className="md:rounded-tr-[50px] md:rounded-bl-[50px]"
            src="/images/b2.jpg"
            alt=""
          />
        </div>
      </div>

      {/* White Background */}
      <div className="w-full h-[360px] bg-white absolute bottom-0 left-0 z-0"></div>

 {/* TEXT SECTION - Responsive flow on mobile, fixed absolute position on md+ */}
 <div
 className="
 // Mobile Flow and Centering
 relative z-[1] px-4 pt-10 pb-10 
 
 // Desktop Absolute Positioning (Original Design Preserved)
 md:absolute 
 md:top-36
 md:-mt-24
 md:px-0
 md:w-[560px]
 md:max-w-none
 md:right-[28vh] 
 md:mx-0 
 "
>
 <p className='text-4xl text-start md:text-[20px] text-white font-light mb-2 font-montserrat'>Silver Entity Engineering Solutions</p>

 <h2 className="text-[32px] md:text-[43px] font-montserrat font-light text-white">
Building Your Dreams
 </h2>
 <h2 className="text-[32px] md:text-[43px] font-montserrat font-extrabold mb-4 text-white">
With Quality
</h2>

 {/* Paragraph text color is kept light (gray-200) for contrast on orange/dark background */}
 <p className="text-base mb-8 leading-relaxed text-gray-100 ">
 Quality is the cornerstone of Silver Entity Engineering Works' approach
to every project we undertake. From the materials we source to the
skilled workforce we deploy, every aspect of our work reflects a commitment to excellence.
</p>

 {/* List items are white on mobile for contrast, switch to desktop gray-800 if they overlap the white background */}
 <ul className="space-y-3  text-white md:text-gray-800">
 <li className="flex items-start gap-2">
<CheckCircle fill="#ed6a1f" className="text-white w-5 h-5 mt-1" />
<span>Understanding client requirements</span>
</li>

 <li className="flex items-start gap-2">
<CheckCircle fill="#ed6a1f" className="text-white w-5 h-5 mt-1" />
 <span>Strategic planning and execution</span>
 </li>

 <li className="flex items-start gap-2">
 <CheckCircle fill="#ed6a1f" className="text-white w-5 h-5 mt-1 mb-2" />
 <span>Quality checks and timely delivery</span>
 </li>
 </ul>

 <div className="w-32 px-4 py-4  rounded-[6px] text-sm font-bold font-montserrat bg-white md:bg-[#ed6a1f]">
 <button className='md:text-white text-gray-900'>Know more</button>
 </div>
</div>

 </div>
 );
};

export default Process;