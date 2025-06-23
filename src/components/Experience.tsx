import React from 'react';
import { Building2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Kalpita Technologies",
      description: "frontend development initiatives for multiple client projects, specializing in React.js and modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality, scalable web applications. Implemented responsive designs and optimized performance across various devices and browsers.",
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-500/10 to-cyan-600/10"
    },
    {
      id: 2,
      company: "IKnack Solutions",
      description: "Developed and maintained complex web applications using MERN stack technologies. Worked closely with UI/UX designers to create intuitive user interfaces and seamless user experiences. Contributed to code reviews, mentored junior developers, and implemented best practices for clean, maintainable code.",
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-500/10 to-pink-600/10"
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 px-3 sm:px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 pointer-events-none"></div>
      <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Experience
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed px-2">
            My professional journey and career highlights
          </p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto mt-4 sm:mt-6 rounded-full"></div>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className="group relative bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 hover:bg-white/10 hover:border-white/30 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden"
              style={{
                animationDelay: `${index * 300}ms`
              }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${experience.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-xl"></div>

              <div className="relative z-10">
                {/* Company Header */}
                <div className="mb-6 sm:mb-8">
                  {/* Company Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${experience.gradient} rounded-xl mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  
                  {/* Company Name */}
                  <h3 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 group-hover:text-white transition-colors duration-300">
                    {experience.company}
                  </h3>
                </div>

                {/* Company Description */}
                <div className="mb-4 sm:mb-6">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
                    {experience.description}
                  </p>
                </div>

                {/* Bottom Decorative Line */}
                <div className={`w-full h-1 bg-gradient-to-r ${experience.gradient} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${experience.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>
              </div>

              {/* Floating Particles */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                <div className={`absolute top-2 right-2 sm:top-4 sm:right-4 w-1 h-1 sm:w-2 sm:h-2 bg-gradient-to-r ${experience.gradient} rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500`}></div>
                <div className={`absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-0.5 h-0.5 sm:w-1.5 sm:h-1.5 bg-gradient-to-r ${experience.gradient} rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-700`} style={{ animationDelay: '0.5s' }}></div>
                <div className={`absolute top-1/2 right-4 sm:right-8 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-gradient-to-r ${experience.gradient} rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-600`} style={{ animationDelay: '1s' }}></div>
              </div>

              {/* Card Number */}
              <div className="absolute top-2 left-2 sm:top-4 sm:left-4 text-white/20 font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl pointer-events-none">
                {String(experience.id).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;