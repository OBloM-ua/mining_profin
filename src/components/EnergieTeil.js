import React, {Component} from 'react';
import '../App.css';


class EnergieTeil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: '1.67',
            verbrauch: '1320'
        };
    }


    priceHandler(event) {
        this.setState({price: event.target.value});
    }


    verbrauchHandler(event) {
        this.setState({verbrauch: event.target.value})
    }

    get24EnergieCost() {
        return this.state.price *  this.state.verbrauch * 24 / 1000;
    }

    getMonthEnergieCost() {
        return this.get24EnergieCost() * 30;
    }
    getYearEnergieCost() {
        return this.get24EnergieCost() * 365;
    }




    render() {
        return (

            <div className="EnergieTeil">

                <h3>EnergieTeil</h3>
                <label>
                    Energie cost in UAH <input type="number"
                                                  value={this.state.price}
                                                  onChange={this.priceHandler.bind(this)}/>
                </label>
                <label>
                    Energie verbrauch in w/s <input type="number"
                                                  value={this.state.verbrauch}
                                                  onChange={this.verbrauchHandler.bind(this)}/>
                </label>
                <p>
                    Energi cost per Day : {(this.get24EnergieCost()).toFixed(2)} UAH
                </p>
                <p>
                    Energi cost per Month : {(this.getMonthEnergieCost()).toFixed(2)} UAH
                </p>
                <p>
                    Energi cost per Year : {(this.getYearEnergieCost()).toFixed(2)} UAH
                </p>

            </div>
        );
    }
}

export default EnergieTeil;