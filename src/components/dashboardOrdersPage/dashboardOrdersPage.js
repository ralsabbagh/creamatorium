import React, { Component } from "react";
import "./dashboardOrdersPage.css";
import Order from "../order/order.js";
import Button from "../button/button.js";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

class DashboardOrdersPage extends Component {
  composeTableRow(
    orderIdColumn,
    orderDetails,
    orderStatus,
    button,
    key,
    color
  ) {
    return (
      <div className="ordersTableHeader" key={key}>
        <div className="orderIdColumn" style={{ color: color }}>
          <h3>{orderIdColumn}</h3>
        </div>
        <div className="orderDetails" style={{ color: color }}>
          <h3>{orderDetails}</h3>
        </div>
        <div className="orderStatus" style={{ color: color }}>
          {button ? (
            <Button text={orderStatus}></Button>
          ) : (
            <h3>{orderStatus}</h3>
          )}
        </div>
      </div>
    );
  }

  composeOrdersRows(orders) {
    return orders.map((order, index) => {
      var specification = "";
      if (order.specification.base != null)
        specification = " Base: " + order.specification.base.join(", ");

      if (order.specification.nuts != null)
        specification =
          specification + " Nuts: " + order.specification.nuts.join(", ");

      if (order.specification.sauces != null)
        specification =
          specification + " Sauces: " + order.specification.sauces.join(", ");

      if (order.specification.fruits != null)
        specification =
          specification + " Fruits: " + order.specification.fruits.join(", ");

      if (order.specification.baked != null)
        specification =
          specification + " Baked: " + order.specification.baked.join(", ");

      return this.composeTableRow(
        order.id,
        specification,
        order.status,
        true,
        index,
        "gray"
      );
    });
  }
  render() {
    let orders = this.props.store.being;
    return (
      <div className="DashboardOrdersPage">
        <h1>{"Orders"}</h1>
        <div style={{ marginBottom: "50px" }}></div>
        <div className="borderedContainer" style={{ padding: "15px" }}>
          {this.composeTableRow("#", "order", "status", false)}
          {this.composeOrdersRows(this.props.store.allOrders)}
        </div>
      </div>
    );
  }
}

export default observer(DashboardOrdersPage);
