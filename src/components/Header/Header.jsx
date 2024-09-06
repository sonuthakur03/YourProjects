import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaGfsGOp9KAO_5liDu2F1B9t0OvDUzWuUD0g&s"
          alt="Logo"
          className="h-10 rounded-full"
        />
        <p className="text-3xl m-2 font-bold">YourProjects</p>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-blue-400 font-bold" : "text-white"
                }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 hover:underline lg:p-0`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-blue-400 font-bold" : "text-white"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 hover:underline lg:p-0`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-blue-400 font-bold" : "text-white"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 hover:underline lg:p-0`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-blue-400 font-bold" : "text-white"
                }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 hover:underline lg:p-0`
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/design"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-blue-400 font-bold" : "text-white"
                }border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 hover:underline lg:p-0`
              }
            >
              Designs
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex items-center space-x-4">
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
          Get Started
        </button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Log In
        </button>
      </div>
    </header>
  );
};

export default Header;
