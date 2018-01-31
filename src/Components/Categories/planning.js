import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Col, Table, FormGroup, FormControl } from 'react-bootstrap';
import TopTable from './PlanningTables/top-table';
import BottomTable from './PlanningTables/bottom-table';


class Planning extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleChangeValue = this.handleChangeValue.bind(this);
        // this.handleChangeDrink = this.handleChangeDrink.bind(this);
        this.state = {
            value: '',
            people: '',
            drinks: '',
            percentage: ''
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
    

    render() {

        return (
            <div id="planning" className="container-home">
                
                <h2>Party Planning</h2>
                
                <div className="home-wine-container">
                    <TopTable 
                    key={1}
                    handleChangeValue={this.handleChangeValue}
                    />

                    <BottomTable />
                </div>
            </div>
        )
}
}

export default Planning;