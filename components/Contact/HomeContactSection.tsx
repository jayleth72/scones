// components/HomeContactSection.tsx
const HomeContactSection = () => {
    return (
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto px-4" id="contact">
          <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="flex items-center mb-4 md:mb-0 mr-0 md:mr-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v14m8-9a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <a href="tel:+61431548039" className="text-lg">0431 548 039</a>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 14l7-7 7 7M5 14l7 7 7-7"
                />
              </svg>
              <a href="mailto:jayleth@pm.me" className="text-lg">jayleth@pm.me</a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HomeContactSection;
  