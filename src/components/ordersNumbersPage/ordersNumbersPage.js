import React, { Component } from "react";
import "./ordersNumbersPage.css";
import OrdersNumbers from "../ordersNumbers/ordersNumbers.js";
import Button from "../button/button.js";
// import GeneralStore from "../../stores/general.js";
import { observer } from "mobx-react";

class OrdersNumbersPage extends Component {
  render() {
    return (
      <div className="OrdersNumbersPage">
        <OrdersNumbers
          readyListTitle="ready for pickup"
          readyList={["1", "2", "3"]}
          preaparingListTitle="being prepared"
          preaparingList={["1", "2"]}
        ></OrdersNumbers>
        <Button
          //   onClick={GeneralStore.test}
          style={{ marginTop: "20px" }}
          text={"Place a New Order"}
        />
      </div>
    );
  }
}

export default OrdersNumbersPage;
