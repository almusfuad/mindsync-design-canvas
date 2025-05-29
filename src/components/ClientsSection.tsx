
import React from 'react';
import portfolioData from '../data/portfolio.json';

const ClientsSection = () => {
  const clients = portfolioData.clients;

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to work with some of the world's most innovative companies
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client) => (
            <div key={client.id} className="flex items-center justify-center p-8 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group">
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-12 w-auto filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Additional Client Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">Fortune 500</div>
            <div className="text-gray-600">Companies Served</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-600">Countries Reached</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">$100M+</div>
            <div className="text-gray-600">Revenue Generated</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">99%</div>
            <div className="text-gray-600">Retention Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
