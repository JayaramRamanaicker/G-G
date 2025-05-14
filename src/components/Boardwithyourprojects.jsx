import React, { useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Boardwithyourprojects = () => {
  const textref = useRef(null);
  const subtextref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      textref.current,
      { y: 80, opacity: 0 },
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
          toggleActions: "restart none none none",
        },
      }
    );

    gsap.fromTo(
      subtextref.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: subtextref.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);

  return (
    <div className="max-w-[1328px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center space-y-6">
        <h1
          ref={textref}
          className="text-3xl sm:text-4xl lg:text-5xl font-bebas font-bold"
        >
          Be on Board with your projects
        </h1>
        <p
          ref={subtextref}
          className="text-base sm:text-lg md:text-xl font-inter font-normal text-[#ffffffb3] max-w-4xl mx-auto"
        >
          Improve your production pipeline with an interactive Board tool. Plan
          your project and create storyboards, animatics, and scripts. As part
          of our video feedback platform, G&G offers an AI-powered storyboarding tool
          perfect for storytelling campaigns and other projects with ease and flexibility.
          Unlock your team’s creativity and deliver impactful content faster.
        </p>
      </div>
      <div className="mt-10">
        <video
          src={assets.bwyp_vid1}
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-[1062px] mx-auto rounded-xl shadow-lg"
        ></video>
      </div>
    </div>
  );
};

export default Boardwithyourprojects;
