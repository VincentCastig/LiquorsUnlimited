import React from 'react';
import '../../styles/home.scss'; // Import the SCSS file
import luPainting from '../../img/liquors-unlimited-painting.jpg';


const Home = () => {
    return (
        <main className="container-home">
            <section className='content-wrapper'>
                <div className="image-container">
                    <img className="home-main-image" src={(require('../../img/holding-wine-glasses.jpeg'))} alt="A couple drinking red wine" />
                </div>

                <article className="home-wine-container">
                    <div className='home-content'>
                        <h1>Welcome to Liquors Unlimited – Your Local Destination for Fine Wines & Spirits!</h1>
                      
                        <p>
                            At Liquors Unlimited, every bottle tells a unique story, and we’re here to help you find the perfect one for any occasion. Located in the heart of Pascagoula, Mississippi, our store offers a carefully curated selection of the finest wines and spirits. Whether you’re celebrating life’s special moments or unwinding after a long day, we have something to make every experience memorable.
                        </p>

                        <div className='article-image-wrapper'>
                            <img className="article-image" src={(require('../../img/store-entrance.JPG'))} alt="Front view of liquor store" />
                        </div>
                        <h2>
                            Discover Our Selection and Experience Unmatched Service
                        </h2>
                        <p>
                            We pride ourselves on offering a diverse range of products to meet all your needs. From premium international wines to top-shelf spirits, our shelves are stocked with the best the world has to offer. We also carry a wide array of mixers and accessories to complement your favorite drinks. Whether you’re a connoisseur or just starting your journey into the world of fine beverages, our knowledgeable staff is here to guide you.
                        </p>
                        <p>
                            Liquors Unlimited is more than a store; we’re a proud part of the Pascagoula community. We’ve been serving residents and visitors for over 43 years, building lasting relationships along the way. Our welcoming environment invites you to discover new flavors and enjoy the process of finding your next favorite drink.
                        </p>

                        <h2>{(new Date(Date.now()).getFullYear()) - (new Date(1981, 5, 22).getFullYear())}  Years of Dedicated Service</h2>

                        <p>We take pride in offering a diverse inventory with over 2,100 different items in stock. Whether you're searching for a classic bottle of your favorite wine, a rare spirit, or something new to explore, our shelves are filled with options to suit every palate and occasion. And if you can't find exactly what you're looking for, our team is happy to assist with special orders, ensuring you get the perfect bottle for any event.</p>

                        <p>Conveniently located at the corner of Market Street and Covenant Street, our store is easy to find and a pleasure to shop. Whether you’re planning a celebration, stocking your home bar, or exploring new tastes, Liquors Unlimited is your go-to destination. Come in today to experience the warm, expert service that has made us Pascagoula’s favorite since 1981</p>


                    </div>
                </article>
            </section>
            <section className='info-section-wrapper'>
                <article className="info-section">
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
                </article>
            </section>
        </main>
    )
}

export default Home;