import React, {Component} from 'react';
import {getInfo} from "../actions/ajaxRequests";
import PropTypes from 'prop-types';


class ProfitTeil extends Component {


    constructor(props) {
        super(props);
        this.state = {
            difficulty: '',
            power: '13.5',

        };
    }

    componentDidMount() {
        getInfo()
            .done(data => {
                this.setState({difficulty: data.difficulty})
            })
            .fail(() => {
                this.setState({difficulty: "error"})
            })
    }

    powerHandler(event) {
        this.setState({power: event.target.value})
    }

    get24Profit() {
        return 12.5 * 86400 / ((parseFloat(this.state.difficulty) * Math.pow(2, 32)) / (parseFloat(this.state.power) * Math.pow(10, 12)));
    }

    getMonthProfit() {
        return this.get24Profit() * 30;
    }

    get365Profit() {
        return this.get24Profit() * 365;
    }

    render() {
        return (

            <div className="ProfitTeil">
                <p>
                    Current Difficulty: {this.state.difficulty}
                </p>

                <label>
                    Hashing Power in Th/s: <input type="number"
                                                  value={this.state.power}
                                                  onChange={this.powerHandler.bind(this)}/>
                </label>
                <p>
                    Profit per 24h in coins : {this.get24Profit()}
                </p>
                <p>
                    Profit per 24h in USD : {this.get24Profit() * this.props.priceUsd}
                </p>
                <p>
                    Profit per Month : {this.getMonthProfit()}
                </p>
                <p>
                    Profit per Year : {this.get365Profit()}
                </p>
            </div>
        );
    }
}

export default ProfitTeil;



ProfitTeil.propTypes = {
    priceUsd: PropTypes.number.isRequired,
};