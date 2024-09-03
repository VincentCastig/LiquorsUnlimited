import React, { useState } from 'react';
import TopTable from './planningTables/top-table';
import BottomTable from './planningTables/bottom-table';
import backdropCopy from '../../img/backdrop-copy.png'

const Planning = () => {
  const [values, setValues] = useState({
    value: '',
    people: '',
    drinks: '',
    percentage: '100'
  });

  const handleChangeValue = (prop, val) => {
    setValues(prevValues => ({
      ...prevValues,
      [prop]: val
    }));
  };

  const drinksTotal = Number(values.drinks) * Number(values.people);

  return (
    <div id="planning" className="container-home" style={planningWrapper}>

      <div className="home-wine-container" style={planning}>
        <h2>Party Planning</h2>
        <TopTable
          handleChangeValue={handleChangeValue}
        />
        <BottomTable
          handleChangeValue={handleChangeValue}
          drinksTotal={drinksTotal}
          totalPercentage={values.percentage}
        />
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
};

export default Planning;
