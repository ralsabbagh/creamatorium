import React, { Component } from 'react';
import './ordersNumbersPage.css';
import OrdersNumbers from '../ordersNumbers/ordersNumbers.js';
import Button from '../button/button.js';
import { observer } from 'mobx-react';

import {
    Link,
} from "react-router-dom";

class OrdersNumbersPage extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.store.updateUserID(this.props.match.params.userId);
    }

    render() {

        return (<div className="OrdersNumbersPage">
            <OrdersNumbers
                readyListTitle='ready for pickup'
                readyList={this.props.store.ordersPerUserReady}
                preaparingListTitle='being prepared'
                preaparingList={this.props.store.ordersPerUserBeing}
            ></OrdersNumbers>
            <Link to={'/user/' + this.props.match.params.userId + '/order/'}>
                <Button
                    style={{ marginTop: '20px' }}
                    text={'Place a New Order'}

                />
            </Link>
        </div>);

    }
}

export default observer(OrdersNumbersPage);
