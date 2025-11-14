import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';


interface FAQ {
  id: number; // Example property
  question: string;
  answer: string;
}

interface FAQItemProps {
  faq: FAQ; // This specifies that 'faq' must be of type FAQ
  isOpen: boolean;
  toggleFAQ: () => void; // This specifies that 'toggleFAQ' is a function that takes no arguments and returns nothing
}
// Sample data for the FAQs related to Silver Entity Engineering Works
const faqData = [
  {
    id: 1,
    question: "1. What is Silver Entity's typical project lifecycle?",
    answer: "Our lifecycle starts with detailed consultation and conceptual design, moving through precise engineering, procurement, construction, and final handover, followed by dedicated post-completion support.",
  },
  {
    id: 2,
    question: "2. How does Silver Entity approach sustainability in its projects?",
    answer: "We prioritize green building standards, resource-efficient materials, and low-carbon design methodologies to ensure our infrastructure minimizes environmental impact and achieves long-term efficiency.",
  },
  {
    id: 3,
    question: "3. What is the process for client collaboration during a build?",
    answer: "Client collaboration is continuous. We use regular milestone meetings, cloud-based project management tools, and BIM (Building Information Modeling) software to provide transparent, real-time updates and input opportunities.",
  },
  {
    id: 4,
    question: "4. What specialized engineering works does the firm offer?",
    answer: "Our expertise spans civil and structural engineering, geotechnical analysis, industrial process optimization, and bespoke infrastructure solutions tailored for complex terrains or urban environments.",
  },
  {
    id: 5,
    question: "5. How are project timelines and budget controlled?",
    answer: "We employ rigorous risk management protocols and advanced scheduling software (like Primavera P6) to control both timeline and budget, providing clients with phased, guaranteed delivery schedules and cost transparency.",
  },
];

// Individual FAQ Item Component
const FAQItem = ({ faq, isOpen, toggleFAQ }:FAQItemProps) => {
  const Icon = isOpen ? ChevronUp : ChevronDown;
  const iconColor = isOpen ? "text-white" : "text-gray-500";
  const iconBg = isOpen ? "bg-orange-600" : "bg-gray-100";

  return (
    <div className="md:w-[800px] w-auto border-b border-gray-200 py-6 px-0">
      <button 
        className="flex justify-between items-start w-auto md:w-[800px] text-left focus:outline-none"
        onClick={toggleFAQ}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <span className="text-lg font-semibold text-gray-800 pr-4">
          {faq.question}
        </span>
        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${iconBg}`}>
          <Icon className={`w-5 h-5 transition-transform duration-300 ${iconColor}`} />
        </div>
      </button>

      {/* Collapsible Answer */}
      <div
        id={`faq-answer-${faq.id}`}
        className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-600 pt-2 pr-12 text-base leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};


// Main FAQ Section Component
export default function FAQSection() {
  // State to track the currently open FAQ item's ID
  const [openId, setOpenId] = useState<number | null>(faqData[0].id); // First item is open by default (like in the image)

  const toggleFAQ = (id: number) => {
    // If the clicked item is already open, close it (set to null), otherwise open the clicked item
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section className="py-20 bg-white font-montserrat md:-mt-20">
      <div className=" max-w-[169vh] ml-40 px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Title and Intro (4/12 width) */}
          <div className="lg:col-span-4 w-[500px] lg:sticky  lg:top-10">
            <div className="inline-block  text-sm font-semibold  text-gray-600 rounded-full mb-2">
              <p className='text-4xl text-start md:text-[22px] text-black font-light  font-montserrat'data-aos="fade-up" data-aos-delay="100"  data-aos-duration="1000">Faq</p>
            </div>
            
            <h2 className="text-[43px] font-light leading-tight mb-6" data-aos="fade-up" data-aos-delay="200"  data-aos-duration="1000">
              <span className="text-orange-600 font-bold ">Frequently Asked  Questions</span> About Silver Entity Engineering
            </h2>
            
            <p className="text-gray-600 font-medium leading-relaxed text-sm"data-aos="fade-up" data-aos-delay="300"  data-aos-duration="1000">
              We believe in clear communication and transparent processes. To help you understand more about our approach, project management, and specialized services, we've answered some of the most common questions we receive from clients and partners below.
            </p>
          </div>
          
          {/* Right Column: Accordion List (8/12 width) */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-gray-200"data-aos="fade-up" data-aos-delay="400"  data-aos-duration="1000">
              {faqData.map((faq) => (
                <FAQItem 
                  key={faq.id} 
                  faq={faq} 
                  isOpen={openId === faq.id}
                  toggleFAQ={() => toggleFAQ(faq.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}