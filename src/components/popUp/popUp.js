import React, { Component } from 'react';
import './popUp.css';
import {
    Link,
} from "react-router-dom";
class PopUp extends Component {


    render() {
        return (
            <React.Fragment>
                <div className={this.props.show ? "PopUp" : "PopUpClosed"}>
                    <div className="PopUpBody">
                        {this.props.children}
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

export default PopUp;
