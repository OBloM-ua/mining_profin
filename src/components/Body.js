import React, {Component} from 'react';
import '../App.css';
import {getDifficulty} from "../actions/ajaxRequests";


class Body extends Component {


    constructor(props) {
        super(props);
        this.state = {
            difficulty: '',
            power: ''
        };
    }

    componentDidMount() {
        getDifficulty()
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

    getProfit() {
        return 12.5 * 86400/((parseFloat(this.state.difficulty) * 4294967296)/ (parseFloat(this.state.power)*1000000000000));
         // return Math.pow(2, 32);
    }
//86,400 / (difficulty * 2^32 / hashrate)
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
                        Profit per 24h : {this.getProfit()}
                    </p>

                </div>

            </div>
        );
    }
}

export default Body;