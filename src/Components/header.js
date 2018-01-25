import React from 'react';
import { NavDropdown, MenuItem, Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <div>
    <Navbar collapseOnSelect navbar-fixed-top>
    <Navbar.Header>
        <Navbar.Brand>
            Liquors Unlimited
        </Navbar.Brand>
        <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
        
        <Nav pullRight>
  
            
            {/* <NavDropdown eventKey={3} title="Categories" id="basic-nav-dropdown">
         <MenuItem>Programming</MenuItem>
         <MenuItem>Fitness</MenuItem>
         <MenuItem>Cooking</MenuItem>
         <MenuItem>Book Reviews</MenuItem>
                
            </NavDropdown> */}
            <NavItem className="nav-home-link"eventKey={1} href="#">
                <Link to="Home">Home</Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
                <Link to="Wine">Wine & Liquor</Link>
            </NavItem>
            <NavItem eventKey={3} href="#">
                <Link to="Contact">Contact</Link>
            </NavItem>
        </Nav>
    </Navbar.Collapse>
</Navbar>
    <div className="jumbotron">
                <div className="inner">
                    {/* <h1 className="liquors" >Liquors</h1>
                    <h1 className="unlimited" >Unlimited</h1>  */}
                    <img src={require("../img/LUTitleFirstCopy.png")} />
                    <h2>Fine Wine and Spirits</h2>
        
                </div>
            </div>
            </div>
        
    )
}

export default Header;