import React, { Component } from 'react';
import './orderPage.css';
import Order from '../order/order.js'
import OrderCategory from '../orderCategory/orderCategory.js'
import Button from '../button/button.js';
import {
    Link,
} from "react-router-dom";
import { observer } from 'mobx-react';

class orderPage extends Component {

    componentDidMount() {
        this.props.store.updateUserID(this.props.match.params.userId);
    }

    composeCategories(categories) {
        return categories.map((category, index) => {
            return (
                <OrderCategory
                    key={index}
                    store={this.props.store}
                    categoryIndex={index}
                    title={category.title}
                    categoryOptions={category.options}
                    optionsSelections={category.optionsSelections}
                />
            );
        });
    }

    render() {
        return (<div className="OrderPage">
            <Order title={'Creamate your own icecream'}
                store={this.props.store}
            >
                {this.composeCategories(this.props.store.categories)}
            </Order>
            <Link to={'/user/' + this.props.match.params.userId + '/success/'}>
                <Button
                    style={{ marginTop: '20px' }}
                    text={'Submit Order'}
                    onClick={() => { this.props.store.createOrder() }}
                />
            </Link>
            <div style={{ height: '20px' }}>
            </div>
        </div>);
    }
}

export default observer(orderPage);
