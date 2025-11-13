"use client";
import Hero from "./components/Hero";
import AboutPage from "./components/AboutPage"
// import ScrollTriggerDemo from "./components/ScrollTriggerDemo";
import ProcessSection from "./components/Process";
import AboutDown from "./components/AboutDown";
import ParallaxPage from "./components/Parallex";
import Hcontact from "./components/Hcontact"
import Services from "./components/Services"

export default function Home() {


  return (
    <>
   
      <Hero/>
      <AboutPage/>
      <Services/>
      <ProcessSection/>
      <AboutDown/>
      <ParallaxPage/>
      <Hcontact/>

    </>
    
  );
}
