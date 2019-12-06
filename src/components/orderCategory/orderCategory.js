import React, { Component } from 'react';
import './orderCategory.css';


class OrderCategory extends Component {

    composeCategory() {
        return this.props.categoryOptions.map((categoryOption, index) => {
            return (
                <div key={index} className="categoryOption">
                    <input className="optionCheckBox" type="checkbox" name={categoryOption} value={categoryOption}></input>
                    <h5 className="optionCheckTitle">{categoryOption}</h5>
                </div>
            );
        });
    }
    render() {
        return (<div className="OrderCategory">
            <h3>{this.props.title}</h3>
            {this.composeCategory()}
        </div>);
    }
}

export default OrderCategory;
