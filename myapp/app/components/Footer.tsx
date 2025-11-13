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
      <div className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          {/* Company & Socials */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">MyBrand.</h2>
            <p className="text-gray-400 text-sm mb-4">
              Building materials supplied with excellence and reliability since 2024.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-yellow-400 transition"><Facebook size={20} /></Link>
              <Link href="#" className="hover:text-yellow-400 transition"><Instagram size={20} /></Link>
              <Link href="#" className="hover:text-yellow-400 transition"><Twitter size={20} /></Link>
            </div>
          </div>

          {/* Key Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Key Pages</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:text-yellow-400 transition">Services</Link></li>
              <li><Link href="/clients" className="hover:text-yellow-400 transition">Our Clients</Link></li>
              <li><Link href="/profile" className="hover:text-yellow-400 transition">Company Profile</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400 transition">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Reach Out</h3>
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