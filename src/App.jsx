import { useState, useEffect } from 'react';
import Navbar from './assets/components/Navbar';
import About from './assets/components/About';
import './App.css';
import Services from './assets/components/Services';
import Projects from './assets/components/Projects';
import Blog from './assets/components/Blog';
import Footer from './assets/components/Footer';

function App() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Frontend Developer", "Backend Developer", "Web Developer", "Tech Enthusiast"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000); // Change text every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="main">
        <Navbar />
        {/* Main Content */}
        <div className="content">
          <h1 className="name">Hi, I'm Pawan Tiwari</h1>
          <p className="role">
            <span className="role-text">{roles[currentRole]}</span>
          </p>
        </div>
      </div>

      {/* About Section */}
      <About />
      <Services />
      <Projects />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
