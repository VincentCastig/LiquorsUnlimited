import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Col, Table, FormGroup, FormControl } from 'react-bootstrap';
import TopTable from './PlanningTables/top-table';


class Planning extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleChangeValue = this.handleChangeValue.bind(this);
        // this.handleChangeDrink = this.handleChangeDrink.bind(this);
        this.state = {
            value: 1,
            people: '',
            drinks: ''
        }
    }

    handleChangeValue(prop, val) {
        if (prop === 'people') {
            this.setState({ people: val });
        }
        else if (prop === 'drinks') {
            this.setState({ drinks: val });
        }
        console.log(typeof prop)
        
    }
        
        renderPlanningTable() {
            const data = ['Beer', 'Red', 'White', 'Bourbon', 'Scotch', 'Gin', 'Vodka', 'Rum'];
            return data.map(val => {
                return (
                            <tr>
                                <td>
                                    {val}
                                </td>
                                <td>
                                    <form>
                                        <FormGroup>
                                            <FormControl
                                            type="number"
                                            value={this.state.drinks}
                                            placeholder="Enter Amount of Drinks"
                                            onChange={this.handleChange}
                                            />
                                        </FormGroup>
                                    </form>
                                </td>
                                <td>Value</td>
                                <td>Value</td>
                            </tr>
                )
            })
        }
    

    render() {

        return (
            <div id="planning" className="container-home">
                
                <h2>Party Planning</h2>
                
                <div className="home-wine-container">
                    <TopTable 
                    key={1}
                    handleChangeValue={this.handleChangeValue}
                    />

                    <Table>
                        <thead>
                            <tr>
                                <th>Type of Drink</th>
                                <th>Percentage</th>
                                <th>Drinks</th>
                                <th>Drinks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderPlanningTable()}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
}
}

export default Planning;