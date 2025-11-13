import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="font-sans">
      
      {/* 1. TOP CTA SECTION with Image Background */}
      <div className="relative h-64 flex items-center justify-center bg-cover bg-center" 
          style={{ backgroundImage: "url('/images/building1.webp')" }}> 
        
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gray-900/30"></div>
        
        <div className="relative z-10 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Build Your Next Project?
          </h2>
          {/* Main CTA Button */}
          <Link
            href="/contact"
            className="inline-flex items-center bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-yellow-500 transition duration-300"
          >
            Start an Enquiry 
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>

      {/* 2. BOTTOM INFO GRID */}
      <div className="bg-gray-900 text-gray-300 py-12 justify-center">
        {/* Adjusted grid to 5 columns on large screens for space */}
        <div className="max-w-[158vh] md:ml-[400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10"> 

          {/* 1. Company & Socials (Col 1) */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <img className="w-28 h-28 filter invert -mt-2" src="/images/logo.png" alt="" />
            <p className="text-gray-400 text-sm mb-4">
              Providing reliable industrial support and contracting services with excellence since 2024.
            </p>
            <div className="flex gap-4">
              <Link href="#" aria-label="Facebook" className="hover:text-yellow-400 transition"><Facebook size={20} /></Link>
              <Link href="#" aria-label="Instagram" className="hover:text-yellow-400 transition"><Instagram size={20} /></Link>
              <Link href="#" aria-label="Twitter" className="hover:text-yellow-400 transition"><Twitter size={20} /></Link>
            </div>
          </div>

          {/* 2. Services List (New Col 2) */}
          <div className="col-span-1">
            <h3 className="text-[20px] font-semibold text-white mb-3">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/electrical-instrumentation" className="hover:text-yellow-400 transition">Electrical & Instrumentation Works</Link></li>
              <li><Link href="/services/scaffolding" className="hover:text-yellow-400 transition">Scaffolding</Link></li>
              <li><Link href="/services/equipment-rentals" className="hover:text-yellow-400 transition">Equipment Rentals</Link></li>
              <li><Link href="/services/manpower-supply" className="hover:text-yellow-400 transition">Manpower Supply</Link></li>
              <li><Link href="/services/industrial-support" className="hover:text-yellow-400 transition">Industrial Support</Link></li>
              <li><Link href="/services/fencing-work" className="hover:text-yellow-400 transition">Fencing Work</Link></li>
              <li><Link href="/services/civil-work" className="hover:text-yellow-400 transition">Civil Work</Link></li>
              <li><Link href="/services/scrap-materials" className="hover:text-yellow-400 transition">Scrap Materials</Link></li>
            </ul>
          </div>

          {/* 3. Quick Links (Reorganized Col 3) */}
          <div className="col-span-1">
            <h3 className="text-[20px] font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-yellow-400 transition">About Us</Link></li>
              <li><Link href="/clients" className="hover:text-yellow-400 transition">Clients</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400 transition">Contact Us</Link></li>
              <li><Link href="/profile" className="hover:text-yellow-400 transition">Company Profile</Link></li>
            </ul>
          </div>
          
          {/* 4. Contact Details (Col 4, took place of old Col 3) */}
          <div className="lg:col-span-2 col-span-2 md:col-span-1">
            <h3 className="text-[20px] font-semibold text-white mb-3">Reach Out</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0"/> 
                <span>Mangalore, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0"/> 
                <span>+91 63625 14956</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0"/> 
                <span>mufizmalar@gmail.com</span>
              </li>
            </ul>
          </div>
          
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-900 border-t border-gray-800 pt-6 pb-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Silver Entity. All rights reserved. Designed by <a className="text-white" href="https://www.komquest.in">Komquest Solutions</a>
      </div>
    </footer>
  );
}