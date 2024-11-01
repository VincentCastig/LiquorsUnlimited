import React from 'react';

import Beer from '../../../img/beer-bottle2.webp';
// import WhiteWine from '../../../img/white-wine.png';
// import RedWine from '../../../img/red-wine.png';
// // import RoseWine from '../../../img/rose-1.png';
// import RoseWine from '../../../img/rose.png';

// import Bourbon from '../../../img/bourbon.png';
// import Scotch from '../../../img/scotch.png';
// import Tequila from '../../../img/tequila.png';

import WhiteWine from '../../../img/white-wine-bottle.png';
import RedWine from '../../../img/red-wine-bottle.png';
import RoseWine from '../../../img/rose.png';

import Whiskey from '../../../img/whiskey-bottle-2.png';
import Scotch from '../../../img/scotch-bottle.png';
import Tequila from '../../../img/tequila-bottle.png';

import Gin from '../../../img/gin-bottle.png';
import Vodka from '../../../img/vodka-bottle.png';
import Rum from '../../../img/rum-bottle.png';
import Champagne from '../../../img/champagne-bottle.png';


const StepThree = ({ values, nextStep, prevStep }) => {
    const { drinks, drinkInventory, percentage } = values;

    const imageMap = {
        Beer,
        "White Wine": WhiteWine,
        "Red Wine": RedWine,
        "Rose Wine": RoseWine,
        Whiskey,
        Scotch,
        Tequila,
        Gin,
        Vodka,
        Rum,
        Champagne
    };

    //on the step two Component. we have a list of the 12 different types of alcohol listed in 3 columns and 4 rows. the alcohol types are beer, white wine, red wine, rose wine, bourbon, scotch, tequila, gin, vodka, rum, champagne, and whiskey. for each item there is an image of the bottle in the middle. create a picture of this.

    //on the step two Component. we have a list of three different types of alcohol listed in 3 columns. the alcohol types are beer, white wine, and red wine. for each item there is the name at the top, a picture of the bottle in the middle and the percentage at the bottom. create a picture of this.

    console.log('drinks ', drinks);
    // Calculate the total number of bottles for each selected alcohol type
    const calculateBottles = () => {
        const bottlesNeeded = {};



        // Loop through the drink inventory
        drinkInventory.forEach(drink => {
            const { label, defaultPercentage, bottleSize, drinksPerBottle } = drink;

            // Calculate the drink percentage based on the user input or default value
            const drinkPercentage = (defaultPercentage) * drinks; // Total drinks based on the user-defined percentage
            const totalBottles = Math.ceil(drinkPercentage / drinksPerBottle); // Calculate total bottles needed
            console.log('drinkPercentage ', drinkPercentage);
            console.log('label ', label);
            console.log('totalBottles ', totalBottles);

            bottlesNeeded[label] = totalBottles; // Store result
        });

        return bottlesNeeded;
    };

    const bottlesNeeded = calculateBottles();

    return (
        <div className="main-card">
            <h1>Results</h1>
            <div className="results-content">
                <h2>Bottle Requirements</h2>
                <ul className="bottle-list">
                    {Object.keys(bottlesNeeded).map(drink => (
                        <li key={drink} className="bottle-list-item">
                            <div className='bottle-list-box'>
                                <div className='bottle-image-box step3'>
                                    <img src={imageMap[drink]} alt={`${drink} bottle`} className="bottle-image" />
                                </div>
                                <div>
                                    {drink}:
                                    <div>
                                        {bottlesNeeded[drink]} bottles (0.75L) |
                                        {bottlesNeeded[drink]} bottles (1L)
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="centered button-row">
                <button type="button" className="planning-btn btn-secondary btn" onClick={prevStep}>Back</button>
                <button type="button" className="planning-btn btn-primary btn" onClick={nextStep}>Finish</button>
            </div>
        </div>
    );
};

export default StepThree;
