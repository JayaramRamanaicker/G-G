import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Empowercontent = () => {
  const videoref = useRef(null);
  const textref = useRef(null);

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
        duration: 1,
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
  }, []);

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center px-6 sm:px-10 lg:px-20 py-16 gap-16">
      {/* Video Section */}
      <div ref={videoref} className="w-full max-w-5xl lg:relative lg:right-[100px]">
        <iframe
          src="https://player.vimeo.com/video/1020634743?h=56c069db7f&muted=1&autoplay=1&loop=1&background=1&app_id=122963"
          allow="autoplay"
          frameBorder="0"
          scrolling="no"
          className="w-full h-auto rounded-xl"
          title="Empower Content"
        ></iframe>
      </div>

      {/* Text Section */}
      <div ref={textref} className="w-full max-w-xl text-white">
        <h1 className="text-3xl sm:text-4xl md:text-[44px] font-bebas font-bold leading-tight mb-6">
          Features That Empower Content Teams
        </h1>
        <p className="text-base sm:text-lg md:text-[20px] font-inter text-[#ffffffb3] mb-5 leading-relaxed">
          Our video review software eliminates rigid workflows, boosting work
          process satisfaction and reducing burnout. It makes life easier for
          collaborators, managers, and clients. Enhance your creative pipeline
          and make it more people-centered with a range of features:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg md:text-[20px] text-[#ffffffb3] mb-5">
          <li>Video feedback tools, comments, and sharing</li>
          <li>Role-based access control</li>
          <li>Dedicated workspaces</li>
          <li>Extensive storage and advanced security</li>
        </ul>
        <p className="text-base sm:text-lg md:text-[20px] text-[#ffffffb3] leading-relaxed">
          No more guessing—reduce review cycles and speed up approvals with
          accurate commenting tools: write, draw, attach with time-codes.
        </p>
      </div>
    </div>
  );
};

export default Empowercontent;
