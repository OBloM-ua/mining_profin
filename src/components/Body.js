import React, {Component} from 'react';
import '../App.css';
import ProfitTeil from "./ProfitTeil";
import EnergieTeil from "./EnergieTeil";


class Body extends Component {

    render() {
        return (

            <div className="Body">
                <ProfitTeil/>
                <EnergieTeil/>

            </div>
        );
    }
}

export default Body;