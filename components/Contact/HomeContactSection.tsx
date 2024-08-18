import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const HomeContactSection = () => {
  return (
    <section className="bg-gray-200 py-12">
      <div className="container mx-auto px-4" id="contact">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Jay</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="flex items-center mb-4 md:mb-0 mr-0 md:mr-8">
            <FontAwesomeIcon icon={faPhone} className="h-6 w-6 mr-2 text-blue-500" />
            <a href="tel:+61431548039" className="text-lg">0431 548 039</a>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6 mr-2 text-blue-500" />
            <a href="mailto:jayleth@pm.me" className="text-lg">jayleth@pm.me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContactSection;