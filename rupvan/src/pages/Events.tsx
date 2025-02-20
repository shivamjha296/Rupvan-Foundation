// import React from 'react';
import { Calendar } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Spring Garden Party",
      date: "April 15, 2024",
      time: "2:00 PM - 4:00 PM",
      description: "Join us for our annual Spring Garden Party featuring live music, refreshments, and garden activities.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Art & Craft Workshop",
      date: "April 20, 2024",
      time: "10:00 AM - 12:00 PM",
      description: "Express your creativity in our monthly art workshop led by local artists.",
      image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const pastEvents = [
    {
      id: 3,
      title: "Holiday Celebration",
      date: "December 25, 2023",
      description: "A wonderful celebration with family and friends featuring carols and festive treats.",
      image: "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "Music & Dance Evening",
      date: "March 1, 2024",
      description: "An evening of classic tunes and dancing that brought joy to all our residents.",
      image: "https://images.unsplash.com/photo-1573496799515-eebbd19d5c10?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upcoming Events Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900">Upcoming Events</h1>
            <p className="mt-4 text-xl text-gray-600">
              Join us for these exciting upcoming activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{event.date} | {event.time}</span>
                  </div>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Past Events</h2>
            <p className="mt-4 text-xl text-gray-600">
              Memories from our recent celebrations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;