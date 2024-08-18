import React from 'react';

interface Service {
  title: string;
  description: string;
  image: string;
  color: string;
  opacity: string;
}

const services: Service[] = [
  // ... your service data
];

function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className={`p-4 rounded-lg shadow-md ${service.color} ${service.opacity}`}
          >
            <img src={service.image} alt={service.title} className="w-full rounded-md mb-4 object-cover" />
            <h2 className="text-xl font-semibold text-center">{service.title}</h2>
            <p className="text-gray-700 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;