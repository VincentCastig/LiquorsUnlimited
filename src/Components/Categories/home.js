import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

class Home extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            years: ''
        }
    }

    componentWillMount() {
        this.setState({ years: new Date().getFullYear() - 1981});
    }

    render() {
        const years = this.state.years;
        return (
            <div className="container-home">
                <div className="image-container">
                    <img className="home-main-image" src={(require('../../img/holdingWineGlasses.jpeg'))} alt="Couple drinking red wine"/>
                </div>
                <h2>Liquors Unlimited has the greatest selection of wine in Pascagoula.</h2>
                <div className="home-wine-container">
                    <div className="content-row">
                        <Col xs={6} md={6}>
                            <img className="home-main-image" src={(require('../../img/storeEntrance.JPG'))} alt="front view of liquor store"/>
                        </Col>
                        <Col xs={6} md={6}>
                            <h3 className="red-header">{years} years of service</h3>
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
