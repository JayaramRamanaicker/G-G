import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react"; // optional icon lib

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 rounded-full bg-blue-600 text-white shadow-md hover:bg-blue-700 transition-all"
      aria-label="Back to top"
    >
      <ChevronUp size={24} />
    </button>
  ) : null;
};

export default BackToTop;
