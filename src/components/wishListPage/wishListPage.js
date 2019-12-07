import React, { Component } from 'react';
import './wishListPage.css';
import Popup from '../popUp/popUp.js';
import {
    Link,
} from "react-router-dom";
class WishListPage extends Component {

    composeWishList() {
        return this.props.wishListItems.map((wishListItem, index) => {
            return <div className={'wishListItem'} key={index}>
                <h3>{wishListItem}</h3>
            </div>
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1>{this.props.userName}</h1>
                <div style={{ height: '50px' }}></div>
                <div className="WishListPage">
                    {this.composeWishList()}
                    <div className={'wishListItem addItem'}>
                        <h1>+</h1>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

export default WishListPage;
