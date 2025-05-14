import React from "react";

const Getstartfast = () => {
  return (
    <div className="pb-20 px-4">
      <div className="max-w-7xl w-full bg-[#5c5a5e4d] rounded-xl mx-auto">
        <div className="py-12 px-4 sm:px-10 lg:px-24">
          {/* Top description */}
          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-base sm:text-lg md:text-xl font-inter font-normal text-[#f5f8ff] text-center leading-relaxed">
              Whether you're a solo creator or a large video production company,
              the video review app G&G has a plan for you.
            </p>
          </div>

          {/* Heading */}
          <div className="max-w-2xl mx-auto mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bebas font-bold text-[#f5f8ff] text-center leading-tight">
              Get Started fast with G&G
            </h1>
          </div>

          {/* Button */}
          <div className="flex justify-center mb-10">
            <button className="text-base sm:text-lg md:text-xl font-inter font-bold bg-[#1f5eff] text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition duration-300">
              Start Free Trial
            </button>
          </div>

          {/* Bottom description */}
          <div className="max-w-2xl mx-auto">
            <p className="text-sm sm:text-base md:text-lg font-inter font-normal leading-relaxed text-[#ffffffb2] text-center">
              Stay flexible with your subscription—upgrade, downgrade, or cancel
              anytime to adapt your workflow. Start your 7-day free trial today,
              and experience streamlined creative collaboration firsthand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getstartfast;
