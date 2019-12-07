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
        return (
            <div>
                <div className="SuccessPage borderedContainer">
                    <h1>{'Thank you for your order!'}</h1>
                    <div style={{ height: '10px' }} />
                    <h3>{'Your order number is'}</h3>
                    <h1>{'#' + (this.props.store.totalOrdersCount - 1)}</h1>
                </div>
                <div style={{ height: '15px' }} />
                <Link to={'/user/' + this.props.match.params.userId}>
                    <Button
                        text={'Track your order'}
                        onClick={() => { }}
                    />
                </Link>
            </div>

        );
    }
}

export default SuccessPage;
