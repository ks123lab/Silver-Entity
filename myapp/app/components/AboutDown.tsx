"use client";


import Image from 'next/image';
import Link from 'next/link'; // Assuming 'View More' links to other pages


// Define a type for your service/product categories
type Category = {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  linkHref: string;
};

// Data for the three categories
const categories: Category[] = [
  {
    imageSrc: "/images/buildings.webp", // Placeholder image path
    altText: "Premium wooden doors for a modern home",
    title: "Doors",
    description: "Discover a wide range of popular doors available, from timeless classics to modern designs, ensuring security and elegance.",
    linkHref: "/doors", // Link to your doors page
  },
  {
    imageSrc: "/images/buildings.webp", // Placeholder image path
    altText: "Large sliding glass windows overlooking the ocean",
    title: "Windows",
    description: "Upgrade your space with energy-efficient windows by leading brands, offering superior insulation and beautiful views.",
    linkHref: "/windows", // Link to your windows page
  },
  {
    imageSrc: "/images/buildings.webp", // Placeholder image path
    altText: "Interior living room with detailed wall paneling",
    title: "Millwork",
    description: "Enhance your interiors with custom trim and mouldings that add a touch of elegance and style to any room.",
    linkHref: "/millwork", // Link to your millwork page
  },
];

export default function CategoryHighlightSection() {
 
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Title and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 items-start">
          {/* Left: Heading */}
          <div className="text-center lg:text-left  border-r-1 ">
            <p className="text-[14px] font-semibold uppercase text-gray-600 mb-2 font-manrope">
              — ABOUT US
            </p>
            <h2 className="text-4xl md:text-4xl  text-gray-900 font-manrope leading-tight">
              Discover Premium Doors, 
            </h2>
             <h2 className="text-4xl md:text-4xl font-bold text-gray-900 font-manrope leading-tight">
           Windows, and Millwork
            </h2>
          </div>

          {/* Right: Descriptive Paragraph */}
          <div className="text-center lg:text-left pt-2">
            <p className="text-gray-700 leading-relaxed text-[16px] max-w-xl lg:ml-auto font-manrope">
              Explore our top-quality selection designed for every style and budget. Featuring
              leading brands like Therma-Tru, Jeld-Wen, and Marvin Windows, our products promise
              exceptional craftsmanship and lasting appeal.
            </p>
          </div>
        </div>

        {/* Bottom Section: 3-Column Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              
              {/* Image */}
             <div 
  className="relative w-full h-[500px] mb-6 
             rounded-bl-[40px] rounded-tr-[40px] rounded-lg 
             overflow-hidden 
             shadow-lg 
             
             /* Cleaned up Transition Logic */
             transition duration-500 
             
             /* Hover Effects */
             hover:shadow-xl 
             hover:scale-[1.02] 
             "
>
    <Image
      src={category.imageSrc}
      alt={category.altText}
      layout="fill"
      objectFit="cover"
      className="rounded-lg transition duration-500" /* Added transition to Image for smoother object-fit change */
    />
</div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 font-manrope">
                {category.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4 max-w-sm font-manrope">
                {category.description}
              </p>

              {/* View More Link */}
              <Link href={category.linkHref} className="text-[#a3b18a] font-semibold text-sm uppercase hover:underline transition-colors duration-200 font-manrope">
                VIEW MORE →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}