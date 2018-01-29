import React from 'react';
// import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

const Wine = () => {
    return (
        <div className="container-home">
            <div className="image-container">
                <img className="home-main-image" src={(require('../../img/wineRoom.jpeg'))} alt="wine room"/>
            </div>
            <h2>Wine and Liquor</h2>
            <div className="home-paragraph">
                {/* <h3>Visit for the customer service, return for the savings</h3> */}
                {/* <p>
                Our liquor store proudly stocks over 4,000 different items and we can special order many more.</p> */}
            </div>
            <div className="home-wine-container">
                <div div className="content-row">
                    <Col xs={6} md={6}>
                        <img className="home-main-image" src={(require('../../img/wineBackRoom.JPG'))} alt="back wine room"/>
                    </Col>
                    <Col xs={6} md={6}>
                        <h3 className="red-header">Relax with a glass of wine</h3>
                        <p>At the Liquors Unlimited store, you’ll find the finest types and best brands of wine in Pascagoula, MS. Whether you’re looking to make a memorable meal with an extra special cabernet or just want a smooth merlot while relaxing with a good book, we have the selections you need.  </p>
                        {/* <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ... Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum.</p> */}
                    </Col>
                </div>
                <div id="content-row2" className="content-row">
                    <Col xs={6} md={6}>
                        <h3 className="red-header">Browse our Liquor</h3>
                        <p>Enjoy all the well-known, and the not so well-known, brands and types of spirits at Liquors Unlimited.</p>
                        <p>Make the Liquors Unlimited Store your first stop when planning your next party.  We have all the best brands along with those hard to find liquors.  Our friendly crew is waiting to serve you.</p>
                    </Col>
                    <Col xs={6} md={6}>
                        <img className="home-main-image" src={(require('../../img/wineFront.jpg'))} alt="front wine room"/>
                    </Col>
                </div>
            </div>
        </div>
    )
}

export default Wine;