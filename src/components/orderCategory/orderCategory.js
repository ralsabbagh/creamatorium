import React, { Component } from 'react';
import './orderCategory.css';


class OrderCategory extends Component {
    constructor() {
        super();
    }
    composeCategory() {
        return this.props.categoryOptions.map((categoryOption, index) => {
            return (
                <div key={index} className="categoryOption">
                    <input className="optionCheckBox"
                        type="checkbox" name={categoryOption}
                        value={categoryOption}
                        checked={this.props.optionsSelections[index]}
                        onClick={() => { this.props.store.toppingChanged(this.props.categoryIndex, index) }} ></input>
                    <h5 className="optionCheckTitle">{categoryOption}</h5>
                </div>
            );
        })
    }

    // updateMe() {
    //     this.props.store.toppingChanged(this.props.categoryIndex, 1);
    // }
    render() {
        return (<div className="OrderCategory">
            <h3>{this.props.title}</h3>
            {this.composeCategory()}
        </div>);
    }
}

export default OrderCategory;
