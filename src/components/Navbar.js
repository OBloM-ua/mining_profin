import React, {Component} from 'react';
import logo from '../logo.svg';


export default class Navbar extends Component {

    render() {
        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">Bitcoin profit calculator</h1>
            </div>
        );
    }
}

