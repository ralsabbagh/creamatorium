import React, { Component } from 'react';
import './orderPage.css';
import Order from '../order/order.js'
import OrderCategory from '../orderCategory/orderCategory.js'
import Button from '../button/button.js';
import {
    Link,
} from "react-router-dom";
class orderPage extends Component {

    composeCategories(categories) {
        return categories.map((category, index) => {
            return (
                <OrderCategory
                    title={category.title}
                    categoryOptions={category.options}
                />
            );
        });
    }

    render() {
        let categories = [{
            title: 'Base (required)',
            options: ['Vanilla', 'Chocolate', 'Coffee', 'Mango', 'Strawberry', 'Lemon']
        },
        {
            title: 'Nuts',
            options: ['Almonds', 'Pistachios', 'Walnuts', 'Cashews', 'Pecans', 'Hazelnuts']
        },
        {
            title: 'Sauces',
            options: ['Chocolate', ' Salted Caramel', 'Toffee', 'Maple']
        },
        {
            title: 'Fruits',
            options: ['Strawberry', 'Mango', 'Raspberry', 'Banana']
        },
        {
            title: 'baked yumminess',
            options: ['Dount', 'Cookies']
        },

        ];
        return (<div className="OrderPage">
            <Order title={'Creamate your own icecream'}>
                {this.composeCategories(categories)}
            </Order>
            <Link to={'/user/'}>
                <Button
                    style={{ marginTop: '20px' }}
                    text={'Submit Order'}
                />
            </Link>
            <div style={{ height: '20px' }}>
            </div>
        </div>);
    }
}

export default orderPage;
