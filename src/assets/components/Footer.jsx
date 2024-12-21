import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
        {/* Send Message Form */}
        <div className="w-full md:w-1/2 px-6">
          <h3 className="text-3xl font-semibold mb-4">Send Us a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Get in Touch Section */}
        <div className="w-full md:w-1/2 px-6">
          <h3 className="text-3xl font-semibold mb-4">Get in Touch</h3>
          <p className="mb-4">Feel free to reach out to us for any queries or collaborations.</p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="text-blue-400 mr-2">📧</span>
              <a href="mailto:contact@example.com" className="hover:text-blue-400">
                contact@example.com
              </a>
            </li>
            <li className="flex items-center">
              <span className="text-blue-400 mr-2">📍</span>
              <span>1234 Address St, City, Country</span>
            </li>
            <li className="flex items-center">
              <span className="text-blue-400 mr-2">📞</span>
              <a href="tel:+1234567890" className="hover:text-blue-400">
                +123 456 7890
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-12">
        <p>&copy; 2024 Your Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
