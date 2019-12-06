import React, { Component } from 'react';
import './page.css';

class Page extends Component {

    render() {
        return (<div className="Page ">
            <div className="headerContainer ">
                {this.props.header}
            </div>
            <div className="bodyContainer  container">
                {this.props.body}
            </div>
            <div className="footerContainer ">
                {this.props.footer}
            </div>
        </div>);

    }
}

export default Page;
