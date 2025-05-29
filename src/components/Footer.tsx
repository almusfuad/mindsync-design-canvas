
import React from 'react';
import { Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const iconMap = {
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube
};

const Footer = () => {
  const { company, socialMedia } = portfolioData;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {company.name}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {company.description}
            </p>
            <div className="text-sm text-gray-400">
              <p>{company.address}</p>
              <p className="mt-2">{company.phone}</p>
              <p>{company.email}</p>
            </div>
            <div className="flex space-x-4">
              {socialMedia.map((social, index) => {
                const IconComponent = iconMap[social.icon];
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* About & Services */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#about" className="hover:text-white transition-colors">Our Team</a></li>
                <li><a href="#works" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#clients" className="hover:text-white transition-colors">Clients</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#services" className="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Mobile Apps</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">UI/UX Design</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Cloud Services</a></li>
              </ul>
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Capabilities</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Full-Stack Development</li>
              <li>Cloud Architecture</li>
              <li>DevOps & CI/CD</li>
              <li>API Development</li>
              <li>Database Design</li>
              <li>Security Implementation</li>
              <li>Performance Optimization</li>
              <li>Quality Assurance</li>
            </ul>
          </div>

          {/* Contact & Booking */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4 text-gray-300">
              <p>Ready to start your project?</p>
              <div className="space-y-3">
                <a
                  href="#contact"
                  className="block bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  Book a Consultation
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="block border border-gray-600 text-gray-300 py-3 px-6 rounded-lg font-semibold hover:border-gray-400 hover:text-white transition-colors text-center"
                >
                  Send Email
                </a>
              </div>
              <div className="text-sm text-gray-400">
                <p>Business Hours:</p>
                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p>Sat: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 {company.name}. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
