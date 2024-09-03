import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import '../../styles/home.scss'; // Import the SCSS file
import wineRoomImage from '../../img/wineRoom.jpeg';


class Home extends Component {
    render() {
        return (
            <div className="container-home">
                <div className='content-wrapper'>
                    <div className="image-container">
                        <img className="home-main-image" src={(require('../../img/holdingWineGlasses.jpeg'))} alt="Couple drinking red wine" />
                    </div>
                    
                    <div className="home-paragraph">
                        {/* <h3>Visit for the customer service, return for the savings</h3>
                <p>Opening in 1981, The Liquors Unlimited Store is enjoying many years of serving Pascagoula, MS and surrounding areas.  
                Our liquor store proudly stocks over 4,000 different items and we can special order many more.</p> */}
                    </div>
                    <div className="home-wine-container">
                        <div className='home-content'>
                            <h1>Welcome to Liquors Unlimited – Your Local Destination for Fine Wines & Spirits!</h1>
                            <p>At Liquors Unlimited, we believe that every bottle tells a story, and we’re here to help you find the perfect one for every occasion. Located in the heart of Pascagoula, Mississippi, our store offers a curated selection of the finest wines, and spirits. Whether you're celebrating a special moment or just winding down after a long day, we have something to make it memorable.</p>
                            <p>

                                <img className="home-main-image" src={(require('../../img/storeEntrance.JPG'))} alt="front view of liquor store" />
                            </p>
                            <h2>
                                Discover Our Selection and Experience Unmatched Service
                            </h2>
                            <p>
                                At Liquors Unlimited, we pride ourselves on offering a diverse range of products to meet all your needs. Our shelves are stocked with everything from premium international wines and top-shelf spirits. We also carry a variety of mixers, and accessories complement your drink of choice. Our knowledgeable staff is always here to help you find exactly what you’re looking for, whether you’re an aficionado or just exploring new tastes.
                            </p>
                            <p>
                                We’re more than just a liquor store; we’re a part of the Pascagoula community. Our goal is to create a welcoming environment where you can discover your next favorite drink and enjoy the experience of finding it. Stop by today and see why Liquors Unlimited is Pascagoula’s favorite place for spirits, wines, and more!
                            </p>

                            <h2 className="">{(new Date(Date.now()).getFullYear()) - (new Date(1981, 5, 22).getFullYear())} years of service</h2>
                            {/* <img className="home-main-image" src={(require('../../img/wineRoom.jpeg'))} alt="side view of liquor store" /> */}

                            <p>The Liquors Unlimited Store has enjoyed serving Pascagoula, MS and its surrounding areas since 1981. Our liquor store proudly stocks over 2,100 different items and we can special order many more.</p>

                            <p>We are conveniantly located on the corner of Market St and Covenant St. Come by to take a look at our large selection of wine, liquor, and liqueurs.</p>


                        </div>
                    </div>
                </div>
                <div className='info-section-wrapper'>
                    <div className="info-section">
                        <h3 className="info-title">What are you drinking?</h3>
                        <hr className="info-divider" />
                        <div className="info-content">
                            <p className="info-paragraph">
                                Our staff shares a curiosity and drive to learn about the products we sell and to provide knowledgeable guidance to customers. Whether you are looking for the perfect pairing or are new to the world of wine and spirits, we can help. Stop by the store and our team can answer any questions or offer a tasting as you explore different flavors and brands.
                            </p>
                            <img
                                src={wineRoomImage}
                                alt="Tasting Image"
                                className="info-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;