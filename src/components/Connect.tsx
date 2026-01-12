import React from 'react';
import { Linkedin, Instagram, Mail } from 'lucide-react';

const Connect = () => {
  const socialLinks = [
    {
      id: 1,
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/harinath-reddy-mkp/", // Replace with your actual LinkedIn URL
      gradient: "from-blue-600 to-blue-800",
      bgGradient: "from-blue-600/10 to-blue-800/10",
      hoverColor: "hover:bg-blue-600/20"
    },
    {
      id: 2,
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/harinaths9642/", // Replace with your actual Instagram URL
      gradient: "from-pink-500 to-purple-600",
      bgGradient: "from-pink-500/10 to-purple-600/10",
      hoverColor: "hover:bg-pink-500/20"
    },
    {
      id: 3,
      name: "Email",
      icon: Mail,
      url: "mailto:reddyweb9642@gmail.com", // Replace with your actual email
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-500/10 to-emerald-600/10",
      hoverColor: "hover:bg-green-500/20"
    }
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="connect" className="py-16 sm:py-20 px-3 sm:px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-purple-900/50 pointer-events-none"></div>
      <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-80 sm:h-80 bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Connect With Me
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed px-2">
            Let's connect and build something amazing together
          </p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-4 sm:mt-6 rounded-full"></div>
        </div>

        {/* Social Media Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            
            return (
              <div
                key={social.id}
                onClick={() => handleSocialClick(social.url)}
                className={`
                  group relative bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl 
                  p-4 sm:p-6 md:p-8 lg:p-10 cursor-pointer overflow-hidden
                  hover:bg-white/10 hover:border-white/30 hover:shadow-2xl 
                  hover:scale-110 transition-all duration-500 transform-gpu
                  ${social.hoverColor}
                `}
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${social.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-xl"></div>

                <div className="relative z-10 text-center">
                  {/* Social Icon */}
                  <div className={`
                    inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 
                    bg-gradient-to-r ${social.gradient} rounded-2xl mb-4 sm:mb-6
                    group-hover:scale-110 group-hover:rotate-6 transition-all duration-300
                    shadow-lg group-hover:shadow-2xl
                  `}>
                    <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                  </div>
                  
                  {/* Social Name */}
                  <h3 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 group-hover:text-white transition-colors duration-300">
                    {social.name}
                  </h3>
                  
                  {/* Professional Connect Text */}
                  <p className="text-white/70 text-sm sm:text-base md:text-lg mb-3 sm:mb-4 group-hover:text-white/90 transition-colors duration-300">
                    Professional Connect
                  </p>

                  {/* Click Indicator */}
                  <div className="mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`inline-flex items-center gap-2 text-xs sm:text-sm font-medium bg-gradient-to-r ${social.gradient} bg-clip-text text-transparent`}>
                      <span>Click to connect</span>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-current rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  <div className={`absolute top-2 right-2 sm:top-4 sm:right-4 w-1 h-1 sm:w-2 sm:h-2 bg-gradient-to-r ${social.gradient} rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500`}></div>
                  <div className={`absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-0.5 h-0.5 sm:w-1.5 sm:h-1.5 bg-gradient-to-r ${social.gradient} rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-700`} style={{ animationDelay: '0.5s' }}></div>
                  <div className={`absolute top-1/2 right-4 sm:right-8 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-gradient-to-r ${social.gradient} rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-600`} style={{ animationDelay: '1s' }}></div>
                </div>

                {/* Ripple Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className={`
                    absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-0 
                    group-hover:opacity-10 transition-opacity duration-300 
                    transform scale-0 group-hover:scale-100 rounded-2xl
                  `}></div>
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex items-center gap-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <p className="text-white/60 text-sm sm:text-base lg:text-lg font-medium">Ready to collaborate? Let's get in touch!</p>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-pulse animation-delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
