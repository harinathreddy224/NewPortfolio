import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    'Home',
    'About',
    'Services',
    'Skills',
    'Projects',
    'Experience',
    'Connect'
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-18">
          {/* Logo/Name with Lightning Bolt - Clickable */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-wide hover:text-purple-300 transition-colors duration-300 cursor-pointer flex items-center gap-1"
            >
              <span className="text-yellow-400 text-xl sm:text-2xl">⚡</span>
              <span className="hidden xs:inline">Harinath</span>
              <span className="xs:hidden">H</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-2 xl:space-x-6">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/90 hover:text-white hover:bg-white/10 px-2 xl:px-3 py-2 rounded-lg transition-all duration-300 cursor-pointer font-medium text-sm xl:text-base"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Tablet Navigation - Hidden items */}
          <nav className="hidden md:block lg:hidden">
            <ul className="flex items-center space-x-1">
              {navItems.slice(0, 5).map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/90 hover:text-white hover:bg-white/10 px-2 py-2 rounded-lg transition-all duration-300 cursor-pointer font-medium text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white hover:text-white/80 transition-colors duration-200 cursor-pointer p-2"
                  aria-label="More menu"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-white/80 transition-colors duration-200 cursor-pointer p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden lg:block lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/5 backdrop-blur-lg rounded-lg mt-2 border border-white/20">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white/90 hover:text-white hover:bg-white/10 block px-3 py-2 rounded-md transition-all duration-300 cursor-pointer font-medium text-sm sm:text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;