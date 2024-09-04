import React from 'react';

const Wine = () => {
    return (
        <main className="container-home">
            <section className='content-wrapper'>
                <div className="image-container">
                    <img className="home-main-image" src={(require('../../img/wine-room.jpeg'))} alt="wine room" />
                </div>

                <article className="home-wine-container">
                    <div className='home-content clear-fix'>
                        <h1>Wine and Liquor</h1>
                        <p>
                            <img className="home-main-image" src={require('../../img/wine-back-room.JPG')} alt="Back wine room at Liquors Unlimited" />
                        </p>

                        <p>
                            Discover the finest selection of wines and liquors at Liquors Unlimited in Pascagoula, MS. Whether you’re planning an unforgettable dinner with a rich cabernet or simply want to unwind with a smooth merlot and a good book, we have the perfect bottle waiting for you.
                        </p>

                        <p>
                            Our store offers a curated collection of the best brands and varieties, ensuring that you find the ideal wine or spirit to complement any occasion. From the everyday favorites to the rare and exceptional, Liquors Unlimited is your go-to destination for all your wine and liquor needs.
                        </p>

                        <h2 >Explore Our Wide Selection of Spirits</h2>
                        <p>
                            <img className="" src={(require('../../img/liquor-room.jpg'))} alt="Front Liquor Room at Liquors Unlimited" />

                        </p>
                        <p>At Liquors Unlimited, we pride ourselves on offering an extensive range of both popular and unique spirits. Whether you’re in search of your favorite well-known brands or eager to discover something new, we have you covered.</p>

                        <p>Planning a special occasion? Make Liquors Unlimited your go-to destination. Our store is stocked with the finest liquors, including rare and hard-to-find bottles that will impress your guests. Our knowledgeable and friendly team is always ready to assist you in finding the perfect spirits for any event.</p>

                        <p>Whether you are hosting a party, celebrating a milestone, or simply restocking your home bar, we’re here to ensure you have the best selection at your fingertips. Visit us today and let us help you elevate your next gathering.</p>

                    </div>
                </article>
            </section>
        </main>
    )
}

export default Wine;