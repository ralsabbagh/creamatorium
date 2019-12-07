import React, { Component } from 'react';
import './dashboardOrdersPage.css';
import Order from '../order/order.js'
import Button from '../button/button.js';
import {
    Link,
} from "react-router-dom";
class DashboardOrdersPage extends Component {

    composeTableRow(orderIdColumn, orderDetails, orderStatus, button, key, color) {
        return (
            <div className="ordersTableHeader" key={key}>
                <div className="orderIdColumn" style={{ color: color }}>
                    <h3>{orderIdColumn}</h3>
                </div>
                <div className="orderDetails" style={{ color: color }}>
                    <h3>{orderDetails}</h3>
                </div>
                <div className="orderStatus" style={{ color: color }}>
                    {button ? <Button
                        text={orderStatus}
                    ></Button> : <h3>{orderStatus}</h3>}
                </div>
            </div>
        );
    }

    composeOrdersRows(orders) {
        return orders.map((order, index) => {
            return this.composeTableRow(order.id, order.specification, order.status, true, index, 'gray')
        });
    }
    render() {
        let orders = this.props.store.ordersPerUser;
        return (<div className="DashboardOrdersPage">
            <h1>{'Orders'}</h1>
            <div style={{ marginBottom: '50px' }}></div>
            <div className='borderedContainer' style={{ padding: '15px' }}>
                {this.composeTableRow('#', 'order', 'status', false)}
                {this.composeOrdersRows(orders)}
            </div>
        </div>
        );
    }
}

export default DashboardOrdersPage;
