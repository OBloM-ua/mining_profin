import React, {Component} from 'react';
import '../App.css';
import Difficulty from "./Difficulty";


class Body extends Component {
    render() {
        return (

                <div className="Body">
                    <Difficulty/>
                    <form>
                        <label>
                            Hashing Power:
                            <input type="number" min="0" name="Th/s"/>
                        </label>
                    </form>
                    profit


                </div>
        );
    }
}

export default Body;