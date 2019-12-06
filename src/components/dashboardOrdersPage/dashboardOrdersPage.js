import React, { Component } from 'react';
import './dashboardOrdersPage.css';
import Order from '../order/order.js'
import Button from '../button/button.js';
import {
    Link,
} from "react-router-dom";
class DashboardOrdersPage extends Component {

    render() {
        return (<div className="DashboardOrdersPage">
            <h1>{'Orders'}</h1>
        </div>

        );
    }
}

export default DashboardOrdersPage;
