import React from 'react';
import DarkModeToggle from './DarkModeToggle';
export const Navbar = () => {
  return (
    <nav className="  sticky top-0 z-50  bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-screen-xl mx-auto py-4 px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold hidden md:block">
          Nahi's Portfolio
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-6 text-sm sm:text-base">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About Me</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>

        {/* Button */}
        <button className="hidden md:inline bg-gradient-to-r from-green-500 to-purple-500 text-white px-4 py-2 rounded-full hover:scale-105 transform transition duration-300">
          Contact Me
        </button>
          <DarkModeToggle />
      </div>
    
    </nav>
  );
};
