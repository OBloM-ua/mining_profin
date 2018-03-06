import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Body, {CURRENCY_TYPE} from "./components/Body";
import Navbar from "./components/Navbar";


class App extends Component {

    render() {
        return (
            <div className="App">
                <Navbar/>
                <Router>
                    <Switch>
                        <Route exact path="/" component={() => {
                            return <Body currencyType={CURRENCY_TYPE.BTC}/>
                        }}/>


                        <Route path="/btc" component={() => {
                            return <Body currencyType={CURRENCY_TYPE.BTC}/>
                        }}/>
                        <Route path="/ltc" component={() => {
                            return <Body currencyType={CURRENCY_TYPE.LTC}/>
                        }}/>
                    </Switch>
                </Router>


            </div>
        );
    }
}

export default App;
