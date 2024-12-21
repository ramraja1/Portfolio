import React from 'react';
import ramImage from '../ram.jpeg';

const About = () => {
  return (
    <div className="bg-gray-50 py-12"> {/* Softer white background */}
      <section
        id="about"
        className="container mx-auto p-8 bg-white rounded-lg shadow-lg"
      >
        <div className="flex flex-wrap">
          {/* Left Side: Image and Profile Information */}
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <div className="flex flex-col items-center md:items-start">
              {/* Profile Image */}
              <div className="mb-6">
                <img
                  src={ramImage}
                  alt="Pawan Tiwari"
                  className="rounded-full shadow-lg"
                  style={{ height: '200px', width: '200px', objectFit: 'cover' }} // Reduced image height
                />
              </div>
              {/* Profile Information */}
              <div className="text-center md:text-left">
                <p className="font-semibold text-lg mb-2">
                  <span className="text-blue-600">Name:</span> Pawan Tiwari
                </p>
                <p className="font-semibold text-lg mb-2">
                  <span className="text-blue-600">Profile:</span> Full Stack Developer (MERN Stack)
                </p>
                <p className="font-semibold text-lg mb-2">
                  <span className="text-blue-600">Email:</span> your-email@example.com
                </p>
                <p className="font-semibold text-lg mb-2">
                  <span className="text-blue-600">Phone:</span> Your Phone Number
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: About Me Description */}
          <div className="w-full md:w-1/2 px-4">
            <div className="about-me">
              <div className="mb-4">
                <h5 className="text-2xl font-bold text-blue-600">About Me</h5>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                I am Pawan Tiwari, a passionate developer currently pursuing my
                BTech in Computer Science Engineering. I have hands-on
                experience with full-stack web development, specializing in the
                MERN stack (MongoDB, Express, React, Node.js).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Currently, I am working on an innovative project called
                <strong> Codenest</strong>, where teachers can create coding
                tests for students to take online. My dream is to turn Codenest
                into a business as successful as TCS.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Beyond coding, I have a keen interest in ethical hacking and
                enjoy solving real-world problems with technology. I aim to
                build scalable solutions and continuously enhance my skills
                while contributing to the tech community.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-12">
          <h5 className="text-2xl font-bold text-blue-600 mb-6 text-center">
            Skills
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { skill: 'HTML', percentage: 85 },
              { skill: 'CSS3', percentage: 75 },
              { skill: 'JavaScript', percentage: 90 },
              { skill: 'React', percentage: 80 },
              { skill: 'Node.js', percentage: 70 },
            ].map(({ skill, percentage }) => (
              <div key={skill}>
                <p className="flex justify-between text-gray-700 mb-1">
                  <span>{skill}</span>
                  <span>{percentage}%</span>
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
