import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Heart, 
  Clock, 
  Users, 
  Utensils, 
  Activity, 
  Shield, 
  Calendar 
} from 'lucide-react';

import RupvanImage from "../img/Rupvan1.1.jpg"; 
import Carousel from '../components/Carousel';
import Testimonial from '../components/Testimonial';
import CallToAction from '../components/CallToAction';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  // Carousel images
  const carouselImages = [
    {
      src: RupvanImage,
      alt: "Senior residents enjoying time together"
    },
    {
      src: "https://images.unsplash.com/photo-1573497019236-61f988f2454f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Elderly couple walking in garden"
    },
    {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Senior residents doing activities"
    },
    {
      src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      alt: "Caregiver assisting elderly resident"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "Moving my mother to Rupvan Foundation was the best decision we made. The staff is caring, attentive, and treats her like family.",
      author: "Priya Sharma",
      role: "Daughter of Resident",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "I've made wonderful friends here and enjoy the daily activities. The staff goes above and beyond to make us comfortable.",
      author: "Rajesh Patel",
      role: "Resident for 3 years",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "The medical care is exceptional. As a retired doctor myself, I appreciate the attention to detail and personalized care plan.",
      author: "Dr. Anil Kumar",
      role: "Resident for 1 year",
      image: "https://randomuser.me/api/portraits/men/67.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <div className="relative h-[600px]">
        <Carousel images={carouselImages} autoSlideInterval={6000} />
        <div className="absolute inset-0 flex items-center z-10">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                Welcome to Rupvan Foundation
              </h1>
              <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
                Where every day is filled with comfort, care, and companionship
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 transition-colors"
                >
                  Schedule a Visit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:bg-opacity-10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Heart className="h-12 w-12 text-rose-600 mx-auto mb-4" />
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
              A Home Filled with Love and Care
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              At Rupvan Foundation, we believe that aging should be a graceful, dignified, and fulfilling experience. Our community is designed to provide seniors with the perfect balance of independence and support.
            </p>
            <p className="text-lg text-gray-600">
              Founded in 2005, we have been serving seniors with compassion and excellence for over 15 years, creating a nurturing environment where residents thrive physically, emotionally, and socially.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Comprehensive Services
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a wide range of services tailored to meet the unique needs of each resident
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="24/7 Medical Care" 
              description="Round-the-clock medical supervision by qualified nurses and regular visits by physicians."
              icon={Shield}
              color="rose"
            />
            <ServiceCard 
              title="Nutritious Meals" 
              description="Delicious and balanced meals prepared by our chefs, with special diets accommodated."
              icon={Utensils}
              color="amber"
            />
            <ServiceCard 
              title="Engaging Activities" 
              description="Daily recreational and therapeutic activities to keep residents active and socially connected."
              icon={Activity}
              color="green"
            />
            <ServiceCard 
              title="Personal Care" 
              description="Assistance with daily activities like bathing, dressing, and grooming with dignity and respect."
              icon={Heart}
              color="purple"
            />
            <ServiceCard 
              title="Social Community" 
              description="A vibrant community that fosters friendships and meaningful social connections."
              icon={Users}
              color="blue"
            />
            <ServiceCard 
              title="Regular Outings" 
              description="Scheduled trips to local attractions, shopping centers, and cultural events."
              icon={Calendar}
              color="teal"
            />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Community Says
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our residents and their families about life at Rupvan Foundation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial 
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Facilities Gallery */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Facilities
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Take a virtual tour of our comfortable and well-equipped facilities
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="Comfortable bedroom"
                className="rounded-lg shadow-md w-full h-64 object-cover hover:opacity-90 transition-opacity"
              />
            </div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="Dining area"
                className="rounded-lg shadow-md w-full h-64 object-cover hover:opacity-90 transition-opacity"
              />
            </div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                src="https://images.unsplash.com/photo-1558442074-3c19857bc1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="Garden area"
                className="rounded-lg shadow-md w-full h-64 object-cover hover:opacity-90 transition-opacity"
              />
            </div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                src="https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="Activity room"
                className="rounded-lg shadow-md w-full h-64 object-cover hover:opacity-90 transition-opacity"
              />
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700"
            >
              View More Photos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Rupvan Foundation?
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We stand out with our commitment to excellence in senior care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Clock className="h-6 w-6 text-rose-600 mr-2" />
                Experienced Staff
              </h3>
              <p className="text-gray-600 mb-4">
                Our team consists of highly trained professionals with years of experience in senior care. They undergo regular training to stay updated with the latest care practices.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-rose-600 mr-2">•</span>
                  Certified nursing assistants available 24/7
                </li>
                <li className="flex items-start">
                  <span className="text-rose-600 mr-2">•</span>
                  Regular visits by physicians and specialists
                </li>
                <li className="flex items-start">
                  <span className="text-rose-600 mr-2">•</span>
                  Dedicated activity coordinators and therapists
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Heart className="h-6 w-6 text-rose-600 mr-2" />
                Person-Centered Care
              </h3>
              <p className="text-gray-600 mb-4">
                We recognize that each resident is unique, with their own preferences, needs, and life stories. Our care plans are tailored to individual requirements.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-rose-600 mr-2">•</span>
                  Personalized care plans developed with residents and families
                </li>
                <li className="flex items-start">
                  <span className="text-rose-600 mr-2">•</span>
                  Regular assessments to adapt to changing needs
                </li>
                <li className="flex items-start">
                  <span className="text-rose-600 mr-2">•</span>
                  Respect for individual preferences and choices
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <CallToAction 
        title="Ready to Experience the Rupvan Difference?"
        description="Schedule a visit today to tour our facilities and meet our caring staff. We're happy to answer any questions you may have."
        primaryButtonText="Schedule a Visit"
        primaryButtonLink="/contact"
        secondaryButtonText="Call Us Now"
        secondaryButtonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
    </div>
  );
};

export default Home;