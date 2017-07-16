import React, { Component } from 'react';

import './menu.scss';

export default class Menu extends Component {
    render() {
        let menuContent;

        if (this.props.isOpen) {
            menuContent = <div>i am open hay</div>;
        } else {
            menuContent = <button className="menu">menu</button>;
        }
        return (
            <div className="menu">
                {menuContent}
            </div>
        );
    }
}