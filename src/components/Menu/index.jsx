import React, { Component } from 'react';

import './menu.scss';

export default class Menu extends Component {

    constructor(props){
        super(props);
        this.state = { isOpen: false };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        let menuContent;

        if (this.state.isOpen) {
            menuContent = <div>i am open hay</div>;
        } else {
            menuContent = <button className="menu" onClick={this.toggleMenu}>menu</button>;
        }
        return (
            <div className="menu">
                {menuContent}
            </div>
        );
    }
}