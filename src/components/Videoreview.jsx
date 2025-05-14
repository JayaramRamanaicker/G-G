import React, { useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Videoreview = () => {
  const videoref = useRef(null);
  const textref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      textref.current,
      { opacity: 0, y: -200 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textref.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          toggleActions: "restart none none none",
        },
      }
    );

    gsap.fromTo(
      videoref.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.in",
        scrollTrigger: {
          trigger: videoref.current,
          start: "top 80%",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);

  return (
    <div className="px-5 sm:px-10 lg:px-20">
      <div ref={textref} className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bebas font-bold mb-6">
          Video Review & Feedback Directly in Your Favorite Software
        </h1>
        <ul className="text-base sm:text-lg lg:text-xl font-inter font-normal text-[#ffffffb3] text-left list-disc pl-5 sm:pl-10 space-y-4">
          <li>Sync Playhead: Align your timeline with time-coded comments.</li>
          <li>Import Markers & Comments: See exactly where edits are needed.</li>
          <li>
            One-Click Marker Removal: Keep your timeline clean after making changes. Bring seamless video collaboration into your editing workflow with the Adobe Premiere Pro & After Effects extension.
          </li>
        </ul>
      </div>
      <div ref={videoref} className="max-w-7xl mx-auto mt-10 mb-32">
        <img
          src={assets.videoreview}
          alt="Video Review Preview"
          className="w-full h-auto object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default Videoreview;
