// import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              About Rupvan Foundation
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Providing exceptional care and creating a loving community for seniors since 1995
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                At Golden Years Haven, our mission is to provide a nurturing and enriching
                environment where seniors can live their golden years with dignity, purpose,
                and joy. We believe in creating a home where every resident feels valued,
                respected, and part of our extended family.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <img
                className="rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1573496799515-eebbd19d5c10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Senior residents enjoying activities"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compassion</h3>
              <p className="text-gray-600">
                We treat each resident with genuine care and understanding, ensuring their
                comfort and well-being are our top priorities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in healthcare and service delivery,
                continuously striving to exceed expectations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community</h3>
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
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-12">
              Our Leadership Team
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <img
                className="mx-auto h-40 w-40 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                alt="Director"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-900">Sarah Johnson</h3>
              <p className="text-gray-600">Executive Director</p>
            </div>
            <div className="text-center">
              <img
                className="mx-auto h-40 w-40 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                alt="Medical Director"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-900">Dr. Michael Chen</h3>
              <p className="text-gray-600">Medical Director</p>
            </div>
            <div className="text-center">
              <img
                className="mx-auto h-40 w-40 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1573497019236-7fa8ff43d4cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                alt="Activities Director"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-900">Emily Rodriguez</h3>
              <p className="text-gray-600">Activities Director</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;