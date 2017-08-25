import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CHANGE_COLOR, RANDOMIZE_COLORS } from '../../constants/actionTypes';

import './corner_menu.scss';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

class CornerMenu extends Component {

    constructor(props){
        super(props);
        this.state = { isOpen: false, isHidden: false };
        this.toggleOpen = this.toggleOpen.bind(this);
        this.handleKeydown = this.handleKeydown.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown);
    }

    handleKeydown({ keyCode }) {
        if (keyCode === 72) {
            this.toggleHiding();
        } else if (keyCode === 82) {
            this.randomizeColorsViaKeyboard();
        }
    }

    toggleHiding() {
        this.setState({ isHidden: !this.state.isHidden });
    }

    randomizeColorsViaKeyboard() {
        this.props.dispatch({ type: RANDOMIZE_COLORS, payload: { lockedColors: this.state.lockedColors } });
    }

    toggleOpen() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        const menuClasses = classNames('CornerMenu', 'position-absolute', 'top-0', 'right-0', { 'hidden': this.state.isHidden });
        let menuContent;

        if (this.state.isOpen) {
            menuContent = (
                <div>
                    <button aria-label="Close" className="CornerMenu__close position-absolute top-0 right-0" onClick={this.toggleOpen}>
                        X
                    </button>
                </div>
            );
        } else {
            menuContent = <button className="CornerMenu__cornerButton no-padding" onClick={this.toggleOpen}>menu</button>;
        }

        return (
            <div className={menuClasses}>
                {menuContent}
            </div>
        );
    }
}

CornerMenu = connect(mapStateToProps)(CornerMenu);

export default CornerMenu;
