"use client";

import Link from 'next/link';
import Image from 'next/image'; // Import Image component for optimized images

// Using a custom icon component for the arrow button
const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 transform transition rotate-[-40deg] duration-300 group-hover:rotate-[0deg]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

// Define a type for your service/product categories
type Category = {
  altText: string;
  title: string;
  description: string;
  linkHref: string;
  iconSrc: string; // Added iconSrc for unique icons
};

// Data for the three categories - Using the Doors, Windows, Millwork data
const categories: Category[] = [
  {
    altText: "Engineering icon for precision design",
    title: "Precision  Design",
    description: "Our meticulous approach ensures every detail is perfect, from initial concept to final execution, delivering exact specifications.",
    linkHref: "/", // Updated link to be more specific
    iconSrc: "/images/sm.png", // Path to your precision icon
  },
  {
    altText: "Engineering icon for structural integrity",
    title: "Structural Integrity",
    description: "We build with unwavering strength and durability, employing robust engineering principles for structures that stand the test of time.",
    linkHref: "/", // Updated link
    iconSrc: "/images/network.png", // Path to your structural icon
  },
  {
    altText: "Engineering icon for innovative solutions",
    title: "Innovative Solutions",
    description: "Leveraging cutting-edge technology and creative thinking, we tackle complex challenges with smart, forward-thinking engineering solutions.",
    linkHref: "/", // Updated link
    iconSrc: "/images/partner.png", // Path to your innovative icon
  },
];


export default function VerticalCategoryList() {
  // The 'montserrat' font class is used throughout the original code
  const fontClass = "font-montserrat";

  return (
    <section className="relative py-20 bg-white -mt-20 text-gray-800 ">
      <div className="md:max-w-[155vh] md:ml-46  md:-mt-[80px] px-4 sm:px-6 lg:px-8">
        
        {/* Header Section (Based on 'Driven to Deliver' style) */}
        <div className="mb-12 lg:mb-16">
          {/* Small Tag */}
        <p className='text-4xl text-start md:text-[22px] text-black font-light mb-2 font-montserrat'>Why Choose Us</p>
          {/* Main Title */}
          <h2 className={`text-3xl md:text-[43px] font-light text-gray-900 leading-tight ${fontClass}`}>
            Our Engineering 
          </h2>
           <h2 className={`text-3xl md:text-[43px] font-bold text-[#ed6a1f] leading-none ${fontClass}`}>
            Expertise  And Innovation
          </h2>
        </div>

        {/* Vertical Category List */}
        <div className="space-y-0 divide-y divide-gray-200">
          {categories.map((category, index) => (
            // Category Item Container
            // The padding-y adds space between the divider lines
            <div 
              key={index} 
              className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
                
              {/* Column 1: Icon */}
              <div className="md:col-span-1 flex justify-center md:justify-start">
              
                  <Image
                    src={category.iconSrc}
                    alt={category.altText}
                    width={64} // Set appropriate width for your icons
                    height={64} // Set appropriate height for your icons
                    className=" object-contain" // object-contain to prevent cropping if icons aren't perfectly square
                  />
              </div>

              {/* Column 2: Title (aligned with the image's structure) */}
              <div className="md:col-span-3 text-center  md:text-left">
                <h3 className={`text-[24px] font-semibold  text-gray-900 ${fontClass}`}>
                  {category.title}
                </h3>
              </div>

              {/* Column 3: Description (larger central column) */}
              <div className="md:col-span-7 text-center md:text-left">
                <p className={`text-gray-600 leading-relaxed text-[16px] ${fontClass}`}>
                  {category.description}
                </p>
              </div>

              {/* Column 4: View More Link/Arrow Button */}
              <div className="md:col-span-1 flex justify-center md:justify-end">
                <Link 
                  href={category.linkHref} 
                  aria-label={`View more about ${category.title}`}
                  className="group w-12 h-12 flex items-center justify-center  border border-gray-300 rounded-full text-gray-black hover:text-white hover:bg-[#a3b18a] transition duration-300"
                >
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}