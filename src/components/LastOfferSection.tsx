
import React from 'react';
import portfolioData from '../data/portfolio.json';

const LastOfferSection = () => {
  const lastOffer = portfolioData.lastOffer;

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="text-sm font-semibold bg-white/20 inline-block px-4 py-2 rounded-full mb-6">
              Latest Success Story
            </div>
            <h2 className="text-4xl font-bold mb-6">
              {lastOffer.title}
            </h2>
            <p className="text-xl leading-relaxed mb-8 text-blue-100">
              {lastOffer.description}
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-white">{lastOffer.value}</div>
                <div className="text-blue-200">Project Value</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">{lastOffer.duration}</div>
                <div className="text-blue-200">Completion Time</div>
              </div>
            </div>

            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Learn More About This Project
            </button>
          </div>

          <div className="relative">
            <img
              src={lastOffer.image}
              alt={lastOffer.title}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-gray-900">40%</div>
              <div className="text-sm text-gray-600">Cost Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastOfferSection;
