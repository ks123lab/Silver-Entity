"use client";
import Hero from "./components/Hero";
import AboutPage from "./components/AboutPage"
// import ScrollTriggerDemo from "./components/ScrollTriggerDemo";
import ProcessSection from "./components/Quality";
import AboutDown from "./components/WhyChooseUs";
import ParallaxPage from "./components/Parallex";

import Services from "./components/Services"
import Clients from "./components/Clients"
import FourCards from "./components/FourCards"
import Faq from "./components/Faq"

export default function Home() {


  return (
    <>
   
      <Hero/>
            <Services/>
      <AboutPage/>

      <ProcessSection/>
      <AboutDown/>
      <ParallaxPage/>
       <Clients/>
        <FourCards/>
        <Faq/>
      {/* <Hcontact/> */}

    </>
    
  );
}
