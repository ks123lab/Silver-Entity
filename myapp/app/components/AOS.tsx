// components/AOSInit.js
"use client"; // Must be a client component

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      // Optional settings
      easing: 'ease-out-quad',
      duration: 1000,
      once: true, 
      offset: 50, 
    });
  }, []);

  return null; 
};

export { AOS };
