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
        const menuClasses = classNames('Menu', 'position-absolute', 'top-0', 'right-0', { 'hidden': this.state.isHidden });
        let menuContent;

        if (this.state.isOpen) {
            menuContent = (
                <div>
                    <button aria-label="Close" className="Menu__close position-absolute top-0 right-0" onClick={this.toggleMenu}>
                        X
                    </button>
                    {this.props.children}
                </div>
            );
        } else {
            menuContent = <button className="Menu__cornerButton no-padding" onClick={this.toggleMenu}>menu</button>;
        }

        return (
            <div className={menuClasses}>
                {menuContent}
            </div>
        );
    }
}

Menu.propTypes = {
    children: PropTypes.node
};