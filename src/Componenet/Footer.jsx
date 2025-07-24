import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTelegram,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" bg-white dark:bg-black text-black dark:text-white py-10">
      <div className="container mx-auto px-6 md:px-8 lg:px-24">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center space-y-6 md:space-y-0">
          {/* Left: About */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Nahom
            </h3>
            <p className="text-gray-400 mt-2">
              Full-stack Web Developer based in Ethiopia, <br />
              specialized in building responsive web applications and user interfaces.
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-4 text-2xl mt-4">
              <a href="https://github.com/nahi-t" target="_blank" rel="noreferrer">
                <FaGithub className="hover:text-purple-500" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin className="hover:text-blue-400" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter className="hover:text-blue-300" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook className="hover:text-blue-600" />
              </a>
              <a href="https://www.instagram.com/naket_3196" target="_blank" rel="noreferrer">
                <FaInstagram className="hover:text-pink-500" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <FaYoutube className="hover:text-red-500" />
              </a>
              <a href="https://t.me/@N_alamtsehay" target="_blank" rel="noreferrer">
                <FaTelegram className="hover:text-blue-400" />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank" rel="noreferrer">
                <FaWhatsapp className="hover:text-green-400" />
              </a>
            </div>
          </div>

          {/* Right: Subscribe */}
          <div className="w-full md:w-1/2">
            <form className="flex flex-col sm:flex-row items-start sm:items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-auto flex-1 p-2 rounded-l-lg bg-white dark:bg-gray-600 text-black dark:text-white border border-gray-600 focus:outline-none focus:border-green-400"
              />
              <button
                type="submit"
                className="mt-3 sm:mt-0 bg-gradient-to-r from-green-500 to-purple-500 text-white px-4 py-2 rounded-r-lg hover:scale-105 transform transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom text */}
        <p className="text-center text-gray-500 mt-10 text-sm">
          © {new Date().getFullYear()} Nahom Ketema. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
