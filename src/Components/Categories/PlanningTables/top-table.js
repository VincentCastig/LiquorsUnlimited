import React, { Component } from 'react';
import { Table, FormGroup, FormControl } from 'react-bootstrap';

class TopTable extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            people: '',
            drinks: ''
        }
    }
    getValidateState() {
        const drinks = this.state.drinks
        if (drinks > 10) return 'warning';
        return null;
    }
    updatePeople(val) {
        if (val <= 10000 & val % 1 === 0) {
            this.props.handleChangeValue('people', val)
            this.setState({ people: val })
        }
    }
    updateDrinks(val) {
        if (val.length <= 3 && val < 25 ) {
            this.props.handleChangeValue('drinks', val)
            this.setState({ drinks: val })
        }
        else {
            console.log(`Do you really expect to have ${val} drinks per person?`)
        }
    }

    render() {
        const drinksTotal = Math.round(100 * this.state.people * this.state.drinks) / 100;

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
                                    <form>
                                        <FormGroup
                                        >
                                            <FormControl
                                            type="number"
                                            value={this.state.people}
                                            min='1'
                                            max='10000'
                                            placeholder="Enter Amount of People"
                                            onChange={ event => this.updatePeople(event.target.value) }
                                            />
                                        </FormGroup>
                                    </form>
                                </td>
                                <td>
                                    <form>
                                        <FormGroup
                                            validationState={this.getValidateState()}
                                        >
                                            <FormControl
                                            type="number"
                                            value={this.state.drinks}
                                            min='1'
                                            max='25'
                                            placeholder="Enter Amount of Drinks Per Person"
                                            onChange={event => this.updateDrinks(event.target.value)}
                                            />
                                        </FormGroup>
                                    </form>
                                </td>
                                <td>{drinksTotal}</td>
                            </tr>
                        </tbody>
                    </Table>
        )
    }
    
}

export default TopTable;