import React, { Component } from 'react';
import { NavDropdown, MenuItem, Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
    return (
        <div className="container-home">
            <div className="image-container">
                <img className="home-main-image" src={(require('../../img/DSC_0393.JPG'))}/>
                <p></p>
            </div>
        </div>
    )
}
}

export default Home;