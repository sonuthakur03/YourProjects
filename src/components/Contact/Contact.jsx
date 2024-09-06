// Contact.jsx
import React from "react";
import { FaLocationPin, FaEnvelope, FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="bg-gray-700 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-700 text-white py-16">
        <h2 className="text-5xl font-bold mb-7 text-center">GET IN TOUCH</h2>
        <div className="container flex flex-col md:flex-row md:justify-center items-center">
          {/* Contact Form */}
          <div className="flex-1 mb-8 md:mb-0 flex justify-center items-center">
            <form className="w-full max-w-4xl flex gap-6 bg-gray-100 p-16 rounded-lg shadow-lg">
              <div className="w-1/2">
                <h1 className="text-3xl font-bold mb-4 text-gray-700">
                  Contact Us
                </h1>
                <p className="text-gray-600 mb-6">
                  We'd love to hear from you! <br />
                  Please fill out the form below to get in touch.
                </p>
                <div className="flex flex-col gap-8 justify-center mt-14">
                  <p className="text-xl  text-gray-600 font-semibold flex gap-2 items-center ">
                    <FaLocationPin size={30} />
                    <span>Sanepa,Lalitpur</span>
                  </p>
                  <p className="text-xl  text-gray-600 font-semibold flex gap-2">
                    <FaPhone size={30} />
                    <span>+977 9803247273</span>
                  </p>
                  <p className="text-xl text-gray-600 font-semibold flex gap-2">
                    <FaEnvelope size={30} />
                    <span>rsonuth789@gmail.com</span>
                  </p>
                </div>
              </div>
              <div className="w-1/2">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border text-gray-700 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border text-gray-700 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Your Message"
                    className="w-full px-4 py-2 border text-gray-700 rounded-lg"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Image
          <div className="flex-1 mb-8 md:mb-0 justify-center items-center">
            <img
              src="" // Replace with your contact image
              alt="Contact Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Contact;
