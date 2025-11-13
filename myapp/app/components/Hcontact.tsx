"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send } from 'lucide-react';


// Input field common styling for this design (Moved up for clarity)
const inputClassesGeo = "w-full bg-white text-gray-900 border border-gray-300 rounded-lg px-4 py-3 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition placeholder-gray-500";


// --- Helper Component: Contact Detail ---
interface ContactDetailProps {
    icon: React.ElementType; 
    title: string; 
    detail: string; 
    link: string;
}

const ContactDetailGeo: React.FC<ContactDetailProps> = ({ icon: Icon, title, detail, link }) => (
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
// ----------------------------------------


export default function ContactSectionGeometric() {

    // FIX 1: Updated state to include all form fields (phone and subject)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "", // New field
        subject: "", // New field
        message: "",
    });

    // FIX 2: Corrected typing for React event handlers
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // NOTE: Keep the alert usage in mind as per the constraints, but functionally this is correct.
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Basic data check (optional but good practice)
        if (!formData.name || !formData.email || !formData.message || !formData.subject) {
            console.error("Please fill in required fields.");
            // Replace alert with custom modal logic in a real app
            alert("Please fill in all required fields (Name, Email, Subject, Message).");
            return;
        }

        try {
            // Placeholder: Simulate API call
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            
            // Replace alert with custom modal logic
            alert(data.message || data.error || "Form submitted successfully!");

            // Reset form after successful submission
            if (res.ok) {
                setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
            }

        } catch (err) {
            // Replace alert with custom modal logic
            alert("Something went wrong! Check console for errors.");
            console.error(err);
        }
    };

    return (
        // Changed h-screen to min-h-screen for flexibility
        <section className="py-24 bg-gray-100 text-gray-800 min-h-screen"> 
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-[14px] font-semibold uppercase text-gray-600 mb-2 font-manrope">
                        — REACH OUT 
                    </p>
                    <h2 className="text-4xl md:text-5xl font-light font-manrope">
                        Let's Discuss Your <span className='text-4xl md:text-5xl font-semibold font-manrope'>Project</span>
                    </h2>
                </div>

                {/* --- Main Overlapping Container --- */}
                <div className="relative h-auto pb-10">
                    
                    {/* 1. Left Block: Contact Information (Dark Accent) */}
                    {/* Added shadow offset for depth */}
                    <div className="bg-[#cf081f] p-8 md:p-12 rounded-xl shadow-2xl relative z-10 lg:w-[40%] lg:absolute lg:top-0 lg:left-0 lg:shadow-[-20px_20px_40px_rgba(0,0,0,0.3)]">
                        <h3 className="text-3xl font-bold font-serif text-white mb-8">
                            Ready to Start?
                        </h3>
                        <p className="text-gray-100 font-manrope mb-8">
                            Use the form, or reach out directly—we're here to answer all your questions about installation and products.
                        </p>

                        {/* Contact Details (Using placeholders) */}
                        <ContactDetailGeo 
                            icon={Phone} 
                            title="Call Us Directly" 
                            detail="+91 63625 14956" 
                            link="tel:+916362514956"
                        />
                        <ContactDetailGeo 
                            icon={Mail} 
                            title="Email Support" 
                            detail="mufeez@komquest.com" 
                            link="mailto:mufeez@komquest.com"
                        />
                        <ContactDetailGeo 
                            icon={MapPin} 
                            title="Office Location" 
                            detail="Mangalore, Karnataka, India" 
                            link="#"
                        />
                    </div>

                    {/* 2. Right Block: Form (White/Light Accent) */}
                    {/* Added offset and adjusted z-index for overlapping effect */}
                    <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl mt-12 lg:mt-0 lg:w-[68%] lg:absolute lg:top-12 lg:right-0 relative z-20 lg:shadow-[20px_20px_40px_rgba(0,0,0,0.1)]">
                        <h3 className="text-2xl font-bold mb-8 font-manrope text-gray-900">
                            Project Enquiry Form
                        </h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                
                                {/* Name (FIX 3: Added name/value/onChange) */}
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name" 
                                    required 
                                    className={inputClassesGeo} 
                                />
                                {/* Email (FIX 3: Added name/value/onChange) */}
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email" 
                                    required 
                                    className={inputClassesGeo} 
                                />

                                {/* Phone (FIX 3: Added name/value/onChange) */}
                                <input 
                                    type="tel" 
                                    name="phone" 
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number (Optional)" 
                                    className={inputClassesGeo} 
                                />
                                {/* Subject (FIX 3: Added name/value/onChange) */}
                                <input 
                                    type="text" 
                                    name="subject" 
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject" 
                                    required 
                                    className={inputClassesGeo} 
                                />
                            </div>

                            {/* Message (FIX 3: Added name/value/onChange) */}
                            <div>
                                <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell Us About Your Project" 
                                    rows={5} 
                                    required 
                                    className={`${inputClassesGeo} resize-none`} 
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="flex items-center justify-center space-x-2 bg-[#cf081f] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#a3b18a] transition duration-300 shadow-lg"
                            >
                                <Send className="w-5 h-5" />
                                <span>Submit Enquiry</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}