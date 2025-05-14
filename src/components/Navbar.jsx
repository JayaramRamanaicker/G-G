import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // install: npm install lucide-react

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-black/40 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white font-bold text-xl">
          G&G
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-blue-400 transition">Home</Link>
          <Link to="/pricing" className="text-white hover:text-blue-400 transition">Pricing</Link>
          <Link to="/contact" className="text-white hover:text-blue-400 transition">Contact</Link>
        </nav>

        {/* Call to Action button */}
        <Link
          to="/signup"
          className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Try for Free
        </Link>

        {/* Mobile menu toggle button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg px-6 py-4 space-y-4">
          <Link
            to="/"
            className="block text-white text-lg hover:text-blue-400"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/pricing"
            className="block text-white text-lg hover:text-blue-400"
            onClick={() => setMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className="block text-white text-lg hover:text-blue-400"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/signup"
            className="block bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition"
            onClick={() => setMenuOpen(false)}
          >
            Try for Free
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
