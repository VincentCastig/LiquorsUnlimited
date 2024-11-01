import React, { useState, useEffect } from 'react';
import Beer from '../../../img/beer-bottle2.webp';

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

    // Set initial percentages from the drinkInventory
    const initialPercentages = drinkInventory.reduce((acc, drink) => {
        acc[drink.label] = drink.defaultPercentage; // Set default percentage
        return acc;
    }, {});

    const [percentages, setPercentages] = useState(initialPercentages); // Track percentages for drinks
    const [errorMessage, setErrorMessage] = useState('');
    const [modifiedDrinks, setModifiedDrinks] = useState(new Set()); // Track modified drinks
    const [modifiedStyles, setModifiedStyles] = useState({}); // Track styles of modified drinks


    const updatePercentage = (drink, value) => {
        const parsedValue = parseInt(value, 10) || 0;

        if (parsedValue < 0 || parsedValue > 100) {
            setErrorMessage('Percentage must be between 0 and 100.');
            return;
        } else {
            setErrorMessage('');
        }

        setPercentages(prevState => ({
            ...prevState,
            [drink.label]: parsedValue // Update percentage
        }));

        setModifiedDrinks(prevSet => new Set(prevSet).add(drink.label));
        setModifiedStyles(prevStyles => ({
            ...prevStyles,
            [drink.label]: true // Set to true for modified styles
        }));

    };

    const recalculatePercentages = () => {
        const total = Object.values(percentages).reduce((acc, val) => acc + val, 0);
        const remainingPercentages = 100 - total; // Remaining percentage to distribute
        const newPercentages = { ...percentages }; // Start with current percentages

        // Get the drinks that have been modified by the user
        const drinksToAdjust = drinkInventory.filter(drink => !modifiedDrinks.has(drink.label)); // Adjust only those not modified by user
        console.log('modifiedDrinks ', modifiedDrinks);

        // Only proceed if there's remaining percentage to distribute
        if (remainingPercentages > 0 && drinksToAdjust.length > 0) {
            const adjustment = Math.floor(remainingPercentages / drinksToAdjust.length); // Calculate adjustment

            drinksToAdjust.forEach(drink => {
                newPercentages[drink.label] = Math.max(0, (newPercentages[drink.label] || 0) + adjustment); // Update percentages
            });
        }

        // Final total check
        const adjustedTotal = Object.values(newPercentages).reduce((acc, val) => acc + val, 0);
        const difference = 100 - adjustedTotal;

        // If there's a difference, distribute it evenly among all drinks
        if (difference !== 0) {
            const adjustmentPerDrink = Math.floor(difference / drinksToAdjust.length);
            drinksToAdjust.forEach(drink => {
                newPercentages[drink.label] = Math.max(0, (newPercentages[drink.label] || 0) + adjustmentPerDrink); // Adjust remaining drinks
            });
        }

        // Update the state with the new percentages
        setPercentages(newPercentages);
        handleChangeValue('percentage', newPercentages); // Update parent state

        // Clear the modified drinks set after recalculation
        setModifiedDrinks(new Set());
        setModifiedStyles({});
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
            {errorMessage && <div className="error-text">{errorMessage}</div>}

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
                                            <div className="percentage-box" >
                                                <input
                                                    type="text"
                                                    min="0"
                                                    max="100"
                                                    value={percentages[label] || ''}
                                                    placeholder="0%"
                                                    onChange={(event) => updatePercentage(drink, event.target.value)}
                                                    className="percentage-input"
                                                    style={{ backgroundColor: modifiedStyles[label] ? '#c6dfca' : '#ffffff' }}
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
            <button onClick={recalculatePercentages} className='btn'>Recalculate</button>

            <div className="centered button-row">
                <button type="button" className="planning-btn btn-secondary btn" onClick={prevStep}>Back</button>
                <button className='planning-btn btn' onClick={nextStep}>Next</button>
            </div>
        </div>
    );
};

export default StepTwo;

