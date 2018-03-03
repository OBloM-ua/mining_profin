import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getKrakenTicker} from "../actions/ajaxRequests";




export const TICKER_TYPE = {
    BTCUSD: "XXBTZUSD",
    BTCEUR: "XXBTZUEUR"
};


export default class Ticker extends Component {


    constructor(props) {
        super(props);
        this.state = {
            price: 0
        };
    }

    componentDidMount() {
        getKrakenTicker(this.props.tickerType)
            .done(data => {
                let price = data.result[this.props.tickerType].c[0];
                console.log(price);
                this.setState({price: price})
            })
            .fail(xhr => {
                console.log("ERR");
                this.setState({price: 'ERR'})
            })

    }

    render() {
        return (
            <div className="Ticker">
                {this.props.title}:{this.state.price}
            </div>
        );
    }
}

Ticker.propTypes = {
    tickerType: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};