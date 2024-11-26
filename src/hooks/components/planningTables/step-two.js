import React, { useState, useEffect } from 'react';
import Beer from '../../../img/party-images/beer-bottle2.webp';

import WhiteWine from '../../../img/party-images/white-wine-bottle.png';
import RedWine from '../../../img/party-images/red-wine-bottle.png';
import RoseWine from '../../../img/party-images/rose.png';

import Whiskey from '../../../img/party-images/whiskey-bottle-2.png';
import Scotch from '../../../img/party-images/scotch-bottle.png';
import Tequila from '../../../img/party-images/tequila-bottle.png';

import Gin from '../../../img/party-images/gin-bottle.png';
import Vodka from '../../../img/party-images/vodka-bottle.png';
import Rum from '../../../img/party-images/rum-bottle.png';
import Champagne from '../../../img/party-images/champagne-bottle.png';


const StepTwo = ({ handleChangeValue, drinksTotal, nextStep, prevStep, values, setUserDefinedPercentages, userDefinedPercentages }) => {
    const { drinkInventory } = values;

    const [errorMessage, setErrorMessage] = useState('');
    const [modifiedDrinks, setModifiedDrinks] = useState(new Set()); // Track modified drinks
    const [modifiedStyles, setModifiedStyles] = useState({}); // Track styles of modified drinks
    const [totalPercentage, setTotalPercentage] = useState(0); // Track total percentage

    useEffect(() => {
        // Calculate total percentage whenever userDefinedPercentages changes
        const total = Object.values(userDefinedPercentages).reduce((acc, val) => acc + val, 0);
        setTotalPercentage(total);
    }, [userDefinedPercentages]);

    const updatePercentage = (drink, value) => {
        const parsedValue = parseInt(value, 10) || 0;

        if (parsedValue < 0 || parsedValue > 100) {
            setErrorMessage('Percentage must be between 0 and 100.');
            return;
        } else {
            setErrorMessage('');
        }

        setUserDefinedPercentages(prevState => ({
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
        let total = Object.values(userDefinedPercentages).reduce((acc, val) => acc + val, 0);
        let remainingPercentages = 100 - total; // Remaining percentage to distribute
        let newPercentages = { ...userDefinedPercentages }; // Start with current percentages
    
        // Get the drinks that have not been modified by the user
        const drinksToAdjust = drinkInventory.filter(drink => !modifiedDrinks.has(drink.label));
    
        if (remainingPercentages !== 0 && drinksToAdjust.length > 0) {
            const adjustmentPerDrink = Math.floor(remainingPercentages / drinksToAdjust.length);
    
            drinksToAdjust.forEach((drink, index) => {
                // Distribute the adjustments
                newPercentages[drink.label] = Math.max(0, (newPercentages[drink.label] || 0) + adjustmentPerDrink);
            });
    
            // Recalculate the total again to check for any rounding difference
            total = Object.values(newPercentages).reduce((acc, val) => acc + val, 0);
            const difference = 100 - total;
    
            // Apply any remaining difference to the first adjustable drink to reach exactly 100%
            if (difference !== 0 && drinksToAdjust.length > 0) {
                const firstDrinkLabel = drinksToAdjust[0].label;
                newPercentages[firstDrinkLabel] = (newPercentages[firstDrinkLabel] || 0) + difference;
            }
        }
    
        // Update the state with the new percentages
        setUserDefinedPercentages(newPercentages);
        handleChangeValue('percentage', newPercentages);
    
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
        <div className="card-content main-card">
            <h2>Stock Your Bar</h2>
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
                                                    value={userDefinedPercentages[label] || ''}
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
            <button onClick={recalculatePercentages} disabled={totalPercentage === 100} className='planning-btn btn recalculate'>Recalculate</button>

            <div className="centered button-row">
                <button type="button" className="planning-btn btn-secondary btn" onClick={prevStep}>Back</button>
                <button className='planning-btn btn' disabled={totalPercentage !== 100} // Disable button if total percentage is not 100
                    onClick={nextStep}>Next</button>
            </div>
        </div>
    );
};

export default StepTwo;

