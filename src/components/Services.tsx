import React from "react";
import { ExternalLink, List, Star, FileText, Users } from "lucide-react";

const Services = () => {
  const handleViewAllServices = () => {
    window.open("https://harinath-services.vercel.app/", "_blank");
  };

  const serviceIcons = [
    { icon: List, color: "text-blue-400" },
    { icon: Star, color: "text-purple-400" },
    { icon: FileText, color: "text-green-400" },
    { icon: Users, color: "text-yellow-400" },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 px-3 sm:px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            My Services
          </h2>
        </div>

        {/* Main Services Card - Full Width */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:border-white/30 relative overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-tr from-yellow-500/10 to-pink-500/10 rounded-full blur-xl"></div>

          {/* Floating Service Icons */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {serviceIcons.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className={`absolute opacity-10 ${item.color}`}
                  style={{
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 80 + 10}%`,
                    animationDelay: `${index * 0.5}s`,
                  }}
                >
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 animate-pulse" />
                </div>
              );
            })}
          </div>

          <div className="relative z-10">
            {/* Card Header */}
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                Professional Services
              </h3>

              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"></div>
            </div>

            {/* Card Content */}
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed text-center max-w-4xl mx-auto px-2">
                I help individuals and businesses establish a strong digital
                presence by offering access to premium services at affordable
                rates, eliminating the worry of high original costs. With a wide
                range of genuine and reliable services, I am committed to
                delivering complete satisfaction—where quality and affordability
                go hand in hand.
              </p>

              <div className="bg-white/5 rounded-xl p-4 sm:p-6 mt-6 sm:mt-8 border border-white/10">
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 text-center">
                  What You Get
                </h4>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  <div className="text-center group hover:bg-white/5 p-3 sm:p-4 rounded-lg transition-all duration-300">
                    <List className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-white/80 text-xs sm:text-sm font-medium">
                      List of Services
                    </p>
                  </div>
                  <div className="text-center group hover:bg-white/5 p-3 sm:p-4 rounded-lg transition-all duration-300">
                    <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-white/80 text-xs sm:text-sm font-medium">
                      Service Reviews
                    </p>
                  </div>
                  <div className="text-center group hover:bg-white/5 p-3 sm:p-4 rounded-lg transition-all duration-300">
                    <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-white/80 text-xs sm:text-sm font-medium">
                      Details Of Services
                    </p>
                  </div>
                  <div className="text-center group hover:bg-white/5 p-3 sm:p-4 rounded-lg transition-all duration-300">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-white/80 text-xs sm:text-sm font-medium">
                      Connections
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* View All Services Button */}
            <div className="text-center mb-6 sm:mb-8">
              <button
                onClick={handleViewAllServices}
                className="group relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-lg text-base sm:text-lg inline-flex items-center gap-2 sm:gap-3 overflow-hidden"
              >
                {/* Button Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>

                {/* Button Content */}
                <span className="relative z-10">View All Services</span>
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-white/20 blur-xl group-hover:bg-white/30 transition-all duration-300 animate-pulse"></div>
              </button>
            </div>

            {/* Note Section */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <h5 className="text-base sm:text-lg font-semibold text-white">
                  Note
                </h5>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-pulse animation-delay-1000"></div>
              </div>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                Kindly check all pages, buttons, and icons. Explore the full
                range of services I offer—each one carefully tailored to meet
                your specific needs and business goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
