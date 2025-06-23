import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 sm:py-8 px-3 sm:px-4 bg-slate-900/80 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-white/70 text-sm sm:text-base md:text-lg">
            Designed and built with passion © {currentYear}. Inspired by Harinath.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;