import React, { Component } from 'react';
import './wishListPage.css';
import Button from '../button/button.js';

import {
    Link,
} from "react-router-dom";
class SignForm extends Component {
    render() {
        return (
            <div className="SignForm">
                <input placeholder={'User Name'} onChange={(e) => { this.props.storeUserName(e) }} />
                <input placeholder={'Password'} onChange={(e) => { this.props.storePassword(e) }} />
                <Button text={this.props.buttonText} onClick={() => { this.props.SignIn }} />
            </div>
        );
    }
}

export default SignForm;
