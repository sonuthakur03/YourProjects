import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import { person } from "./team";

const About = () => {
  // Create a ref for the team section
  const teamSectionRef = useRef(null);

  // Handler to scroll to the team section
  const scrollToTeamSection = () => {
    if (teamSectionRef.current) {
      teamSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-700 text-white py-16">
        <div className="container flex flex-col md:flex-row md:justify-center items-center">
          <div className="flex-1 mb-8 flex md:mb-0 justify-center items-center">
            <img
              src="https://fancyhouse-design.com/wp-content/uploads/2023/11/The-CEOs-office-with-its-modern-art-and-luxury-finishes-reflects-a-balance-of-power-and-design..jpg"
              alt="Hero"
              className="w-3/4 h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-2xl mb-4">
              Learn more about who we are and what drives us.
            </p>
            <p className="text-base leading-relaxed mb-4">
              We started with a vision to create a platform that brings people
              together to collaborate on exciting projects. Our team is
              dedicated to providing a space where creativity and innovation can
              flourish. With years of experience and a passion for technology,
              we aim to deliver top-notch solutions that exceed expectations.
            </p>
            <button
              onClick={scrollToTeamSection}
              className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600"
            >
              Meet Our Team
            </button>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section ref={teamSectionRef} id="team" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-8">
            {person.map((memb) => {
              return <Card key={memb.id} person={memb} />;
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-700 text-white text-center py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Want to Learn More?
          </h2>
          <p className="text-lg mb-6">
            Get in touch with us to discover more about our projects and how we
            can collaborate.
          </p>
          <Link to="/contact">
            <button className="bg-yellow-500 text-gray-800 px-6 py-2 rounded-lg text-lg font-semibold hover:bg-yellow-600">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
