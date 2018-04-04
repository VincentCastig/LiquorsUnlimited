import React, { Component } from 'react';
import { Table, FormGroup, FormControl } from 'react-bootstrap';

class BottomTable extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            value: '',
            size: "0.75",
            totalPercentage: '',
            Beer: ['Beer', 20, ''],
            Red: ['Red Wine', 12, 5],
            White: ['White Wine', 28, 5],
            Bourbon: ['Bourbon', 11, 17],
            Scotch: ['Scotch', 7, 17],
            Gin: ['Gin', 4, 17],
            Vodka: ['Vodka', 16, 17],
            Rum: ['Rum', 2, 17]
        }
        this.handleChange = this.handleChange.bind(this);
    }

    getValidateState() {
        // const drinks = this.state.value
        // if (drinks > 25) return 'warning'
        return null;
    }
    handleChange(event){
        this.setState({size:event.target.value})
    }
    updatePercentage(drink, value, totalPercentage) {
       
        if (value > 100) {
            return;
        }
    
        if (drink === "Beer") {
            this.setState({ totalPercentage, Beer: ['Beer', value, ''] })
        }
        else if (drink === "Red") {
            this.setState({ totalPercentage, Red: ['Red Wine', value, 5] })
        }
        else if (drink === "White") {
            this.setState({ totalPercentage, White: ['White Wine', value, 5] })
        }
        else if (drink === "Bourbon") {
            this.setState({ totalPercentage, Bourbon: ['Bourbon', value, 17] })
        }
        else if (drink === "Scotch") {
            this.setState({ totalPercentage, Scotch: ['Scotch', value, 17] })
        }
        else if (drink === "Gin") {
            this.setState({ totalPercentage, Gin: ['Gin', value, 17] })
        }
        else if (drink === "Vodka") {
            this.setState({ totalPercentage, Vodka: ['Vodka', value, 17] })
        }
        else {
            this.setState({ totalPercentage, Rum: ['Rum', value, 17] })
        }
        this.props.handleChangeValue('percentage', totalPercentage)
    }

    renderPlanningTable() {
        const data = ['Beer', 'Red', 'White', 'Bourbon', 'Scotch', 'Gin', 'Vodka', 'Rum'];
        const drinksTotal = Math.round(100 * this.props.drinksTotal) / 100;
        let totalPercentage = 0;

        return data.map((val, i) => {
            let drinks = Math.round(100 * (this.state[val][1] * drinksTotal / 100)) / 100;
            let fifth = Math.round(10 * drinks / this.state[val][2]) / 10;
            let liter = Math.round(10 * fifth / 1.33) / 10;
            let rowStyle = `style${i % 2}`;
            //Update total percent
            totalPercentage += parseInt(this.state[val][1], 10);

            return (
                    <tr key={i} className={rowStyle}>
                            <td>
                                {this.state[val][0]}
                            </td>
                            <td>
                                <form  id='percent'>
                                    <FormGroup
                                        validationState={this.getValidateState()}
                                    >
                                        <FormControl
                                            type="number"
                                            max='100'
                                            min='0'
                                            value={this.state[val][1]}
                                            placeholder={`${this.state[val][1]}0%`}
                                            onChange={event => this.updatePercentage(val, event.target.value, totalPercentage)}
                                        />
                                    </FormGroup>
                                </form>
                            </td>
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
        let val;
        let percentage = 0;
        for (val in this.state){
            //If we have a drink property, add value to our total percentage
            if(parseInt(this.state[val][1], 10)) {
                percentage += parseInt(this.state[val][1], 10);
            }
        }
        const totalPercentage = percentage;

        //Color code total percentage
        let linksEl = document.querySelector('.totalPercentage') 
        if (this.state.totalPercentage) {
            if (totalPercentage > 100) {
                linksEl.style.color = 'red';
            } else if (totalPercentage < 100){
                linksEl.style.color = 'blue';
            }
            else {
                linksEl.style.color = 'green';
            }
        }
        
        return (
            <Table>
                    <thead>
                            <tr>
                                <th>Type of Drink</th>
                                <th>Percentage Consumed <span className="totalPercentage">({totalPercentage}%)</span></th>
                                <th>
                                    <select value={this.state.size} onChange={this.handleChange}>
                                        <option value={0.75}>0.75 Liter Bottles</option>
                                        <option value={1}>1 Liter Bottles</option>
                                    </select>
                                </th>
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