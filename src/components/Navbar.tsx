
import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import MindSyncLogo from './MindSyncLogo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const services = [
    'Software Development',
    'Cloud Services', 
    '3D Animation',
    'UI/UX Design',
    'Digital Marketing'
  ];

  const works = [
    'Web Development',
    'Mobile Development', 
    'Design Projects',
    'Cloud Infrastructure'
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-amber-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <MindSyncLogo className="w-10 h-10 mr-3" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              MindSyncStudio
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-900 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="text-gray-900 hover:text-amber-600 px-3 py-2 text-sm font-medium flex items-center transition-colors">
                  Our Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {services.map((service, index) => (
                    <a key={index} href="#services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600">
                      {service}
                    </a>
                  ))}
                </div>
              </div>

              {/* Works Dropdown */}
              <div className="relative group">
                <button className="text-gray-900 hover:text-amber-600 px-3 py-2 text-sm font-medium flex items-center transition-colors">
                  Our Works
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {works.map((work, index) => (
                    <a key={index} href="#works" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600">
                      {work}
                    </a>
                  ))}
                </div>
              </div>

              <a href="#about" className="text-gray-900 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">
                About Us
              </a>
              <a href="#clients" className="text-gray-900 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">
                Clients
              </a>
              <a href="#contact" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-amber-600 hover:to-orange-600 transition-colors">
                Book a Consult
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-amber-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-amber-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="text-gray-900 hover:text-amber-600 block px-3 py-2 text-base font-medium">
              Home
            </a>
            <a href="#services" className="text-gray-900 hover:text-amber-600 block px-3 py-2 text-base font-medium">
              Our Services
            </a>
            <a href="#works" className="text-gray-900 hover:text-amber-600 block px-3 py-2 text-base font-medium">
              Our Works
            </a>
            <a href="#about" className="text-gray-900 hover:text-amber-600 block px-3 py-2 text-base font-medium">
              About Us
            </a>
            <a href="#clients" className="text-gray-900 hover:text-amber-600 block px-3 py-2 text-base font-medium">
              Clients
            </a>
            <a href="#contact" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white block px-3 py-2 rounded-lg text-base font-medium hover:from-amber-600 hover:to-orange-600 mx-3">
              Book a Consult
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
