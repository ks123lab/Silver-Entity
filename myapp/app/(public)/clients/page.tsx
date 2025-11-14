import { Hammer} from 'lucide-react';
import Link from 'next/link';
import React from 'react';


// --- TypeScript Interface for Client Data ---
interface Client {
  name: string;
  logoUrl: string; // URL to the client's logo
}

// --- Updated Client Data to match the image ---
const clients: Client[] = [
  { name: 'Sipchem', logoUrl: '/images/c1.jpg' },
  { name: 'Advanced', logoUrl: '/images/c2.jpg' },
  { name: 'NEOM', logoUrl: '/images/c3.jpg' },
  { name: 'TASNEE', logoUrl: '/images/c4.jpg' },
  { name: 'SAIPEM', logoUrl: '/images/c5.jpg' },
  { name: 'SINOHYDRO', logoUrl: '/images/c6.jpg' },
  { name: 'LARSEN & TOUBRO', logoUrl: '/images/c7.jpg' },
  { name: 'POWERCHINA', logoUrl: '/images/c8.jpg' },
  { name: 'SEPCO', logoUrl: '/images/c9.jpg' },
  { name: 'MARAFIQ', logoUrl: '/images/c10.jpg' },
  { name: 'Sabic', logoUrl: '/images/c11.jpg' },
  { name: 'Saudi Electricity Company', logoUrl: '/images/c12.jpg' },
];

// --- Main Clients Page Component ---
const ClientsPage: React.FC = () => {
  return (
    
    <div className="bg-white  font-lato ">

      
      {/* 1. Hero Section */}
        <section className="relative py-20 md:py-32 mt-20 bg-gray-900  overflow-hidden">
                <div className="absolute inset-0 bg-black/30 z-0"></div>
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-30 z-0" 
                    style={{ backgroundImage: "url('/images/building1.webp')" }} 
                    role="img" 
                    aria-label="Image of cargo being loaded onto an airplane"
                />

                <div className="relative z-10 container mx-auto px-4 md:px-10 text-center">
                    <Hammer size={64} className="mx-auto text-[#cf081f] mb-4" />
                    <h1 className="text-5xl md:text-[43px] font-extrabold text-white mb-4">
                        Clients
                    </h1>
                    <div className='text-gray-300 font-semibold flex gap-2 justify-center'>
                        <Link href="/" className="hover:text-white transition duration-300">Home</Link>
                        <span>/</span>
                        <Link href="/aboutus" className="hover:text-white transition duration-300">AboutUs</Link>
                    </div>
                </div>
            </section>
                  
                          {/* 2. Main Content Section */}
                         <section className="py-16 md:py-24 bg-white  lg:py-14"> {/* Changed background to white for a cleaner look */}
        <div className="container mx-auto px-50">
           
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-x-0 gap-y-12 items-center ">
           
            {clients.map((client) => (
              <div 
                key={client.name} 
                className="flex justify-center items-center"
              >
                <img 
                  src={client.logoUrl} 
                  alt={`${client.name} Logo`} 
                  className="max-h-14 lg:max-h-28 border border-gray-300 w-auto object-contain transition-transform duration-300 hover:scale-110" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientsPage;