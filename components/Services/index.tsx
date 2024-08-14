import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faLaptop, faPrint, faWifi, faRobot, faStore } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

interface Service {
    title: string;
    description: string;
    image: string;
    color: string; // Tailwind CSS utility class for the card background color
    opacity: string;
  }
  
  const services: Service[] = [
    {
      title: "Smartphone Solutions",
      description: "Help and support for smartphone related issues .",
      image: "/services/phone.jpg",
      color: "bg-blue-500", // Tailwind CSS utility class for blue background
      opacity: "bg-opacity-10"
    },
    {
      title: "Laptop & Desktop Solutions",
      description: "From upgrades to virus removal, we handle all your laptop and desktop needs.",
      image: "/services/laptop.jpg",
      color: "bg-green-500", // Tailwind CSS utility class for green background
      opacity: "bg-opacity-10"
    },
    {
      title: "Printer Troubleshooting",
      description: "Just can't print anything?  We'll get you printing.",
      image: "/services/printer.jpg",
      color: "bg-yellow-500", // Tailwind CSS utility class for yellow background
      opacity: "bg-opacity-10"
    },
    {
      title: "Internet Setup and problem solving",
      description: "Get connected with our efficient internet installation and troubleshooting services.",
      image: "/services/wifi.jpg",
      color: "bg-indigo-500", // Tailwind CSS utility class for indigo background
      opacity: "bg-opacity-10"
    },
    {
      title: "Mobile app and web page set development",
      description: "Need a  mobile app or web page for your business, we can help",
      image: "/services/app.jpg",
      color: "bg-indigo-500", // Tailwind CSS utility class for indigo background
      opacity: "bg-opacity-10"
    },
    {
      title: "AI Consultancy Services",
      description: "Harness the power of AI with our expert guidance and implementation solutions.",
      image: "/services/ai.jpg",
      color: "bg-purple-500", // Tailwind CSS utility class for purple background
      opacity: "bg-opacity-10"
    },
  ];
  
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