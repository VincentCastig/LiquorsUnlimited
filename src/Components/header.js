import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props)
        this.navToggle = this.navToggle.bind(this)
    }
    navToggle = () => { 
        console.log('clicked')
        let linksEl = document.querySelector('.collapse') 
        if (linksEl.style.display === 'block') {
          linksEl.style.display = 'none';
        } else {
          linksEl.style.display = 'block';
        }
      };
    render() {
    return (
    <div>
    <Navbar collapseOnSelect navbar-fixed-top>
    <Navbar.Header>
        <Navbar.Brand>
            Liquors Unlimited
        </Navbar.Brand>
        <Navbar.Toggle />
        <div className="navNarrow">
        <button type='button' className="" onClick={this.navToggle}>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </button>
    </div>
    </Navbar.Header>
    <Navbar.Collapse>
        
        <Nav pullRight>
  
            <NavItem className="nav-home-link"eventKey={1} href="#">
                <Link to="Home" onClick={this.navToggle}>Home</Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
                <Link to="Wine" onClick={this.navToggle}>Wine & Liquor</Link>
            </NavItem>
            <NavItem eventKey={3} href="#">
                <Link to="Planning" onClick={this.navToggle}>Party Planning</Link>
            </NavItem>
            <NavItem eventKey={3} href="#">
                <Link to="Contact" onClick={this.navToggle}>Contact</Link>
            </NavItem>
        </Nav>
    </Navbar.Collapse>
     <Nav pullRight className="webNavRight">
  
            <NavItem className="nav-home-link"eventKey={1} href="#">
                <Link to="Home" onClick={this.navToggle}>Home</Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
                <Link to="Wine" onClick={this.navToggle}>Wine & Liquor</Link>
            </NavItem>
            <NavItem eventKey={3} href="#">
                <Link to="Planning" onClick={this.navToggle}>Party Planning</Link>
            </NavItem>
            <NavItem eventKey={3} href="#">
                <Link to="Contact" onClick={this.navToggle}>Contact</Link>
            </NavItem>
        </Nav>
</Navbar>
    <div className="jumbotron">
                <div className="inner">
                    <img src={require("../img/LUTitleFirstCopy2.png")} alt="Liquors Unlimited Caligraphy by Lillian Castigliola"/>
                    <h2>Fine Wine and Spirits</h2>
        
                </div>
            </div>
            </div>
        
    )
}
}

export default Header;