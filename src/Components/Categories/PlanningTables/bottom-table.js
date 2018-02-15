import React, { Component } from 'react';
import { Table, FormGroup, FormControl } from 'react-bootstrap';

class BottomTable extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            value: '',
            size: "0.75",
            Beer: [ 'Beer', 20, '' ],
            Red: [ 'Red Wine', 12, 5 ],
            White: [ 'White Wine', 28, 5 ],
            Bourbon: [ 'Bourbon', 11, 17 ],
            Scotch: [ 'Scotch',7, 17 ],
            Gin: [ 'Gin',4, 17 ],
            Vodka: [ 'Vodka',16, 17 ],
            Rum: [ 'Rum',2, 17 ]
        }
        this.handleChange = this.handleChange.bind(this);
    }

    getValidateState() {
        const drinks = this.state.value
        if (drinks > 25) return 'warning'
    }
    handleChange(event){
        this.setState({size:event.target.value})
        console.log(this.state.size);
    }
    updatePercentage(drink, value) {
        this.props.handleChangeValue('people', value)
        // if (drink === "Beer") {
        //     this.setState({ Beer: value })
        // }
        // else if (drink === "Red") {
        //     this.setState({ Red: value })
        // }
        // else if (drink === "White") {
        //     this.setState({ White: value })
        // }
        // else if (drink === "Bourbon") {
        //     this.setState({ Bourbon: value })
        // }
        // else if (drink === "Scotch") {
        //     this.setState({ Scotch: value })
        // }
        // else if (drink === "Gin") {
        //     this.setState({ Gin: value })
        // }
        // else if (drink === "Vodka") {
        //     this.setState({ Vodka: value })
        // }
        // else {
        //     this.setState({ Rum: value })
        // }
        console.log(drink)
        console.log(this.state["Beer"])
        console.log(this.state["Red"])

    }

    renderPlanningTable() {
        const data = ['Beer', 'Red', 'White', 'Bourbon', 'Scotch', 'Gin', 'Vodka', 'Rum'];
        const drinksTotal = Math.round(100 * this.props.drinksTotal) / 100;

        return data.map((val, i) => {
            let drinks = Math.round(100 * (this.state[val][1] * drinksTotal / 100)) / 100;
            let fifth = Math.round(10 * drinks / this.state[val][2]) / 10;
            let liter = Math.round(10 * fifth / 1.33) / 10;
            let rowStyle = `style${i % 2}`;
            console.log(rowStyle);
            return (
                        <tr key={i} className={rowStyle}>
                            <td>
                                {this.state[val][0]}
                            </td>
                            <td>
                                
                                {`${this.state[val][1]}%`}
                            </td>
                            {/* <td>{drinks}</td> */}
                            {this.state.size === '0.75' && this.state[val][2] &&
                                <td>{fifth}</td>
                            }
                            {this.state.size === '1' && this.state[val][2] &&
                            <td>{liter}</td>
                            }
                        </tr>
            )
        })
    }

    render() {
        return (
            <Table>
                        <thead>
                            <tr>
                                <th>Type of Drink</th>
                                <th>Drink Amount (%)</th>
                                {/* <th>Number of Drinks</th> */}
                                <th>
                                    <select value={this.state.size} onChange={this.handleChange}>
                                        <option value={0.75}>0.75 Liter Bottles</option>
                                        <option value={1}>1 Liter Bottles</option>
                                    </select>
                                </th>
                                {/* <th>1.0 Liters</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderPlanningTable()}
                        </tbody>
                    </Table>
        )
    }
    
}

export default BottomTable;