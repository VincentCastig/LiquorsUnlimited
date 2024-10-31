import React, { useState } from 'react';
import TopTable from './planningTables/top-table';
import BottomTable from './planningTables/bottom-table';
import backdropCopy from '../../img/backdrop-copy.png'
import StepOne from './planningTables/step-one';

const Planning = () => {
  const [values, setValues] = useState({
    value: '',
    people: '',
    drinks: '',
    percentage: '100',
    totalBottles: {},
  });

  const handleChangeValue = (prop, val) => {
    setValues(prevValues => ({
      ...prevValues,
      [prop]: val
    }));
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
};

  const drinksTotal = Number(values.drinks) * Number(values.people);

  return (
    <div id="planning" className="container-home" style={planningWrapper}>

      <div className="home-wine-container" style={planning}>
        <h2>Party Planning</h2>
        {/* <TopTable
          handleChangeValue={handleChangeValue}
        />
        <BottomTable
          handleChangeValue={handleChangeValue}
          drinksTotal={drinksTotal}
          totalPercentage={values.percentage}
        /> */}
        {currentStep === 1 && (
                <StepOne values={values} setValues={setValues} nextStep={nextStep} handleChangeValue={handleChangeValue} />
            )}
            {currentStep === 2 && (
                <StepTwo values={values} setValues={setValues} nextStep={nextStep} />
            )}
        <StepOne nextStep={nextStep} handleChangeValue={handleChangeValue}/>
      </div>
    </div>
  );
};

const planningWrapper = {
  marginTop: 25,
  marginBottom: 25
}

const planning = {
  backgroundImage: `url(${backdropCopy})`,
  backgroundSize: 'cover', // Optional: Cover the entire container
  backgroundPosition: 'center', // Optional: Center the background image
  backgroundRepeat: 'no-repeat',
  borderRadius: '5px'
};

export default Planning;
