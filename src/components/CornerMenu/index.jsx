import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import { ChromePicker } from 'react-color';
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
        this.state = {
            isOpen: false,
            isHidden: false,
            activeColor: 'color0'
        };
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

    /**
     * Changes which color is shown in the color picker.
     * @param {string} activeColor - the color (e.g. color0, color1) to show in the color picker
     * @returns {void}
     */
    changeActiveColor(activeColor) {
        this.setState({ activeColor });
    }

    /**
     * Calls dispatch to change a color.
     * @param {object} payload - data for colors to be changed including new color in rgb format
     * @returns {void}
     */
    changeColor(payload) {
        this.props.dispatch({
            type: CHANGE_COLOR,
            payload
        });
    }

    render() {
        const menuClasses = classNames('CornerMenu', 'position-absolute', 'top-0', 'right-0', { 'hidden': this.state.isHidden });
        let menuContent;

        if (!this.state.isOpen) {
            return (
                <div className={menuClasses}>
                    <button className="CornerMenu__cornerButton no-padding" onClick={this.toggleOpen}>menu</button>
                </div>
            );
        }

        const { colors } = this.props;
        const { activeColor } = this.state;

        return (
            <div className={menuClasses}>
                <div>
                    <button aria-label="Close" className="CornerMenu__close position-absolute top-0 right-0" onClick={this.toggleOpen}>
                        X
                    </button>
                    <label htmlFor="color0">Color 1</label>
                    <input
                        type="radio"
                        name="color"
                        id="color0"
                        checked={activeColor == 'color0'}
                        onChange={() => this.changeActiveColor('color0')}
                    />
                    <br />
                    <label htmlFor="color1">Color 2</label>
                    <input
                        type="radio"
                        name="color"
                        id="color1"
                        checked={activeColor == 'color1'}
                        onChange={() => this.changeActiveColor('color1')}
                    />
                    <br />
                    <ChromePicker
                        disableAlpha={true}
                        color={colors[activeColor]}
                        onChange={({ rgb: { r, g, b } }) => this.changeColor({ [`${activeColor}`]: { r, g, b } })}
                    />
                </div>
            </div>
        );
    }
}

CornerMenu = connect(mapStateToProps)(CornerMenu);

export default CornerMenu;
