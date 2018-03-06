import React, {Component} from 'react';
import ProfitTeil from "./ProfitTeil";
import EnergieTeil from "./EnergieTeil";
import PropTypes from 'prop-types';
import {TICKER_TYPE} from "./Ticker";
import Ticker from "./Ticker";
import {getKrakenTicker} from "../actions/ajaxRequests";

export const CURRENCY_TYPE = {
    BTC: "BTC",
    LTC: "LTC"
};

class Body extends Component {

    constructor(props) {
        super(props);
        this.state = {
            priceUsd: 0,
            priceEur: 0
        };
    }

    componentDidMount() {
        switch (this.props.currencyType) {
            case CURRENCY_TYPE.BTC:
                this.getBtcData();
                break;
            case CURRENCY_TYPE.LTC:
                this.getLtcData();
                break;
            default:
                this.getBtcData();
        }
    }


    getBtcData() {
        getKrakenTicker(TICKER_TYPE.BTCUSD)
            .done(data => {
                let price = data.result[TICKER_TYPE.BTCUSD].c[0];
                this.setState({priceUsd: parseFloat(price)})
            })
            .fail(() => {
                this.setState({priceUsd: 'ERR'})
            });
        getKrakenTicker(TICKER_TYPE.BTCEUR)
            .done(data => {
                let price = data.result[TICKER_TYPE.BTCEUR].c[0];
                this.setState({priceEur: parseFloat(price)})
            })
            .fail(() => {
                this.setState({priceEur: 'ERR'})
            });
        setTimeout(this.getBtcData.bind(this), 10000);
    }

    getLtcData() {
        getKrakenTicker(TICKER_TYPE.LTCUSD)
            .done(data => {
                let price = data.result[TICKER_TYPE.LTCUSD].c[0];
                this.setState({priceUsd: parseFloat(price)})
            })
            .fail(() => {
                this.setState({priceUsd: 'ERR'})
            });
        getKrakenTicker(TICKER_TYPE.LTCEUR)
            .done(data => {
                let price = data.result[TICKER_TYPE.LTCEUR].c[0];
                this.setState({priceEur: parseFloat(price)})
            })
            .fail(() => {
                this.setState({priceEur: 'ERR'})
            });
        setTimeout(this.getLtcData.bind(this), 10000);
    }

    render() {
        return (

            <div className="Body">
                <Ticker title={this.props.currencyType + "USD"} price={this.state.priceUsd}/>
                <Ticker title={this.props.currencyType + "EUR"} price={this.state.priceEur}/>

                <ProfitTeil priceUsd={this.state.priceUsd}
                            type={this.props.currencyType}/>

                <EnergieTeil type={this.props.currencyType}/>
            </div>
        );
    }
}

export default Body;

Body.propTypes = {
    currencyType: PropTypes.string.isRequired,
};