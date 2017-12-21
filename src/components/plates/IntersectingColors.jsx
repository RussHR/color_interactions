import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';
import classNames from 'classnames';
import { validatePropColors } from '../../helpers/colorHelpers';
import CornerMenu from '../CornerMenu';

import './intersecting_colors.scss';

function mapStateToProps(state) {
    return pick(state, 'colors');
}

class IntersectingColors extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rightPlateShifted: false,
            setMiddleColor: false
        };

        this.toggleRightPlateShifted = this.toggleRightPlateShifted.bind(this);
        this.toggleRightPlateShiftedViaKeyboard = this.toggleRightPlateShiftedViaKeyboard.bind(this);
        this.toggleSetMiddleColor = this.toggleSetMiddleColor.bind(this);

        this.modalContents = (
            <p>
                In this case, the middle bar is once again a middle mixture of the two outer colors.
                Interestingly, as the middle bar grows larger, you can see a shroud of the
                leftmost color in the right part of the middle bar, and you can see the rightmost
                color in the left part of the middle bar.
            </p>
        );
    }

    componentDidMount() {
        window.document.addEventListener('keydown', this.toggleRightPlateShiftedViaKeyboard);
    }

    componentWillUnmount() {
        window.document.removeEventListener('keydown', this.toggleRightPlateShiftedViaKeyboard);
    }

    /**
     * Toggles the state of whether the right plate is shifted to the left.
     * @returns {void}
     */
    toggleRightPlateShifted() {
        this.setState({ rightPlateShifted: !this.state.rightPlateShifted });
    }

    /**
     * Toggles the state of whether the right plate is shifted to the left via the keyboard.
     * @returns {void}
     */
    toggleRightPlateShiftedViaKeyboard({ keyCode }) {
        // if key is 'k'
        if (keyCode === 75) {
            this.toggleRightPlateShifted();
        }
    }

    /**
     * Toggles the state of whether the middle color is set to color2.
     * @returns {void}
     */
    toggleSetMiddleColor() {
        this.setState({ setMiddleColor: !this.state.setMiddleColor });
    }

    render() {
        const { colors } = this.props;
        const { color0, color1 } = colors;
        const leftPlateColor = { backgroundColor: `rgb(${color0.r}, ${color0.g}, ${color0.b})` };
        const rightPlateColor = { backgroundColor: `rgb(${color1.r}, ${color1.g}, ${color1.b})` };

        let innerPlateColor;
        let colorLabels = ['left background color', 'right background color'];

        if (this.state.setMiddleColor) {
            const { color2 } = colors;
            innerPlateColor = { backgroundColor: `rgb(${color2.r}, ${color2.g}, ${color2.b})` };
            colorLabels.push('middle background color');
        } else {
            const averageR = Math.floor((color0.r + color1.r) / 2);
            const averageG = Math.floor((color0.g + color1.g) / 2);
            const averageB = Math.floor((color0.b + color1.b) / 2);
            innerPlateColor = { backgroundColor: `rgb(${averageR}, ${averageG}, ${averageB})` };
        }

        const rightPlateClassNames = classNames(
            'IntersectingColors__smallPlate--right',
            'full-height',
            'full-width',
            'position-absolute',
            { 'IntersectingColors__smallPlate--rightShifted': this.state.rightPlateShifted }
        );

        return (
            <div className="full-screen overflow-hidden">
                <CornerMenu colorLabels={colorLabels} modalContents={this.modalContents}>
                    <button onClick={this.toggleRightPlateShifted}>shift right plate (k)</button>
                    <br/>
                    <label htmlFor="custom-middle-color">custom middle color: </label>
                    <input
                        id="custom-middle-color"
                        type="checkbox"
                        onChange={this.toggleSetMiddleColor}
                        checked={this.state.setMiddleColor}
                    />
                    <br />
                </CornerMenu>
                <div>
                    <div
                        className="IntersectingColors__smallPlate full-height position-absolute top-0 left-0"
                        style={leftPlateColor}
                    />
                    <div
                        className={`IntersectingColors__smallPlate IntersectingColors__smallPlate--inner full-height
                            position-absolute top-0`}
                        style={innerPlateColor}
                    />
                    <div className={rightPlateClassNames} style={rightPlateColor} />
                </div>
            </div>
        );
    }
}

IntersectingColors.propTypes = {
    colors: validatePropColors(3)
};

IntersectingColors = connect(mapStateToProps)(IntersectingColors);

export default IntersectingColors;