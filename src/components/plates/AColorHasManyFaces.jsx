import React, { Component } from 'react';
import { connect } from 'react-redux';
import { assign, forOwn, has, pick } from 'lodash';
import { ChromePicker } from 'react-color';
import { CHANGE_COLOR, RANDOMIZE_COLORS } from '../../constants/actionTypes';
import { generateRandomColor } from '../../helpers/colorHelpers';
import CornerMenu from '../CornerMenu';

import './a_color_has_many_faces.scss';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

function AColorHasManyFaces({ colors }) {
    const { color0, color1, color2 } = colors;
    const leftPlateColor = { backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})` };
    const rightPlateColor = { backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})` };
    const innerPlateColor = { backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` };

    return (
        <div className="full-screen display-flex">
            <CornerMenu colorLabels={['left background color', 'right background color', 'inner color']} />
            <div
                className="justify-content-center align-items-center display-flex half-width full-height"
                style={leftPlateColor}
            >
                <div className="aColorHasManyFaces__innerBlock" style={innerPlateColor}></div>
            </div>
            <div
                className="justify-content-center align-items-center display-flex half-width full-height"
                style={rightPlateColor}
            >
                <div className="aColorHasManyFaces__innerBlock" style={innerPlateColor}></div>
            </div>
        </div>
    );
}

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