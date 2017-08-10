import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './menu.scss';

export default class Menu extends Component {

    constructor(props){
        super(props);
        this.state = { isOpen: false, isHidden: false };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.toggleHiding = this.toggleHiding.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keydown', this.toggleHiding);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.toggleHiding);
    }

    toggleHiding({ keyCode }) {
        if (keyCode == 72) {
            this.setState({ isHidden: !this.state.isHidden });
        }
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
            <div className={classNames('menu', { 'hidden': this.state.isHidden })}>
                {menuContent}
            </div>
        );
    }
}

Menu.propTypes = {
    children: PropTypes.node
};