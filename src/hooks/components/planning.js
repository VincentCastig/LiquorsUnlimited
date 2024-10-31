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
    percentage: '100',
    totalBottles: {},
    drinkInventory: [
      { label: 'Red Wine', defaultPercentage: 10, bottleSize: 0.75, drinksPerBottle: 5 },
      { label: 'White Wine', defaultPercentage: 18, bottleSize: 0.75, drinksPerBottle: 5 },
      { label: 'Rose Wine', defaultPercentage: 6, bottleSize: 0.75, drinksPerBottle: 5 },
      { label: 'Champagne', defaultPercentage: 10, bottleSize: 0.75, drinksPerBottle: 6 },
      { label: 'Whiskey', defaultPercentage: 6, bottleSize: 0.75, drinksPerBottle: 17 },
      { label: 'Scotch', defaultPercentage: 4, bottleSize: 0.75, drinksPerBottle: 17 },
      { label: 'Tequila', defaultPercentage: 2, bottleSize: 0.75, drinksPerBottle: 17 },
      { label: 'Gin', defaultPercentage: 2, bottleSize: 0.75, drinksPerBottle: 17 },
      { label: 'Vodka', defaultPercentage: 14, bottleSize: 0.75, drinksPerBottle: 17 },
      { label: 'Rum', defaultPercentage: 2, bottleSize: 0.75, drinksPerBottle: 17 },
      { label: 'Beer', defaultPercentage: 18, bottleSize: 0.75, drinksPerBottle: 1 }

    ]
  });
  const [currentStep, setCurrentStep] = useState(1);

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
          />
        )}
        {currentStep === 3 && (
          <StepThree
            values={values}
            nextStep={nextStep}
            prevStep={prevStep}
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
