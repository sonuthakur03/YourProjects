import React from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa"; // Importing icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row lg:items-center justify-between space-y-6 md:space-y-12 md:space-x-10">
        {/* Logo and Copyright Section */}
        <div className="flex items-center space-x-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaGfsGOp9KAO_5liDu2F1B9t0OvDUzWuUD0g&s"
            alt="Logo"
            className="lg:h-16 lg:w-16 h-12 w-12 rounded-full" // Adjusted size for better alignment
          />
          <p className="text-lg font-semibold">©2024 YourProjects</p>
        </div>

        {/* Navigation and Legal Sections */}
        <div className="flex flex-col lg:flex-row lg:space-x-12 w-full md:w-auto items-center justify-center h-auto">
          <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-8 lg:gap-14">
            {/* Navigation Links */}
            <div className="flex flex-col space-y-2">
              <h4 className="text-sm font-semibold">Navigation</h4>
              <ul className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 text-gray-400">
                <li>
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:underline">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
            {/* Legal Links */}
            <div className="flex flex-col space-y-2">
              <h4 className="text-sm font-semibold">Legal</h4>
              <ul className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 text-gray-400">
                <li>
                  <Link to="/terms" className="hover:underline">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link to="/policies" className="hover:underline">
                    Policies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="https://www.twitter.com"
            className="text-blue-400 hover:text-blue-500"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com"
            className="text-blue-600 hover:text-blue-700"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.github.com"
            className="text-gray-400 hover:text-gray-500"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.facebook.com"
            className="text-gray-400 hover:text-gray-500"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            className="text-gray-400 hover:text-gray-500"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
