
import React from 'react';
import { Star } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const RatingsSection = () => {
  const { ratingsSummary, reviews } = portfolioData;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Client Reviews & Ratings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - see what our clients have to say about working with us
          </p>
        </div>

        {/* Rating Summary */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <div className="text-6xl font-bold text-blue-600 mb-2">
                {ratingsSummary.average}
              </div>
              <div className="flex justify-center lg:justify-start mb-2">
                {renderStars(Math.floor(ratingsSummary.average))}
              </div>
              <div className="text-gray-600">
                Based on {ratingsSummary.total} reviews
              </div>
            </div>

            <div className="space-y-3">
              {Object.entries(ratingsSummary.breakdown)
                .reverse()
                .map(([stars, count]) => (
                  <div key={stars} className="flex items-center">
                    <span className="text-sm font-medium text-gray-700 w-8">
                      {stars}★
                    </span>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{
                          width: `${(count / ratingsSummary.total) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 w-12">{count}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Top Reviews */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Top Client Reviews
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.slice(0, 3).map((review) => (
              <div key={review.id} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-600">{review.company}</div>
                  </div>
                </div>
                <div className="flex mb-3">{renderStars(review.rating)}</div>
                <p className="text-gray-700 leading-relaxed">{review.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatingsSection;
