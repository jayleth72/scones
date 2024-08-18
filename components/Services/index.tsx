import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faLaptop, faPrint, faWifi, faRobot, faStore } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import services from '@/constants/services'
import Service from '@/interfaces/models'

  
  
  function ServicesSection() {
    return (
      <section className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
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
    </section>
    );
  }
  
  export default ServicesSection;