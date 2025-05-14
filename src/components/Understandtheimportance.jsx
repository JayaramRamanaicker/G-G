import React, { useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Understandtheimportance = () => {
  const textref = useRef(null);
  const subtextref = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animate = (target) => {
      gsap.fromTo(
        target,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: target,
            start: "top 90%",
            end: "top 70%",
            scrub: 1,
            toggleActions: "play none none none",
          },
        }
      );
    };

    animate(textref.current);
    animate(subtextref.current);
    cardRefs.current.forEach((ref) => ref && animate(ref));
  }, []);

  return (
    <div className="max-w-[1328px] mx-auto py-20 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h1
          ref={textref}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bebas font-bold leading-tight mb-6"
        >
          We understand the importance of security in media production
        </h1>
        <p
          ref={subtextref}
          className="text-base sm:text-lg md:text-xl text-[#ffffffb3] font-inter font-normal leading-relaxed"
        >
          That's why we guarantee data protection for our customers by using
          international security certificates.
        </p>
      </div>

      {/* Cards Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[assets.frame1, assets.frame2, assets.frame3, assets.frame4, assets.frame5, assets.frame6].map(
          (img, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-[#1c1c1e] border border-[#343338] rounded-lg overflow-hidden flex items-center justify-center h-[200px] sm:h-[220px] md:h-[230px] transition-transform duration-300"
            >
              <img
                src={img}
                alt={`frame-${index + 1}`}
                className="w-full h-full object-contain p-2"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Understandtheimportance;
