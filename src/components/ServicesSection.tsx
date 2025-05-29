
import React, { useEffect, useState } from 'react';
import { Code, Cloud, Box, Paintbrush, TrendingUp } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const iconMap = {
  code: Code,
  cloud: Cloud,
  box: Box,
  paintbrush: Paintbrush,
  'trending-up': TrendingUp
};

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const services = portfolioData.services;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver cutting-edge solutions that transform your business and accelerate growth
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {services.concat(services).map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <div key={`${service.id}-${index}`} className="w-full md:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                    <div className="relative h-48">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <IconComponent className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                      <button className="mt-4 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {services.map((_, index) => (
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

export default ServicesSection;
