import React from 'react';
// import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import Map from './map';

const Contact = () => {

    

    return (
        <div className="container-home">
            <div className="image-container-contact">
                {/* <img className="home-main-image" src={(require('../../img/DSC_0393.JPG'))}/> */}
                <Map />
            </div>
            <h2>Contact Liquors Unlimited</h2>
            {/* <div className="home-paragraph">
                <h3>Visit for the customer service, return for the savings</h3>
                <p>Opening in 1981, The Liquors Unlimited Store is enjoying our 40th year serving Pascagoula, MS and surrounding areas.  
 

                Our liquor store proudly stocks over 4,000 different items and we can special order many more.</p>
            </div> */}
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
                {/* <div id="content-row2" className="content-row">
                    <Col xs={6} md={6}>
                        <h3 className="red-header">Opening Times</h3>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ... Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum</p>
                        
                    </Col>
                    <Col xs={6} md={6}>
                        <img className="home-main-image" src={(require('../../img/painting.JPG'))} alt="Wine bottles in fridge"/>
                    </Col>
                </div> */}
            </div>
        </div>
    )
}

export default Contact;