import React, { Component } from 'react';
import './ordersNumbersPage.css';
import OrdersNumbers from '../ordersNumbers/ordersNumbers.js';
import Button from '../button/button.js';
import {
    Link,
} from "react-router-dom";

class OrdersNumbersPage extends Component {
        constructor(){
            super();
        }
    render() {

        this.props.store.userID = this.props.match.params.userId;


        return (<div className="OrdersNumbersPage">
            <OrdersNumbers
                readyListTitle='ready for pickup'
                readyList={this.props.store.ready}
                preaparingListTitle='being prepared'
                preaparingList={this.props.store.being}
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

export default OrdersNumbersPage;
