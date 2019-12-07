import React, { Component } from 'react';
import './successPage.css';
import Order from '../order/order.js'
import Button from '../button/button.js';
import {
    Link,
} from "react-router-dom";
class SuccessPage extends Component {

    componentDidMount() {
        this.props.store.updateUserID(this.props.match.params.userId);
    }

    render() {
        return (<div className="SuccessPage">
            <h1>{'Thank you for your order!'}</h1>
            <div style={{ height: '50px' }} />
            {'#' + this.props.orderNumber}
        </div>

        );
    }
}

export default SuccessPage;
