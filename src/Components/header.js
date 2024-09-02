import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/header.scss'; // Import the SCSS file
import useScrollPosition from './useScrollPosition'; // Import the custom hook



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
            src={require("../img/LUTitleFirstCopy2.png")} 
            alt="Liquors Unlimited Calligraphy by Lillian Castigliola"
            className='lu-logo'
          />
           <img 
            src={require("../img/bench.png")} 
            alt="Bench"
            className='bench'
          />
          {/* <h2>.</h2> */}
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
        {/* <Navbar.Brand as={Link} to="/">
          Liquors Unlimited
        </Navbar.Brand> */}
        <Navbar.Toggle onClick={handleToggle} aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-custom-nav" onClick={() => setIsNavExpanded(false)}>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/wine">Wine, Liquor, Spirits, & More</Nav.Link>
            <Nav.Link as={Link} to="/planning">Party Planning</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
