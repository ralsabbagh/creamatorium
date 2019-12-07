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
    color,
    uid,
    status
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
            <Button
              text={orderStatus}
              onClick={() => {
                this.props.store.orderButtonPressed(uid, status);
              }}
            ></Button>
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
          specification + ", Nuts: " + order.specification.nuts.join(", ");

      if (order.specification.sauces != null)
        specification =
          specification + ", Sauces: " + order.specification.sauces.join(", ");

      if (order.specification.fruits != null)
        specification =
          specification + ", Fruits: " + order.specification.fruits.join(", ");

      if (order.specification.baked != null)
        specification =
          specification + ", Baked: " + order.specification.baked.join(", ");

      var readableStatus = order.status;
      switch (order.status.toLowerCase()) {
        case "ordered":
          readableStatus = "Start Preparing";
          break;
        case "picked":
          readableStatus = "Picked";

          break;
        case "ready":
          readableStatus = "Ready to Pick";

          break;
        case "being":
          readableStatus = "Being Prepared";
          break;
        case "cancelled":
          // readableStatus = "Ready to Pick";

          break;

        default:
          break;
      }

      return this.composeTableRow(
        order.id,
        specification,
        readableStatus,
        true,
        index,
        "gray",
        order.uid,
        order.status
      );
    });
  }
  render() {
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
