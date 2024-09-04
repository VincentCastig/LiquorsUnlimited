import React from 'react';
import '../../styles/home.scss'; // Import the SCSS file
import luPainting from '../../img/liquors-unlimited-painting.jpg';


const Home = () => {
    return (
        <div className="container-home">
            <div className='content-wrapper'>
                <div className="image-container">
                    <img className="home-main-image" src={(require('../../img/holding-wine-glasses.jpeg'))} alt="Couple drinking red wine" />
                </div>

                <div className="home-wine-container">
                    <div className='home-content'>
                        <h1>Welcome to Liquors Unlimited – Your Local Destination for Fine Wines & Spirits!</h1>
                        <p>At Liquors Unlimited, we believe that every bottle tells a story, and we’re here to help you find the perfect one for every occasion. Located in the heart of Pascagoula, Mississippi, our store offers a curated selection of the finest wines, and spirits. Whether you're celebrating a special moment or just winding down after a long day, we have something to make it memorable.</p>
                        <p>

                            <img className="home-main-image" src={(require('../../img/store-entrance.JPG'))} alt="Front view of liquor store" />
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

                        <h2>{(new Date(Date.now()).getFullYear()) - (new Date(1981, 5, 22).getFullYear())}  Years of Dedicated Service</h2>

                        <p>Since 1981, Liquors Unlimited has been a cornerstone of the Pascagoula, MS community, proudly serving residents and visitors alike for over four decades. Our commitment to providing exceptional service and an unparalleled selection has made us a trusted destination for all things wine, liquor, and spirits in the region.</p>

                        <p>At Liquors Unlimited, we take pride in offering a diverse inventory with over 2,100 different items in stock. Whether you're searching for a classic bottle of your favorite wine, a rare spirit, or something new to explore, our shelves are filled with options to suit every palate and occasion. And if you can't find exactly what you're looking for, our team is happy to assist with special orders, ensuring you get the perfect bottle for any event.</p>

                        <p>Conveniently located at the corner of Market Street and Covenant Street, our store is easy to find and even easier to shop. Stop by today to browse our extensive collection of fine wines, premium liquors, and unique liqueurs. Whether you're planning a special celebration, stocking your home bar, or simply exploring new flavors, Liquors Unlimited is here to help you find just what you need.</p>

                        <p>Visit us and experience the warm, knowledgeable service that has made Liquors Unlimited a beloved part of the Pascagoula community for over 43 years.</p>

                    </div>
                </div>
            </div>
            <div className='info-section-wrapper'>
                <div className="info-section">
                    <h3 className="info-title">What are you drinking?</h3>
                    <hr className="info-divider" />
                    <div className="info-content">
                        <p className="info-paragraph">
                            Our staff shares a curiosity and drive to learn about the products we sell and to provide knowledgeable guidance to customers. Whether you're in search of the perfect pairing or just beginning your journey into the world of wine and spirits, we're here to help. Visit us in-store, where our knowledgeable staff is ready to answer your questions and guide you through a tasting experience as you explore a variety of flavors and brands.
                        </p>
                        <img
                            src={luPainting}
                            alt="Liquor Store Painting"
                            className="info-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;