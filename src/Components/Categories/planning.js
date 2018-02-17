import React, { Component } from 'react';
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
        console.log('prop in planning.js',val)
        if (prop === 'people') {
            this.setState({ people: val });
        }
        else if (prop === 'drinks') {
            this.setState({ drinks: val });
        }
        else if (prop === 'percentage') {
            this.setState({ percentage: val });
        }
        else {
            this.setState({ value: val })
        }
        
    }
    

    render() {
        const drinksTotal = this.state.drinks * this.state.people
        return (
            <div id="planning" className="container-home">
                
                <h2>Party Planning</h2>
                
                <div className="home-wine-container">
                    <TopTable 
                    key={1}
                    handleChangeValue={this.handleChangeValue}
                    />

                    <BottomTable 
                    key={2}
                    handleChangeValue={this.handleChangeValue}
                    drinksTotal={drinksTotal}
                    totalPercentage={this.state.percentage}
                    />
                </div>
            </div>
        )
}
}

export default Planning;