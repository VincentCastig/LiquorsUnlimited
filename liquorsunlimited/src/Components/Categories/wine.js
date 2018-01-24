import React from 'react';
import { NavDropdown, MenuItem, Navbar, Nav, NavItem, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Grid, Col } from 'react-bootstrap';

const Wine = () => {
    return (
        <div className="container-home">
            <div className="image-container">
                <img className="home-main-image" src={(require('../../img/fridgeBottles.JPG'))}/>
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
                        <img className="home-main-image" src={(require('../../img/wineBackRoom.JPG'))} />
                    </Col>
                    <Col xs={6} md={6}>
                        <h3 className="red-header">Relax with a glass of wine</h3>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ... Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum.</p>
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
                        <img className="home-main-image" src={(require('../../img/wineAndLiquor.JPG'))} />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Wine;