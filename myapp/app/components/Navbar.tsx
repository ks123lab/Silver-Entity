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
import { useState } from "react";

// --- Service Links Data ---
const serviceLinks = [
  { name: "Electrical & Instrumentation Works", href: "/services/electrical-instrumentation" },
  { name: "Scaffolding", href: "/services/scaffolding" },
  { name: "Equipment Rentals", href: "/services/equipment-rentals" },
  { name: "Manpower Supply", href: "/services/manpower-supply" },
  { name: "Industrial Support", href: "/services/industrial-support" },
  { name: "Fencing Work", href: "/services/fencing-work" },
  { name: "Civil Work", href: "/services/civil-work" },
  { name: "Scrap Materials", href: "/services/scrap-materials" },
  { name: "General Trading", href: "/services/general-trading" },
];
// --------------------------

// Interface for Link component props (for TypeScript safety)
interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  // Made onClick optional by adding "?"
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void; 
  "aria-label"?: string;
}

// This component uses a standard Anchor tag (<a>) 
// for wider compatibility since next/link is unavailable.
const Link: React.FC<LinkProps> = ({ href, children, className = '', onClick, ...props }) => (
    <a href={href} className={className} onClick={onClick} {...props}>
        {children}
    </a>
);

// --- TopBar Component ---
const TopBar = () => {
  return (
    <div className="bg-[#5c5c5c] text-white hidden md:block">
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
  
  // STATE: Control visibility of Services submenu in mobile
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const toggleMenu = () => {
    // If the menu is about to close, also close the mobile services dropdown
    if (isMenuOpen) {
      setIsMobileServicesOpen(false);
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMobileServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Prevent default link action (navigation) when using it as a toggle
    e.preventDefault(); 
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };
  
  const handleMouseEnter = () => setIsServicesDropdownOpen(true);
  const handleMouseLeave = () => setIsServicesDropdownOpen(false);


  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-white"> 
      
      {/* 1. Top Bar */}
      <TopBar />
      
      {/* 2. Main Navbar */}
      <nav className="flex justify-between items-center px-4 md:px-10 py-7 bg-white ">
        
        {/* Logo (Replaced Image (next/image) with a standard <img>) */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/images/logo.png"
            alt="Silver Entity Logo"
            width={100}
            height={60}
            className="h-[70px] w-[100px] object-contain"
          />
        </Link>

        {/* Desktop Menu Links */}
        <ul className="hidden lg:flex space-x-8 text-gray-800 font-semibold">
          <li><Link href="/" className="hover:text-orange-600">Home</Link></li>
          <li><Link href="/aboutus" className="hover:text-orange-600">About</Link></li>
          
          {/* --- SERVICES DROPDOWN SECTION (DESKTOP) --- */}
          <li 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link 
              href="/services" 
              className="flex items-center hover:text-orange-600 cursor-pointer group"
            >
              Services <ChevronDown size={16} className="ml-1 transition-transform group-hover:rotate-[180deg] duration-500" />
            </Link>

            {/* Dropdown Content */}
           <div 
              className={`absolute top-full left-0 mt-0 w-[400px] bg-white shadow-xl rounded-md overflow-hidden z-50 border border-gray-100 
                transition-all duration-300 ease-in-out transform origin-top
                ${isServicesDropdownOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-0 invisible'}
              `}
            >
                {serviceLinks.map((service) => (
                    <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-3 text-gray-900 hover:bg-gray-100 hover:text-[#cf081f] transition"
                        onClick={handleMouseLeave}
                    >
                        {service.name}
                    </Link>
                ))}
            </div>

          </li>
          {/* --- END DROPDOWN SECTION --- */}

          <li><Link href="/clients" className="hover:text-orange-600">Clients</Link></li>
          {/* <li><Link href="/company-profile" className="hover:text-orange-600">Company Profile</Link></li> */}
          <li><Link href="/contact" className="hover:text-orange-600">Contact Us</Link></li>
        </ul>


      <div className="flex gap-4">
        <div className="hidden lg:flex items-center text-white bg-black md:px-4 py-2 rounded-[8px] transition">
          <span className="font-semibold font-montserrat text-[16px]">
            +91 1234567890
          </span>
        </div>
          <Link
          href="/enquiry"
          className="hidden lg:flex items-center font-semibold bg-[#ed6a1f] text-white px-8 py-4 rounded-[8px] hover:bg-orange-600 group transition"
        >
          Quick Enquiry <ArrowRight size={24} className="ml-2 rotate-[-40deg] group-hover:rotate-[0deg] transition duration-300" />
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

      {/* 3. Mobile Menu Drawer (Improved) */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-[60] overflow-y-auto ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button at the top of the mobile menu */}
        <div className="flex justify-end p-4 border-b border-gray-100">
            <button onClick={toggleMenu} aria-label="Close Menu" className="text-gray-800">
                <X size={30} />
            </button>
        </div>

        {/* Mobile Links */}
        <ul className="flex flex-col p-6 space-y-2 text-gray-800 font-medium">
          <li><Link href="/" onClick={toggleMenu} className="block py-2 hover:text-orange-600 transition">Home</Link></li>
          <li><Link href="/aboutus" onClick={toggleMenu} className="block py-2 hover:text-orange-600 transition">About</Link></li>
          
          {/* --- MOBILE SERVICES ACCORDION (PROPER) --- */}
          <li className="py-2">
            <Link 
              href="/services" 
              onClick={toggleMobileServices} // Tap to toggle dropdown
              className="flex justify-between items-center hover:text-orange-600 transition font-bold"
            >
              Services 
              <ChevronDown 
                size={18} 
                className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180 text-orange-600' : 'rotate-0'}`} 
              />
            </Link>
            
            {/* Dropdown Content with smooth height transition */}
            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out ${isMobileServicesOpen ? 'max-h-[500px]' : 'max-h-0'}`}
            >
              <ul className="pl-4 pt-2 space-y-1 text-sm">
                {serviceLinks.map((service) => (
                    <li key={service.name}> 
                      <Link 
                          href={service.href} 
                          onClick={toggleMenu} // Closes the entire menu when service link is tapped
                          className="block py-1 text-gray-600 hover:text-[#cf081f] transition"
                      >
                          {service.name}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>
          </li>
          {/* --- END MOBILE ACCORDION --- */}

          <li><Link href="/clients" onClick={toggleMenu} className="block py-2 hover:text-orange-600 transition">Clients</Link></li>
          <li><Link href="/company-profile" onClick={toggleMenu} className="block py-2 hover:text-orange-600 transition">Company Profile</Link></li>
          <li><Link href="/contact" onClick={toggleMenu} className="block py-2 hover:text-orange-600 transition">Contact Us</Link></li>
          
          <div className="pt-4 border-t border-gray-200 mt-4 space-y-4">
            {/* Mobile Enquire Button */}
            <Link
              href="/enquiry"
              onClick={toggleMenu}
              className="flex items-center bg-[#ed6a1f] text-white px-4 py-3 rounded-full justify-center hover:bg-orange-600 group transition"
            >
              Quick Enquiry <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition duration-300" />
            </Link>

            {/* Mobile Phone Number */}
            <div className="flex items-center space-x-2 text-gray-900">
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
          className="lg:hidden fixed inset-0 bg-black opacity-50 z-[55]"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default Navbar;