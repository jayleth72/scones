// components/Navbar.tsx

"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-4">
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link href="/" className="text-lg font-bold flex items-center">
            
              {/* Place your logo image or text here */}
              <img src="/your-logo-path.svg" alt="Logo" className="mr-2 h-8" />
              Brand
            
          </Link>
          <button onClick={toggleMenu} className="md:hidden">
            {/* Icon or text to open/close menu */}
            Menu
          </button>
        </div>
        <div className={`md:flex space-x-4 ${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row w-full md:w-auto mt-4 md:mt-0`}>
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          {/* Add more navigation links here */}
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden absolute w-full bg-gray-700"
        >
          {/* Mobile menu content, if needed to be separate or additional */}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
