import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { has, forOwn } from 'lodash';
import { ChromePicker } from 'react-color';
import { generateRandomColor } from '../../helpers/colorHelpers';
import Menu from '../Menu';

import './a_color_has_many_faces.scss';

export default class AColorHasManyFaces extends Component {
    render() {
        const { color1, color2, color3, menuIsOpen } = this.props.colors;
        const leftPlateColor = { backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})` };
        const rightPlateColor = { backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` };
        const innerPlateColor = { backgroundColor: `rgb(${color3.r}, ${color3.g}, ${color3.b})` };

        return (
            <div className="plate display-flex">
                <Menu>
                    <ChromePicker />
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
    color1: generateRandomColor(),
    color2: generateRandomColor(),
    color3: generateRandomColor()
};

AColorHasManyFaces.propTypes = {
    colors: (props, propName, componentName) => {
        if (!has(props[propName], 'color1') || !has(props[propName], 'color2') || !has(props[propName], 'color3')) {
            return new Error(
                `Invalid prop ${propName}: missing color1, color2, or color3 in colors of ${componentName}`
            );
        }

        // make sure r, g, and b are 0-255
        forOwn(props[propName], (color, key) => {
            forOwn(color, (rgbValue, rgb) => {
                if (rgbValue < 0 || rgbValue > 255) {
                    return new Error(
                        `Invalid prop ${propName} of ${componentName}: rgb for ${color} out of bounds (${rgb}: ${rgbValue})`
                    );
                }
            });
        });
    }
};