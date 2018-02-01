import React, { Component } from 'react';
import { Table, FormGroup, FormControl } from 'react-bootstrap';

class BottomTable extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            value: '',
            Beer: [ 20, '' ],
            Red: [ 12, 5 ],
            White: [ 28, 5 ],
            Bourbon: [ 11, 17 ],
            Scotch: [ 7, 17 ],
            Gin: [ 4, 17 ],
            Vodka: [ 16, 17 ],
            Rum: [ 2, 17 ]
        }
    }

    getValidateState() {
        const drinks = this.state.value
        if (drinks > 25) return 'warning'
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
            let drinks = this.state[val][0] * drinksTotal / 100
            let fifth = Math.round(10 * drinks / this.state[val][1]) / 10;
            let liter = Math.round(10 * fifth / 1.33) / 10;
            return (
                        <tr key={i}>
                            <td>
                                {val}
                            </td>
                            <td>
                                {/* <form>
                                    <FormGroup
                                        validationState={this.getValidateState()}
                                    >
                                        <FormControl
                                            type="number"
                                            max='100'
                                            value={this.state[val]}
                                            placeholder={`Percentage of people drinking ${val}`}
                                            onChange={event => this.updatePercentage(val, event.target.value)}
                                        />
                                    </FormGroup>
                                </form> */}
                                {`${this.state[val][0]}%`}
                            </td>
                            <td>{drinks}</td>
                            {this.state[val][1] && 
                                <td>{fifth}</td>
                            }
                            {this.state[val][1] && 
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
                                <th>Percentage</th>
                                <th>Drinks</th>
                                <th>0.75 Liter Bottles</th>
                                <th>1 Liter Bottles</th>
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