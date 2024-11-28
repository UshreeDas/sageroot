import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.3; // 30% of the viewport height
      setScrolled(window.scrollY > scrollThreshold);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="nav">
      <div className="container">
        <div className="logo">
          <img src="./SAGEROOTS INTERNATIONAL(Blue).svg" className='nav-brand' alt="logo" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <div className="burger" id="burger">
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </div>
        </div>
        <div className={`nav-elements ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/apply">How to Apply</NavLink>
            </li>
            <li>
              <NavLink to="/university">University Partners</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Partners</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;