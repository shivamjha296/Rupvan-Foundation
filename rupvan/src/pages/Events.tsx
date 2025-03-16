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
      image: "https://www.tribecacare.com/wp-content/uploads/2019/02/fun-activities-in-old-age-home.png"
    },
    {
      id: 2,
      title: "Art & Craft Workshop",
      date: "April 20, 2024",
      time: "10:00 AM - 12:00 PM",
      description: "Express your creativity in our monthly art workshop led by local artists.",
      image: "https://www.griswoldcare.com/wp-content/uploads/2024/04/bigstock-Portrait-Of-Retired-Senior-Wom-297685669.jpg"
    }
  ];

  const pastEvents = [
    {
      id: 3,
      title: "Holiday Celebration",
      date: "December 25, 2023",
      description: "A wonderful celebration with family and friends featuring carols and festive treats.",
      image: "https://img.indiaforums.com/media/640x0/8/3343-school-children-celebrating-christmas-with-senior-citizens-at-a-old-age-home-in-a-programme-orginizi.jpg"
    },
    {
      id: 4,
      title: "Music & Dance Evening",
      date: "March 1, 2024",
      description: "An evening of classic tunes and dancing that brought joy to all our residents.",
      image: "https://ssww-blog.s3.amazonaws.com/blog/wp-content/uploads/musical-instruments-for-senior-residents.jpg"
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
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transform transition duration-300 hover:scale-102 hover:shadow-xl">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <div className="flex items-center text-rose-600 mb-4">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span className="font-medium">{event.date} | {event.time}</span>
                  </div>
                  <p className="text-gray-600">{event.description}</p>
                </div>
                <div className="p-6 pt-0">
                  <button className="w-full py-2 px-4 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-md transition-colors duration-300">
                    Register Now
                  </button>
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
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transform transition duration-300 hover:shadow-xl">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <div className="flex items-center mb-1">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">{event.date}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
                <div className="p-6 pt-0 mt-auto">
                  <button className="w-full py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-md transition-colors duration-300">
                    View Gallery
                  </button>
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