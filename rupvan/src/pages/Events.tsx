import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Annual Day Celebration 2025",
      date: "December 15, 2025",
      location: "Rupvan Foundation Main Hall",
      description: "A grand celebration showcasing the talents of our residents with cultural performances, music, and dance.",
      images: [
        "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=600"
      ]
    },
    {
      id: 2,
      title: "Diwali Festival of Lights",
      date: "November 1, 2025",
      location: "Community Garden",
      description: "Traditional Diwali celebration with diyas, rangoli making, sweets distribution, and festive prayers.",
      images: [
        "https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/949592/pexels-photo-949592.jpeg?auto=compress&cs=tinysrgb&w=600"
      ]
    },
    {
      id: 3,
      title: "Health & Wellness Camp",
      date: "October 10, 2025",
      location: "Medical Wing",
      description: "Free health checkup camp with consultations from specialist doctors, physiotherapy sessions, and wellness talks.",
      images: [
        "https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3952048/pexels-photo-3952048.jpeg?auto=compress&cs=tinysrgb&w=600"
      ]
    },
    {
      id: 4,
      title: "Music & Dance Evening",
      date: "September 22, 2025",
      location: "Open Air Theater",
      description: "An evening of classical music and traditional dance performances by residents and special guests.",
      images: [
        "https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=600"
      ]
    },
    {
      id: 5,
      title: "Independence Day Celebration",
      date: "August 15, 2025",
      location: "Main Courtyard",
      description: "Patriotic celebration with flag hoisting, cultural program, and special lunch for all residents.",
      images: [
        "https://images.pexels.com/photos/1449767/pexels-photo-1449767.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=600"
      ]
    },
    {
      id: 6,
      title: "Yoga & Meditation Workshop",
      date: "July 5, 2025",
      location: "Yoga Hall",
      description: "Special workshop on yoga, meditation, and breathing exercises for mental and physical wellness.",
      images: [
        "https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=600"
      ]
    },
    {
      id: 7,
      title: "Summer Garden Party",
      date: "June 20, 2025",
      location: "Garden Area",
      description: "A delightful summer afternoon with refreshments, live music, gardening activities, and social gathering.",
      images: [
        "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2041556/pexels-photo-2041556.jpeg?auto=compress&cs=tinysrgb&w=600"
      ]
    },
    {
      id: 8,
      title: "Art & Craft Exhibition",
      date: "May 18, 2025",
      location: "Activity Room",
      description: "Exhibition showcasing beautiful artwork, handicrafts, and creative projects made by our talented residents.",
      images: [
        "https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=600"
      ]
    },
    {
      id: 9,
      title: "Birthday Celebrations",
      date: "Monthly Event",
      location: "Dining Hall",
      description: "Monthly birthday celebration for all residents born in that month with cake cutting, games, and fun activities.",
      images: [
        "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=600"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Events Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating life, creating memories, and fostering community through meaningful events and activities at Rupvan Foundation
          </p>
        </div>

        {/* Events Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div 
              key={event.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Image Gallery - Showing first image */}
              <div className="relative h-64 overflow-hidden group">
                <img
                  src={event.images[0]}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex items-center text-sm mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {event.title}
                </h3>
                
                <div className="flex items-start text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0 text-rose-600" />
                  <span className="text-sm">{event.location}</span>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {event.description}
                </p>

                {/* Image Thumbnails */}
                <div className="mt-4 flex gap-2">
                  {event.images.map((img, idx) => (
                    <div 
                      key={idx} 
                      className="w-16 h-16 rounded-md overflow-hidden border-2 border-gray-200 hover:border-rose-500 transition-colors"
                    >
                      <img
                        src={img}
                        alt={`${event.title} ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-rose-50 to-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Want to Learn More About Our Events?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            For more information about upcoming events or to participate in our activities, please contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-md transition-colors duration-300"
            >
              Contact Us
            </a>
            <a 
              href="/volunteer" 
              className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-50 text-rose-600 font-medium rounded-md border-2 border-rose-600 transition-colors duration-300"
            >
              Volunteer With Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;