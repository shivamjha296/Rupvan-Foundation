import React from 'react';
import { Heart, BookOpen, Lightbulb, Users, Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-50 py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-50 to-gray-50 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <Heart className="h-12 w-12 text-rose-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
              About Rupvan Foundation
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Providing exceptional care and creating a loving community for seniors since 2005
            </p>
          </div>
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center mb-16">
            <div>
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-rose-600 mr-3" />
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Our Mission
                </h2>
              </div>
              <div className="border-l-4 border-rose-500 pl-4 my-6">
                <p className="text-xl text-gray-700 italic">
                  "To create a nurturing environment where seniors live with dignity, purpose, and joy."
                </p>
              </div>
              <p className="mt-4 text-lg text-gray-600">
                At Rupvan Foundation, our mission is to provide a nurturing and enriching
                environment where seniors can live their golden years with dignity, purpose,
                and joy. We believe in creating a home where every resident feels valued,
                respected, and part of our extended family.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                className="rounded-xl shadow-md object-cover h-80 w-full"
                src="https://bucknercalderwoods.org/wp-content/uploads/2024/04/Senior-Living-Activities-in-a-Senior-Community.jpeg"
                alt="Senior residents enjoying activities"
              />
            </div>
          </div>

          {/* Vision */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="order-2 lg:order-1 mt-10 lg:mt-0">
              <img
                className="rounded-xl shadow-md object-cover h-80 w-full"
                src="https://www.storypoint.com/wp-content/uploads/2024/03/resident-activity-painting-outdoors-.jpg"
                alt="Elderly couple enjoying sunset"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-4">
                <Lightbulb className="h-8 w-8 text-rose-600 mr-3" />
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Our Vision
                </h2>
              </div>
              <div className="border-l-4 border-rose-500 pl-4 my-6">
                <p className="text-xl text-gray-700 italic">
                  "To be the leading senior care community that redefines aging as a period of continued growth, meaning, and joy."
                </p>
              </div>
              <p className="mt-4 text-lg text-gray-600">
                We envision Rupvan Foundation as a vibrant community where aging is celebrated as a natural part of life's journey. Our vision is to create an environment where seniors continue to learn, contribute, and find fulfillment every day.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Award className="h-12 w-12 text-rose-600 mx-auto mb-4" />
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do at Rupvan Foundation
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-rose-100 rounded-full">
                  <Heart className="h-6 w-6 text-rose-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-4">Compassion</h3>
              </div>
              <p className="text-gray-600">
                We treat each resident with genuine care and understanding, ensuring their
                comfort and well-being are our top priorities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-amber-100 rounded-full">
                  <Star className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-4">Excellence</h3>
              </div>
              <p className="text-gray-600">
                We maintain the highest standards in healthcare and service delivery,
                continuously striving to exceed expectations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-4">Community</h3>
              </div>
              <p className="text-gray-600">
                We foster a warm, inclusive environment where residents can build meaningful
                relationships and enjoy a rich social life.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Users className="h-10 w-10 text-rose-600 mx-auto mb-4" />
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Leadership Team
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <img
                className="mx-auto h-40 w-40 rounded-full object-cover border-4 border-rose-100"
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                alt="Director"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-900">Sarah Johnson</h3>
              <p className="text-rose-600 font-medium">Executive Director</p>
            </div>
            <div className="text-center">
              <img
                className="mx-auto h-40 w-40 rounded-full object-cover border-4 border-rose-100"
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                alt="Medical Director"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-900">Dr. Michael Chen</h3>
              <p className="text-rose-600 font-medium">Medical Director</p>
            </div>
            <div className="text-center">
              <img
                className="mx-auto h-40 w-40 rounded-full object-cover border-4 border-rose-100"
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                alt="Activities Director"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-900">Emily Rodriguez</h3>
              <p className="text-rose-600 font-medium">Activities Director</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;