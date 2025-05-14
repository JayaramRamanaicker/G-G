import React, { useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Mediaproduction = () => {
  const videoref = useRef(null);
  const textref = useRef(null);
  const video2ref = useRef(null);

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
          scrub: 1,
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
      { x: 300, opacity: 0 },
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
    <div className="bg-black text-[#f5f8ff] py-16 px-6 md:px-10 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
      {/* Left Content (Text) */}
      <div className="w-full lg:w-1/2 flex items-center">
        <div ref={textref} className="max-w-xl space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bebas font-bold">
            10x your media production workflows
          </h1>
          <p className="text-base sm:text-lg text-[#ffffffb3] font-inter">
            If managing your production process feels overwhelming with repetitive tasks and scattered tools, you're just one creative collaboration platform away from transforming it. G&G provides all the creative collaboration tools you need to keep your workflow on track and efficient. With real-time communication, feedback collection, and project management features, G&G empowers you to:
          </p>
          <ul className="list-disc text-base sm:text-lg text-[#ffffffb3] font-inter pl-5 space-y-2">
            <li>Complete more video content projects in less time</li>
            <li>Get comprehensible comments with our video commenting tool</li>
            <li>Optimize your entire process in one platform</li>
            <li>Maximize your team's effort at every stage</li>
          </ul>
        </div>
      </div>

      {/* Right Content (Images) */}
      <div className="w-full lg:w-1/2 flex flex-col items-center relative">
        <img
          ref={videoref}
          src={assets.cal1}
          alt="Main Production"
          className="w-full max-w-[700px] object-contain mb-6"
        />
        <img
          ref={video2ref}
          src={assets.cal2}
          alt="Overlay Detail"
          className="w-full max-w-[500px] object-contain -mt-24"
        />
      </div>
    </div>
  );
};

export default Mediaproduction;
