import React from 'react';
import { FaCode, FaLaptopCode, FaMobileAlt } from 'react-icons/fa'; // Importing icons

const Services = () => {
  return (
    <section id="service" className="services-mf py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <div className="title-box mb-12">
          <h3 className="text-4xl font-bold text-gray-800">My Services</h3>
          <p className="text-lg text-gray-600 mt-4">
            Offering expertise in modern web technologies to create innovative solutions.
          </p>
          <div className="line-mf mx-auto mt-6 w-16 h-1 bg-blue-500 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Web Development */}
          <div className="service-box bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="flex justify-center items-center mb-4">
              <div className="service-icon text-blue-500 text-6xl">
                <FaCode />
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Web Development</h2>
            <p className="text-gray-600">
              Build scalable web applications using the MERN stack (MongoDB, Express, React, Node.js) for high-performance solutions.
            </p>
          </div>

          {/* Responsive Design */}
          <div className="service-box bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="flex justify-center items-center mb-4">
              <div className="service-icon text-green-500 text-6xl">
                <FaLaptopCode />
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Responsive Design</h2>
            <p className="text-gray-600">
              Create websites that adapt seamlessly to all screen sizes, providing an optimal experience for users on any device.
            </p>
          </div>

          {/* Frontend Development */}
          <div className="service-box bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="flex justify-center items-center mb-4">
              <div className="service-icon text-yellow-500 text-6xl">
                <FaMobileAlt />
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Frontend Development</h2>
            <p className="text-gray-600">
              Deliver dynamic, interactive, and visually appealing user interfaces using modern libraries like React and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
