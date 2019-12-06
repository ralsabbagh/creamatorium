import React, { Component } from 'react';
import './header.css';

class Header extends Component {

    render() {
        return (<div className="Header">
            <div className="container">
            <h1>{this.props.headerTitle}</h1>
            </div>
        </div>);

    }
}

export default Header;
