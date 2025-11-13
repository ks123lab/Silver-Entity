// components/Navbar.jsx
"use client";

import {
  Phone,
  ArrowRight,
  Menu,
  X,
  Mail,
  MapPin,
  ChevronDown,
} from "lucide-react"
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// --- Service Links Data ---
const serviceLinks = [
 { name: "Electrical & Instrumentation Works", href: "/services/electrical-instrumentation" },
  { name: "Scaffolding", href: "/services/scaffolding" },
  { name: "Equipment Rentals", href: "/services/equipment-rentals" },
  { name: "Manpower Supply", href: "/services/manpower-supply" },
  { name: "Industrial Support ", href: "/services/industrial-support" },
  { name: "Fencing Work", href: "/services/fencing-work" },
  { name: "Civil Work", href: "/services/civil-work" },
  { name: "Scrap Materials", href: "/services/scrap-materials" },
  { name: "General Trading", href: "/services/general-trading" },
];
// --------------------------

// --- TopBar Component ---
const TopBar = () => {
  return (
    <div className="bg-gray-800 text-white hidden md:block">
      <div className="flex justify-between items-center px-4 md:px-10 py-2">
        
        {/* Contact Info (Left Side) */}
        <div className="flex space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <MapPin size={16} className="text-[#cf081f]" />
            <span>123 Cargo Way, Chennai, India</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={16} className="text-[#cf081f]" />
            <a href="mailto:info@silverentity.com" className="hover:text-orange-400 transition">
              info@silverentity.com
            </a>
          </div>
        </div>

        {/* Social Media (Right Side) */}
        <div className="flex space-x-3">
          <Link href="#" aria-label="Facebook" className="hover:text-[#cf081f] transition">
            <Facebook size={18} />
          </Link>
          <Link href="#" aria-label="Twitter" className="hover:text-[#cf081f] transition">
            <Twitter size={18} />
          </Link>
          <Link href="#" aria-label="Instagram" className="hover:text-[#cf081f] transition">
            <Instagram size={18} />
          </Link>
          <Link href="#" aria-label="LinkedIn" className="hover:text-[#cf081f] transition">
            <Linkedin size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};
// -----------------------------

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleMouseEnter = () => setIsServicesDropdownOpen(true);
  const handleMouseLeave = () => setIsServicesDropdownOpen(false);


  return (
    // CORRECTION: Ensure 'fixed' is present and Z-index is high.
    <header className=" fixed w-full  top-0 left-0 z-50 bg-white "> 
      
      {/* 1. New Top Bar */}
      <TopBar />
      
      {/* 2. Main Navbar */}
      <nav className="flex justify-between items-center px-4 md:px-10 py-3 bg-white">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          {/* Note: If the image in the screenshot is your new logo, you may need to update this */}
          <Image
            src="/images/logo.png"
            alt="Silver Entity"
            width={100}
            height={60}
          />
        </Link>

        {/* Desktop Menu Links */}
        <ul className="hidden lg:flex space-x-8 text-gray-800 font-medium">
          <li><Link href="/" className="hover:text-orange-600">Home</Link></li>
          <li><Link href="/aboutus" className="hover:text-orange-600">About</Link></li>
          
          {/* --- SERVICES DROPDOWN SECTION --- */}
          <li 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link 
              href="/Services" 
              className="flex items-center hover:text-orange-600 cursor-pointer"
            >
              Services <ChevronDown size={16} className="ml-1 transition-transform duration-200" />
            </Link>

            {/* Dropdown Content */}
            {isServicesDropdownOpen && (
              <div 
                className="absolute top-full left-0 mt-0 w-[400px] bg-white shadow-xl rounded-md overflow-hidden z-50 border border-gray-100"
              >
                {serviceLinks.map((service) => (
                    <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#cf081f] transition"
                        onClick={handleMouseLeave}
                    >
                        {service.name}
                    </Link>
                ))}
              </div>
            )}
          </li>
          {/* --- END DROPDOWN SECTION --- */}

          <li><Link href="/clients" className="hover:text-orange-600">Clients</Link></li>
          <li><Link href="/profile" className="hover:text-orange-600">Company Profile</Link></li>
          <li><Link href="/contact" className="hover:text-orange-600">Contact Us</Link></li>
        </ul>


   <div className="flex gap-10">
     <div className="hidden lg:flex items-center space-x-2 text-gray-700 hover:text-[#cf081f] transition">
        <div className="bg-gray-300 p-2 flex items-center justify-center rounded-full">
          <Phone size={18} className="text-[#cf081f]" />
        </div>
        <span className="font-semibold text-lg">
          +91-6362514956
        </span>
      </div>
       <Link
        href="/enquiry"
        className="hidden lg:flex items-center bg-[#cf081f] text-white px-8 py-4 rounded-full hover:bg-orange-600 group transition"
      >
        Enquire Us <ArrowRight size={24} className="ml-2 group-hover:rotate-[-40deg] transition duration-300" />
      </Link>
   </div>

      {/* HAMBURGER BUTTON */}
      <button
        onClick={toggleMenu}
        className="lg:hidden text-gray-800 focus:outline-none"
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>
        
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button at the top of the mobile menu */}
        <div className="flex justify-end p-4">
            <button onClick={toggleMenu} aria-label="Close Menu" className="text-gray-800">
                <X size={30} />
            </button>
        </div>

        {/* Mobile Links */}
        <ul className="flex flex-col p-6 space-y-4 text-gray-800 font-medium pt-4">
          <li><Link href="/" onClick={toggleMenu} className="block py-2 hover:text-orange-600 transition">Home</Link></li>
          <li><Link href="/about" onClick={toggleMenu} className="block py-2 hover:text-orange-600 transition">About</Link></li>
          
          {/* Mobile Services Links */}
          <li><Link href="/services" onClick={toggleMenu} className="block py-2 hover:text-orange-600 transition font-bold">Services</Link></li>
          {serviceLinks.map((service) => (
             <li key={service.name} className="ml-4"> 
                <Link 
                    href={service.href} 
                    onClick={toggleMenu} 
                    className="block py-1 text-sm text-gray-600 hover:text-[#cf081f] transition"
                >
                    - {service.name}
                </Link>
             </li>
          ))}

          <li><Link href="/clients" onClick={toggleMenu} className="block py-2 hover:text-orange-600 transition">Clients</Link></li>
          <li><Link href="/company-profile" onClick={toggleMenu} className="block py-2 hover:text-orange-600 transition">Company Profile</Link></li>
          <li><Link href="/contact" onClick={toggleMenu} className="block py-2 hover:text-orange-600 transition">Contact Us</Link></li>
          
          <div className="pt-4 border-t border-gray-200 mt-4 space-y-4">
            {/* Mobile Enquire Button */}
            <Link
              href="/enquiry"
              onClick={toggleMenu}
              className="flex items-center bg-[#cf081f] text-white px-4 py-3 rounded-full justify-center hover:bg-orange-600 group transition"
            >
              Enquire Us <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition duration-300" />
            </Link>

            {/* Mobile Phone Number */}
            <div className="flex items-center space-x-2 text-gray-700">
              <Phone size={18} className="text-[#cf081f]" />
              <span className="font-semibold text-base">
                +91-6362514956
              </span>
            </div>
          </div>
        </ul>
      </div>

       {/* Backdrop when menu is open */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default Navbar;