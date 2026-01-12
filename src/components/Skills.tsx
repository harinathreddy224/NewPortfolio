import React, { useState, useEffect, useRef } from 'react';
import { 
  Code, 
  Database, 
  Layers, 
  Palette, 
  FileCode, 
  Zap, 
  GitBranch, 
  Server, 
  Cloud, 
  Monitor, 
  Bug, 
  Package, 
  Smartphone 
} from 'lucide-react';

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([]);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'ReactJS', icon: Code, color: 'from-blue-400 to-cyan-400', bgColor: 'bg-blue-500/10' },
    { name: 'Dot Net', icon: Code, color: 'from-blue-400 to-cyan-400', bgColor: 'bg-blue-500/10' },
    { name: 'ASP.NET Web API', icon: Code, color: 'from-blue-400 to-cyan-400', bgColor: 'bg-blue-500/10' },
    { name: 'RESTful API', icon: Code, color: 'from-blue-400 to-cyan-400', bgColor: 'bg-blue-500/10' },
    { name: 'Angular', icon: Code, color: 'from-blue-400 to-cyan-400', bgColor: 'bg-blue-500/10' },
    { name: 'SQL Server', icon: Code, color: 'from-blue-400 to-cyan-400', bgColor: 'bg-blue-500/10' },
    { name: 'Redux', icon: Database, color: 'from-purple-400 to-pink-400', bgColor: 'bg-purple-500/10' },
    { name: 'JavaScript', icon: FileCode, color: 'from-yellow-400 to-orange-400', bgColor: 'bg-yellow-500/10' },
    { name: 'Bootstrap', icon: Layers, color: 'from-purple-400 to-blue-400', bgColor: 'bg-purple-500/10' },
    { name: 'HTML/CSS', icon: Palette, color: 'from-orange-400 to-red-400', bgColor: 'bg-orange-500/10' },
    { name: 'Tailwind CSS', icon: Zap, color: 'from-cyan-400 to-blue-400', bgColor: 'bg-cyan-500/10' },
    { name: 'TypeScript', icon: Code, color: 'from-blue-400 to-indigo-400', bgColor: 'bg-blue-500/10' },
    { name: 'Git', icon: GitBranch, color: 'from-orange-400 to-red-400', bgColor: 'bg-orange-500/10' },
    { name: 'SQL Server', icon: Server, color: 'from-red-400 to-pink-400', bgColor: 'bg-red-500/10' },
    { name: 'Azure DevOps', icon: Cloud, color: 'from-blue-400 to-cyan-400', bgColor: 'bg-blue-500/10' },
    { name: 'VS Code', icon: Monitor, color: 'from-blue-400 to-purple-400', bgColor: 'bg-blue-500/10' },
    { name: 'JIRA', icon: Bug, color: 'from-blue-400 to-indigo-400', bgColor: 'bg-blue-500/10' },
    { name: 'Jest', icon: Bug, color: 'from-green-400 to-emerald-400', bgColor: 'bg-green-500/10' },
    { name: 'Webpack, Parcel, ESLint', icon: Package, color: 'from-yellow-400 to-orange-400', bgColor: 'bg-yellow-500/10' },
    { name: 'Responsive Design', icon: Smartphone, color: 'from-pink-400 to-purple-400', bgColor: 'bg-pink-500/10' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate skills one by one with delay
            skills.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSkills(prev => [...prev, index]);
              }, index * 150); // 150ms delay between each skill
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-16 sm:py-20 px-3 sm:px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 pointer-events-none"></div>
      <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            My Skills
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed px-2">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-4 sm:mt-6 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div 
          ref={skillsRef}
          className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8"
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            const isVisible = visibleSkills.includes(index);
            
            return (
              <div
                key={index}
                className={`
                  group relative bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 
                  hover:bg-white/10 hover:border-white/30 hover:shadow-2xl hover:scale-105
                  transition-all duration-500 cursor-pointer
                  ${isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                  }
                `}
                style={{
                  transitionDelay: isVisible ? `${index * 50}ms` : '0ms'
                }}
              >
                {/* Background Glow Effect */}
                <div className={`absolute inset-0 ${skill.bgColor} rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Card Content */}
                <div className="relative z-10 text-center">
                  {/* Icon Container */}
                  <div className={`
                    inline-flex items-center justify-center w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 
                    bg-gradient-to-r ${skill.color} rounded-lg sm:rounded-xl mb-2 sm:mb-3 md:mb-4
                    group-hover:scale-110 group-hover:rotate-6 transition-all duration-300
                    shadow-lg group-hover:shadow-xl
                  `}>
                    <IconComponent className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  
                  {/* Skill Name */}
                  <h3 className="text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg font-semibold text-white group-hover:text-white transition-colors duration-300 leading-tight">
                    {skill.name}
                  </h3>
                  
                  {/* Animated Border */}
                  <div className={`
                    absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 
                    group-hover:opacity-20 transition-opacity duration-500 pointer-events-none
                  `}></div>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden rounded-xl sm:rounded-2xl pointer-events-none">
                  <div className={`
                    absolute top-1 right-1 sm:top-2 sm:right-2 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-gradient-to-r ${skill.color} rounded-full 
                    opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500
                  `}></div>
                  <div className={`
                    absolute bottom-1 left-1 sm:bottom-2 sm:left-2 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-gradient-to-r ${skill.color} rounded-full 
                    opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-700
                  `} style={{ animationDelay: '0.5s' }}></div>
                </div>

                {/* Hover Ripple Effect */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden">
                  <div className={`
                    absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 
                    group-hover:opacity-10 transition-opacity duration-300 
                    transform scale-0 group-hover:scale-100 rounded-xl sm:rounded-2xl
                  `}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Decorative Element */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex items-center gap-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <p className="text-white/60 text-sm sm:text-base lg:text-lg font-medium">Always learning, always growing</p>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-pulse animation-delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
