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
                <input className={'formInput'} placeholder={'User Name'} onChange={(e) => { this.props.storeUserName(e) }} />
                <input className={'formInput'} placeholder={'Password'} onChange={(e) => { this.props.storePassword(e) }} />
                <Button text={this.props.buttonText} onClick={() => { this.props.action }} />
            </div>
        );
    }
}

export default SignForm;
