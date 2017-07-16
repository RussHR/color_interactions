import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { has, forOwn } from 'lodash';
import { ChromePicker } from 'react-color';
import { generateRandomColor } from '../../helpers/colorHelpers';
import Menu from '../Menu';

import './a_color_has_many_faces.scss';

export default class AColorHasManyFaces extends Component {
    render() {
        const { onChangeColor } = this.props;
        const { color0, color1, color2 } = this.props.colors;
        const leftPlateColor = { backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})` };
        const rightPlateColor = { backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})` };
        const innerPlateColor = { backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` };

        return (
            <div className="plate display-flex">
                <Menu>
                    <ChromePicker
                        disableAlpha={true}
                        color={color0}
                        onChange={(color) => onChangeColor('color0', color)}
                    />
                    <ChromePicker
                        disableAlpha={true}
                        color={color1}
                        onChange={(color) => onChangeColor('color1', color)}
                    />
                    <ChromePicker
                        disableAlpha={true}
                        color={color2}
                        onChange={(color) => onChangeColor('color2', color)}
                    />
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
    color0: generateRandomColor(),
    color1: generateRandomColor(),
    color2: generateRandomColor()
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
    },
    onChangeColor: PropTypes.func.isRequired
};