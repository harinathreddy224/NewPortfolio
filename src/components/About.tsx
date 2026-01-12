import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code'
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting beautiful and intuitive user experiences'
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimizing for speed and user satisfaction'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 px-3 sm:px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            About Me
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-2">
            I'm a passionate Full Stack developer who loves to create digital solutions that make a difference. 
            With a keen eye for detail and a commitment to excellence, I transform ideas into reality.
          </p>
        </div>

        {/* Three Cards with Hover Effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl p-4 sm:p-6 text-center hover:bg-white/10 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl hover:border-white/30"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-3 sm:mb-4 transform transition-transform duration-300 hover:rotate-12">
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-white/70">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Main Content Card with Image */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            
            {/* Left Side - Text Content */}
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">My Journey</h3>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  With 2.5 years of experience in web development, I've had the privilege of working 
                  on diverse projects that have shaped my understanding of both technical excellence and user experience.
                </p>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  I believe in continuous learning and staying updated with the latest technologies. 
                  My goal is to create solutions that not only meet requirements but exceed expectations.
                </p>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  Every project is an opportunity to push boundaries and create something meaningful. 
                  I'm passionate about turning complex problems into simple, elegant solutions that users love.
                </p>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
                  and sharing knowledge with the developer community.
                </p>
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl transform rotate-3"></div>
                
                {/* Image Container */}
                <div className="relative bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-2xl p-3 sm:p-4 border border-white/20">
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <img 
                      src="/images/Harinath Photo.png" 
                      alt="Harinath - About" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 w-4 h-4 sm:w-6 sm:h-6 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 sm:-bottom-3 -left-2 sm:-left-3 w-3 h-3 sm:w-4 sm:h-4 bg-purple-400 rounded-full animate-pulse animation-delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
