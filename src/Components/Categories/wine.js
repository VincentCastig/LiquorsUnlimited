import React from 'react';
import { Col } from 'react-bootstrap';

const Wine = () => {
    return (
        <div className="container-home">
            <div className='content-wrapper'>
                <div className="image-container">
                    <img className="home-main-image" src={(require('../../img/wineRoom.jpeg'))} alt="wine room" />
                </div>

                <div className="home-paragraph">
                    {/* <h3>Visit for the customer service, return for the savings</h3> */}
                    {/* <p>
                Our liquor store proudly stocks over 4,000 different items and we can special order many more.</p> */}
                </div>
                <div className="home-wine-container">
                    <div className='home-content'>
                        <h1>Wine and Liquor</h1>
                        <p>

                            <img className="home-main-image" src={(require('../../img/wineBackRoom.JPG'))} alt="back wine room" />
                        </p>
                        <p>At the Liquors Unlimited store, you’ll find the finest types and best brands of wine in Pascagoula, MS. Whether you’re looking to make a memorable meal with an extra special cabernet or just want a smooth merlot while relaxing with a good book, we have the selections you need.  </p>
                        
                        <p>At the Liquors Unlimited store, you’ll find the finest types and best brands of wine in Pascagoula, MS. Whether you’re looking to make a memorable meal with an extra special cabernet or just want a smooth merlot while relaxing with a good book, we have the selections you need.  </p>
                        <h2 className="red-header">Browse our Liquor</h2>
                        <p>Enjoy all the well-known, and the not so well-known, brands and types of spirits at Liquors Unlimited.</p>
                        <p>Make the Liquors Unlimited Store your first stop when planning your next party.  We have all the best brands along with those hard to find liquors.  Our friendly crew is waiting to serve you.</p>
                        <p>
                        </p>
                        <img className="" src={(require('../../img/IMG_3883.jpg'))} alt="front wine room" />


                        {/* <div id="content-row2" className="content-row">


                            <Col xs={6} md={6}>
                            </Col>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wine;