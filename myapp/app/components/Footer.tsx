import React from 'react';
import { Facebook, Twitter, Instagram, ArrowRight,Mail,Phone } from "lucide-react";

// Orange color matching the image
const primaryColor = "bg-[#ff6600]"; 

export default function Footer() {

  const navLinks = [
    { title: "About Us", href: "/about" },
    // { title: "Our Services", href: "/services" },
    { title: "Company Profile", href: "/profile" },
    { title: "Clients", href: "/clients" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <footer className={`font-montserrat ${primaryColor} text-white rounded-t-[50px]  mx-4 h-[430px] shadow-lg`}>
      <div className="max-w-[185vh] ml-40 px-6 sm:px-10 lg:px-14 pt-12  ">

        {/* --- 1. TOP SECTION: Socials --- */}
        <div className="flex justify-between mb-12 border-b border-white/20 pb-6">
        <div className='w-20 h-20'>
          <img src="/images/logo.png" alt="" className='filter invert' />
        </div>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-orange-600 transition-colors duration-300">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-orange-600 transition-colors duration-300">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-orange-600 transition-colors duration-300">
              <div className="text-sm font-bold">in</div>
            </a>
            <a href="#" aria-label="Pinterest" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-orange-600 transition-colors duration-300">
              <div className="text-sm font-bold">P</div>
            </a>
          </div>
        </div>

        {/* --- 2. MIDDLE SECTION: Subscription + Addresses --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16">
          
          {/* Subscription Form */}
          <div>
            <p className="mb-4 text-white text-base">
              Subscribe for the latest event updates
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Type your Email address"
                className="p-3 w-full bg-white text-gray-800 rounded-l-md focus:outline-none placeholder-gray-500"
              />
              <button className="p-3 w-[140px] px-0 flex items-center text-sm justify-center group bg-black text-gray-100 font-semibold rounded-r-md hover:bg-gray-900 transition-colors duration-300">
                Sign up <ArrowRight size={18} className="ml-2 rotate-[-40deg] group-hover:rotate-[0deg] transition duration-500" />
              </button>
            </div>
          </div>

          {/* New York Office */}
          <div>
            <h3 className="text-xl font-bold mb-3">Address</h3>
            <address className="text-lg not-italic space-y-1  text-white/80">
              <p>123 Madison Avenue, Suite 60D</p>
              <p>Al-Hussain, SA 10016, Saudhi Arabia</p>
            </address>
          </div>

          {/* London Office */}
          <div>
            <h3 className="text-xl font-bold mb-3">Contact Us</h3>
            <address className="text-sm flex gap-1 not-italic space-y-1 text-white/80">
                <Mail size={18} className="text-white" /><p>info@silverentity.com</p>
       
            </address>
             <address className="text-sm flex gap-1 not-italic space-y-1 text-white/80">
                <Phone size={18} className="text-white" /><p>+91-6362514956</p>
       
            </address>
          </div>
        </div>

        {/* --- 3. BOTTOM NAV LINKS --- */}
     <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm font-semibold px-4">
    {/* Navigation Links Group */}
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
        {navLinks.map((link, index) => (
            <a 
                key={index} 
                href={link.href} 
                className="group flex items-center hover:text-yellow-300 transition-colors duration-300"
            >
                {link.title}
                <ArrowRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
            </a>
        ))}
    </div>

    {/* Copyright Text on the Right */}
    <div className="text-sm font-light mt-4 md:mt-0">
        &copy; {new Date().getFullYear()} Copyright © 2025 CargoTrade Solutions Est. Designed By <a className='font-extrabold' href="https://www.komquest.in">Komquest Solutions</a>
    </div>
</div>

      </div>
    </footer>
  );
}
