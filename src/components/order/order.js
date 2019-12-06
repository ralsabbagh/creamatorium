import React, { Component } from 'react';
import './order.css';

class Order extends Component {
    render() {
        return (<div className="Order">
            <h2>{this.props.title}</h2>
            <div style={{ marginBottom: '50px' }}></div>
            {this.props.children}
        </div>);
    }
}

export default Order;
