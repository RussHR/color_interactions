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

function ReversedGrounds({ colors }) {

    const { color0, color1, color2 } = colors;
    const leftPlateColor = { backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})` };
    const rightPlateColor = { backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})` };
    const averageR = Math.floor((color0.r + color1.r) / 2);
    const averageG = Math.floor((color0.g + color1.g) / 2);
    const averageB = Math.floor((color0.b + color1.b) / 2);
    const innerPlateColor = { backgroundColor: `rgb(${averageR}, ${averageG}, ${averageB})` };

    return (
        <div className="full-screen display-flex">
            <CornerMenu colorLabels={['left background color', 'right background color']}/>
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