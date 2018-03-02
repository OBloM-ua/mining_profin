import React, {Component} from 'react';
import '../App.css';
import {getInfo} from "../actions/ajaxRequests";


class Body extends Component {


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
        return 12.5 * 86400 / ((parseFloat(this.state.difficulty) * Math.pow(2,32)) / (parseFloat(this.state.power) * Math.pow(10,12)));
    }

    getMonthProfit() {
        return 12.5 * 86400 * 30 / ((parseFloat(this.state.difficulty) * Math.pow(2,32)) / (parseFloat(this.state.power) * Math.pow(10,12)));
    }

    get365Profit() {
        return 12.5 * 86400 * 365 / ((parseFloat(this.state.difficulty) * Math.pow(2,32)) / (parseFloat(this.state.power) * Math.pow(10,12)));
    }

    render() {
        return (

            <div className="Body">
                <div className="Difficulty">
                    <p>
                        Current Difficulty: {this.state.difficulty}
                    </p>

                    <label>
                        Hashing Power in Th/s: <input type="number"
                                                      value={this.state.power}
                                                      onChange={this.powerHandler.bind(this)}/>
                    </label>
                    <p>
                        Profit per 24h : {this.get24Profit()}
                    </p>
                    <p>
                        Profit per Month : {this.getMonthProfit()}
                    </p>
                    <p>
                        Profit per Year : {this.get365Profit()}
                    </p>

                </div>
            </div>
        );
    }
}

export default Body;