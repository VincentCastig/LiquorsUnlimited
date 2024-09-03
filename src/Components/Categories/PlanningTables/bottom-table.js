import React, { useState } from 'react';
import { Table, FormGroup, FormControl } from 'react-bootstrap';

const BottomTable = ({ handleChangeValue, drinksTotal, totalPercentage }) => {
    const [sizes, setSizes] = useState({
        size: "0.75",
        drinksData: {
            Beer: ['Beer', 20, ''],
            Red: ['Red Wine', 12, 5],
            White: ['White Wine', 28, 5],
            Bourbon: ['Bourbon', 11, 17],
            Scotch: ['Scotch', 7, 17],
            Gin: ['Gin', 4, 17],
            Vodka: ['Vodka', 16, 17],
            Rum: ['Rum', 2, 17]
        }
    });

    const handleSizeChange = (event) => {
        setSizes({
            ...sizes,
            size: event.target.value
        });
    };

    const updatePercentage = (drink, value) => {
        const newDrinksData = { ...sizes.drinksData };
        newDrinksData[drink] = [newDrinksData[drink][0], parseInt(value, 10) || 0, newDrinksData[drink][2]];
        setSizes({ ...sizes, drinksData: newDrinksData });
        
        // Calculate total percentage and update it
        const updatedTotalPercentage = Object.values(newDrinksData).reduce((acc, item) => acc + item[1], 0);
        handleChangeValue('percentage', updatedTotalPercentage);
    };

    const renderPlanningTable = () => {
        const data = ['Beer', 'Red', 'White', 'Bourbon', 'Scotch', 'Gin', 'Vodka', 'Rum'];

        return data.map((val, i) => {
            const [label, percentage, fifthSize] = sizes.drinksData[val];
            const drinks = Math.round(100 * (percentage * drinksTotal / 100)) / 100;
            const fifth = Math.round(10 * drinks / fifthSize) / 10;
            const liter = Math.round(10 * fifth / 1.33) / 10;
            const rowStyle = i % 2 === 0 ? 'even-row' : 'odd-row';
            
            return (
                <tr key={i} className={rowStyle}>
                    <td>{label}</td>
                    <td>
                        <FormGroup>
                            <FormControl
                                type="number"
                                id="percent"
                                max="100"
                                min="0"
                                value={percentage}
                                placeholder="0%"
                                onChange={event => updatePercentage(val, event.target.value)}
                            />
                        </FormGroup>
                    </td>
                    {sizes.size === '0.75' && fifthSize &&
                        <td>{fifth}</td>
                    }
                    {sizes.size === '1' && fifthSize &&
                        <td>{liter}</td>
                    }
                </tr>
            );
        });
    };

    return (
        <Table className="styled-table">
            <thead>
                <tr>
                    <th>Type of Drink</th>
                    <th>Percentage Consumed <span className="total-percentage">({totalPercentage}%)</span></th>
                    <th>
                        <select value={sizes.size} onChange={handleSizeChange} className="liters-select">
                            <option value="0.75">0.75 Liter</option>
                            <option value="1">1 Liter</option>
                        </select>
                    </th>
                </tr>
            </thead>
            <tbody>
                {renderPlanningTable()}
            </tbody>
        </Table>
    );
};

export default BottomTable;
