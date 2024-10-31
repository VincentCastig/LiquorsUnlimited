import React from 'react';

const StepThree = ({ values, nextStep, prevStep }) => {
    const { drinks, drinkInventory, percentage } = values;

// here is the drinkInventory that is being passed in:
//     drinkInventory: [
//         { label: 'Beer', defaultPercentage: 20, bottleSize: 0.75, drinksPerBottle: 5 },
//         { label: 'Red Wine', defaultPercentage: 12, bottleSize: 0.75, drinksPerBottle: 5 },
//         { label: 'White Wine', defaultPercentage: 20, bottleSize: 0.75, drinksPerBottle: 5 },
//         { label: 'Rose Wine', defaultPercentage: 8, bottleSize: 0.75, drinksPerBottle: 5 },
//         { label: 'Bourbon', defaultPercentage: 8, bottleSize: 0.75, drinksPerBottle: 17 },
//         { label: 'Scotch', defaultPercentage: 6, bottleSize: 0.75, drinksPerBottle: 17 },
//         { label: 'Tequila', defaultPercentage: 4, bottleSize: 0.75, drinksPerBottle: 17 },
//         { label: 'Gin', defaultPercentage: 4, bottleSize: 0.75, drinksPerBottle: 17 },
//         { label: 'Vodka', defaultPercentage: 16, bottleSize: 0.75, drinksPerBottle: 17 },
//         { label: 'Rum', defaultPercentage: 2, bottleSize: 0.75, drinksPerBottle: 17 },
//         { label: 'Champagne', defaultPercentage: 2, bottleSize: 0.75, drinksPerBottle: 17 },
//     ]

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
                <ul>
                    {Object.keys(bottlesNeeded).map(drink => (
                        <li key={drink}>
                            {drink}: {bottlesNeeded[drink]} bottles
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
