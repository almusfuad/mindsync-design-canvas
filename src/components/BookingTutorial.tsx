
import React from 'react';
import { Play } from 'lucide-react';

const BookingTutorial = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How to Book Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch this quick tutorial to learn how easy it is to book a consultation with our team
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="aspect-video relative">
              {/* YouTube Video Embed */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="How to Book Our Services"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              
              {/* Custom Play Button Overlay (optional) */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                <div className="bg-white/90 rounded-full p-4">
                  <Play className="h-12 w-12 text-blue-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Tutorial Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Service</h3>
              <p className="text-gray-600">Select the service that best fits your needs from our portfolio</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Schedule Call</h3>
              <p className="text-gray-600">Book a free consultation call to discuss your project requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Started</h3>
              <p className="text-gray-600">Receive your custom proposal and begin your project journey</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingTutorial;
