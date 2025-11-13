"use client";

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactSectionGeometric() {
  return (
    // 💡 Section: Clean, light background
    <section className="py-24 bg-gray-100 text-gray-800 h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[14px] font-semibold uppercase text-gray-600 mb-2 font-manrope">
            — REACH OUT 
          </p>
          <h2 className="text-4xl md:text-5xl font-light   font-manrope">
            Let's Discuss Your <span className='text-4xl md:text-5xl font-semibold font-manrope'>Project</span>
          </h2>
        </div>

        {/* --- Main Overlapping Container --- */}
        <div className="relative h-auto pb-10">
          
          {/* 1. Left Block: Contact Information (Dark Accent) */}
          <div className="bg-[#cf081f] p-8 md:p-12 rounded-xl shadow-2xl relative z-10 lg:w-[40%] lg:absolute lg:top-0 lg:left-0">
              <h3 className="text-3xl font-bold font-serif text-white mb-8">
                Ready to Start?
              </h3>
              <p className="text-gray-100 font-manrope mb-8">
                Use the form, or reach out directly—we're here to answer all your questions about installation and products.
              </p>

              {/* Contact Details */}
              <ContactDetailGeo 
                icon={Phone} 
                title="Call Us Directly" 
                detail="+1 (555) 123-4567" 
                link="tel:+15551234567"
              />
              <ContactDetailGeo 
                icon={Mail} 
                title="Email Support" 
                detail="info@yourcompany.com" 
                link="mailto:info@yourcompany.com"
              />
              <ContactDetailGeo 
                icon={MapPin} 
                title="Office Location" 
                detail="1234 Design Blvd, City, State" 
                link="#"
              />
          </div>

          {/* 2. Right Block: Form (White/Light Accent) */}
          <div className="bg-gray-100 p-8 md:p-12 rounded-xl shadow-2xl mt-12 lg:mt-0 lg:w-[68%] lg:absolute lg:top-12 lg:right-0 relative z-20">
              <h3 className="text-2xl font-bold mb-8 font-manrope text-gray-900">
                Project Enquiry Form
              </h3>
              
              <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Name & Email */}
                      <input type="text" placeholder="Your Name" required className={inputClassesGeo} />
                      <input type="email" placeholder="Your Email" required className={inputClassesGeo} />

                      {/* Phone & Subject */}
                      <input type="tel" placeholder="Phone Number" className={inputClassesGeo} />
                      <input type="text" placeholder="Subject" required className={inputClassesGeo} />
                  </div>

                  {/* Message */}
                  <div>
                      <textarea placeholder="Tell Us About Your Project" rows={5} required className={`${inputClassesGeo} resize-none`} />
                  </div>

                  {/* Submit Button */}
                  <button
                      type="submit"
                      className="flex items-center justify-center space-x-2 bg-[#a3b18a] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#8d9a74] transition duration-300 shadow-lg"
                  >
                      <Send className="w-5 h-5" />
                      <span>Submit </span>
                  </button>
              </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Helper Components ---

// Input field common styling for this design
const inputClassesGeo = "w-full bg-white text-gray-900 border border-gray-300 rounded-lg px-4 py-3 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition placeholder-gray-500";


const ContactDetailGeo = ({ icon: Icon, title, detail, link }: 
  { icon: React.ElementType, title: string, detail: string, link: string }) => (
    <div className="flex items-start space-x-4 mb-6">
      <div className="flex-shrink-0 p-3 bg-white rounded-full mt-1">
        <Icon className="w-5 h-5 text-gray-900" />
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white mb-0.5">{title}</h4>
        <Link href={link} className="text-gray-300 hover:text-[#a3b18a] transition duration-200">
          {detail}
        </Link>
      </div>
    </div>
);