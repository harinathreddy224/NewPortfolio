import React, { useState, useEffect } from 'react';
import { ChevronDown, Download } from 'lucide-react';

const Hero = () => {
  const roles = [
    'ReactJS Developer',
    'Frontend Developer', 
    'JavaScript Developer',
    'MERN Stack Developer'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[currentRoleIndex];
      
      if (isDeleting) {
        setCurrentText(currentRole.substring(0, currentText.length - 1));
        setTypeSpeed(75);
      } else {
        setCurrentText(currentRole.substring(0, currentText.length + 1));
        setTypeSpeed(150);
      }

      if (!isDeleting && currentText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typeSpeed, roles]);

  const handleDownloadCV = () => {
    // Replace this URL with your actual Google Drive CV link
    window.open('https://drive.google.com/file/d/1ZmVcycqOGjzmp0vWElwjsybsxMkmQ7uW/view?usp=sharing', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-16 sm:py-20 px-3 sm:px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 pointer-events-none"></div>
      <div className="absolute top-10 sm:top-20 left-2 sm:left-4 md:left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-2 sm:right-4 md:right-10 w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="text-center lg:text-left space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1">
            {/* Welcome Text */}
            <div className="space-y-1 sm:space-y-2">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 font-light">
                Hello,
              </p>
              
              {/* Main Heading */}
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                I'm{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Harinath
                </span>
              </h1>
              
              {/* Typing Animation */}
              <div className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold h-6 xs:h-7 sm:h-8 md:h-10 lg:h-12 xl:h-16 flex items-center justify-center lg:justify-start">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent border-r-2 border-yellow-400 pr-1 animate-pulse">
                  {currentText}
                </span>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-white/70 leading-relaxed max-w-xl mx-auto lg:mx-0">
              A passionate Frontend React.js Developer dedicated to building user-friendly, responsive, and visually appealing websites.
            </p>
            
            {/* Download CV Button - Centered */}
            <div className="flex justify-center lg:justify-start pt-2 sm:pt-4">
              <button 
                onClick={handleDownloadCV}
                className="group relative bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 cursor-pointer text-sm xs:text-base sm:text-lg overflow-hidden"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                
                {/* Button Content */}
                <div className="relative flex items-center justify-center gap-2">
                  <Download className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 animate-bounce" />
                  <span className="relative z-10">Download CV</span>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl group-hover:bg-yellow-400/40 transition-all duration-300 animate-pulse"></div>
              </button>
            </div>
          </div>
          
          {/* Right Side - Profile Photo */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Decorative Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-2xl transform scale-110"></div>
              
              {/* Photo Container */}
              <div className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[400px] xl:h-[400px] 2xl:w-[450px] 2xl:h-[450px] rounded-full overflow-hidden border-2 sm:border-4 border-white/20 shadow-2xl">
                {/* Harinath's Profile Photo */}
                <img 
                  src="/images/Harinath Photo.png" 
                  alt="Harinath - Profile" 
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-1 xs:-top-2 sm:-top-4 -right-1 xs:-right-2 sm:-right-4 w-4 h-4 xs:w-6 xs:h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full animate-bounce animation-delay-1000"></div>
              <div className="absolute -bottom-1 xs:-bottom-2 sm:-bottom-4 -left-1 xs:-left-2 sm:-left-4 w-3 h-3 xs:w-4 xs:h-4 sm:w-6 sm:h-6 bg-purple-400 rounded-full animate-bounce animation-delay-2000"></div>
              <div className="absolute top-1/2 -left-2 xs:-left-4 sm:-left-8 w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4 bg-blue-400 rounded-full animate-bounce animation-delay-3000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 xs:bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;
