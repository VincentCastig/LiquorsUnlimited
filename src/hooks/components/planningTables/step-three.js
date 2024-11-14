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


const StepThree = ({ values, drinksTotal, userDefinedPercentages, nextStep, prevStep }) => {
    const { drinks, drinkInventory, people } = values;

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

    // Calculate the total number of bottles for each selected alcohol type
    const calculateBottles = () => {
        const bottlesNeeded = {};

        // Loop through the drink inventory
        drinkInventory.forEach(drink => {
            const { label, defaultPercentage, bottleSize, drinksPerBottle } = drink;

            // Calculate the drink percentage based on the user input or default value
            const drinkPercentage = (userDefinedPercentages[label]) * drinksTotal / 100; // Total drinks based on the user-defined percentage
            const totalBottles = Math.ceil(drinkPercentage / drinksPerBottle); // Calculate total bottles needed

            // Calculate for 0.75-liter and 1-liter bottles
            const totalBottles1L = Math.ceil(totalBottles * 0.75);
            const totalBottles075L = Math.ceil(totalBottles); // Adjust for 1-liter
            if (totalBottles075L > 0) {
                bottlesNeeded[label] = { totalBottles075L, totalBottles1L }; // Store results
            }
        });

        return bottlesNeeded;
    };

    const bottlesNeeded = calculateBottles();

    return (
        <div className="main-card">
            <h2>Bottle Count Results</h2>
            <div className="results-content">
                {/* <h2>Bottle Requirements</h2> */}
                <ul className="bottle-list">
                    {Object.keys(bottlesNeeded).map(drink => (
                        <li key={drink} className="bottle-list-item">
                            <div className='bottle-list-box'>
                                <div className='bottle-image-box step3'>
                                    <img src={imageMap[drink]} alt={`${drink} bottle`} className="bottle-image" />
                                </div>
                                <div className='step3-total-type'>{drink}:</div>
                                <div className='step3-total-box'>
                                    {/* {drink}: */}
                                    <div>
                                        {drink === 'Beer' ? (
                                            // Only show 0.75L for beer
                                            `${bottlesNeeded[drink].totalBottles075L} bottles`
                                        )
                                            : drink === 'White Wine' || drink === 'Red Wine' || drink === 'Rose Wine' || drink === 'Champagne' ? (
                                                // Only show 0.75L for beer
                                                `${bottlesNeeded[drink].totalBottles075L} bottles (0.75L)`
                                            ) : (
                                                // Show both 0.75L and 1L for other drinks
                                                `${bottlesNeeded[drink].totalBottles075L} bottles (0.75L) or ${bottlesNeeded[drink].totalBottles1L} bottles (1L)`
                                            )}
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="centered button-row">
                <button type="button" className="planning-btn btn-secondary btn" onClick={prevStep}>Back</button>
                {/* <button type="button" className="planning-btn btn-primary btn" onClick={nextStep}>Finish</button> */}
            </div>
        </div>
    );
};

export default StepThree;
