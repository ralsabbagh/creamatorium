import React, { Component } from "react";
import "./order.css";
import { observer } from "mobx-react";

class Order extends Component {
  render() {
    return (
      <div className="Order">
        <h1>{this.props.title}</h1>
        <div style={{ marginBottom: "50px" }}></div>
        {this.props.children}
      </div>
    );
  }
}

export default observer(Order);
