import React, { useState, useEffect } from 'react';
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


const StepTwo = ({ handleChangeValue, drinksTotal, nextStep, prevStep, values }) => {
    const { drinkInventory } = values;

    // Initialize percentages based on drinkInventory defaults
    const initialPercentages = drinkInventory.reduce((acc, drink) => {

        acc[drink.label] = drink.defaultPercentage; // Set default percentage
        return acc;
    }, {});

    const [percentages, setPercentages] = useState(initialPercentages); // Track percentages for drinks

    const updatePercentage = (drink, value) => {
       
        const parsedValue = parseInt(value, 10) || 0;

        if (parsedValue > 100) {
            alert('Percentage cannot exceed 100.');
            return;
        }

        if (value.trim() === '' || !isNaN(parsedValue)) {
            setPercentages(prevState => ({
                ...prevState,
                [drink.label]: parsedValue // Update percentage
            }));
        }
        else{
            return;
        }

        // Calculate total percentage and update in parent state
        const totalPercentage = Object.values({ ...percentages, [drink.label]: parsedValue }).reduce((acc, val) => acc + val, 0);
        handleChangeValue('percentage', totalPercentage); // Update total percentage
    };

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

    return (
        <div className="card-content">
            <h1>Stock Your Bar</h1>
            <div className="drink-selection-help">
                Set the percentage consumed for each type of alcohol you'll be serving at your party.
            </div>
            <div className="row drink-select-wrapper">
                {drinkInventory.map((drink, i) => {
                    const { label } = drink;

                    return (
                        <div key={i} className="drink-select-column col-3 col-sm-3 col-lg-3 col-xl-3">
                            <div className="column-wrapper centered">
                                <div className="checkable-box-wrapper centered outlined">
                                    <div className="box-content">
                                        <div className='bottle-image-box'>
                                            <img
                                                src={imageMap[label]}
                                                alt={`${label} Bottle`}
                                                className="bottle-image"
                                            />
                                        </div>
                                        <div className='drink-type-box'>
                                            <div className="drink-type-name full-width">{label}</div>
                                            <div className="percentage-box">
                                                <input
                                                    type="text"
                                                    min="0"
                                                    max="100"
                                                    value={percentages[label] || ''}
                                                    placeholder="0%"
                                                    onChange={(event) => updatePercentage(drink, event.target.value)}
                                                    className="percentage-input"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="centered button-row">
                <button type="button" className="planning-btn btn-secondary btn" onClick={prevStep}>Back</button>
                <button className='planning-btn btn' onClick={nextStep}>Next</button>
            </div>
        </div>
    );
};

export default StepTwo;
