import React, { Component } from 'react';
import { Col, Table, FormGroup, FormControl } from 'react-bootstrap';

class TopTable extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            people: '',
            drinks: ''
        }
    }
    updatePeople(val) {
        this.props.handleChangeValue('people', val)
        this.setState({ people: val })
    }
    updateDrinks(val) {
        this.props.handleChangeValue('drinks', val)
        this.setState({ drinks: val })
    }

    render() {
        return (
            <Table>
                        <thead>
                            <tr>
                                <th>People</th>
                                <th>Drinks Per Person</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <form>
                                        <FormGroup>
                                            <FormControl
                                            type="number"
                                            value={this.state.people}
                                            placeholder="Enter Amount of People"
                                            onChange={ event => this.updatePeople(event.target.value) }
                                            />
                                        </FormGroup>
                                    </form>
                                </td>
                                <td>
                                    <form>
                                        <FormGroup>
                                            <FormControl
                                            type="number"
                                            value={this.state.drinks}
                                            placeholder="Enter Amount of Drinks Per Person"
                                            onChange={event => this.updateDrinks(event.target.value)}
                                            />
                                        </FormGroup>
                                    </form>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
        )
    }
    
}

export default TopTable;