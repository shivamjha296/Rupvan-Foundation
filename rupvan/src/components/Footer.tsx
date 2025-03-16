import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-rose-500" />
              <span className="ml-2 text-xl font-semibold">Rupvan Foundation</span>
            </div>
            <p className="text-gray-300 mb-4">
              Providing compassionate care and a vibrant community for seniors since 2005.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white transition-colors">Events</Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-gray-300 hover:text-white transition-colors">Volunteer</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">24/7 Medical Care</li>
              <li className="text-gray-300">Nutritious Meals</li>
              <li className="text-gray-300">Engaging Activities</li>
              <li className="text-gray-300">Personal Care</li>
              <li className="text-gray-300">Social Community</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-rose-500 mr-2 mt-0.5" />
                <span className="text-gray-300">123 Care Lane, Mumbai, Maharashtra 400001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-rose-500 mr-2" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-rose-500 mr-2" />
                <a href="mailto:info@rupvanfoundation.org" className="text-gray-300 hover:text-white transition-colors">
                  info@rupvanfoundation.org
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} Rupvan Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 