
import React from 'react';
import { Briefcase, Star, Users } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const iconMap = {
  briefcase: Briefcase,
  star: Star,
  users: Users
};

const PlatformsSection = () => {
  const platforms = portfolioData.platforms;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Find Us on Leading Platforms
          </h2>
          <p className="text-lg text-gray-600">
            Connect with us on your preferred freelancing platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => {
            const IconComponent = iconMap[platform.icon];
            return (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center group"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {platform.name}
                </h3>
                <p className="text-gray-600">
                  View our profile and reviews
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
