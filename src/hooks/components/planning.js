import React, { useState } from 'react';
import StepOne from './planningTables/step-one';
import StepTwo from './planningTables/step-two';
import StepThree from './planningTables/step-three';
import '../../styles/planning.scss'; // Import the SCSS file


const Planning = () => {
  const [values, setValues] = useState({
    value: '',
    people: '',
    drinks: '',
    totalPercentage: '100',
    totalBottles: {},
    drinkInventory: [
      { label: 'Red Wine', defaultPercentage: 15, bottleSize: 0.75, drinksPerBottle: 5 },
      { label: 'White Wine', defaultPercentage: 15, bottleSize: 0.75, drinksPerBottle: 5 },
      { label: 'Rose Wine', defaultPercentage: 5, bottleSize: 0.75, drinksPerBottle: 5 },
      { label: 'Champagne', defaultPercentage: 10, bottleSize: 0.75, drinksPerBottle: 6 },
      { label: 'Whiskey', defaultPercentage: 6, bottleSize: 0.75, drinksPerBottle: 17 },
      { label: 'Scotch', defaultPercentage: 4, bottleSize: 0.75, drinksPerBottle: 17 },
      { label: 'Tequila', defaultPercentage: 6, bottleSize: 0.75, drinksPerBottle: 17 },
      { label: 'Gin', defaultPercentage: 5, bottleSize: 0.75, drinksPerBottle: 17 },
      { label: 'Vodka', defaultPercentage: 10, bottleSize: 0.75, drinksPerBottle: 17 },
      { label: 'Rum', defaultPercentage: 4, bottleSize: 0.75, drinksPerBottle: 17 },
      { label: 'Beer', defaultPercentage: 20, bottleSize: 0.75, drinksPerBottle: 1 }
    ]
  });
  const initialPercentages = values.drinkInventory.reduce((acc, drink) => {
    acc[drink.label] = drink.defaultPercentage; // Set default percentage
    return acc;
}, {});
  const [currentStep, setCurrentStep] = useState(1);
  const [userDefinedPercentages, setUserDefinedPercentages] = useState(initialPercentages); // Track percentages for drinks


  const handleChangeValue = (prop, val) => {
    setValues(prevValues => ({
      ...prevValues,
      [prop]: val
    }));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
    window.scrollTo({
      top: 220, // Scroll to the top
      behavior: 'smooth' // Smooth scroll animation
    });
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
    window.scrollTo({
      top: 220, // Scroll to the top
      behavior: 'auto'
    });
  };

  const drinksTotal = Number(values.drinks) * Number(values.people);

  return (
    <div id="planning" className="container-home" style={planningWrapper}>

      <div className="planning-container" style={planning}>
        {/* <h2>Party Planning</h2> */}

        {currentStep === 1 && (
          <StepOne nextStep={nextStep} handleChangeValue={handleChangeValue} values={values} />
        )}
        {currentStep === 2 && (
          <StepTwo
            values={values}
            nextStep={nextStep}
            prevStep={prevStep}
            handleChangeValue={handleChangeValue}
            drinksTotal={drinksTotal}
            totalPercentage={values.percentage}
            setUserDefinedPercentages={setUserDefinedPercentages}
            userDefinedPercentages={userDefinedPercentages}
          />
        )}
        {currentStep === 3 && (
          <StepThree
            values={values}
            nextStep={nextStep}
            prevStep={prevStep}
            drinksTotal={drinksTotal}
            userDefinedPercentages={userDefinedPercentages}
          />
        )}
      </div>
    </div>
  );
};

const planningWrapper = {
  marginTop: 25,
  marginBottom: 25,
  maxWidth: 900
}

const planning = {
  backgroundColor: 'white',
  backgroundSize: 'cover', // Optional: Cover the entire container
  backgroundPosition: 'center', // Optional: Center the background image
  backgroundRepeat: 'no-repeat',
  borderRadius: '5px'
};

export default Planning;
