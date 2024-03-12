// components/ContactPage.tsx
const ContactPage = () => {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        
        {/* Phone number */}
        <div className="flex items-center mb-4">
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
        
        {/* Email address */}
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
          <a href="mailto:info@example.com" className="text-lg">jayleth@pm.me</a>
        </div>
      </div>
    );
  };
  
  export default ContactPage;
  