import React, { Component } from 'react';
import './button.css';

class Button extends Component {

    render() {
        return (<button className={"Button "+this.props.className}
                        onClick={this.props.onClick}
                        style={this.props.style}
                        >
                        <h2>
                    {this.props.text}
                    </h2>
                </button>);

    }
}

export default Button;
