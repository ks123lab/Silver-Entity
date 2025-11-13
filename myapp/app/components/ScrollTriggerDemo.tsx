"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTriggerDemo() {
  useEffect(() => {
    // Simple fade-in + move animation on scroll
    gsap.utils.toArray(".section").forEach((section: any) => {
      gsap.from(section, {
        opacity: 0,
        y: 100,
        duration: 1.5,
        scrollTrigger: {
          trigger: section,
          start: "top 80%", // when section enters 80% of viewport height
          end: "top 30%",
          scrub: false, // set true for smooth scrub animation
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  return (
    <main className="overflow-x-hidden">
      <section className="section h-screen flex items-center justify-center bg-rose-900 text-white text-5xl font-bold">
        Welcome to Gooey Basque
      </section>

      <section className="section h-screen flex items-center justify-center bg-yellow-500 text-black text-5xl font-bold">
        Scroll Down 🍰
      </section>

      <section className="section h-screen flex items-center justify-center bg-emerald-700 text-white text-5xl font-bold">
        ScrollTrigger Works! 🎯
      </section>
    </main>
  );
}
