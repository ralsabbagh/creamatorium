import React, { Component } from 'react';
import './ordersNumbers.css';
class OrdersNumbers extends Component {

    composeList(list) {
        return list.map((listItem, index) => {
            return (
                <h5 key={index}>{'#' + listItem}</h5>
            );
        });
    }

    render() {
        return (<div className="OrdersNumbers borderedContainer">
            <div className="OrdersNumbersSection">
                <h3>{this.props.readyListTitle}</h3>
                {this.composeList(this.props.readyList)}
            </div>
            <div className="OrderSectionSeperator" />
            <div className="OrdersNumbersSection">
                <h3>{this.props.preaparingListTitle}</h3>
                {this.composeList(this.props.preaparingList)}
            </div>

        </div>);

    }
}

export default OrdersNumbers;
