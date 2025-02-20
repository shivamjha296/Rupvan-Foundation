// import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import RupvanImage from "../img/Rupvan1.1.jpg"; 

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src={RupvanImage} // Use the imported image
            alt="Senior residents enjoying time together"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to Rupvan Foundation
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Where every day is filled with comfort, care, and companionship
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700"
            >
              Schedule a Visit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Rupvan Foundation?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              We provide a nurturing environment where seniors can thrive
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Care</h3>
              <p className="text-gray-600">
                Professional medical staff available around the clock for your peace of mind
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Activities</h3>
              <p className="text-gray-600">
                Engaging daily activities to keep our residents active and social
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600">
                A warm, welcoming community where friendships flourish
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Life at Rupvan Foundation
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <img
              src="https://images.unsplash.com/photo-1573497019418-b400bb3ab074?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="Residents in garden"
              className="rounded-lg shadow-md h-64 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="Art activity"
              className="rounded-lg shadow-md h-64 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="Group activity"
              className="rounded-lg shadow-md h-64 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;