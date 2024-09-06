// Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-700 text-white text-center py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Our Website
          </h1>
          <p className="text-lg mb-6">
            Your go-to platform for amazing projects and insights.
          </p>
          <Link to="/login">
            <button className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12">
              <h3 className="text-xl font-semibold mb-4">
                Get Project Ideas💡
              </h3>
              <p className="text-gray-700 ">
                Here you can have projects idea for your practice projects and
                also u can include it to your resume for job.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12">
              <h3 className="text-xl font-semibold mb-4">
                Get resources for projects📚
              </h3>
              <p className="text-gray-700">
                You can find free resources for your project and start building
                your own project.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12">
              <h3 className="text-xl font-semibold mb-4">
                Submit your project for others to review🧐
              </h3>
              <p className="text-gray-700">
                You can submit your project and get a feedback from us and other
                users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-700 text-white text-center py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg mb-6">
            Join us and start your journey with exciting opportunities and
            insights.
          </p>
          <Link to="/login">
            <button className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600">
              Get Started
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
