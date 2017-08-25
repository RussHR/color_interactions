import React, { Component } from 'react';
import { connect } from 'react-redux';
import { assign, forOwn, has, pick } from 'lodash';
import { ChromePicker } from 'react-color';
import { CHANGE_COLOR, RANDOMIZE_COLORS } from '../../constants/actionTypes';
import { generateRandomColor } from '../../helpers/colorHelpers';
import CornerMenu from '../CornerMenu';

import './reversed_grounds.scss';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

class ReversedGrounds extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeColor: 'color0',
            lockedColors: {
                color0: false,
                color1: false
            }
        };
        this.randomizeColorsViaKeyboard = this.randomizeColorsViaKeyboard.bind(this);
    }

    componentDidMount() {
        window.document.addEventListener('keydown', this.randomizeColorsViaKeyboard);
    }

    componentWillUnmount() {
        window.document.removeEventListener('keydown', this.randomizeColorsViaKeyboard);
    }

    /**
     * Randomizes colors with keyboard input.
     * @param {object} e - DOM event with keyCode property
     * @returns {void}
     */
    randomizeColorsViaKeyboard({ keyCode }) {
        // if key is 'r'
        if (keyCode === 82) {
            this.randomizeColors();
        }
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

    changeActiveColor(activeColor) {
        this.setState({ activeColor });
    }

    /**
     * Toggles the state of whether a color is "locked", i.e. prevented, from changing into a random color.
     * @param {string} color - string that determines which color is locked, e.g. 'color1'
     * @returns {void}
     */
    toggleLockedColor(color) {
        const lockedColors = assign({}, this.state.lockedColors, { [`${color}`]: !this.state.lockedColors[color] });
        this.setState({ lockedColors });
    }

    /**
     * Calls dispatch to change a color.
     * @param {object} payload - data for colors to be changed including new color in rgb format
     * @returns {void}
     */
    randomizeColors() {
        this.props.dispatch({ type: RANDOMIZE_COLORS, payload: { lockedColors: this.state.lockedColors } });
    }

    render() {
        const { color0, color1, color2 } = this.props.colors;
        const { colors } = this.props;
        const { activeColor, lockedColors } = this.state;
        const leftPlateColor = { backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})` };
        const rightPlateColor = { backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})` };
        const averageR = Math.floor((color0.r + color1.r) / 2);
        const averageG = Math.floor((color0.g + color1.g) / 2);
        const averageB = Math.floor((color0.b + color1.b) / 2);
        const innerPlateColor = { backgroundColor: `rgb(${averageR}, ${averageG}, ${averageB})` };

        return (
            <div className="full-screen display-flex">
                <CornerMenu>
                    <label htmlFor="color0">Left Background Color</label>
                    <input
                        type="radio"
                        name="color"
                        id="color0"
                        checked={activeColor == 'color0'}
                        onChange={() => this.changeActiveColor('color0')}
                    />
                    <br />
                    <label htmlFor="color1">Right Background Color</label>
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
                    <br/>
                    <button onClick={() => this.randomizeColors()}>randomizeColors</button>
                    <br />
                    <label htmlFor="color0-lock">Lock Left Background Color</label>
                    <input
                        type="checkbox"
                        name="color"
                        id="color0-lock"
                        value="color0"
                        checked={lockedColors['color0']}
                        onChange={() => this.toggleLockedColor('color0')}
                    />
                    <br />
                    <label htmlFor="color1-lock">Lock Right Background Color</label>
                    <input
                        type="checkbox"
                        name="color"
                        id="color1-lock"
                        value="color1"
                        checked={lockedColors['color1']}
                        onChange={() => this.toggleLockedColor('color1')}
                    />
                    <br />
                    <a href="#">Home</a>
                </CornerMenu>
                <div
                    className="justify-content-center align-items-center display-flex half-width full-height"
                    style={leftPlateColor}
                >
                    <div className="ReversedGrounds__innerBlock ReversedGrounds__innerBlock--left" style={innerPlateColor}></div>
                </div>
                <div
                    className="justify-content-center align-items-center display-flex half-width full-height"
                    style={rightPlateColor}
                >
                    <div className="ReversedGrounds__innerBlock ReversedGrounds__innerBlock--right" style={innerPlateColor}></div>
                </div>
            </div>
        );
    }
}

ReversedGrounds.defaultProps = {
    colors: {
        color0: generateRandomColor(),
        color1: generateRandomColor()
    }
};

ReversedGrounds.propTypes = {
    colors: (props, propName, componentName) => {
        if (!has(props[propName], 'color0') || !has(props[propName], 'color1')) {
            return new Error(
                `Invalid prop ${propName}: missing color0 or color1 in colors of ${componentName}`
            );
        }

        // make sure r, g, and b are 0-255
        forOwn(props[propName], (color) => {
            forOwn(color, (rgbValue, rgb) => {
                if (rgbValue < 0 || rgbValue > 255) {
                    return new Error(
                        `Invalid prop ${propName} of ${componentName}:
                        rgb for ${color} out of bounds (${rgb}: ${rgbValue})`
                    );
                }
            });
        });
    }
};

ReversedGrounds = connect(mapStateToProps)(ReversedGrounds);

export default ReversedGrounds;