import React, { useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    )
      .fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.4"
      )
      .fromTo(
        buttonRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.3"
      )
      .fromTo(
        videoRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1 },
        "-=0.2"
      );

    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
      onEnter: () => {
        gsap.to(heroRef.current, {
          backgroundPosition: "center 20%",
          duration: 1,
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={heroRef}
      style={{ backgroundImage: `url(${assets.hero_bg})` }}
      className="bg-center bg-cover py-20 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-6xl mx-auto mb-12">
        <h1
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-bold font-bebas leading-tight text-center"
        >
          Media Review and Collaboration Platform for Teams
        </h1>
      </div>

      <div className="max-w-4xl mx-auto mb-12">
        <p
          ref={subtitleRef}
          className="text-base sm:text-lg md:text-xl lg:text-[28px] font-inter font-light leading-relaxed text-center"
        >
          Build a seamless production workflow that connects your entire team
          worldwide. Share media, track feedback, and invite unlimited
          reviewers within one online video review and approval platform—with
          no hidden cost per seat.
        </p>
      </div>

      <div className="flex justify-center mb-16">
        <button
          ref={buttonRef}
          className="text-base sm:text-lg lg:text-[20px] font-bold bg-[#1f5eff] py-4 px-10 rounded-lg"
        >
          Try for free
        </button>
      </div>

      <div className="max-w-6xl mx-auto pt-10">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            allowFullScreen
            allow="autoplay"
            title="Vimeo Video Player"
            src="https://player.vimeo.com/video/1020279341?autoplay=1&playsInline=0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Hero;
