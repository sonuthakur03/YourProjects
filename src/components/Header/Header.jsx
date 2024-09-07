import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaGfsGOp9KAO_5liDu2F1B9t0OvDUzWuUD0g&s"
          alt="Logo"
          className="md:h-10 h-7  rounded-full"
        />
        <p className="lg:text-3xl md:xl text-lg m-2 font-bold">YourProjects</p>
      </div>
      <nav>
        <ul className="flex space-x-0 lg:space-x-6 text-sm md:text-base lg:text-lg">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 pr-1 md:pr-4 pl-3 duration-200 ${
                  isActive ? "text-blue-400 font-bold" : "text-white"
                }  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 hover:underline lg:p-0`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-2 pr-1 md:pr-4 pl-3 duration-200 ${
                  isActive ? "text-blue-400 font-bold" : "text-white"
                }  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 hover:underline lg:p-0`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `block py-2 pr-1 md:pr-4 pl-3 duration-200 ${
                  isActive ? "text-blue-400 font-bold" : "text-white"
                }   border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 hover:underline lg:p-0`
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/design"
              className={({ isActive }) =>
                `block py-2 pr-1 md:pr-4 pl-3 duration-200 ${
                  isActive ? "text-blue-400 font-bold" : "text-white"
                } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 hover:underline lg:p-0`
              }
            >
              Images
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-2 pr-1 md:pr-4 pl-3 duration-200 ${
                  isActive ? "text-blue-400 font-bold" : "text-white"
                }  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 hover:underline lg:p-0`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className=" hidden lg:flex items-center space-x-4">
        <Link to="/login">
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            Get Started
          </button>
        </Link>
        <Link to="/login">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Log In
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
