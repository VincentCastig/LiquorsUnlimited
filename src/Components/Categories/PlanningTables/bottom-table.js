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
        // console.log('value in validateState', this.state.value)
        return null;
    }
    handleChange(event){
        this.setState({size:event.target.value})
        console.log('this.state.totalPercentage in handleChange',this.state.totalPercentage);
    }
    updatePercentage(drink, value, totalPercentage) {
        console.log('here is our totalPercentage in updatePercentage', totalPercentage);
        //convert string value to integer
        // console.log(value > 30);
        let numValue = value;

        if (value <= 100 || value >= 0 ) {
            const numValue = parseInt(value);
            console.log('here is our value', numValue);
        }
        else {
            const numValue = '';
        }
            
    
        // this.props.handleChangeValue('people', numValue)
        if (drink === "Beer") {
            this.setState({ Beer: ['Beer', numValue, ''] })
        }
        else if (drink === "Red") {
            this.setState({ totalPercentage, Red: ['Red Wine', numValue, 5] })
        }
        else if (drink === "White") {
            this.setState({ White: ['White Wine', numValue, 5] })
        }
        else if (drink === "Bourbon") {
            this.setState({ Bourbon: ['Bourbon', numValue, 17] })
        }
        else if (drink === "Scotch") {
            this.setState({ Scotch: ['Scotch', numValue, 17] })
        }
        else if (drink === "Gin") {
            this.setState({ Gin: ['Gin', numValue, 17] })
        }
        else if (drink === "Vodka") {
            this.setState({ Vodka: ['Vodka', numValue, 17] })
        }
        else {
            this.setState({ Rum: ['Rum', numValue, 17] })
        }
        let val;
        for (val in this.state){
            console.log(this.state[val][1]);
        }
        this.props.handleChangeValue('percentage', totalPercentage)
        console.log('drink in percent function',this.state.totalPercentage);
        

    }

    renderPlanningTable() {
        const data = ['Beer', 'Red', 'White', 'Bourbon', 'Scotch', 'Gin', 'Vodka', 'Rum'];
        const drinksTotal = Math.round(100 * this.props.drinksTotal) / 100;
        let totalPercentage = 0;
        console.log('renderPlanningTable', totalPercentage);

        return data.map((val, i) => {
            let drinks = Math.round(100 * (this.state[val][1] * drinksTotal / 100)) / 100;
            let fifth = Math.round(10 * drinks / this.state[val][2]) / 10;
            let liter = Math.round(10 * fifth / 1.33) / 10;
            let rowStyle = `style${i % 2}`;
            //update total percent
            totalPercentage += parseInt(this.state[val][1]);
            // console.log('data.map',this.state[val][1]);
            console.log('totalPercentage in data.map', totalPercentage);
            console.log('this.state.totalPercentage in data.map', this.state.totalPercentage);
            // this.setState({totalPercentage});
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
                                {/* {`${this.state[val][1]}%`} */}
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
        let val;
        let percentage = 0;
        for (val in this.state){
            //If we have a drink property, add value to our total percentage
            if(parseInt(this.state[val][1])) {
                percentage += parseInt(this.state[val][1]);
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
                                <th>Percentage to be Consumed <span className="totalPercentage">({totalPercentage}%)</span></th>
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