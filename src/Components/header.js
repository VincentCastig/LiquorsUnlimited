import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleToggle = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <div>
      <Navbar 
        collapseOnSelect 
        expanded={isNavExpanded} 
        expand="lg" 
        bg="light" 
        variant="light" 
        className="navbar-fixed-top"
      >
        <Navbar.Brand as={Link} to="/">
          Liquors Unlimited
        </Navbar.Brand>
        <Navbar.Toggle onClick={handleToggle} aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" onClick={() => setIsNavExpanded(false)}>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/wine">Wine & Liquor</Nav.Link>
            <Nav.Link as={Link} to="/planning">Party Planning</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="jumbotron">
        <div className="inner">
          <img 
            src={require("../img/LUTitleFirstCopy2.png")} 
            alt="Liquors Unlimited Calligraphy by Lillian Castigliola"
          />
          <h2>Fine Wine and Spirits</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
