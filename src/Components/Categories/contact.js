import React from 'react';
import { Col } from 'react-bootstrap';
import Map from './map';

const Contact = () => {
    return (
        <div className="container-home">
            <div className="image-container-contact">
                <Map />
            </div>
            <h2>Contact Liquors Unlimited</h2>
            <div className="home-wine-container">
                <div className="content-row">
                    <Col xs={6} md={6}>
                        <img className="home-main-image" src={(require('../../img/painting.JPG'))} alt="Side view of Liquors Unlimited Store"/>
                    </Col>
                    <Col xs={6} md={6}>
                        <h3 className="red-header">Liquors Unlimited</h3>
                        <h3>3002 Market St</h3>
                        <h3>Pascagoula, MS 39567</h3>
                        <h3>228.762.3874</h3>
                    </Col>
                </div>
            </div>
        </div>
    )
}

export default Contact;