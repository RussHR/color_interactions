import React, { Component } from 'react';
import { connect } from 'react-redux';
import { assign, has, forOwn } from 'lodash';
import { ChromePicker } from 'react-color';
import { CHANGE_COLOR, RANDOMIZE_COLORS } from '../../constants/actionTypes';
import { generateRandomColor } from '../../helpers/colorHelpers';
import Menu from '../Menu';

import './a_color_has_many_faces.scss';

function mapStateToProps(state) {
    return state;
}

class AColorHasManyFaces extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeColor: 'color0',
            lockedColors: {
                color0: false,
                color1: false,
                color2: false
            }
        };
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
        const innerPlateColor = { backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` };

        return (
            <div className="full-screen position-relative display-flex">
                <Menu>
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
                    <label htmlFor="color2">Inner Color</label>
                    <input
                        type="radio"
                        name="color"
                        id="color2"
                        checked={activeColor == 'color2'}
                        onChange={() => this.changeActiveColor('color2')}
                    />
                    <br/>
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
                    <label htmlFor="color2-lock">Lock Inner Color</label>
                    <input
                        type="checkbox"
                        name="color"
                        id="color2-lock"
                        value="color2"
                        checked={lockedColors['color2']}
                        onChange={() => this.toggleLockedColor('color2')}
                    />
                    <br />
                    <a href="#">Home</a>
                </Menu>
                <div className="aColorHasManyFaces__outerBlock display-flex" style={leftPlateColor}>
                    <div className="aColorHasManyFaces__innerBlock" style={innerPlateColor}></div>
                </div>
                <div className="aColorHasManyFaces__outerBlock display-flex" style={rightPlateColor}>
                    <div className="aColorHasManyFaces__innerBlock" style={innerPlateColor}></div>
                </div>
            </div>
        );
    }
}

AColorHasManyFaces.defaultProps = {
    colors: {
        color0: generateRandomColor(),
        color1: generateRandomColor(),
        color2: generateRandomColor()
    }
};

AColorHasManyFaces.propTypes = {
    colors: (props, propName, componentName) => {
        if (!has(props[propName], 'color0') || !has(props[propName], 'color1') || !has(props[propName], 'color2')) {
            return new Error(
                `Invalid prop ${propName}: missing color0, color1, or color2 in colors of ${componentName}`
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

AColorHasManyFaces = connect(mapStateToProps)(AColorHasManyFaces);

export default AColorHasManyFaces;