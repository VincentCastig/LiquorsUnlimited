import React, { useState } from 'react';
import { Table, FormGroup, FormControl } from 'react-bootstrap';

const BottomTable = ({ handleChangeValue, drinksTotal, totalPercentage }) => {
    const [sizes, setSizes] = useState({
        drinksData: {
            Beer: ['Beer', 20, '', 0],
            Red: ['Red Wine', 12, 0.75, 5],
            White: ['White Wine', 28, 0.75, 5],
            Bourbon: ['Bourbon', 11, 0.75, 17],
            Scotch: ['Scotch', 7, 0.75, 17],
            Gin: ['Gin', 4, 0.75, 17],
            Vodka: ['Vodka', 16, 0.75, 17],
            Rum: ['Rum', 2, 0.75, 17]
        }
    });

    const handleSizeChange = (drink, newSize) => {
        const newDrinksData = { ...sizes.drinksData };
        newDrinksData[drink][2] = parseFloat(newSize);  // Update the size for each drink

        setSizes({ ...sizes, drinksData: newDrinksData });
    };

    const updatePercentage = (drink, value) => {
        const newDrinksData = { ...sizes.drinksData };
        newDrinksData[drink] = [newDrinksData[drink][0], parseInt(value, 10) || 0, newDrinksData[drink][3]];
        setSizes({ ...sizes, drinksData: newDrinksData });

        // Calculate total percentage and update it
        const updatedTotalPercentage = Object.values(newDrinksData).reduce((acc, item) => acc + item[1], 0);
        handleChangeValue('percentage', updatedTotalPercentage);
    };

    const renderPlanningTable = () => {
        const data = Object.keys(sizes.drinksData);

        return data.map((val, i) => {
            const [label, percentage] = sizes.drinksData[val];
            const bottleSize = sizes.drinksData[val][2];

            const totalDrinksForType = (percentage * drinksTotal) / 100;  // Total drinks for this type
            const drinksPerBottle = val === 'White' || val === 'Red' ? 6.7 : 22;  // Assume 5 drinks for wine, 17 drinks for spirits

            const totalBottles = (totalDrinksForType / (drinksPerBottle * bottleSize)).toFixed(1);  // Total bottles required

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
                    <td>
                        {bottleSize &&
                            <select value={bottleSize} onChange={(event) => handleSizeChange(val, event.target.value)} className="bottle-size-select">
                                <option value="0.75">0.75 Liter</option>
                                <option value="1">1 Liter</option>
                            </select>
                        }
                    </td>

                    {val !== 'Beer' &&
                        <td>{totalBottles}</td>
                    }
                    {val === 'Beer' &&
                        <td></td>
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
                    <th>Bottle Size</th>
                    <th>Total in Bottles</th>
                </tr>
            </thead>
            <tbody>
                {renderPlanningTable()}
            </tbody>
        </Table>
    );
};

export default BottomTable;
