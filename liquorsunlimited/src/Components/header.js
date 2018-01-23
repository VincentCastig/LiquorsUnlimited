import React from 'react';
import { NavDropdown, MenuItem, Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <div>
    <Navbar collapseOnSelect>
    <Navbar.Header>
        <Navbar.Brand>
            Liquors Unlimited
        </Navbar.Brand>
        <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
        
        <Nav pullRight>
  
            <NavItem eventKey={2} href="#">
    {/* <Link to="/">Home</Link> */}
            </NavItem>
            {/* <NavDropdown eventKey={3} title="Categories" id="basic-nav-dropdown">
         <MenuItem>Programming</MenuItem>
         <MenuItem>Fitness</MenuItem>
         <MenuItem>Cooking</MenuItem>
         <MenuItem>Book Reviews</MenuItem>
                
            </NavDropdown> */}
            <NavItem eventKey={1} key={1} href="#">
                Wine
            </NavItem>
            <NavItem eventKey={2} href="#">
                About
            </NavItem>
            <NavItem eventKey={3} href="#">
                Contact
            </NavItem>
        </Nav>
    </Navbar.Collapse>
</Navbar>
    <div className="jumbotron">
                <div className="inner">
                    <h1 className="liquors" >Liquors</h1>
                    <h1 className="unlimited" >Unlimited</h1> 
                    <img src="../img/LUTitleFirstCopy.png">
                        
                    </img>
                    <h2>Fine Wine and Spirits</h2>
                    
        
                </div>
            </div>
            </div>
        
    )
}

export default Header;