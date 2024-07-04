interface Service {
    title: string;
    description: string;
    icon: string; // Tailwind CSS utility class for the icon
    color: string; // Tailwind CSS utility class for the card background color
  }
  
  const services: Service[] = [
    {
      title: "Smartphone Solutions",
      description: "Help and support for smartphone related issues .",
      icon: "fas fa-mobile", // Font Awesome icon for smartphone
      color: "bg-blue-500", // Tailwind CSS utility class for blue background
    },
    {
      title: "Laptop & Desktop Solutions",
      description: "From upgrades to virus removal, we handle all your laptop and desktop needs.",
      icon: "fas fa-laptop", // Font Awesome icon for laptop
      color: "bg-green-500", // Tailwind CSS utility class for green background
    },
    {
      title: "Printer Troubleshooting",
      description: "Just can't print anything?  We'll get you printing.",
      icon: "fas fa-print", // Font Awesome icon for printer
      color: "bg-yellow-500", // Tailwind CSS utility class for yellow background
    },
    {
      title: "Internet Setup and problem solving",
      description: "Get connected with our efficient internet installation and troubleshooting services.",
      icon: "fas fa-wifi", // Font Awesome icon for Wi-Fi
      color: "bg-indigo-500", // Tailwind CSS utility class for indigo background
    },
    {
      title: "AI Consultancy Services",
      description: "Harness the power of AI with our expert guidance and implementation solutions.",
      icon: "fas fa-robot", // Font Awesome icon for robot (AI)
      color: "bg-purple-500", // Tailwind CSS utility class for purple background
    },
  ];
  
  function ServicesSection() {
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {services.map((service) => (
          <div
            key={service.title}
            className={`p-4 rounded-lg shadow-md ${service.color}`}
          >
            <i className={`text-4xl text-white ${service.icon}`} />
            <h2 className="text-2xl font-semibold mt-4">{service.title}</h2>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </section>
    );
  }
  
  export default ServicesSection;