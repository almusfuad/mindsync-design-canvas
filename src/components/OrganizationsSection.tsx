
import React from 'react';
import portfolioData from '../data/portfolio.json';

const OrganizationsSection = () => {
  const organizations = portfolioData.organizations;

  return (
    <section className="py-16 bg-white border-t border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Professional Affiliations
          </h2>
          <p className="text-lg text-gray-600">
            We maintain memberships and partnerships with leading technology organizations
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12">
          {organizations.map((org, index) => (
            <div key={index} className="flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-400 hover:text-amber-600 transition-colors duration-300 cursor-default">
                {org}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizationsSection;
