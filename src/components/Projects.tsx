import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Ticketing System",
      description: "Developed a responsive web-based ticketing system using React.js, Bootstrap, and Redux for efficient complaint management and real-time technician tracking. Integrated RESTful APIs with Axios and ensured cross-browser compatibility, accessibility, and optimized UI performance. Handled client communication, requirement gathering, issue resolution, and timely task delivery throughout the development cycle.",
      skills: ["ReactJS", "Frontend Technologies"],
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-500/10 to-purple-600/10"
    },
    {
      id: 2,
      name: "Nimble",
      description: "Built a web-based loan management system covering five key stages—Initiation to Dispatch—to automate and streamline the entire loan lifecycle. Integrated real-time status tracking, automated reminders, and third-party API verifications, with a responsive UI for borrowers, agents, and admins. Led requirement analysis, client interactions, and sprint-based delivery of enhancements, bug fixes, and updates.",
      skills: ["ReactJS", "Frontend Technologies"],
      gradient: "from-green-500 to-teal-600",
      bgGradient: "from-green-500/10 to-teal-600/10"
    },
    {
      id: 3,
      name: "Ticketing Tool",
      description: "Developed a centralized web-based platform to streamline internal service requests across departments, including IT, HR, finance, and recruitment. Enabled digital submission and real-time tracking of requests, reducing reliance on direct communication. Improved operational efficiency by automating workflows and enhancing interdepartmental coordination.",
      skills: ["ReactJS", "Frontend Technologies"],
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-500/10 to-red-600/10"
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 px-3 sm:px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-purple-900/50 pointer-events-none"></div>
      <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            My Projects
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed px-2">
            Showcasing my latest work and creative solutions
          </p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-4 sm:mt-6 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white/10 hover:border-white/30 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-xl"></div>

              <div className="relative z-10">
                {/* Project Header */}
                <div className="mb-4 sm:mb-6">
                  {/* Project Number */}
                  <div className={`inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r ${project.gradient} rounded-full text-white font-bold text-xs sm:text-sm mb-3 sm:mb-4`}>
                    {String(project.id).padStart(2, '0')}
                  </div>
                  
                  {/* Project Name */}
                  <h3 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 group-hover:text-white transition-colors duration-300">
                    {project.name}
                  </h3>
                </div>

                {/* Project Description */}
                <div className="mb-6 sm:mb-8">
                  <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Skills Tags */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-xs sm:text-sm font-semibold text-white/60 mb-2 sm:mb-3 uppercase tracking-wider">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`
                          inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium 
                          bg-gradient-to-r ${project.gradient} text-white rounded-full
                          hover:scale-105 transition-all duration-300 cursor-default
                          shadow-lg hover:shadow-xl
                        `}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>
              </div>

              {/* Floating Particles */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                <div className={`absolute top-2 right-2 sm:top-4 sm:right-4 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-gradient-to-r ${project.gradient} rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500`}></div>
                <div className={`absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-gradient-to-r ${project.gradient} rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-700`} style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;