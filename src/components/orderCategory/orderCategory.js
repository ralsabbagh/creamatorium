import React, { Component } from 'react';
import './orderCategory.css';
import { observer } from 'mobx-react';

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
                        onChange={() => {
                            this.props.store.toppingChanged(this.props.categoryIndex, index);
                        }}
                        checked={this.props.store.categories[this.props.categoryIndex][index]}
                        onClick={() => { this.props.store.toppingChanged(this.props.categoryIndex, index) }} ></input>
                    <h5 className="optionCheckTitle">{categoryOption}</h5>
                </div>
            );
        })
    }

    render() {
        return (<div className="OrderCategory">
            <h3>{this.props.title}</h3>
            {this.composeCategory()}
        </div>);
    }
}

export default observer(OrderCategory);
