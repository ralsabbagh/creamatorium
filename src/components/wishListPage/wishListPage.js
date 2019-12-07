import React, { Component } from "react";
import "./wishListPage.css";
import Popup from "../popUp/popUp.js";
import Button from "../button/button.js";
import { observer } from "mobx-react";

import { Link } from "react-router-dom";
class WishListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    };
  }

  setShowPopUpState(_bool) {
    this.setState({
      showPopup: _bool
    });
  }

  composeWishList() {
    return this.props.wishListItems.map((wishListItem, index) => {
      return (
        <div className={"wishListItem"} key={index}>
          <div
            className={"deleteItem"}
            onClick={() => this.props.deleteItem(wishListItem)}
          >
            x
          </div>
          <h3>{wishListItem.title}</h3>
        </div>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <h1>{this.props.userName}</h1>
        <div style={{ height: "50px" }}></div>
        <div className="WishListPage">
          {this.composeWishList()}
          <div
            className={"wishListItem addItem"}
            onClick={() => this.setShowPopUpState(true)}
          >
            <h1>+</h1>
          </div>
        </div>
        <Popup show={this.state.showPopup}>
          <input
            className={"formInput"}
            placeholder={"New Item"}
            onChange={e => {
              this.props.storeItemName(e.target.value);
            }}
          />
          <Button
            text={"Add Item"}
            onClick={() => {
              this.props.addItem();
              this.setShowPopUpState(false);
            }}
          />
        </Popup>
      </React.Fragment>
    );
  }
}

export default observer(WishListPage);
