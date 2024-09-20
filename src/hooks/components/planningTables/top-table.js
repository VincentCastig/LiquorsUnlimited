import React, { useState } from 'react';
import { Table, FormGroup, FormControl } from 'react-bootstrap';

const TopTable = ({ handleChangeValue }) => {
    const [people, setPeople] = useState('');
    const [drinks, setDrinks] = useState('');
    const [peopleError, setPeopleError] = useState('');
    const [drinksError, setDrinksError] = useState('');

    const drinksTotal = Math.round(100 * people * drinks) / 100;

    const updatePeople = (val) => {
        if (val === '') {
            setPeople('');
            handleChangeValue('people', '');
            setPeopleError('');
        } else {
            const value = parseInt(val, 10);
            if (isNaN(value) || value <= 0) {
                setPeopleError('Number of people must be greater than 0');
            } else if (value > 10000) {
                setPeopleError('Number of people must not exceed 10,000');
            } else {
                setPeopleError('');
                handleChangeValue('people', value);
                setPeople(value);
            }
        }
    };

    const updateDrinks = (val) => {
        if (val === '') {
            setDrinksError('');
            handleChangeValue('drinks', '');
            setDrinks('');
        }
        else {

            const value = parseInt(val, 10);
            if (value <= 0) {
                setDrinksError('Drinks per person must be greater than 0');
            } else if (value > 25) {
                setDrinksError('Drinks per person must not exceed 25');
            } else {
                setDrinksError('');
                handleChangeValue('drinks', value);
                setDrinks(value);
            }
        }
    };

    return (
        <Table>
            <thead>
                <tr>
                    <th>Number of People</th>
                    <th>Drinks Per Person</th>
                    <th>Drinks Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <FormGroup>
                            <FormControl
                                type="number"
                                value={people}
                                min="1"
                                max="10000"
                                placeholder="Enter Number of People"
                                onChange={(event) => updatePeople(event.target.value)}
                                isInvalid={!!peopleError}
                            />
                            {peopleError && (
                                <div style={{ color: 'red' }}>{peopleError}</div>
                            )}
                        </FormGroup>
                    </td>
                    <td>
                        <FormGroup>
                            <FormControl
                                type="number"
                                value={drinks}
                                min="1"
                                max="25"
                                placeholder="Enter Drinks Per Person"
                                onChange={(event) => updateDrinks(event.target.value)}
                                isInvalid={!!drinksError}
                            />
                            {drinksError && (
                                <div style={{ color: 'red' }}>{drinksError}</div>
                            )}
                        </FormGroup>
                    </td>
                    <td>{drinksTotal}</td>
                </tr>
            </tbody>
        </Table>
    );
};

export default TopTable;
