import React, {Component} from 'react';
import '../App.css';
import {getDifficulty} from "../actions/ajaxRequests";


class Difficulty extends Component {

    constructor(props) {
        super(props);
        this.state = {
            difficulty: 0
        };
    }

    componentDidMount() {
        getDifficulty()
            .done(data => {
                this.setState({difficulty: data.difficulty})
            })
            .fail(() => {
                this.setState({difficulty: "error"})
            });
    }


    render() {


        return (

            <div className="Difficulty">
                <p>
                    Current Difficulty: {this.state.difficulty}
                </p>


            </div>
        );
    }
}

export default Difficulty;