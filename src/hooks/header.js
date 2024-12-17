import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../styles/header.scss'; // Import the SCSS file
import useScrollPosition from './utilities/useScrollPosition'; // Import the custom hook

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const scrollY = useScrollPosition();

  const handleToggle = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  // Check if the scroll position is greater than a certain threshold
  const isSticky = scrollY > 200; // Adjust this value to your preference

  return (
    <div>
      <div className="jumbotron header">
        <div className="inner">
          <img
            src={require("../img/left-bench.png")}
            alt="Left Bench"
            className='left-bench'
          />
          <img
            src={require("../img/lu-header.png")}
            alt="Liquors Unlimited Calligraphy by Lillian Castigliola"
            className='lu-logo'
          />
          <h3>Fine Wine and Spirits</h3>
          <img
            src={require("../img/right-bench.png")}
            alt="Right Bench"
            className='right-bench'
          />
        </div>
      </div>

      <Navbar
        collapseOnSelect
        expanded={isNavExpanded}
        expand="lg"
        bg="light"
        variant="light"
        className={`navbar lu-navbar ${isSticky ? 'navbar-fixed' : ''}`} // Apply the CSS class conditionally
      >
        <Navbar.Toggle onClick={handleToggle} aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-custom-nav" onClick={() => setIsNavExpanded(false)}>
            <Nav.Link
              as={NavLink}
              to="/"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/wine"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Wine, Liquor, & More
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/planning"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Party Planning
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="https://bottlezoo.com/store/bz_liquorsunlimitedmis"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              target="_blank" rel="noopener noreferrer"
            >
              Order Online
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              title="Contact Us"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
