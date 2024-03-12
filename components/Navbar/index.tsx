// components/Navbar.tsx

"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsList, BsX } from "react-icons/bs";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  return (
    <nav className="bg-primary text-white z-50">
      <div className="flex justify-between items-center p-4">
      <Link href="/" className="text-lg font-bold flex items-center">
          
          <Image
          src="/logo-images/logo.png"
          alt="lgog image"
          width={300}
          height={150}
          className="cursor-pointer h-8"
        />
      </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        <BsList className="h-8 w-8 text-[#FF5733]" />
          
        </button>
        <div className="hidden md:flex space-x-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="#contact" className="hover:underline">
              Contact
            </Link>
            {/* More navigation items for larger screens */}
          </div>
      </div>
      
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.5 }}
        className="absolute top-0 left-0 bottom-0 w-[75%] bg-gray-700 p-4 md:hidden z-50"
        initial={false}
      >
        <div className="flex justify-end">
          <button onClick={() => setIsOpen(false)}>
          <BsX className="h-8 w-8 text-[#FF5733]" />
            
          </button>
        </div>
        <div className="flex flex-col mt-8 z-50">
          <Link href="/" className="hover:underline mb-4" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/contact" className="hover:underline mb-4" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          {/* Add more mobile navigation links here */}
        </div>
      </motion.div>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
