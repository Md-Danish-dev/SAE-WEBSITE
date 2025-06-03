import React from 'react';
import EventsImage1 from '../../../assets/eventsImage1.png';

const EventsComponent = () => {
  const events = [
    {
      id: 1,
      title: "Zaplin Junker",
      description: "Annual fun event of SAE, IIT Roorkee for freshers. Annual fun event of SAE, IIT Roorkee for freshers. Annual fun event of SAE, IIT Roorkee for freshers. Annual fun event of SAE, IIT Roorkee for freshers. Annual fun event of SAE, IIT Roorkee for freshers",
      image: EventsImage1
    },
    {
      id: 2,
      title: "Evorush'23",  
      description: "Annual fun event of SAE, IIT Roorkee for freshers. Annual fun event of SAE, IIT Roorkee for freshers. Annual fun event of SAE, IIT Roorkee for freshers. Annual fun event of SAE, IIT Roorkee for freshers. Annual fun event of SAE, IIT Roorkee for freshers",
      image: EventsImage1
    },
    {
      id: 3,
      title: "Industrial Trip",
      description: "Annual fun event of SAE, IIT Roorkee for freshers. Annual fun event of SAE, IIT Roorkee for freshers. Annual fun event of SAE, IIT Roorkee for freshers. Annual fun event of SAE, IIT Roorkee for freshers. Annual fun event of SAE, IIT Roorkee for freshers",
      image: EventsImage1
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="text-center py-12">
        <h1 className="text-5xl font-bold text-blue-400 italic tracking-wider">
          EVENTS
        </h1>
      </div>

      {/* Events List */}
      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-12">
        {events.map((event, index) => (
          <div key={event.id} className="flex flex-col lg:flex-row items-center gap-8">
            {/* Image Container */}
            <div className="flex-shrink-0 w-full lg:w-96">
              <div className="bg-gray-800 p-4 rounded-lg">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover rounded"
                />
              </div>
            </div>

            {/* Content Container */}
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-bold text-white">
                {event.title}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsComponent;