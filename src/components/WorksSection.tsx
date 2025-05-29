
import React, { useEffect, useState } from 'react';
import portfolioData from '../data/portfolio.json';

const WorksSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const works = portfolioData.works;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % works.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [works.length]);

  return (
    <section id="works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Latest Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our portfolio of successful projects that showcase our expertise and creativity
          </p>
        </div>

        {/* Works Carousel - Left to Right */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 2)}%)` }}
          >
            {works.concat(works).map((work, index) => (
              <div key={`${work.id}-${index}`} className="w-full md:w-1/2 flex-shrink-0 px-4">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex flex-wrap gap-2">
                        {work.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-blue-600 text-xs px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-blue-600 font-semibold mb-2">
                      {work.category}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {work.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {work.description}
                    </p>
                    <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                      View Project →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {works.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
