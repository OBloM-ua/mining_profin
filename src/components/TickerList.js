import React, {Component} from 'react';
import Ticker, {TICKER_TYPE} from "./Ticker";


export default class TickerList extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="TickerList">
                <Ticker
                    title={"BTCUSD"} tickerType={TICKER_TYPE.BTCUSD}/>
            </div>
        );
    }
}
