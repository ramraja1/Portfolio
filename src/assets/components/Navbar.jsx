import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change navbar styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Change styles after scrolling down 50px
      } else {
        setIsScrolled(false); // Reset styles when scroll is at the top
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all ease-in-out duration-300 ${
        isScrolled
          ? 'bg-white text-black shadow-md' // White background and black text with shadow when scrolled
          : 'bg-transparent text-white' // Transparent background and white text at the top
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-24"> {/* Increased height for a bigger navbar */}
          
          {/* Logo */}
          <div className="flex items-center text-3xl font-bold text-blue-500"> {/* Larger font size and blue color */}
            MyWebsite
          </div>

          {/* Links */}
          <div className="hidden sm:block mr-6"> {/* Moved to the right */}
            <div className="flex space-x-6 text-2xl font-medium text-white-500"> {/* Increased font size and made text blue */}
              <a
                href="#"
                className="hover:text-blue-700 px-3 py-2 rounded-md"
              >
                Home
              </a>
              <a
                href="#"
                className="hover:text-blue-700 px-3 py-2 rounded-md"
              >
                About
              </a>
              <a
                href="#"
                className="hover:text-blue-700 px-3 py-2 rounded-md"
              >
                Services
              </a>
              <a
                href="#"
                className="hover:text-blue-700 px-3 py-2 rounded-md"
              >
                Contact
              </a>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
