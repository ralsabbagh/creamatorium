import React, { Component } from 'react';
import './dashboardOrdersPage.css';
import Order from '../order/order.js'
import Button from '../button/button.js';
import {
    Link,
} from "react-router-dom";
class DashboardOrdersPage extends Component {

    composeTableRow(orderIdColumn, orderDetails, orderStatus, key, color) {
        return (
            <div className="ordersTableHeader" key={key}>
                <div className="orderIdColumn" style={{ color: color }}>
                    <h3>{orderIdColumn}</h3>
                </div>
                <div className="orderDetails" style={{ color: color }}>
                    <h3>{orderDetails}</h3>
                </div>
                <div className="orderStatus" style={{ color: color }}>
                    <h3>{orderStatus}</h3>
                </div>
            </div>
        );
    }

    composeOrdersRows(orders) {
        return orders.map((order, index) => {
            return this.composeTableRow(order.id, order.specification, order.status, index, 'gray')
        });
    }
    render() {
        let orders = [
            {
                id: '1',
                specification: 'Base: Vanilla, Nuts: Cashews, Pistachios',
                'status': 'picked'
            },
            {
                id: '2',
                specification: 'Base: Vanilla, Nuts: Cashews, Pistachios',
                'status': 'picked'
            },
            {
                id: '3',
                specification: 'Base: Vanilla, Nuts: Cashews, Pistachios',
                'status': 'picked'
            },
            {
                id: '4',
                specification: 'Base: Vanilla, Nuts: Cashews, Pistachios',
                'status': 'picked'
            },
        ];
        return (<div className="DashboardOrdersPage">
            <h1>{'Orders'}</h1>
            <div style={{ marginBottom: '50px' }}></div>
            <div className='borderedContainer'>
                {this.composeTableRow('#', 'order', 'status')}
                {this.composeOrdersRows(orders)}
            </div>
        </div>
        );
    }
}

export default DashboardOrdersPage;
