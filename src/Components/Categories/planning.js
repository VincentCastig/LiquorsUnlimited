import React, { useState } from 'react';
import TopTable from './PlanningTables/top-table';
import BottomTable from './PlanningTables/bottom-table';

const Planning = () => {
  const [values, setValues] = useState({
    value: '',
    people: '',
    drinks: '',
    percentage: ''
  });

  const handleChangeValue = (prop, val) => {
    setValues(prevValues => ({
      ...prevValues,
      [prop]: val
    }));
  };

  const drinksTotal = values.drinks * values.people;

  return (
    <div id="planning" className="container-home">
      <h2>Party Planning</h2>
      <div className="home-wine-container">
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

export default Planning;
