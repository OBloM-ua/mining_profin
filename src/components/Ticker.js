import React, {Component} from 'react';
import PropTypes from 'prop-types';


export const TICKER_TYPE = {
    BTCUSD: "XXBTZUSD",
    BTCEUR: "XXBTZEUR",
    LTCUSD: "XLTCZUSD",
    LTCEUR: "XLTCZEUR"
};


export default class Ticker extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //     };
    // }
    render() {
        return (
            <div className="Ticker">
                {this.props.title}:{this.props.price}
            </div>
        );
    }
}

Ticker.propTypes = {
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
};