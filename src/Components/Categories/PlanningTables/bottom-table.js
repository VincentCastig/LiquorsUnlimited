import React, { Component } from 'react';
import { Col, Table, FormGroup, FormControl } from 'react-bootstrap';

class BottomTable extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            people: '',
            drinks: ''
        }
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
                                        value={this.state.value}
                                        placeholder={`Percentage of people drinking ${val}`}
                                        onChange={event => this.handleChange(event.target.value)}
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
        )
    }
    
}

export default BottomTable;