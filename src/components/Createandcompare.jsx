import React, { useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Createandcompare = () => {
  const textref = useRef(null);
  const videoref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      textref.current,
      { x: -300, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textref.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      videoref.current,
      { x: 300, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: videoref.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-6 sm:px-10 lg:px-20 py-20 gap-12">
      {/* Text Section */}
      <div ref={textref} className="max-w-xl w-full">
        <h1 className="text-3xl sm:text-4xl md:text-[44px] font-bebas font-bold leading-tight text-white">
          Create and compare versions
        </h1>
        <p className="text-base sm:text-lg md:text-[20px] font-inter text-[#ffffffb3] my-6">
          Pay attention to all requested revisions.
        </p>
        <ul className="list-disc text-base sm:text-lg md:text-[20px] text-[#ffffffb3] pl-5 space-y-2">
          <li>
            <strong>Overlay mode:</strong> Slide the overlay line to check for image
            differences.
          </li>
          <li>
            <strong>Auto-compare mode:</strong> Automatically detects visual differences
            and highlights them with the color.
          </li>
        </ul>
      </div>

      {/* Video Section */}
      <div ref={videoref} className="w-full max-w-5xl">
        <video
          src={assets.compare}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto rounded-xl"
        ></video>
      </div>
    </div>
  );
};

export default Createandcompare;
