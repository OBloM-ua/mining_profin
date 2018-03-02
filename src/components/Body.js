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
        return parseFloat(this.state.difficulty) * parseFloat(this.state.power);
    }

    render() {
        return (

            <div className="Body">
                <div className="Difficulty">
                    <p>
                        Current Difficulty: {this.state.difficulty}
                    </p>

                    <label>
                        Hashing Power: <input type="number"
                                              value={this.state.power}
                                              onChange={this.powerHandler.bind(this)}/>
                    </label>
                    <p>
                        Profit : {this.getProfit()}
                    </p>

                </div>

            </div>
        );
    }
}

export default Body;