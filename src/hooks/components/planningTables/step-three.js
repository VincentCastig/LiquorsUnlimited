import React from 'react';

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

const StepThree = ({ values, drinksTotal, userDefinedPercentages, prevStep }) => {
    const { drinkInventory, people, drinks } = values;

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

    // Function to download the data as CSV
    const downloadCSV = () => {
        const rows = [];
        rows.push(['Alcohol Type', '0.75L Bottle Count', '1L Bottle Count', '12 Oz Beer Count']); // CSV header

        let total075L = 0;
        let total1L = 0;

        Object.keys(bottlesNeeded).forEach(drink => {
            if (drink === 'Beer') {
                const { totalBottles075L } = bottlesNeeded[drink];
                rows.push([drink, '', '', totalBottles075L]); // CSV data
            }
            else {
                const { totalBottles075L, totalBottles1L } = bottlesNeeded[drink];
                rows.push([drink, totalBottles075L, totalBottles1L]); // CSV data
                total075L += totalBottles075L;
                total1L += totalBottles1L;
            }
        });
        rows.push([]);
        rows.push(['Total', total075L, total1L]);

        const csvContent = rows.map(e => e.join(",")).join("\n");
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'party_bottle_counts.csv'; // Set file name
        link.click();
    };

    // Calculate the total number of bottles for each selected alcohol type
    const calculateBottles = () => {
        const bottlesNeeded = {};

        // Loop through the drink inventory
        drinkInventory.forEach(drink => {
            const { label, drinksPerBottle } = drink;

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
                <div className="drink-selection-help">
                With {people} guests expected at {drinks} drinks per guest, the estimate bottle count is:
                </div>
                {/* <h2>Include count of spirit bottles here</h2> */}
                <ul className="bottle-list">
                    {Object.keys(bottlesNeeded).map(drink => (
                        <li key={drink} className="bottle-list-item">
                            <div className='bottle-list-box'>
                                <div className='bottle-image-box step3'>
                                    <img src={imageMap[drink]} alt={`${drink} bottle`} className="bottle-image" />
                                </div>
                                <div className='step3-total-type'>{drink}:</div>
                                <div className='step3-total-box'>
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

                <button onClick={downloadCSV} className="planning-btn btn-secondary btn">Download</button>

            </div>
        </div>
    );
};

export default StepThree;
