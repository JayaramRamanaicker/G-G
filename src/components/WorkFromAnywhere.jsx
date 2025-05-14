import React, { useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WorkFromAnywhere = () => {
  const videoref = useRef(null);
  const textref = useRef(null);
  const video2ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      textref.current,
      { x: 300, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
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
      videoref.current,
      { x: -300, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: videoref.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      video2ref.current,
      { x: -300, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: video2ref.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="w-full mb-20 bg-black text-[#f5f8ff] px-4 py-12 flex flex-col lg:flex-row items-center justify-center gap-12">
      {/* Left Section - Images */}
      <div className="relative w-full max-w-[800px] flex justify-center items-center">
        <img
          ref={videoref}
          src={assets.wfa}
          alt="Work from anywhere main"
          className="w-full max-w-[700px] object-cover"
        />
        <img
          ref={video2ref}
          src={assets.wfap}
          alt="Floating image"
          className="absolute top-[20%] right-[10%] w-[120px] sm:w-[160px] md:w-[180px] lg:w-[210px] h-auto"
        />
      </div>

      {/* Right Section - Text */}
      <div className="w-full max-w-xl">
        <div ref={textref} className="text-[16px]">
          <h1 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-bebas font-bold mb-4">
            Work from anywhere
          </h1>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] font-inter leading-relaxed">
            Access your content and collaborate with clients and team members
            anywhere in the World. Our creative collaboration tool bridges
            geographical gaps, uniting designers, scriptwriters, content
            creators, motion designers, and video producers effortlessly,
            providing a joint, secure online workspace. No matter where your
            team is, G&G ensures smooth, constraint-free collaboration so
            you can meet deadlines with confidence and clarity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkFromAnywhere;
