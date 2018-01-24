import React, { Component } from 'react';
import { NavDropdown, MenuItem, Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

class Home extends Component {
    render() {
    return (
        <div className="container-home">
            <div className="image-container">
                <img className="home-main-image" src={(require('../../img/holdingWineGlasses.jpeg'))}/>
            </div>
            <h2>Liquors Unlimited has the greatest selection of wine in Pascagoula.</h2>
            <div className="home-paragraph">
                <h3>Visit for the customer service, return for the savings</h3>
                <p>Opening in 1981, The Liquors Unlimited Store is enjoying our 40th year serving Pascagoula, MS and surrounding areas.  
 

                Our liquor store proudly stocks over 4,000 different items and we can special order many more.</p>
            </div>
            <div className="home-wine-container">
                <Row>
                    <Col xs={6} md={6}>
                        <img className="home-main-image" src={(require('../../img/DSC_0393.JPG'))}/>
                    </Col>
                    <Col xs={6} md={6}>
                        <h3 className="red-header">Open 6 days a week</h3>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ... Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum.</p>
                        
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={6}>
                        <h3 className="red-header">Try our bourbon</h3>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ... Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum</p>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ... Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum</p>
                    </Col>
                    <Col xs={6} md={6}>
                        <img className="home-main-image" src={(require('../../img/painting.JPG'))} />
                    </Col>
                </Row>
            </div>
        </div>
    )
}
}

export default Home;