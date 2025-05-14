import React, { useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Mediafiles = () => {
  const textref = useRef(null);
  const subtextref = useRef(null);
  const card1ref = useRef(null);
  const card2ref = useRef(null);
  const card3ref = useRef(null);
  const card4ref = useRef(null);
  const card5ref = useRef(null);
  const card6ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animate = (ref, xVal) => {
      gsap.fromTo(
        ref.current,
        { x: xVal, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
            toggleActions: "play none none none",
          },
        }
      );
    };

    gsap.fromTo(
      textref.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textref.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      subtextref.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: subtextref.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
          toggleActions: "play none none none",
        },
      }
    );

    animate(card1ref, -300);
    animate(card2ref, -300);
    animate(card3ref, -300);
    animate(card4ref, 300);
    animate(card5ref, 300);
    animate(card6ref, 300);
  }, []);

  return (
    <div className="min-h-screen px-4 py-20">
  <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-6">

    {/* Left Cards (Top in mobile) */}
    <div className="flex flex-col items-center gap-4">
      <img src={assets.card1} ref={card1ref} alt="" className="w-[240px] h-[300px]" />
      <img src={assets.card2} ref={card2ref} alt="" className="w-[240px] h-[300px]" />
      <img src={assets.card3} ref={card3ref} alt="" className="w-[240px] h-[300px]" />
    </div>

    {/* Text Center */}
    <div className="text-center px-4">
      <h1
        ref={textref}
        className="text-[36px] md:text-[48px] lg:text-[56px] font-bebas font-bold leading-snug"
      >
        Collaborate on <br /> any media files
      </h1>
      <p
        ref={subtextref}
        className="text-[18px] md:text-[20px] font-inter font-[400] text-[#ffffffb3] mt-4"
      >
        Get revisions on your creative work effortlessly.
      </p>
    </div>

    {/* Right Cards (Bottom in mobile) */}
    <div className="flex flex-col items-center gap-4">
      <img src={assets.card4} ref={card4ref} alt="" className="w-[240px] h-[300px]" />
      <img src={assets.card5} ref={card5ref} alt="" className="w-[240px] h-[300px]" />
      <img src={assets.card6} ref={card6ref} alt="" className="w-[240px] h-[300px]" />
    </div>

  </div>
</div>

  );
};

export default Mediafiles;
