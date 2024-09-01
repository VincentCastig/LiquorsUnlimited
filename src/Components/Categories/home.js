import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class Home extends Component {
    render() {
    return (
        <div className="container-home">
            <div className="image-container">
                <img className="home-main-image" src={(require('../../img/holdingWineGlasses.jpeg'))} alt="Couple drinking red wine"/>
            </div>
            <h2>Liquors Unlimited has the greatest selection of wine in Pascagoula.</h2>
            <div className="home-paragraph">
                {/* <h3>Visit for the customer service, return for the savings</h3>
                <p>Opening in 1981, The Liquors Unlimited Store is enjoying many years of serving Pascagoula, MS and surrounding areas.  
                Our liquor store proudly stocks over 4,000 different items and we can special order many more.</p> */}
            </div>
            <div className="home-wine-container">
                <div className="content-row">
                    <Col xs={6} md={6}>
                        <img className="home-main-image" src={(require('../../img/storeEntrance.JPG'))} alt="front view of liquor store"/>
                    </Col>
                    <Col xs={6} md={6}>
                        <h3 className="red-header">{(new Date(Date.now()).getFullYear()) - (new Date(1981,5,22).getFullYear())} years of service</h3>
                        <p>The Liquors Unlimited Store has enjoyed serving Pascagoula, MS and its surrounding areas since 1981. Our liquor store proudly stocks over 2,100 different items and we can special order many more.</p>
                    </Col>
                </div>
                <div id="content-row2" className="content-row">
                    <Col xs={6} md={6}>
                        <h3 className="red-header">Open 6 days a week</h3>
                        <p>We are conveniantly located on the corner of Market St and Covenant St. Come by to take a look at our large selection of wine, liquor, and liqueurs.</p>
                    </Col>
                    <Col xs={6} md={6}>
                        <img className="home-main-image" src={(require('../../img/wineRoom.jpeg'))} alt="side view of liquor store"/>
                    </Col>
                </div>
            </div>
        </div>
    )
    }
}

export default Home;