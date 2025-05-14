import React from 'react';

const Footer = () => {
  return (
    <footer className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo / Brand */}
        <div>
          <h1 className="font-bebas text-[30px] mb-4">GLITCH & GLOW</h1>
          <p className="text-sm text-gray-400">Creative collaboration, simplified.</p>
        </div>

        {/* Help & Support */}
        <div>
          <h2 className="font-bebas text-[24px] mb-4">Help & Support</h2>
          <ul className="space-y-2 text-sm font-inter text-gray-300">
            <li>Help Center</li>
            <li>Blog</li>
            <li>Storyboard AI Prompts</li>
            <li>Release Notes</li>
            <li>Branding</li>
            <li>Integrations</li>
            <li>Privacy Policy</li>
            <li>Data Governance</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        {/* Compare */}
        <div>
          <h2 className="font-bebas text-[24px] mb-4">Compare</h2>
          <ul className="space-y-2 text-sm font-inter text-gray-300">
            <li>Frame.io Alternative</li>
            <li>G&G vs Boords</li>
            <li>G&G vs Ftrack</li>
            <li>G&G vs Shotgrid</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="font-bebas text-[24px] mb-4">Contact Us</h2>
          <ul className="space-y-2 text-sm font-inter text-gray-300">
            <li>support@glitchandglow.com</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
