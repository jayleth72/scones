// components/HeroSection.tsx
const HeroSection = () => {
    return (
      <div className="relative bg-gray-900 text-white z-0">
        {/* Hero image */}
        <img
          src="/hero/scones_hero.jpg" // Path to your hero image
          alt="Hero Image"
          className="w-full h-auto object-cover object-center"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0  z-10"></div>
  
        {/* Hero content */}
        <div className="flex items-end justify-center h-full px-4 pb-8">
          {/* <h1 className="text-4xl md:text-6xl font-bold">Welcome to Scones and IT</h1>
          <p className="text-lg md:text-xl mt-4">Your Trusted IT Solution for the Mary Valley</p>*/}
          <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold hover:bg-blue-600">
            Need Help?
          </button> 
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  
 
