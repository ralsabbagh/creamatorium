import React, { Component } from "react";
import "./signForm.css";
import Button from "../button/button.js";

import { Link } from "react-router-dom";
class SignForm extends Component {
  render() {
    return (
      <div className="SignForm">
        <input
          className={"formInput"}
          placeholder={"User Name"}
          onChange={e => {
            this.props.storeUserName(e.target.value);
          }}
        />
        {this.props.storeEmail ? (
          <input
            className={"formInput"}
            placeholder={"Email Address"}
            onChange={e => {
              this.props.storeEmail(e.target.value);
            }}
          />
        ) : null}
        <input
          className={"formInput"}
          placeholder={"Password"}
          onChange={e => {
            this.props.storePassword(e.target.value);
          }}
          type={"password"}
        />
        <Button
          text={this.props.buttonText}
          onClick={() => {
            this.props.action();
          }}
        />
        {this.props.link ? (
          <div style={{ marginTop: "15px" }}>
            <Link to={this.props.link}>{this.props.linkTitle}</Link>
          </div>
        ) : null}
      </div>
    );
  }
}

export default SignForm;
