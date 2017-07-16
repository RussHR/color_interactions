import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
            menuContent = (
                <div>
                    <button aria-label="Close" onClick={this.toggleMenu}>X</button>
                    <br />
                    {this.props.children}
                </div>
            );
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

Menu.propTypes = {
    children: PropTypes.node
};